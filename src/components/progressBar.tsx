import React from "react";
import { Progress } from "@nextui-org/react";

export default function ProgressBar({ value }: { value: number }) {
  return (
    <Progress aria-label="Loading..." value={value} className="max-w-md" />
  );
}
