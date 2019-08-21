import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
  {
    url: 'http://www.arabnews.com/sites/default/files/styles/n_670_395/public/main-image/2018/04/08/1151021-1227194039.jpg?itok=mroK_eja',
    title: 'Riyadh',
    width: '33.33%',
    
  },
  {
    url: 'https://cdn3aleeli.daleeli.com/daleeli-CDN-backup/static/modules/uploads/cityguide/photos/english/225.jpg',
    title: 'Jeddah',
    width: '33.33%',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Buraidah.jpg',
    title: 'Qassim',
    width: '33.33%',
  },
  {
    url: 'https://blog.arabpx.com/wp-content/uploads/2018/12/2%D8%AA%D8%A8%D9%88%D9%83-%D8%A7%D9%84%D8%AF%D9%8A%D8%B3%D9%87-%D8%AF%D8%A7%D8%AE%D9%84-%D9%83%D9%83.jpg',
    title: 'Hail',
    width: '33.33%',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8TRQkweOB92HZcWjXoNZiG7xSs2SjhV_6--0pRDB9GIhFOVPa',
    title: 'Khobar',
    width: '33.33%',
  },
  {
    url: 'https://www.hiamag.com/sites/default/files/styles/ph2_960_600/public/article/12/11/2017/6180221-802360264.jpg',
    title: 'Abha',
    width: '33.33%',
    
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}