import { FC } from 'react';

import PageTitle from 'components/PageTitle';
import pdf from 'docs/sul.pdf';
import { PDFViewer } from 'components/PDFViewer';

const Help: FC = () => (
  <PageTitle title="Help">
    <PDFViewer src={pdf} />
  </PageTitle>
);

export default Help;
