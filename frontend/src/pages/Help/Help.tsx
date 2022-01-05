import React from 'react';

import { AuthorizedLayout } from 'components/Layout';
import pdf from 'docs/sul.pdf';

import PDFViewer from 'components/PDFViewer';

const Help: React.FC = () => (
  <AuthorizedLayout pageName="Help">
    <PDFViewer src={pdf} />
  </AuthorizedLayout>
);

export default Help;
