import React from 'react'
import MenuHeaderProvider from './MenuHeaderProvider';
import { Box, Typography } from '@mui/material';
import styles from "./header.module.css"
import SearchHeader from './SearchHeader';
import { getLocalData } from "@/json/lib/localdata";
export default  async function Header() {
  const data = await getLocalData();
  return (
    <Box
      className={styles.header}
      height={410}
      pt={10}
      px={2}
      sx={{
        borderBottomRightRadius: "25px",
        borderBottomLeftRadius: "25px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MenuHeaderProvider data={data}>
      </MenuHeaderProvider>
      <Typography variant="h4" color="primary">
        مقصدتان کجاست؟
      </Typography>
      <Typography variant="subtitle1" color="primary" pt={1} mb={3}>
        اجاره آنلاین ویلا و سوئیت در شمال و سراسر ایران
      </Typography>
      <SearchHeader data={data} />
    </Box>
  );
}
