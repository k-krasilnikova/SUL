import React, { Suspense } from 'react';

import { AuthorizedLayout } from 'components/Layout';
import PDFViewer from 'components/PDFViewer';
import Loader from 'components/Loader';
import pdf from 'docs/sul.pdf';
import { ELoader } from 'enums/loader';

const Help: React.FC = () => (
  <AuthorizedLayout pageName="Help">
    <Suspense fallback={<Loader color="primary" type={ELoader.content} />}>
      <PDFViewer src={pdf} />
    </Suspense>
  </AuthorizedLayout>
);

export default Help;
