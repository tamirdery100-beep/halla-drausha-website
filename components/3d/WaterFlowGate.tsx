"use client";

import { Component, ReactNode, useEffect, useState } from "react";
import dynamic from "next/dynamic";

/**
 * עוטף את WaterFlow בשני קווי הגנה:
 *   1. Mobile / reduced-motion → לא טוען Three.js בכלל, רק רקע גרדיאנט סטטי.
 *   2. Error Boundary → אם WebGL קורס בדסקטופ, חוזר לאותו fallback בלי להפיל את הדף.
 *
 * הסיבה: Safari iOS / מכשירים ישנים מפילים את כל ה-React tree
 * כשהקנבס נכשל באתחול (Application error: client-side exception).
 */

const Fallback = () => (
  <div
    aria-hidden
    className="absolute inset-0 bg-gradient-to-b from-[#001b2e] via-brand-deep to-[#001b2e]"
  >
    {/* layered atmospheric glows — תחליף ל-3D */}
    <div
      className="absolute inset-0 opacity-90"
      style={{
        background:
          "radial-gradient(60% 50% at 50% 35%, rgba(0,163,224,0.28) 0%, rgba(0,43,73,0) 65%)",
      }}
    />
    <div
      className="absolute inset-0 opacity-70"
      style={{
        background:
          "radial-gradient(40% 35% at 70% 70%, rgba(125,211,252,0.18) 0%, rgba(0,43,73,0) 70%)",
      }}
    />
    <div className="absolute inset-0 blueprint opacity-[0.07]" />
  </div>
);

const WaterFlow = dynamic(() => import("./WaterFlow"), {
  ssr: false,
  loading: () => <Fallback />,
});

class CanvasErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: unknown) {
    if (process.env.NODE_ENV !== "production") {
      // לא מציפים את הקונסול בפרודקשן; רק לפיתוח
      console.warn("[WaterFlow] disabled — WebGL/Three.js failed:", error);
    }
  }
  render() {
    if (this.state.hasError) return <>{this.props.fallback}</>;
    return <>{this.props.children}</>;
  }
}

export default function WaterFlowGate() {
  const [enable3D, setEnable3D] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const okSize = window.matchMedia("(min-width: 1024px)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // בדיקת WebGL זמינה — אם הדפדפן לא תומך, נפסול מראש
    let webglOk = false;
    try {
      const canvas = document.createElement("canvas");
      webglOk = !!(
        canvas.getContext("webgl2") || canvas.getContext("webgl")
      );
    } catch {
      webglOk = false;
    }

    setEnable3D(okSize && !reduce && webglOk);
  }, []);

  if (!enable3D) return <Fallback />;

  return (
    <CanvasErrorBoundary fallback={<Fallback />}>
      <WaterFlow />
    </CanvasErrorBoundary>
  );
}
