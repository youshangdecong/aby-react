import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const fn = () => {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", fn);
    return () => {
      window.removeEventListener("scroll", fn);
    };
  }, []);

  return { scrollX, scrollY };
};

export default useScroll;
