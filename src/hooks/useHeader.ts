import { useRef, useState, useContext } from "react";
import { headerHeightContext } from "../contexts/headerHeightContext";

export const _useHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, originalSetHeaderHeight] = useState<number | undefined>(headerRef.current?.clientHeight || 0);

  const setHeaderHeight = (height: number | undefined) => originalSetHeaderHeight(height);

  return { headerHeight, setHeaderHeight, headerRef };
}

export const useHeader = () => useContext(headerHeightContext);