import { useState } from 'react';

import { toast } from 'sonner';

import PdfUploadBox from '../components/PdfUploadBox';

import PdfGrid from '../components/PdfGrid';

import { useUploadPdf } from '../hooks/use_upload_pdf';

import { useListPdf } from '../hooks/use_list_pdf';

import { useNavigate }
  from 'react-router-dom'; 


import type {
  ListPdfItem,
  PdfType,
} from '../types/list_pdf_types';
import Pagination from '@/shared/components/resuable_components/pagination';

const PdfDashboardPage = () => {
  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [activeTab, setActiveTab] =
    useState<PdfType>('original');

  const [page, setPage] =
    useState(1);

const navigate =
  useNavigate();

  const {
    data,
    isLoading,
  } = useListPdf({
    type: activeTab,
    page,
    limit: 6,
  });


  const {
    mutate: uploadPdfMutation,
    isPending,
  } = useUploadPdf();


  const handleUpload = () => {
    if (!selectedFile) {
      toast.error(
        'Please select a PDF file',
      );

      return;
    }

    uploadPdfMutation(
      {
        file: selectedFile,
      },
      {
        onSuccess: (response) => {
          toast.success(
            response.message,
          );

          console.log(
            response.data,
          );

          setSelectedFile(null);
        },

        onError: (
          error: Error,
        ) => {
          toast.error(
            error.message,
          );
        },
      },
    );
  };


  const handleViewPdf = (
    pdf: ListPdfItem,
  ) => {
   navigate(
    `/pdf/view/${pdf.stored_file_name}`,
  );
  };


  const handleDeletePdf = (
    pdf: ListPdfItem,
  ) => {
    console.log(
      'DELETE PDF:',
      pdf,
    );


    // delete mutation
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            PDF Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Upload, manage,
            and extract PDFs
          </p>
        </div>

        {/* PDF UPLOAD */}
        <div className="mb-10">
          <PdfUploadBox
            selectedFile={
              selectedFile
            }
            onFileSelect={
              setSelectedFile
            }
            onUpload={
              handleUpload
            }
            isUploading={
              isPending
            }
          />
        </div>

        {/* TABS */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => {
              setActiveTab(
                'original',
              );

              setPage(1);
            }}
            className={`rounded-xl px-5 py-3 font-medium transition ${activeTab ===
                'original'
                ? 'bg-black text-white'
                : 'bg-white text-black shadow-sm'
              }`}
          >
            Original PDFs
          </button>

          <button
            onClick={() => {
              setActiveTab(
                'extracted',
              );

              setPage(1);
            }}
            className={`rounded-xl px-5 py-3 font-medium transition ${activeTab ===
                'extracted'
                ? 'bg-black text-white'
                : 'bg-white text-black shadow-sm'
              }`}
          >
            Extracted PDFs
          </button>
        </div>

        {/* PDF GRID */}
        {isLoading ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            Loading PDFs...
          </div>
        ) : (
          <PdfGrid
            pdfs={
              data?.data.data ||
              []
            }
            onView={
              handleViewPdf
            }
            onDelete={
              handleDeletePdf
            }
          />
        )}

        <Pagination
          currentPage={page}
          totalPages={
            data?.data.totalPages || 1
          }
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default PdfDashboardPage;