import { Container, Box, Grid } from "@mui/material";
export default function TopBanner() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          marginTop: "50px",
          gap: "10px",
          bgcolor: "green",
        }}
      >
        <Box
          sx={{
            borderRadius: "10px",
            overflow: "hidden",
            bgcolor: "red",
            height: "100%",
          }}
        >
          <img
            src="https://s3gw.at.shab.cloud/production/banners/TC9oLBJbdPSPwlsXE2GCfojnATeadoInWREliWcr.png"
            alt="تضمین قیمت"
          />
        </Box>
        <Box>
          <Grid lg={1} sx={{ display: "flex", gap: "0px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "0px",
                bgcolor: "blue",
                height: "100%",
              }}
            >
              <img
                src="https://s3gw.at.shab.cloud/production/banners/6wuOKTYwf2EW62MBZoWCC29JUlyju4rHdlbXhoSB.png"
                alt="اقامت بلند مدت"
              />
              <img
                src="https://s3gw.at.shab.cloud/production/banners/BLwDKLIwX9sQS3KF4AKAmVxmxhvDN1yamDv5QVCj.png"
                alt="اقامتگاه رزرو آنی"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "0px",
                bgcolor: "yellow",
              }}
            >
              <Box
              sx={{
                width:"100%",
                height:"100%"
              }}
              >
                <img
                  // src="https://www.shab.ir/images/home/summer.png?w=1024&q=75"
                  src="https://s3gw.at.shab.cloud/production/banners/drzARrMsa6DCa1lTW5auLKSuErVLqwvXDAdc1wqf.png"
                  alt="رایگان میزبان شوید"
                />
              </Box>
              <img
                src="https://s3gw.at.shab.cloud/production/banners/drzARrMsa6DCa1lTW5auLKSuErVLqwvXDAdc1wqf.png"
                alt="رایگان میزبان شوید"
              />
            </Box>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
