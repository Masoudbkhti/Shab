import { Container, Box, Grid } from "@mui/material";
export default function TopBanner() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          marginTop: "50px",
        }}
      >
        <Box
          sx={{
            borderRadius: "10px",
            overflow: "hidden",
            bgcolor: "red",
          }}
        >
          <img
            src="https://s3gw.at.shab.cloud/production/banners/TC9oLBJbdPSPwlsXE2GCfojnATeadoInWREliWcr.png"
            alt="تضمین قیمت"
          />
        </Box>
        <Box>
          <Grid lg={1} sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "5px",
              }}
            >
              <img src="https://s3gw.at.shab.cloud/production/banners/BLwDKLIwX9sQS3KF4AKAmVxmxhvDN1yamDv5QVCj.png" />
              <img src="https://s3gw.at.shab.cloud/production/banners/BLwDKLIwX9sQS3KF4AKAmVxmxhvDN1yamDv5QVCj.png" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <img src="https://s3gw.at.shab.cloud/production/banners/BLwDKLIwX9sQS3KF4AKAmVxmxhvDN1yamDv5QVCj.png" />
              <img src="https://s3gw.at.shab.cloud/production/banners/BLwDKLIwX9sQS3KF4AKAmVxmxhvDN1yamDv5QVCj.png" />
            </Box>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
