import React from 'react'
import { Box ,Typography } from '@mui/material';
import styles from "./header.module.css"
import SearchHeader from './SearchHeader';
import { getLocalData } from "@/json/lib/localdata";
import Menu from './Menu';
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
        alignItems: { xs: "flex-start", sm: "center" },
      }}
    >
      <Menu data={data} />
      <Typography variant="h4" color="primary">
        مقصدتان کجاست؟
      </Typography>
      <Typography variant="subtitle1" color="primary" pt={1} mb={3}>
        اجاره آنلاین ویلا و سوئیت در شمال و سراسر ایران
      </Typography>
      <SearchHeader data={data} />
      <Box mt={6} sx={{ borderTop: "1px solid #757575", width: "100%" , height : "80px", display :"flex" ,alignItems:"center" ,justifyContent : 'center'}}>
        <Typography variant="body2" color="primary"> 
          اقامتگاهی برای اجاره دارید؟ رایگان میزبان شوید
        </Typography>
      </Box>
    </Box>
  );
}
