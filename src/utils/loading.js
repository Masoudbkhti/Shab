import { Skeleton } from "@mui/material";
export default function Loading({ variant, width, height }) {
  return <Skeleton variant={variant} width={width} height={height} />;
}
