import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { parseKML } from "./utils/parseKML";
import FileUpload from "./components/FileUpload";
import SummaryTable from "./components/SummaryTable";
import DetailsTable from "./components/DetailsTable";
import KMLLayer from "./components/KMLLayer";

export default function App() {
  const [kmlData, setKmlData] = useState(null);
  const [summary, setSummary] = useState(null);
  const [details, setDetails] = useState(null);

  const handleFileUpload = async (file) => {
    const { elements, summaryData, detailsData } = await parseKML(file);
    setKmlData(elements);
    setSummary(summaryData);
    setDetails(detailsData);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">KML File Viewer</h1>
      <FileUpload onUpload={handleFileUpload} />
      {summary && <SummaryTable summary={summary} />}
      {details && <DetailsTable details={details} />}
      <MapContainer center={[20, 78]} zoom={5} className="h-96 w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {kmlData && <KMLLayer data={kmlData} />}
      </MapContainer>
    </div>
  );
}