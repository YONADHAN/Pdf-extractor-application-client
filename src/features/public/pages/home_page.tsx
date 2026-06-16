import { useNavigate } from 'react-router-dom';

import {
  FileText,
  ArrowRight,
  ShieldCheck,
  Download,
  Scissors,
} from 'lucide-react';

const HomePage = () => {
  const navigate =
    useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-red-50">
      {/* HERO */}
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-16 text-center">
        {/* PDF ICON */}
        <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-3xl bg-red-600 shadow-2xl shadow-red-200">
          <FileText
            size={56}
            className="text-white"
          />
        </div>

        {/* TITLE */}
        <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-zinc-900 md:text-7xl">
          Smart
          {' '}
          <span className="text-red-600">
            PDF
          </span>
          {' '}
          Extraction
          <br />
          Made Simple
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
          Upload PDFs, select
          pages, rearrange
          them visually, and
          generate brand-new
          PDFs instantly.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <button
            onClick={() =>
              navigate('/pdf')
            }
            className="group flex items-center gap-3 rounded-2xl bg-black px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Open Dashboard

            <ArrowRight
              size={22}
              className="transition group-hover:translate-x-1"
            />
          </button>

          <button className="rounded-2xl border border-zinc-300 bg-white px-8 py-4 text-lg font-semibold text-zinc-700 transition hover:bg-zinc-100">
            Learn More
          </button>
        </div>

        {/* FEATURES */}
        <div className="mt-24 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {/* CARD 1 */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100">
              <Scissors
                className="text-red-600"
                size={28}
              />
            </div>

            <h3 className="text-xl font-bold">
              Extract Pages
            </h3>

            <p className="mt-3 leading-7 text-zinc-600">
              Select exactly the
              pages you need and
              create a new PDF
              instantly.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
              <Download
                className="text-blue-600"
                size={28}
              />
            </div>

            <h3 className="text-xl font-bold">
              Download Anytime
            </h3>

            <p className="mt-3 leading-7 text-zinc-600">
              Store original and
              extracted PDFs and
              access them whenever
              needed.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
              <ShieldCheck
                className="text-green-600"
                size={28}
              />
            </div>

            <h3 className="text-xl font-bold">
              Secure Access
            </h3>

            <p className="mt-3 leading-7 text-zinc-600">
              Your PDFs are
              protected with
              authentication and
              secure token-based
              access.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;