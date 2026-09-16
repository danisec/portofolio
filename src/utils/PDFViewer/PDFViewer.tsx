interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer = ({ pdfUrl }: PDFViewerProps) => {
  return (
    <div className="h-[750px] w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
      <object
        data={pdfUrl}
        type="application/pdf"
        title="Resume PDF — Dani Aprilyanto"
        className="h-full w-full"
      >
        <p className="p-6 text-sm">
          This browser cannot display PDF files inline.{' '}
          <a href={pdfUrl} download className="font-semibold underline">
            Download the resume (PDF)
          </a>
          .
        </p>
      </object>
    </div>
  );
};

export default PDFViewer;
