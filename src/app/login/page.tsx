import { WelcomeBanner } from "@/components/WelcomeBanner";
import { Box, Container } from "@mui/material";

export default function Login() {
  return (
    <Container sx={{ height: "100%" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        <WelcomeBanner />
        <WelcomeBanner />
      </Box>
    </Container>
  );
}
