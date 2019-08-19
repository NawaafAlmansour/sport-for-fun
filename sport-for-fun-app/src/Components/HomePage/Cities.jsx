import React from 'react';
import './Cities.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
      
  },
  media: {
    height: 140,
    padding: '56px',
  },
});

function Cities() {
  const classes = useStyles();
      // const useStyles = makeStyles(theme => ({
      //   card: {
      //     maxWidth: 345,
      //   },
      //   media: {
      //     height: 0,
      //     paddingTop: '56.25%'}
      //   }));

       


               return (
                 <div>
               <div>
                      <h2 className="text-center">
                        Where to play sport in Saudi Arabia?
                      </h2>
                      <p className="text-center">
                        Discover places help you keep active and enjoy sports. 
                      </p>
                      </div>
                  <div className="Cards">

                    <Card className={ `Card  ${classes.card}`}>
                          <div className="media">
                              <CardActionArea >
                                <CardMedia
                                  className={classes.media}
                                  image= "https://cdn3aleeli.daleeli.com/daleeli-CDN-backup/static/modules/uploads/cityguide/photos/english/225.jpg" 
                                  title="Jeddah"
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2" >
                                      Jeddah
                                  </Typography>
                                  
                                </CardContent>
                              </CardActionArea>
                          </div>
                        
                        </Card>

                        <Card className={ `Card  ${classes.card}`}>
                          <div className="media">
                              <CardActionArea >
                                <CardMedia
                                  className={classes.media}
                                  image="http://www.arabnews.com/sites/default/files/styles/n_670_395/public/main-image/2018/04/08/1151021-1227194039.jpg?itok=mroK_eja"
                                  title="Riyadh"
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2" >
                                      Riyadh
                                  </Typography>
                                  
                                </CardContent>
                              </CardActionArea>
                          </div>
                        
                        </Card>

                        <Card className={ `Card  ${classes.card}`}>
                          <div className="media">
                              <CardActionArea >
                                <CardMedia
                                  className={classes.media}
                                  image="https://www.hiamag.com/sites/default/files/styles/ph2_960_600/public/article/12/11/2017/6180221-802360264.jpg" 
                                  title="Abha"
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2" >
                                      Abha
                                  </Typography>
                                  
                                </CardContent>
                              </CardActionArea>
                          </div>
                        
                        </Card>
               </div>
               </div>
              );
            }


  export default Cities;
    