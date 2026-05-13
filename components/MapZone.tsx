"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Circle, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const CHAMPAGNEY: [number, number] = [47.705, 6.713];

const pinIcon = L.divIcon({
  html: `
    <div style="position:relative;width:24px;height:24px;">
      <div style="position:absolute;inset:0;background:#B21F2D;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.35)"></div>
      <div style="position:absolute;top:50%;left:50%;width:6px;height:6px;background:#fff;border-radius:50%;transform:translate(-50%,-50%)"></div>
    </div>`,
  className: "",
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

export default function MapZone() {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.invalidateSize();
    }
  }, []);

  return (
    <MapContainer
      center={CHAMPAGNEY}
      zoom={8}
      ref={mapRef}
      style={{ height: "100%", width: "100%", background: "#F4F3EE" }}
      zoomControl={false}
      scrollWheelZoom={false}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

      {/* Cercle 100 km */}
      <Circle
        center={CHAMPAGNEY}
        radius={100000}
        pathOptions={{
          color: "#B21F2D",
          fillColor: "#B21F2D",
          fillOpacity: 0.08,
          weight: 2,
          dashArray: "6 5",
        }}
      />

      {/* Marqueur Champagney */}
      <Marker position={CHAMPAGNEY} icon={pinIcon}>
        <Tooltip permanent direction="top" offset={[0, -14]} opacity={1}
          className="map-tooltip"
        >
          Champagney
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}
