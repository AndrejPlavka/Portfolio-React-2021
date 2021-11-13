import React, { useEffect, useRef } from "react";

//Component - Hook
export function KeepInViewPort() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(
      () => ref.current?.scrollIntoView({ behavior: "smooth" }),
      100
    );
    return () => clearInterval(interval);
  }, []);

  return <div ref={ref} />;
}
