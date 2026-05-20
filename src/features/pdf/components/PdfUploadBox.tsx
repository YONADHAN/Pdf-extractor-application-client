import { useRef } from 'react';

interface PdfUploadBoxProps {
  selectedFile: File | null;

  onFileSelect: (
    file: File | null,
  ) => void;

  onUpload: () => void;

  isUploading: boolean;
}

const PdfUploadBox = ({
  selectedFile,
  onFileSelect,
  onUpload,
  isUploading,
}: PdfUploadBoxProps) => {
  const inputRef =
    useRef<HTMLInputElement | null>(
      null,
    );

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file =
      event.target.files?.[0];

    if (!file) return;

    if (
      file.type !==
      'application/pdf'
    ) {
      alert('Only PDF allowed');

      return;
    }

    onFileSelect(file);
  };

  return (
    <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold">
          Upload PDF
        </h2>

        <input
          ref={inputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
        />

        <button
          type="button"
          onClick={() =>
            inputRef.current?.click()
          }
          className="rounded-lg bg-black px-6 py-3 text-white"
        >
          Choose PDF
        </button>

        {selectedFile && (
          <div className="text-sm text-gray-600">
            {selectedFile.name}
          </div>
        )}

        <button
          type="button"
          disabled={
            !selectedFile ||
            isUploading
          }
          onClick={onUpload}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white disabled:opacity-50"
        >
          {isUploading
            ? 'Uploading...'
            : 'Upload PDF'}
        </button>
      </div>
    </div>
  );
};

export default PdfUploadBox;