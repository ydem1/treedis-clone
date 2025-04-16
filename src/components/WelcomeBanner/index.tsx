import Image from "next/image";
import logoImage from "@/assets/images/logo.png";
import { Typography, Box } from "@mui/material";

const LOGO_ALT = "Treedis clone logo";

export const WelcomeBanner = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
    }}
  >
    <Box display="flex">
      <Image src={logoImage} alt={LOGO_ALT} width={35} height={50} />
    </Box>

    <Typography variant="body1">
      Take &nbsp;
      <Typography
        component="span"
        sx={{
          backgroundColor: "primary.main",
          color: "common.white",
          paddingInline: "4px",
          borderRadius: "10px",
        }}
      >
        reality
      </Typography>
      <br />
      to the next
      <br />
      level
    </Typography>
  </Box>
);
