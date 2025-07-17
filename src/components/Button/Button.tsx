import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export const Button = ({
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const baseClasses = "px-4 py-2 rounded font-medium";
  const variantClasses =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button
      type="button"
      className={`${baseClasses} ${variantClasses}`}
      {...props}
    >
      {children}
    </button>
  );
};