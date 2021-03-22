import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

const PropertyText: React.FC<{
  label: string;
  info?: string;
  templatingLines?: number;
}> = ({ label, info, templatingLines = 1 }) => {
  const classes = usePropertyStyles();
  return (
    <div className={classes.container}>
      <Typography variant="caption" className={classes.header}>
        {label}
      </Typography>
      <Typography variant="body1" className={classes.value}>
        {info
          ? info
          : [...Array(templatingLines)].map((_: any, i: number) => (
              <Skeleton key={`templ-${i}`} animation={"wave"} />
            ))}
      </Typography>
    </div>
  );
};
export default PropertyText;

const usePropertyStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    columnCount: 1,
    minWidth: "30%",
    marginBottom: 16,
    marginRight: 16,
  },
  header: {
    color: "#8C8EB1",
    fontWeight: 800,
    marginBottom: 6,
  },
  value: { color: "#2B2D48" },
}));
