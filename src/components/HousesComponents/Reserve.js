"use client";
import { Typography, Box, Divider, Button, Skeleton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCallback } from "react";
import {
  addTrip,
  decreaseTrip,
  submitTrip,
} from "@/src/redux/features/ReserveSlice";
import { useDispatch, useSelector } from "react-redux";
import toPersianDigits from "@/src/utils/toPersianDigits";
import toEnglishDigits from "@/src/utils/toEnglishDigits";
import * as React from "react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import { Calendar } from "react-multi-date-picker";
import { Popover } from "@mui/material";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import FastReserve from "./Calendar/FastReserve";
import PickTime from "./Calendar/PickTime";
import RemoveDate from "./reserve/RemoveDate";
import Loading from "@/src/utils/loading";

export default function Reserve({ data }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [enterDate, setEnterDate] = useState("");
  const [exitDate, setExitDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const popoverRef = useRef();
  const router = useRouter();
  const open = Boolean(anchorEl);
  const popoverid = open ? "simple-popover" : undefined;
  const { price, oldprice, id, person } = data;
  const dispatch = useDispatch();
  const trip = useSelector((store) => store.Reserve.trip);
  const tripItem = trip.find((item) => item.id === id);
  const personCapacity = parseInt(toEnglishDigits(person), 10);
  const countLimit = personCapacity > 0 ? personCapacity : 1;
  const date2 = new Date(toEnglishDigits(exitDate).split("/").join("-"));
  const date1 = new Date(toEnglishDigits(enterDate).split("/").join("-"));
  const differenceInDays = Math.floor((date2 - date1) / (24 * 60 * 60 * 1000));
  const sumResult = (
    differenceInDays * toEnglishDigits(data.price)
  ).toLocaleString();

  const handleSubmit = useCallback(() => {
    router.push("/trips");
    dispatch(submitTrip({ data, enterDate, exitDate, sumResult }));
  }, [enterDate, exitDate, sumResult]);
  const handleSetDate = (array) => {
    setIsLoading(true);
    setEnterDate(array.slice(0, 1).join(""));
    setExitDate(array.slice(1, 2).join(""));
  };
  const handleClick = () => {
    setAnchorEl(popoverRef.current);
  };
  const handleRemoveDate = () => {
    setEnterDate("");
    setExitDate("");
    setShowResults(false);
  };
  const handleClose = () => {
    setAnchorEl(null);
    if (exitDate !== "") {
      setShowResults(true);
    }
    setIsLoading(false);
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
        height: "fit-content",
        borderRadius: "5px",
        border: "1px solid #E6E7F2",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        paddingX: "20px",
        paddingY: "20px",
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
            variant="subtitle2"
            component="p"
            color="secondary"
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
            onChange={handleSetDate}
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
                varian="body1"
                component="p"
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
              <RemoveDate onClick={handleRemoveDate} />
            </Box>
          </Box>
        </Box>
      </Popover>
      <Box sx={{ width: "100%" }}>
        {data.oldprice ? (
          <Typography variant="subtitle2" component="p" color="secondary">
            قیمت هر شب از {oldprice} تومان
          </Typography>
        ) : (
          <Typography variant="subtitle2" component="p" color="secondary">
            قیمت هر شب از {price} تومان
          </Typography>
        )}
        <Divider sx={{ marginY: "10px" }} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="subtitle2"
            component="p"
            color="secondary"
            sx={{ marginY: "10px" }}
          >
            تاریخ سفر
          </Typography>
          <RemoveDate onClick={handleRemoveDate} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              border: "1px solid #E6E7F2",
              borderLeft: "none",
              borderRadius: "0 20px 20px 0",
              width: "100%",
              color: "black",
              "&:hover": { backgroundColor: "#FAFAFA" },
            }}
            onClick={handleClick}
          >
            {enterDate ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle2" component="p" color="secondary">
                  تاریخ ورود
                </Typography>
                <Typography variant="subtitle2" component="p" color="info.main">
                  {enterDate}
                </Typography>
              </Box>
            ) : (
              <Typography variant="subtitle2" component="p" color="secondary">
                تاریخ ورود
              </Typography>
            )}
          </Button>
          <Button
            sx={{
              border: "1px solid #E6E7F2",
              borderRadius: "20px 0 0 20px",
              width: "100%",

              color: "black",
              "&:hover": { backgroundColor: "#FAFAFA" },
            }}
            onClick={handleClick}
          >
            {exitDate ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle2" component="p" color="secondary">
                  تاریخ خروج
                </Typography>
                <Typography variant="subtitle2" component="p" color="info.main">
                  {exitDate}
                </Typography>
              </Box>
            ) : (
              <Typography variant="subtitle2" component="p" color="secondary">
                تاریخ خروج
              </Typography>
            )}
          </Button>
        </Box>
        <Typography
          variant="subtitle1"
          component="p"
          color="secondary"
          sx={{ marginY: "10px" }}
        >
          تعداد نفرات
        </Typography>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Button
            sx={{
              border: "1px solid #E6E7F2",
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
              border: "1px solid #E6E7F2 ",
            }}
          >
            {!tripItem || tripItem.count < 1 ? (
              <Typography
                variant="subtitle1"
                component="p"
                color="secondary.light"
              >
                چند نفرید؟
              </Typography>
            ) : (
              <Typography variant="subtitle1" component="p" color="secondary">
                {toPersianDigits(tripItem.count)} نفر
              </Typography>
            )}
          </Box>
          <Button
            sx={{
              border: "1px solid #E6E7F2",
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
      <Box sx={{ width: "100%" }}>
        {enterDate ? (
          <Button
            sx={{
              backgroundColor: "#4156D9",
              color: "white",
              borderRadius: "20px",
              paddingX: "20px",
              width: "100%",
              fontSize: "18px",
              "&:hover": { backgroundColor: "#4156D9" },
            }}
            onClick={handleSubmit}
          >
            ارسال درخواست رزرو رایگان
          </Button>
        ) : (
          <Button
            sx={{
              backgroundColor: "#4156D9",
              color: "white",
              borderRadius: "20px",
              paddingX: "20px",
              width: "100%",
              fontSize: "18px",
              "&:hover": { backgroundColor: "#4156D9" },
            }}
            onClick={handleClick}
          >
            انتخاب تاریخ سفر
          </Button>
        )}
      </Box>
      <Box>
        <Typography varian="body1" component="p" sx={{ color: "#969696" }}>
          همراه با گفتگوی آنلاین با میزبان قبل از پرداخت
        </Typography>
      </Box>
      {showResults && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box>
              {isLoading ? (
                <Loading width={160} height={10} variant="text" />
              ) : (
                <Typography variant="subtitle2" component="p" color="secondary">
                  {toPersianDigits(differenceInDays)} شب {data.price} تومانی
                </Typography>
              )}
            </Box>
            <Box>
              {isLoading ? (
                <Loading width={80} height={10} variant="text" />
              ) : (
                <Typography variant="subtitle1" component="p" color="secondary">
                  {toPersianDigits(sumResult)}
                </Typography>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <Box>
              <Typography
                variant="subtitle1"
                component="p"
                color="secondary"
                sx={{ fontWeight: "bold" }}
              >
                جمع کل
              </Typography>
            </Box>
            <Box>
              {isLoading ? (
                <Loading width={80} height={10} variant="text" />
              ) : (
                <Typography
                  variant="subtitle1"
                  component="p"
                  color="secondary"
                  sx={{ fontWeight: "bold" }}
                >
                  {toPersianDigits(sumResult)}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
