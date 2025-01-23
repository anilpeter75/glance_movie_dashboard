import React from "react";

export default function Heading({ heading,className }) {
  return <div className={`text-2xl font-semibold mb-3 ${className}`}>{heading}</div>;
}
