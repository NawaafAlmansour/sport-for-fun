import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './IconLabelButtons.scss';


const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: "50px",
    padding: '6px 50px',

  },

}));

export default function IconLabelButtons(props) {
  const classes = useStyles();

  return (

    <div className="Buttons">
      <Button variant="contained" color="primary" className={classes.button}>
      <a href={`#/Information/${props.id}/`}>
        info on the center +
      </a>
        <addCircleOutline className={classes.rightIcon} />
      </Button>
    </div>
  );
}
