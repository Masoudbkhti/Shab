"use client";
import { Typography, Box, Divider, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCallback } from "react";
import { addTrip, decreaseTrip } from "@/redux/features/ReserveSlice";
import { useDispatch, useSelector } from "react-redux";
import toPersianDigits from "@/utils/toPersianDigits";
import toEnglishDigits from "@/utils/toEnglishDigits";
import * as React from "react";
import { useRef, useState } from "react";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import DatePicker, { Calendar } from "react-multi-date-picker";
import { Popover } from "@mui/material";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import FastReserve from "../FastReserve";
import PickTime from "../PickTime";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Reserve({ data }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(new Date());
  const [enterDate, setEnterDate] = useState("تاریخ ورود");
  const open = Boolean(anchorEl);
  const popoverid = open ? "simple-popover" : undefined;
  const { price, oldprice, id, person } = data;
  const dispatch = useDispatch();
  const trip = useSelector((store) => store.Reserve.trip);
  const tripItem = trip.find((item) => item.id === id);
  const personCapacity = parseInt(toEnglishDigits(person), 10);
  const countLimit = personCapacity > 0 ? personCapacity : 1;

  const popoverRef = useRef();
  const handleClick = () => {
    setAnchorEl(popoverRef.current);
  };
  const handleRemoveDate = () => {
    setValue(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
    // setEnterDate(value);
  };
  const handleAddTrip = useCallback(() => {
    dispatch(addTrip(id));
  }, []);
  const handleRemoveTrip = useCallback(() => {
    dispatch(decreaseTrip(id));
  }, []);

  return (
    <Box
      sx={{
        width: "350px",
        borderRadius: "5px",
        border: "1px solid #969696",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
      ref={popoverRef}
    >
      <Popover
        id={popoverid}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              p: 2,
            }}
          >
            بازه سفر خود را انتخاب کنید.
          </Typography>
          <Calendar
            className="custom-calendar"
            range
            calendar={persian}
            locale={persian_fa}
            plugins={[weekends()]}
            numberOfMonths={2}
            value={value}
            onChange={setValue}
          />
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FastReserve />
              <PickTime />
              <Typography
                varian="body2"
                component="body2"
                sx={{ fontSize: "12px" }}
              >
                آخرین به‌روزرسانی توسط میزبان: دیروز
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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
                onClick={handleRemoveDate}
              >
                پاک کردن تاریخ
              </Button>
            </Box>
          </Box>
        </Box>
      </Popover>
      <Box>
        {data.oldprice ? (
          <Typography>قیمت هر شب از {oldprice} تومان</Typography>
        ) : (
          <Typography>قیمت هر شب از {price} تومان</Typography>
        )}
        <Divider />
        <Typography>تاریخ سفر</Typography>
        <Box sx={{ display: "flex" }}>
          {/* azinja */}
          <DatePicker
            style={{
              border: "1px solid #969696",
              borderLeft: "none",
              borderRadius: "0 20px 20px 0",
              fontFamily: " iranyekan",
              color: "black",
              "&:hover": { backgroundColor: "#FAFAFA" },
            }}
            value={value}
            calendar={persian}
            locale={persian_fa}
          />

          {/* tainja */}
          <Button
            sx={{
              border: "1px solid #969696",
              borderLeft: "none",
              borderRadius: "0 20px 20px 0",
              color: "black",
              "&:hover": { backgroundColor: "#FAFAFA" },
            }}
            onClick={handleClick}
          >
            {enterDate}
          </Button>
          <Button
            sx={{
              border: "1px solid #969696",
              borderRadius: "20px 0 0 20px",
              color: "black",
              "&:hover": { backgroundColor: "#FAFAFA" },
            }}
            onClick={handleClick}
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
            disabled={tripItem && tripItem.count >= countLimit}
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
            {!tripItem || tripItem.count < 1 ? (
              <Typography>چند نفرید؟</Typography>
            ) : (
              <Typography>{toPersianDigits(tripItem.count)} نفر</Typography>
            )}
          </Box>
          <Button
            sx={{
              border: "1px solid #969696",
              borderRight: "none",

              borderRadius: "20px 0 0 20px",
              color: "#4156D9",
              "&:hover": { backgroundColor: "#FAFAFA" },
            }}
            onClick={handleRemoveTrip}
            disabled={!tripItem || tripItem.count < 1}
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
          onClick={handleClick}
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
