import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function ComboCard({
  image,
  type,
  price,
  title,
  itemList,
  message,
}) {
  return (
    <Card style={{ boxShadow: "none" }}>
      <CardContent
        sx={{
          display: "grid",
          gap: "20px",
          placeItems: "center",
          padding: "0",
          paddingBottom: "0 !important",
        }}
      >
        <Box display="flex">
          <Image
            src={image}
            alt={title}
            width={700}
            height={700}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
        <Box>
          <Grid
            display="grid"
            textAlign="center"
            borderBottom="2px solid"
            padding="0 0 25px"
          >
            <Typography
              component="p"
              fontWeight="400"
              fontSize="14px"
              textTransform="uppercase"
              color="#9A9A9A"
            >
              {type}
            </Typography>
            <Typography component="h3" variant="h4" fontWeight="600">
              {price}
            </Typography>
            <Typography component="h4" variant="h5" fontWeight="400">
              {title}
            </Typography>
          </Grid>
          <Box
            component="ul"
            display="grid"
            gap="5px"
            margin="0"
            padding="25px 0 0"
            textAlign="center"
          >
            {itemList.map(({ id, label }) => {
              return (
                <Typography key={id} color="#9A9A9A">
                  {label}
                </Typography>
              );
            })}
          </Box>
        </Box>
        <Link href={message}>
          <Button variant="contained" size="large">
            Solicitar
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
