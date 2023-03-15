import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';



export default function CustomCard(props) {

    return (
        <Card variant='outlined' className='custom-card-layout' key={props.project.id}>
            <React.Fragment>
                <CardContent>
                    <CardMedia
                        component="img"
                        height="194"
                        image={props.project.image}
                        alt="Paella dish"
                    />
                    <Typography variant="h5" component="div">
                        {props.project.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.project.desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => props.handleOnClick(props.project)}>Learn More</Button>
                </CardActions>
            </React.Fragment>
        </Card>
    );

}