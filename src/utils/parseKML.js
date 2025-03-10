import { DOMParser } from "xmldom";

export async function parseKML(file) {
  const text = await file.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(text, "text/xml");

  const elements = [];
  const summaryData = {};
  const detailsData = {};

  const placemarks = xml.getElementsByTagName("Placemark");

  for (let i = 0; i < placemarks.length; i++) {
    const type = placemarks[i].getElementsByTagName("LineString").length
      ? "LineString"
      : "Other";
    summaryData[type] = (summaryData[type] || 0) + 1;
  }

  return { elements, summaryData, detailsData };
}