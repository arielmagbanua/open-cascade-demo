export default function ModelViewer({ modelUrl }) {
  return (
    <div className="model-viewer">
      <model-viewer src={modelUrl} camera-controls enable-pan/>
    </div>
  );
}
