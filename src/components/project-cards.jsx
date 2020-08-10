import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const cardStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 250,
  },
  content: {
    height: 100,
    paddingBottom: 100,
  },
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ProjectCards(props) {
  const classes = cardStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className={classes.root} onClick={handleClickOpen}>
        <CardActionArea>
          <CardMedia className={classes.media} image={props.image} />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.projectTitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <h3>{props.projectTitle}</h3>
        </DialogTitle>
        <DialogContent dividers>
          <img src={props.image} alt="Project Image" className="dialog-image" />
          <Typography gutterBottom>
            <h4>{props.projectType}</h4>
          </Typography>
          <Typography gutterBottom>
            <p>{props.projectPeriod}</p>
          </Typography>
          <Typography gutterBottom>{props.projectDescription}</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus href={props.projectUrl} color="primary">
            See Project
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
