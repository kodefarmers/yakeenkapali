import { makeStyles } from "tss-react/mui";

export const projectDetailStyles = makeStyles()((theme) => {
  return {
    projectContainer: {
      margin: theme.spacing(10, 0, 0, 0),
    },
  };
});
export const projectStyles = makeStyles()((theme) => {
  return {
    project: {
      padding: theme.spacing(15, 0, 0, 0),
    },
  };
});
