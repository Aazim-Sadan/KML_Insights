export default function DetailsTable({ details }) {
    return (
      <table className="border-collapse border w-full">
        <thead>
          <tr>
            <th className="border p-2">Element Type</th>
            <th className="border p-2">Total Length</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(details).map(([type, length]) => (
            <tr key={type}>
              <td className="border p-2">{type}</td>
              <td className="border p-2">{length.toFixed(2)} km</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }