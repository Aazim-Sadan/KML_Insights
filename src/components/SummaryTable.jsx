export default function SummaryTable({ summary }) {
    return (
      <table className="border-collapse border w-full">
        <thead>
          <tr>
            <th className="border p-2">Element Type</th>
            <th className="border p-2">Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(summary).map(([type, count]) => (
            <tr key={type}>
              <td className="border p-2">{type}</td>
              <td className="border p-2">{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }