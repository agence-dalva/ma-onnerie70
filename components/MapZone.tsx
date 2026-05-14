"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, GeoJSON, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const TARGET = ["70", "25", "90", "68", "88"];
const CHAMPAGNEY: [number, number] = [47.705, 6.713];

const CENTERS: Record<string, [number, number]> = {
  "70": [47.70, 6.15],
  "25": [47.15, 6.35],
  "90": [47.63, 6.87],
  "68": [47.85, 7.33],
  "88": [48.18, 6.45],
};

const BOUNDS: L.LatLngBoundsLiteral = [[46.4, 4.8], [48.9, 8.3]];

function deptPin(code: string) {
  return L.divIcon({
    html: `<div style="width:32px;height:32px;background:rgba(255,255,255,0.12);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:11px;border:1.5px solid rgba(255,255,255,0.5);box-shadow:0 2px 12px rgba(0,0,0,0.5);font-family:sans-serif;backdrop-filter:blur(2px)">${code}</div>`,
    className: "",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
}

const champagneyPin = L.divIcon({
  html: `<div style="width:9px;height:9px;background:#FFFFFF;border-radius:50%;box-shadow:0 0 8px rgba(255,255,255,0.6),0 0 0 3px rgba(255,255,255,0.2)"></div>`,
  className: "",
  iconSize: [9, 9],
  iconAnchor: [4, 4],
});

function countryLabel(name: string) {
  return L.divIcon({
    html: `<div style="color:rgba(255,255,255,0.25);font-size:9px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;font-family:sans-serif;white-space:nowrap;user-select:none">${name}</div>`,
    className: "",
    iconSize: [80, 14],
    iconAnchor: [40, 7],
  });
}

const LABELS: Array<{ name: string; pos: [number, number] }> = [
  { name: "France", pos: [48.1, 4.85] },
  { name: "Suisse", pos: [46.72, 7.85] },
  { name: "Allemagne", pos: [48.55, 8.72] },
];

function FitBounds() {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(BOUNDS, { padding: [30, 30] });
  }, [map]);
  return null;
}

const tooltipCSS = `
  .dept-tooltip {
    background: rgba(12,12,12,0.95) !important;
    border: 1px solid rgba(255,255,255,0.13) !important;
    color: #fff !important;
    font-size: 10px !important;
    font-weight: 700 !important;
    letter-spacing: 0.1em !important;
    text-transform: uppercase !important;
    padding: 5px 11px !important;
    border-radius: 2px !important;
    box-shadow: 0 6px 24px rgba(0,0,0,0.7) !important;
    white-space: nowrap !important;
    font-family: sans-serif !important;
    pointer-events: none !important;
  }
  .dept-tooltip.leaflet-tooltip::before {
    display: none !important;
  }
  .leaflet-interactive {
    transition: fill 0.18s ease, fill-opacity 0.18s ease, stroke-width 0.18s ease, stroke 0.18s ease;
  }
`;

export default function MapZone() {
  const [deptGeo, setDeptGeo] = useState<object | null>(null);
  const [deGeo, setDeGeo] = useState<object | null>(null);
  const [chGeo, setChGeo] = useState<object | null>(null);
  const layerRefs = useRef<Record<string, { layer: L.Path; name: string }>>({});

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements.geojson")
      .then((r) => r.json()).then(setDeptGeo).catch(() => {});

    fetch("https://raw.githubusercontent.com/johan/world.geo.json/master/countries/DEU.geo.json")
      .then((r) => r.json()).then(setDeGeo).catch(() => {});

    fetch("https://raw.githubusercontent.com/johan/world.geo.json/master/countries/CHE.geo.json")
      .then((r) => r.json()).then(setChGeo).catch(() => {});
  }, []);

  const neighborStyle = {
    fillColor: "#1A1A1A",
    fillOpacity: 1,
    color: "#333333",
    weight: 1,
  };

  const hoverOn = (layer: L.Path, name: string, isTarget: boolean) => {
    layer.setStyle({
      fillColor: isTarget ? "#D93040" : "#2C2C2C",
      fillOpacity: isTarget ? 1 : 0.55,
      color: isTarget ? "#B21F2D" : "#555",
      weight: isTarget ? 2.5 : 1,
    });
    layer.bindTooltip(name, {
      permanent: false,
      sticky: true,
      className: "dept-tooltip",
      offset: [14, -4],
    }).openTooltip();
  };

  const hoverOff = (layer: L.Path, isTarget: boolean) => {
    layer.setStyle({
      fillColor: isTarget ? "#B21F2D" : "#1C1C1C",
      fillOpacity: isTarget ? 0.85 : 1,
      color: isTarget ? "#8B1521" : "#2E2E2E",
      weight: isTarget ? 1.5 : 0.5,
    });
    layer.unbindTooltip();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onEachFeature = (feature: any, layer: L.Layer) => {
    const code = feature?.properties?.code;
    const isTarget = TARGET.includes(code);
    const name: string = feature?.properties?.nom ?? "";

    if (isTarget) {
      layerRefs.current[code] = { layer: layer as L.Path, name };
    }

    (layer as L.Path).on({
      mouseover(e) { hoverOn(e.target as L.Path, name, isTarget); },
      mouseout(e)  { hoverOff(e.target as L.Path, isTarget); },
    });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: tooltipCSS }} />
      <MapContainer
        center={[47.7, 6.6]}
        zoom={7}
        style={{ height: "100%", width: "100%", background: "#111111" }}
        zoomControl={false}
        scrollWheelZoom={false}
        attributionControl={false}
        dragging={false}
        doubleClickZoom={false}
      >
        <FitBounds />

        {/* Allemagne */}
        {deGeo && <GeoJSON data={deGeo as never} style={() => neighborStyle} />}

        {/* Suisse */}
        {chGeo && <GeoJSON data={chGeo as never} style={() => neighborStyle} />}

        {/* Départements français */}
        {deptGeo && (
          <GeoJSON
            data={deptGeo as never}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            style={(feature: any) => {
              const isTarget = TARGET.includes(feature?.properties?.code);
              return {
                fillColor: isTarget ? "#B21F2D" : "#1C1C1C",
                fillOpacity: isTarget ? 0.85 : 1,
                color: isTarget ? "#8B1521" : "#2E2E2E",
                weight: isTarget ? 1.5 : 0.5,
              };
            }}
            onEachFeature={onEachFeature}
          />
        )}

        {/* Pins départements */}
        {TARGET.map((code) => (
          <Marker
            key={code}
            position={CENTERS[code]}
            icon={deptPin(code)}
            eventHandlers={{
              mouseover: () => {
                const ref = layerRefs.current[code];
                if (ref) hoverOn(ref.layer, ref.name, true);
              },
              mouseout: () => {
                const ref = layerRefs.current[code];
                if (ref) hoverOff(ref.layer, true);
              },
            }}
          />
        ))}

        {/* Pin Champagney */}
        <Marker position={CHAMPAGNEY} icon={champagneyPin} />

        {/* Labels pays */}
        {LABELS.map((l) => (
          <Marker key={l.name} position={l.pos} icon={countryLabel(l.name)} />
        ))}
      </MapContainer>
    </>
  );
}
