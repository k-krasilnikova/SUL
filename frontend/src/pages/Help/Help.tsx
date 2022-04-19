import React, { Suspense } from 'react';

import { AuthorizedLayout } from 'components/Layout';
import PDFViewer from 'components/PDFViewer';
import Loader from 'components/Loader';
import { LOADER } from 'constants/loaderTypes';
import pdf from 'docs/sul.pdf';

const Help: React.FC = () => (
  <AuthorizedLayout pageName="Help">
    <Suspense fallback={<Loader color="primary" type={LOADER.content} />}>
      <PDFViewer src={pdf} />
    </Suspense>
  </AuthorizedLayout>
);

export default Help;
