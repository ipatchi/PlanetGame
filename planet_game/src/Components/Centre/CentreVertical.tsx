import React from "react";
import { ReactNode } from "react";

function CentredScreen({ children }: { children?: ReactNode }) {
  return <div style={{ margin: "0", height: "100%"}}>{children}</div>;
}

export default CentredScreen;
