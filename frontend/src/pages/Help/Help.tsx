import React, { Suspense } from 'react';

import { AuthorizedLayout } from 'components/Layout';
import Loader from 'components/Loader';
import pdf from 'docs/sul.pdf';
import { Loaders } from 'enums/loader';
import { PDFViewer } from 'components/PDFViewer';

const Help: React.FC = () => (
  <AuthorizedLayout pageName="Help">
    <Suspense fallback={<Loader color="primary" type={Loaders.content} />}>
      <PDFViewer src={pdf} />
    </Suspense>
  </AuthorizedLayout>
);

export default Help;
