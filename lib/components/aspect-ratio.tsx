import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import React from "react";

type AspectRatioProps = {
  ratio?: number;
  children: React.ReactNode;
};

const AspectRatioImage = ({ ratio = 16 / 9, children }: AspectRatioProps) => {
  return (
    <AspectRatioPrimitive.Root ratio={ratio}>
      {children}
    </AspectRatioPrimitive.Root>
  );
};

export default AspectRatioImage;
