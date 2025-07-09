"use client"
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface PdfPreviewerProps {
  url: string;
  className?: string;
}

export default function PdfPreviewer({ url, className = '' }: PdfPreviewerProps) {
  const defaultLayout = defaultLayoutPlugin();
  return (
    <div className={`w-full h-full ${className}`} style={{ minHeight: '60vh' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer fileUrl={url} plugins={[defaultLayout]} />
      </Worker>
    </div>
  );
} 