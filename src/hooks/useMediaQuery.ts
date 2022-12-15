import { useMediaQuery as originalUseMediaQuery } from 'react-responsive';

type Query = 'mobile' | 'desktop' | 'tv';

export const useMediaQuery = (query: Query) => {

  const queries  = {
    mobile: '1024px',
    desktop: '1920px',
    tv: '2500px'
  }

  return originalUseMediaQuery({ query: `(max-width: ${queries[query]})`  })
}
