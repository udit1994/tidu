import { useRef } from "react";

function useTooltip() {
  const tooltipRef = useRef();

  const callbackRef = (element) => {
    tooltipRef.current = element?.getBoundingClientRect();
  };

  return [tooltipRef, callbackRef];
}

export default useTooltip;
