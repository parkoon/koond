import { Loader2 } from "lucide-react";
import React from "react";
import { Button, ButtonProps } from "./button";

type IconButtonProps = { icon: React.ReactNode } & Omit<
  ButtonProps,
  "children" | "size" | "danger"
>;

const IconButton = ({
  icon,
  variant = "outlined",
  loading,
  ...props
}: IconButtonProps) => {
  return (
    <Button size="icon" variant={variant} {...props}>
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : icon}
    </Button>
  );
};

export default IconButton;
