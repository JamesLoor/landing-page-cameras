import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
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
  divider,
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
        <Box display="flex" alignItems="center" overflow="hidden">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            objectFit="contain"
            style={{
              display: "block",
              width: "100%",
              height: "300px",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box>
          <Grid
            display="grid"
            textAlign="center"
            borderBottom={divider ? "2px solid" : "none"}
            padding={divider ? "0 0 25px" : "0"}
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
            padding={divider ? "25px 0 0" : "0"}
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
