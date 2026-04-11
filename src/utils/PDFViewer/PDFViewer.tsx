interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer = ({ pdfUrl }: PDFViewerProps) => {
  return (
    <div className="h-[750px] w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
      <object data={pdfUrl} type="application/pdf" className="h-full w-full">
        <iframe src={pdfUrl} title="Resume PDF" className="h-full w-full" loading="lazy" />
      </object>
    </div>
  );
};

export default PDFViewer;
