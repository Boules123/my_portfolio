"use client";
import { useEffect } from "react";

// Opens the matching case study when the URL hash (e.g. #cvpr2016) targets one.
export default function OpenCaseOnHash() {
  useEffect(() => {
    const open = () => {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el && el.tagName === "DETAILS") {
        el.open = true;
        el.scrollIntoView();
      }
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, []);
  return null;
}
