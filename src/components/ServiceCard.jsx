import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

export default function ServiceCard({ title, description, Icon }) {
  return (
    <Card
      sx={{
        border: "1px solid #737373",
        backgroundColor: "#292929",
        padding: { xs: "30px 10px", md: "50px 20px" },
      }}
    >
      <CardContent
        sx={{
          display: "grid",
          gap: "20px",
          placeItems: "center",
          height: "100%",
        }}
      >
        <Box
          display="flex"
          width={50}
          height={50}
          bgcolor="action.main"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <Icon style={{ fontSize: "50px", color: "white" }} />
        </Box>
        <Grid display="grid" gap="10px" textAlign="center">
          <Typography component="h3" variant="h5" fontWeight="600" color="#fff">
            {title}
          </Typography>
          <Typography
            component="p"
            fontSize="18px"
            fontWeight="400"
            lineHeight="1.5"
            color="#D8D8D8"
          >
            {description}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}
