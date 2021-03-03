import * as React from "react";

export function useForceUpdate() {
  const [, setTick] = React.useState<number>(0);
  const update = React.useCallback(() => {
    setTick((tick) => tick + 1);
  }, []);
  return update;
}

export const useDisableBodyScroll = (open: boolean) => {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);
};
