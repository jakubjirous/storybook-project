import React from "react";

export type ButtonProps = {
  disabled: boolean;
  children: React.ReactNode;
};

export default function Button({ disabled, children }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      style={{
        padding: 12,
        fontSize: 12,
        background: disabled ? "lightgray" : "green",
        color: disabled ? "gray" : "white",
      }}
    >
      {children}
    </button>
  );
}
