"use client";

import { useState } from "react";

interface MonochromePhotoProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  placeholderLabel?: string;
  variant?: "portrait" | "landscape";
}

export function MonochromePhoto({
  src,
  alt,
  className = "",
  aspectClassName = "aspect-[3/4]",
  placeholderLabel = "PHOTOGRAPH",
  variant = "portrait",
}: MonochromePhotoProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden bg-slate-100 ${aspectClassName} ${className}`}
    >
      {!hasError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className="h-full w-full object-cover grayscale contrast-[1.06] transition duration-700 ease-out group-hover:scale-[1.02] group-hover:contrast-[1.12]"
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center border border-slate-200/80 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200/60 p-6 text-slate-400"
          role="img"
          aria-label={alt}
        >
          {variant === "portrait" ? (
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300/80 bg-white/70">
                <span
                  className="text-lg italic tracking-widest text-slate-500"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  T.T
                </span>
              </div>
              <span className="text-[10px] font-medium tracking-[0.25em] text-slate-400 uppercase">
                {placeholderLabel}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-slate-300" />
              <span
                className="text-xs italic tracking-[0.3em] text-slate-400 uppercase"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {placeholderLabel}
              </span>
              <span className="h-px w-8 bg-slate-300" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
