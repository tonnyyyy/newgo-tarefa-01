import { useContext, createContext } from 'react';
import { _useHeader } from '../hooks/useHeader';

interface IContextData {
  headerHeight: number | undefined;
  setHeaderHeight: (height: number | undefined) => void;
  headerRef: React.RefObject<HTMLDivElement>;
}

export const headerHeightContext = createContext<IContextData>({} as IContextData);

export const HeaderHeightProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { headerHeight, setHeaderHeight, headerRef } = _useHeader();

  return (
    <headerHeightContext.Provider value={{
      headerHeight,
      setHeaderHeight,
      headerRef
    }}>
      {children}
    </headerHeightContext.Provider>
  )
}


