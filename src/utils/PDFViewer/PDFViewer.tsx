import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  // Create plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div style={{ height: '750px' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
        <Viewer
          fileUrl={pdfUrl}
          plugins={[
            defaultLayoutPluginInstance, // Register the default layout plugin
          ]}
        />
      </Worker>
    </div>
  );
};

export default PDFViewer;
