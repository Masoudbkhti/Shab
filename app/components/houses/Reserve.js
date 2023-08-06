"use client";
import { Typography, Box, Divider, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addTrip } from "../../../redux/features/ReserveSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Reserve({ data }) {
  const { price, oldprice, id } = data;
  const dispatch = useDispatch();
  const { trip } = useSelector((store) => store.ReserveSlice);
  const handleAddTrip = () => {
    dispatch(addTrip(data));
  };
  console.log(data);
  return (
    <Box
      sx={{
        width: "350px",
        borderRadius: "5px",
        border: "1px solid #969696",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        {data.oldprice ? (
          <Typography>قیمت هر شب از {oldprice} تومان</Typography>
        ) : (
          <Typography>قیمت هر شب از {price} تومان</Typography>
        )}
        <Divider />
        <Typography>تاریخ سفر</Typography>
        <Box sx={{ display: "flex" }}>
          <Button
            sx={{
              border: "1px solid #969696",
              borderLeft: "none",
              borderRadius: "0 20px 20px 0",
              color: "black",
            }}
          >
            تاریخ ورود
          </Button>
          <Button
            sx={{
              border: "1px solid #969696",
              borderRadius: "20px 0 0 20px",
              color: "black",
            }}
          >
            تاریخ خروج
          </Button>
        </Box>
        <Typography>تعداد نفرات</Typography>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Button
            sx={{
              border: "1px solid #969696",
              borderLeft: "none",
              borderRadius: "0 20px 20px 0",
              color: "#4156D9",
              "&:hover": { backgroundColor: "#FAFAFA" },
            }}
            onClick={handleAddTrip}
          >
            <AddIcon />
          </Button>
          <Box
            sx={{
              width: "70%",
              bgcolor: "#FAFAFA",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #969696 ",
            }}
          >
            {trip.count}
            <Typography>چند نفرید؟</Typography>
          </Box>
          <Button
            sx={{
              border: "1px solid #969696",
              borderRight: "none",

              borderRadius: "20px 0 0 20px",
              color: "#4156D9",
              "&:hover": { backgroundColor: "#FAFAFA" },
            }}
          >
            <RemoveIcon />
          </Button>
        </Box>
      </Box>
      <Box>
        <Button
          sx={{
            backgroundColor: "#4156D9",
            color: "white",
            borderRadius: "20px",
            paddingX: "20px",
            width: "100%",
            "&:hover": { backgroundColor: "#4156D9" },
          }}
        >
          انتخاب تاریخ سفر
        </Button>
      </Box>
      <Box>
        <Typography sx={{ color: "#969696" }}>
          همراه با گفتگوی آنلاین با میزبان قبل از پرداخت
        </Typography>
      </Box>
    </Box>
  );
}
