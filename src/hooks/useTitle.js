import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Unique Resume`;
  }, [title]);
};

export default useTitle;

//
