import React from "react";

export default function PageHeader({ title, subtitle }) {
  return (
    <header className="flex items-center justify-between gap-4 mb-4 fade-in">
      <h1 className="text-xl font-bold text-black">{title}</h1>
      {subtitle && <div className="text-sm text-black">{subtitle}</div>}
    </header>
  );
}
