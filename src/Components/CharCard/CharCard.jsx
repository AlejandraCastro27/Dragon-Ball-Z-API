import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './CharCard.css';

const CharCard = (props) => {
  return (
    <div className="card-container">
      <Card className="char-card">
        <CardActionArea>
          <div className="energy-aura"></div>
          <div className="card-inner">
            <CardMedia
              component="img"
              image={props.img}
              alt="Character"
              className="char-card-media"
            />
            <CardContent className="char-card-content">
              <Typography gutterBottom variant="h5" component="div" className="char-card-title">
                {props.nombre}
              </Typography>
              <Typography variant="body2" className="char-card-species">
                {props.especie}
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
};

CharCard.defaultProps = {
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GAcNf2A8wsr7rHBPhxfvi36V6Aq2kswNUg&s",
  nombre: "_____",
  especie: "____"
};

export default CharCard;
