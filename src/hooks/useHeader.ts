import { useRef, useState } from "react";

export const useHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(headerRef.current?.clientHeight || 0);

  return { headerHeight, setHeaderHeight, headerRef };
}