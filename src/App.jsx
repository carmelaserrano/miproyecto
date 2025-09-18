import UploadImage from "./UploadImage";

export function App() {
  return (
    <div>
      <h1 style={{
    textAlign: "center",
    color: "#0e2642ff",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    textShadow: "2px 2px 5px rgba(0,0,0,0.2)",
    letterSpacing: "2px",
    marginTop: "20px"
  }}>Subir Imagen</h1>
      <UploadImage />
    </div>
  );
}

export default App;
