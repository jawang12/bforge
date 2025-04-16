import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Circle = (props: ComponentPropsWithoutRef<"div">) => {
  const { className, children } = props;
  return (
    <div
      className={twMerge(
        "inline-flex size-[240px] items-center justify-center rounded-full bg-zinc-900 outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10",
        className,
      )}
    >
      {children}
    </div>
  );
};
