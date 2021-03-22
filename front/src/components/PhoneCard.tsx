import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Phone } from "types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import Divider from "@material-ui/core/Divider";

const PhoneCard: React.FC<{
  phone: Phone;
  isLoading?: boolean;
  marginBottom: number;
  onClick: () => void;
}> = ({ phone, marginBottom, onClick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ marginBottom }}>
      <CardActionArea
        style={{
          padding: 12,
          display: "flex",
          justifyContent: "flex-start",
        }}
        onClick={onClick}
      >
        <CardMedia
          className={classes.cover}
          image={phone.imageURL}
          title="Live from space album cover"
        />

        <CardContent className={classes.content}>
          <Typography variant="subtitle1" className={classes.bluegrey}>
            {phone.manufacturer} | {phone.name}
          </Typography>
          <Divider style={{ marginTop: 4, marginBottom: 16 }} />
          <Box display="flex" alignItems="flex-start" overflow="break-word">
            <Typography variant="body1" className={classes.header}>
              Color:
            </Typography>
            <Typography variant="body1" className={classes.data}>
              {phone?.color ? phone.color : <Skeleton animation={"wave"} />}
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start">
            <Typography variant="body1" className={classes.header}>
              Screen:
            </Typography>
            <Typography variant="body1" className={classes.data}>
              {phone?.screen ? phone.screen : <Skeleton animation={"wave"} />}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-end"
            paddingTop="6px"
          >
            <Typography variant="h3" className={classes.data}>
              {phone?.price ? (
                `$${phone.price}`
              ) : (
                <Skeleton animation={"wave"} />
              )}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default PhoneCard;

export const PhoneCardLoadingTemplate = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{ marginBottom: 12 }}>
      <div
        style={{
          padding: 12,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <div>
          <Skeleton
            variant="rect"
            width={130}
            height={130}
            style={{ borderRadius: 12 }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 12,
            width: "100%",
            height: "100%",
          }}
        >
          <Skeleton animation="wave" height={24} />
          <Divider style={{ marginTop: 4, marginBottom: 16 }} />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </div>
      </div>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    borderRadius: 12,
    width: "100%",
    cursor: "pointer",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: 130,
    flexGrow: 1,
    padding: 8,
  },
  cover: {
    alignSelf: "center",
    borderRadius: 12,
    width: 130,
    height: 130,
  },

  options: {
    width: 30,
    height: 30,
    padding: 0,
    position: "absolute",
    top: 12,
    right: 12,
    color: "red",
    //marginRight: 10,
  },
  bluegrey: {
    color: "#3C3E5F",
  },
  header: {
    color: "#8C8EB1",
    fontWeight: 800,
  },
  data: { color: "#2B2D48", fontWeight: 800, marginLeft: 4 },
}));
