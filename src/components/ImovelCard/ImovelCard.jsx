import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ImovelCard.css'

function ImovelCard(props) {

  let formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  const formatedPrice = formatter.format(props.imovel.price)

  const navigate = useNavigate()

  return (
    <div className="card">
      <Card
        onClick={() => navigate(`/imoveis/${props.imovel.id}`)}
      >
        <CardMedia 
          component='img'
          image={props.imovel.image}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
          >
            {props.imovel.address}
          </Typography>
          <Typography
            variant='body2'
          >
            Proprietário: {props.imovel.owner}
          </Typography>
          <Typography
            variant='body1'
          >
            {formatedPrice}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ImovelCard;