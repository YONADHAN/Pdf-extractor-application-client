import { Route } from 'react-router-dom';

import PdfDashboardPage from '../pages/pdf_dashboard_page';
import PdfViewPage from '../pages/pdf_view_page';

export const pdfRoutes = [
  <Route
    key="pdf-dashboard"
    path="/pdf"
    element={<PdfDashboardPage />}
  />,
  <Route
  path="/pdf/view/:id"
  element={<PdfViewPage />}
/>
];