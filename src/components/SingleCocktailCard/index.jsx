import { Box } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { alcoholicDrinks } from "../data"


const SingleCocktailCard = () => {

    const drinks = alcoholicDrinks.drinks;

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: 10
        }}>
            {drinks.map((drink) => (
                <Card
                    sx={{
                        width: 345,
                    }}
                    key={drink.idDrink}
                    onClick={() => console.log(drink.idDrink)}
                >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="220"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {drink.strDrink}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>

    );
}

export default SingleCocktailCard;