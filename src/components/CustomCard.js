import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function CustomCard(props) {

    const navigate = useNavigate();
    const handleOnClick = (project) => navigate(`/project-page/${project.id}`, { state: { project: project } });


    return (
        <Card variant='outlined' key={props.project.id}>
            <React.Fragment>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {props.project.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.project.desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => handleOnClick(props.project)}>Learn More</Button>
                </CardActions>
            </React.Fragment>
        </Card>
    );

}