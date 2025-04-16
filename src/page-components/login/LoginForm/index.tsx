import { Box, Typography } from "@mui/material";

export const LoginForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Typography variant="h4">
        Welcome! <br />
        Login to continue
      </Typography>
    </Box>
  );
};
