import React from "react";
import { CircularProgress } from "@nextui-org/react";

export default function CircularProgressBar({
  progress,
  isGreen,
}: {
  progress: number;
  isGreen?: boolean;
}) {
  return (
    <CircularProgress
      aria-label="Loading..."
      classNames={{
        svg: "h-[8em] w-[8em]",
        indicator: isGreen ? "stroke-[#1E1]" : null,
      }}
      value={progress}
      color="warning"
      showValueLabel={true}
    />
  );
}
