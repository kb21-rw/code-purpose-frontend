import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HighlightedText = ({ children }: any) => (
  <div className="bg-primary text-white">
    <code>{children}</code>
  </div>
);

export default HighlightedText;
