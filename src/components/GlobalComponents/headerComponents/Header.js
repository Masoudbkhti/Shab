import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./header.module.css";
import SearchHeader from "./SearchHeader";
export default function Header({ data }) {
  return (
    <Box
      className={styles.header}
      height={450}
      pt={10}
      px={2}
      sx={{
        borderBottomRightRadius: "25px",
        borderBottomLeftRadius: "25px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "flex-start", sm: "center" },
      }}
    >
      <Typography
        variant="h1"
        color="primary"
        component="h1"
        sx={{ marginTop: "48px" }}
      >
        مقصدتان کجاست؟
      </Typography>
      <Typography
        variant="subtitle2"
        color="primary"
        component="h6"
        pt={2}
        mb={4}
      >
        اجاره آنلاین ویلا و سوئیت در شمال و سراسر ایران
      </Typography>
      <SearchHeader data={data} />
      <Box
        mt={6}
        sx={{
          borderTop: "1px solid #757575",
          width: "100%",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="subtitle2" color="primary" component="p">
          اقامتگاهی برای اجاره دارید؟ رایگان میزبان شوید
        </Typography>
      </Box>
    </Box>
  );
}
