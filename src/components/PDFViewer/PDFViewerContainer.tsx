import React, { useCallback, useEffect, useState } from 'react';
import { pdfjs, PDFPageProxy } from 'react-pdf';

import { OFFSET_NEXT, OFFSET_PREVIOUS, PDF_WORKER_SRC } from 'constants/pdfViewer';

import PDFViewer from './PDFViewer';

pdfjs.GlobalWorkerOptions.workerSrc = PDF_WORKER_SRC;

interface IPDFViewerContainer {
  src: string;
}

const PDFViewerContainer: React.FC<IPDFViewerContainer> = ({ src }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [displayLoader, setDisplayLoader] = useState<boolean>(false);
  const [scale, setScale] = useState(1);
  const [originalWidth, setOriginalWidth] = useState(1);

  const documentBoxRef = React.useRef<HTMLElement>(null);

  const onDocumentLoadSuccess = () => {
    setCurrentPageNumber(currentPageNumber);
  };

  const onPageLoadSuccess = (page: PDFPageProxy) => {
    setOriginalWidth(page.originalWidth);
    if (documentBoxRef.current) {
      const pageScale = documentBoxRef.current.clientWidth / page.originalWidth;
      if (scale !== pageScale) {
        setScale(pageScale);
      }
    }
  };

  const changePage = (offset: number) => {
    setCurrentPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const scrollToTop = () => {
    if (documentBoxRef.current) {
      documentBoxRef.current.scrollTo({ top: 0 });
    }
  };

  const clickPreviousPage = () => {
    scrollToTop();
    changePage(OFFSET_PREVIOUS);
  };

  const clickNextPage = () => {
    scrollToTop();
    changePage(OFFSET_NEXT);
  };
  const handleResize = useCallback(() => {
    if (documentBoxRef.current) {
      const pageScale = documentBoxRef.current.clientWidth / originalWidth;
      setScale(pageScale);
    }
  }, [originalWidth]);

  const changeDisplayLoader = () => {
    setDisplayLoader(!displayLoader);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <PDFViewer
      src={src}
      pageNumber={currentPageNumber}
      scale={scale}
      documentBoxRef={documentBoxRef}
      onDocumentLoadSuccess={onDocumentLoadSuccess}
      onPageLoadSuccess={onPageLoadSuccess}
      clickNextPage={clickNextPage}
      clickPreviousPage={clickPreviousPage}
      displayLoader={displayLoader}
      changeDisplayLoader={changeDisplayLoader}
    />
  );
};

export default PDFViewerContainer;
