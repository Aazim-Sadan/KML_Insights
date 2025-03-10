import { useRef } from "react";

export default function FileUpload({ onUpload }) {
  const fileInputRef = useRef();

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".kml"
        ref={fileInputRef}
        onChange={handleChange}
        className="border p-2"
      />
    </div>
  );
}