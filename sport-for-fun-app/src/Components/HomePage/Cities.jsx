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

function Cities(props) {
  console.log(props);
  
  const classes = useStyles();
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

                 

                      
                        
                         {props.city.default.cities.map((cityx => 
                        <Card className={ `Card  ${classes.card}`}>
                          <div className="media">
                              <CardActionArea >
                                <CardMedia
                                  className={classes.media}
                                  key={cityx.id} 
                                  image={cityx.img}
                                  title={cityx.name}
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2" >
                                  {cityx.Name}                                  </Typography>
                                  
                                </CardContent>
                              </CardActionArea>
                          </div>
                        
                        </Card>
                        ))}
               </div>
               </div>
              );
            }


  export default Cities;
    
