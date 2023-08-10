import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function RemoveDate({ onClick }) {
  return (
    <Button
      variant="body2"
      component="body2"
      sx={{
        fontSize: "12px",
        display: "flex",
        gap: "5px",
        justifyContent: "center",
        alignItems: "center",
      }}
      startIcon={<DeleteOutlineIcon />}
      onClick={onClick}
    >
      پاک کردن تاریخ
    </Button>
  );
}
