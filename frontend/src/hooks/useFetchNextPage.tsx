import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface IProps {
  fetchNextPage: () => void;
  hasNextPage?: boolean;
}

const useFetchNextPage: (props: IProps) => (node?: Element | null) => void = ({
  hasNextPage,
  fetchNextPage,
}) => {
  const { ref, inView } = useInView({
    root: null,
    threshold: 1.0,
    rootMargin: '0px',
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]); // eslint-disable-line react-hooks/exhaustive-deps

  return ref;
};

export default useFetchNextPage;
