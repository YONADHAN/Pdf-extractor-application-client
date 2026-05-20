import { useState } from 'react';

import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

import { useNavigate } from 'react-router-dom';

import { useGeneratePdf } from '../hooks/use_generate_pdf';

import {
    Document,
    pdfjs,
} from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';

import 'react-pdf/dist/Page/TextLayer.css';

import { useViewPdf } from '../hooks/use_view_pdf';

import PdfPagePreview from '../components/PdfViewPage/PdfPagePreview';

import SelectedPagesBar from '../components/PdfViewPage/SelectedPagesBar';

pdfjs.GlobalWorkerOptions.workerSrc =
    new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
    ).toString();

const PdfViewPage = () => {
    const { id } =
        useParams();

    const [numPages, setNumPages] =
        useState(0);
    const navigate =
        useNavigate();

    const {
        mutate:
        generatePdfMutation,
        isPending:
        isGeneratePending,
    } = useGeneratePdf();


    const [
        selectedPages,
        setSelectedPages,
    ] = useState<number[]>([]);

    const {
        data,
        isLoading,
    } = useViewPdf(id || '');


    const handleGeneratePdf =
        () => {
            if (
                selectedPages.length ===
                0
            ) {
                toast.error(
                    'Select at least one page',
                );

                return;
            }

            generatePdfMutation(
                {
                    stored_file_name:
                        id || '',

                    pages:
                        selectedPages,
                },
                {
                    onSuccess: (
                        response,
                    ) => {
                        toast.success(
                            response.message,
                        );

                        navigate(
                            `/pdf/view/${response.data.stored_file_name}`,
                        );
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
    // PDF LOAD SUCCESS
    const onDocumentLoadSuccess =
        ({
            numPages,
        }: {
            numPages: number;
        }) => {
            setNumPages(
                numPages,
            );
        };

    // PAGE SELECT
    const handleSelectPage = (
        pageNumber: number,
    ) => {
        setSelectedPages(
            (prev) => {
                const alreadySelected =
                    prev.includes(
                        pageNumber,
                    );

                if (
                    alreadySelected
                ) {
                    return prev.filter(
                        (page) =>
                            page !==
                            pageNumber,
                    );
                }

                return [
                    ...prev,
                    pageNumber,
                ];
            },
        );
    };

    // LOADING
    if (isLoading) {
        return (
            <div className="p-10">
                Loading PDF...
            </div>
        );
    }

    const pdfUrl =
        data?.data.url;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="mx-auto max-w-7xl">
                {/* HEADER */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold">
                        {
                            data?.data
                                .original_file_name
                        }
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Click pages to
                        select them for
                        extraction
                    </p>
                </div>

                {/* SELECTED PAGES */}
                <SelectedPagesBar
                    selectedPages={
                        selectedPages
                    }
                    setSelectedPages={
                        setSelectedPages
                    }
                />
                <div className="mb-8 flex justify-end">
                    <button
                        onClick={
                            handleGeneratePdf
                        }
                        disabled={
                            isGeneratePending ||
                            selectedPages.length ===
                            0
                        }
                        className="rounded-xl bg-black px-6 py-3 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {isGeneratePending
                            ? 'Generating...'
                            : 'Generate PDF'}
                    </button>
                </div>
                {/* PDF */}
                <Document
                    file={pdfUrl}
                    onLoadSuccess={
                        onDocumentLoadSuccess
                    }
                    loading="Loading PDF..."
                >
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {Array.from(
                            new Array(
                                numPages,
                            ),
                            (
                                _,
                                index,
                            ) => {
                                const pageNumber =
                                    index + 1;

                                return (
                                    <PdfPagePreview
                                        key={pageNumber}
                                        pageNumber={pageNumber}
                                        isSelected={selectedPages.includes(
                                            pageNumber,
                                        )}
                                        selectionOrder={
                                            selectedPages.includes(
                                                pageNumber,
                                            )
                                                ? selectedPages.indexOf(
                                                    pageNumber,
                                                ) + 1
                                                : null
                                        }
                                        onSelect={
                                            handleSelectPage
                                        }
                                    />
                                );
                            },
                        )}
                    </div>
                </Document>
            </div>
        </div>
    );
};

export default PdfViewPage;