import { ReactNode } from "react";
import "./QuestionText.css";

function QuestionText({ children }: { children?: ReactNode }) {
  return (
    <>
      <div className="QText">
        <h1>{children}</h1>
      </div>
    </>
  );
}

export default QuestionText;
