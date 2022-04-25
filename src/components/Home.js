import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import items from "./items";

const Home = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
        p: { xs: 1, sm: 5 },
        backgroundColor: "papayawhip",
      }}
    >
      {Object.keys(items).map((key, index) => {
        const { name, url, author, price } = items[key];
        return (
          <Grid key={index} item>
            <Card
              sx={{
                width: { xs: 120, sm: 280 },
                display: "flex",
                flexDirection: "column",
                p: { xs: 0.5, sm: 2 },
                m: { xs: 0.5, sm: 2 },
                alignItems: "center",
                height: { xs: 240, sm: 480 },
              }}
              elevation={9}
            >
              <CardMedia
                component="img"
                src={url}
                sx={{
                  objectFit: "contain",
                  height: { xs: 160, sm: 280 },
                  p: { xs: 0.5, sm: 2 },
                }}
              />
              <CardContent
                sx={{
                  p: { xs: 0.5, sm: 2 },
                  width: "80%",
                  height: { xs: 40, sm: 80 },
                }}
              >
                <Typography
                  noWrap
                  fontWeight="bold"
                  variant="h6"
                  color="primary"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  {name}
                </Typography>
                <Typography
                  fontWeight="bold"
                  noWrap
                  color="secondary"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  {author}
                </Typography>
                <Typography
                  variant="body2"
                  color="green"
                  textAlign="end"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  {price}
                </Typography>

                {/* Responsive */}

                <Typography
                  noWrap
                  fontWeight="bold"
                  fontSize={12}
                  color="primary"
                  sx={{ display: { xs: "block", sm: "none" } }}
                >
                  {name}
                </Typography>
                <Typography
                  fontWeight="bold"
                  fontSize={10}
                  color="secondary"
                  noWrap
                  sx={{ display: { xs: "block", sm: "none" } }}
                >
                  {author}
                </Typography>
                <Typography
                  fontSize={8}
                  color="green"
                  textAlign="end"
                  sx={{ display: { xs: "block", sm: "none" } }}
                >
                  {price}
                </Typography>
              </CardContent>
              <Button
                color="primary"
                variant="contained"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <Typography variant="caption">Add to Cart</Typography>
              </Button>
              <Button
                color="primary"
                sx={{ display: { xs: "block", sm: "none" } }}
              >
                <Typography fontSize={8}>Add to Cart</Typography>
              </Button>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Home;
