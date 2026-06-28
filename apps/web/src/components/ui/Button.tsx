import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className = "", ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`rounded-xl bg-blue-600 px-6 py-3 text-white font-medium transition duration-300 hover:bg-blue-700 hover:scale-[1.03] active:scale-95 ${className}`.trim()}
    >
      {children}
    </button>
  );
}

