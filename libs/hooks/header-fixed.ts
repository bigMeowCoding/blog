import {
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
export function useHeaderFixed(): {
  rollBack: boolean;
  hRef: RefObject<HTMLDivElement>;
} {
  const scrollTopRef = useRef<number>(),
    hRef = useRef<HTMLDivElement>(null),
    [rollBack, setRollBack] = useState(false);
  useEffect(() => {
    document?.addEventListener(
      "scroll",
      () => {
        const headerHeight = hRef.current?.clientHeight;
        if (!headerHeight) {
          return;
        }
        const newScrollTop = document.documentElement.scrollTop;
        const rollBack =
          newScrollTop < (scrollTopRef.current || 0) &&
          headerHeight < newScrollTop;
        scrollTopRef.current = newScrollTop;
        setRollBack(rollBack);
      },
      false
    );
  }, []);
  return {
    rollBack,
    hRef,
  };
}
