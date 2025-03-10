import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-kml";

export default function KMLLayer({ data }) {
  const map = useMap();

  useEffect(() => {
    if (!data) return;

    const kmlLayer = new L.KML(data, { async: true });
    map.addLayer(kmlLayer);
    map.fitBounds(kmlLayer.getBounds());

    return () => {
      map.removeLayer(kmlLayer);
    };
  }, [data, map]);

  return null;
}
