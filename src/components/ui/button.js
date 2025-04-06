// src/components/ui/button.js

import React from "react";

export function Button({ children, className, onClick }) {
  return (
    <button
      className={`bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

