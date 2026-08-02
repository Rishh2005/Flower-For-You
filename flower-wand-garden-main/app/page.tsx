"use client";

import dynamic from "next/dynamic";

// Camera + WASM only exist in the browser, so skip SSR entirely.
const FlowerWand = dynamic(() => import("@/components/FlowerWand"), { ssr: false });

export default function Page() {
  return <FlowerWand />;
}
