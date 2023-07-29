// "use client"
import React from "react";
import { Typography, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "@/redux/SearchSlice"; 
import Link from "next/link";
export default function SearchModalStatic({ data }) {
  const value = useSelector((state) => state.SearchTerm);
  const dispatch = useDispatch();
  return (
    <>
      {value.length < 2 && (
        <>
          <Typography variant="body1" color="initial">
            شهر های پرطرفدار
          </Typography>
          {data.map((item, i) => {
            const lastChild = 4;
            return (
              <>
                <Typography
                  variant="body2"
                  color="secondary"
                  onClick={() => dispatch(setValue(item.name))}
                  key={item.name}
                >
                  <Link href={`/${item.name}`}>{item.name}</Link>
                </Typography>
                {i !== lastChild && <Divider />}
              </>
            );
          })}
        </>
      )}
    </>
  );
}
