import { Star } from "@mui/icons-material";
import { Avatar, Box, Rating, Typography } from "@mui/material";

export default function TestimonialCard({
  author,
  role,
  message,
  stars,
  imageUrl,
}) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: "10px",
        marginTop: "100px",
        p: 3,
        border: 2,
        borderColor: "priamry.main",
      }}
    >
      <Avatar
        src={imageUrl}
        variant="square"
        sx={{ width: 200, height: 200, mx: "auto", marginTop: "-100px", mb: 2 }}
      />
      <Box sx={{ display: "grid", gap: 0 }}>
        <Typography
          component="h4"
          variant="h5"
          fontWeight="600"
          lineHeight="100%"
        >
          {author}
        </Typography>
        <Typography
          sx={{ color: "primary" }}
          fontWeight="600"
          variant="caption"
        >
          {role}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        color="#9A9A9A"
        fontSize="18px"
        fontWeight="600"
        fontStyle="italic"
      >
        {message}
      </Typography>
      <Box sx={{ display: "flex", justifySelf: "flex-end" }}>
        <Rating
          name="read-only"
          icon={<Star fontSize="inherit" color="primary" />}
          value={stars}
          readOnly
        />
      </Box>
    </Box>
  );
}
