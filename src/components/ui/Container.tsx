import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
};

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-[var(--container-max)] px-5 sm:px-8", className)}
    >
      {children}
    </Component>
  );
}
