import { useState } from "react";

export default function UploadImage() {
const [preview, setPreview] = useState(null);
const [error, setError] = useState("");

const handleFileChange = (e) => {
const file = e.target.files[0];

if (!file) return;

// Validar que sea imagen con File API
if (file.type.startsWith("image/")) {
    setPreview(URL.createObjectURL(file));
    setError("");
    } else {
      setPreview(null);
      setError("El archivo seleccionado no es una imagen");
    }
};
return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
    <input type="file" accept="image/*" onChange={handleFileChange} />
    {error && <p style={{ color: "red" }}>{error}</p>}

      {preview && (
        <div style={{ marginTop: "1rem" }}>
          <img
            src={preview}
            alt="Preview"
            style={{ maxWidth: "300px", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
}

