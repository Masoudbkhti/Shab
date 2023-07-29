// "use client";
import React, { useState } from "react";
import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "@/redux/SearchSlice";
export default function SearchModalDynamic({ data}) {
  const value = useSelector((state) => state.SearchTerm);
  const dispatch = useDispatch();
  const suggestionList = data.filter((item) => {
    const city = item.name;
    if (
      value &&
      value.length >= 2 &&
      city.startsWith(value) &&
      city !== value
    ) {
      return item;
    }
  });
  return (
    <>
      {value.length >= 2 && (
        <>
          {suggestionList.length > 0 ? (
            suggestionList.map((item) => (
              <>
                <Typography variant="body1" color="initial">
                  شهرهای من
                </Typography>
                <Box
                  onClick={() => dispatch(setValue(item.name))}
                  key={item.name}
                >
                  {item.name}
                </Box>
                <Divider />
              </>
            ))
          ) : (
            <Typography variant="body1" color="initial">
              چیزی یافت نشد
            </Typography>
          )}
        </>
      )}
    </>
  );
}
