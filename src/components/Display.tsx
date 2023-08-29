import React, { ReactNode } from "react";

interface DisplayProps {
  children: ReactNode;
}

function Display({ children }: DisplayProps) {
  return <div className="display">{children}</div>;
}

export default Display;
