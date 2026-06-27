import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export default function PrimaryButton({
  children,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
      rounded-xl
      bg-blue-600
      px-6
      py-3
      text-white
      font-medium
      transition
      duration-300
      hover:scale-105
      hover:bg-blue-700
      active:scale-95
      "
    >
      {children}
    </button>
  );
}