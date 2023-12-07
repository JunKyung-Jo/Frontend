import { UseOutSideClickAttribute } from "@/types/hooks/useOutSideClickAttribute.type";
import { useEffect, useState } from "react";

export const useOutsideClick: UseOutSideClickAttribute = (
  element,
  initialState
) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e: any) => {
      if (element.current !== null && !element.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => window.removeEventListener("click", pageClickEvent);
  }, [isActive]);

  return [isActive, setIsActive];
};
