import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Navbar: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static" classes={{ root: classes.root }}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {onBack ? (
            <IconButton
              //edge="start"
              onClick={onBack}
              style={{ color: "white" }}
            >
              <ArrowBackIosIcon />
            </IconButton>
          ) : (
            <div style={{ width: 48, height: 48 }}></div>
          )}

          <Typography
            className={classes.title}
            align="center"
            variant="h6"
            noWrap
          >
            PHONE CATALOG
          </Typography>
          <div style={{ width: 48, height: 48 }}></div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    title: {
      width: "100%",
    },
    root: { boxShadow: "none" },
  })
);
