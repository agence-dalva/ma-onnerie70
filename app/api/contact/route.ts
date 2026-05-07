import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, subject, message, captchaToken } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
  }

  if (!captchaToken) {
    return NextResponse.json({ error: "Captcha manquant" }, { status: 400 });
  }

  const verifyRes = await fetch("https://api.hcaptcha.com/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.HCAPTCHA_SECRET_KEY!,
      response: captchaToken,
    }),
  });
  const verifyData = await verifyRes.json() as { success: boolean };
  if (!verifyData.success) {
    return NextResponse.json({ error: "Captcha invalide" }, { status: 400 });
  }

  const subjectLabels: Record<string, string> = {
    construction: "Construction maison individuelle",
    renovation: "Rénovation & Extension",
    beton: "Béton banché",
    enduits: "Enduits extérieurs",
    terrassement: "Terrassement & VRD",
    transport: "Transports 70",
    autre: "Autre demande",
  };

  const subjectLabel = subjectLabels[subject] || subject || "Demande de contact";

  try {
    await resend.emails.send({
      from: "Site Maçonnerie 70 <contact@maconnerie70.fr>",
      // ⚠️ Remplacer par votre adresse email vérifiée Resend si vous n'avez pas encore de domaine :
      // from: "Site Maçonnerie 70 <onboarding@resend.dev>",
      to: ["contact.maconnerie70@gmail.com"],
      replyTo: email,
      subject: `[Nouveau contact] ${subjectLabel} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 0;">
          <div style="background: #0A0A0A; padding: 30px 40px;">
            <h1 style="color: #B21F2D; font-size: 22px; margin: 0; font-weight: bold; letter-spacing: 2px;">MAÇONNERIE 70</h1>
            <p style="color: #555; font-size: 12px; margin: 4px 0 0; letter-spacing: 1px;">NOUVEAU MESSAGE VIA LE SITE</p>
          </div>
          <div style="padding: 40px; background: white;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 120px;">Nom</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333; font-size: 14px; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333; font-size: 14px;"><a href="mailto:${email}" style="color: #B21F2D;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Téléphone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333; font-size: 14px;"><a href="tel:${phone}" style="color: #B21F2D;">${phone}</a></td>
              </tr>` : ""}
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333; font-size: 14px;">${subjectLabel}</td>
              </tr>
            </table>
            <div style="margin-top: 30px;">
              <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">Message</p>
              <div style="background: #f9f9f9; padding: 20px; border-left: 3px solid #B21F2D; color: #333; font-size: 14px; line-height: 1.7;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            <div style="margin-top: 30px; padding: 20px; background: #f0f0f0; border-radius: 4px;">
              <p style="margin: 0; color: #888; font-size: 12px;">Répondre directement à : <a href="mailto:${email}" style="color: #B21F2D;">${email}</a></p>
            </div>
          </div>
          <div style="background: #0A0A0A; padding: 20px 40px; text-align: center;">
            <p style="color: #333; font-size: 11px; margin: 0;">© ${new Date().getFullYear()} Maçonnerie 70 Père & Fils — Champagney (70290)</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
  }
}
