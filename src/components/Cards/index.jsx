import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Tours({tours, removeTour}) {

    const [readMore, setReadMore] = useState(true);


  return (
    <div>
        <Typography variant='h4'>Tours</Typography>
            {tours.map((tour) => {
                return (
                    <Card sx={{ width: 600, marginBottom:'30px'}} key={tour.id}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={tour.image}
                            alt={tour.image}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5">
                                {tour.name}
                            </Typography>
                            <Typography gutterBottom variant="h6">
                                $ {tour.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {readMore ? `${tour.info.substring(0, 300)}...` : tour.info}
                                <Button onClick={() => setReadMore(!readMore)}>
                                    {readMore ?'read more' : 'show less'}
                                </Button>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => removeTour(tour.id)}>
                                 Delete
                            </Button>
                        </CardActions>
                    </Card>
                )
            })}
    </div>
  );
}