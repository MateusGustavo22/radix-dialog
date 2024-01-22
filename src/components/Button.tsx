import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "bg-blue-500 rounded-md",
  variants: {
    variant: {
      normal: "bg-blue-500 text-white hover:bg-blue-600 text-white",
      cancel: "bg-white text-zinc-800 hover:bg-zinc-200 text-zinc-800",
    },
    disabled: { true: "bg-blue-300 text-white pointer-events-none hover:none text-white" },
    size: {
      md: "w-12 py-2",
      lg: "w-24 py-2",
    },
  },
  defaultVariants: {
    variant: "normal",
    size: "lg",
  },
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

function Button({ variant, disabled, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={button({ variant, disabled, size: size })} />
  );
}

export default Button;
