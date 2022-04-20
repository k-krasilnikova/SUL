import React from 'react';

import { FIRST_PAGE_INDEX, LAST_PAGE_INDEX } from 'constants/pdfViewer';
import { Back, Forward } from 'components/Arrows';

import { ButtonBox, PageNumberText, StyledButton } from './styled';

interface IPDFViewerButtons {
  pageNumber: number;
  clickPreviousPage: () => void;
  clickNextPage: () => void;
}

const PDFViewerButtons: React.FC<IPDFViewerButtons> = ({
  pageNumber,
  clickPreviousPage,
  clickNextPage,
}) => (
  <ButtonBox>
    <StyledButton disabled={pageNumber <= FIRST_PAGE_INDEX} onClick={clickPreviousPage}>
      <Back arrowDisabled={pageNumber <= FIRST_PAGE_INDEX} />
    </StyledButton>
    <PageNumberText>
      {pageNumber}/{LAST_PAGE_INDEX}
    </PageNumberText>
    <StyledButton disabled={pageNumber >= LAST_PAGE_INDEX} onClick={clickNextPage}>
      <Forward arrowDisabled={pageNumber >= LAST_PAGE_INDEX} />
    </StyledButton>
  </ButtonBox>
);

export default PDFViewerButtons;
