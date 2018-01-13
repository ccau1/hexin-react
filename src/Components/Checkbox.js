import React from "react";

export default ({ className, label, labelPosition }) => {
  const pos = labelPosition || "right";
  return (
    <label className={className}>
      {pos === "left" && label}
      <input type={"checkbox"} />
      {pos === "right" && label}
    </label>
  );
};
