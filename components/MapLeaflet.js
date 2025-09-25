import dynamic from "next/dynamic";
import { useEffect } from "react";

const position = [-37.0101, -62.3656]; // Guaminí

// Carga dinámica de react-leaflet (sin SSR)
const InnerMap = dynamic(async () => {
  const L = (await import("leaflet")).default;
  const { MapContainer, TileLayer, Marker, Popup } = await import("react-leaflet");

  // Fix de íconos en Next
  function fixLeafletIcon() {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }

  return function MapOnlyClient() {
    useEffect(() => { fixLeafletIcon(); }, []);
    return (
      <MapContainer center={position} zoom={12} style={{ height: 380, width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Guaminí</Popup>
        </Marker>
      </MapContainer>
    );
  };
}, { ssr: false });

export default function MapLeaflet() {
  return <InnerMap />;
}
