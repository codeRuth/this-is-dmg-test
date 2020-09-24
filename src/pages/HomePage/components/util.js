import React from "react";
export const useMediaQuery = (query, whenTrue, whenFalse) => {
  if (typeof window === "undefined" || typeof window.matchMedia === "undefined")
    return whenFalse;

  const mediaQuery = window.matchMedia(query);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [match, setMatch] = React.useState(!!mediaQuery.matches);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  return match ? whenTrue : whenFalse;
};
