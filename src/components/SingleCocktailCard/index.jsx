import { Box } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Padding } from "@mui/icons-material";


const SingleCocktailCard = (props) => {

    const { allDrinksData } = props;

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: 5,
            padding: { xs: 1, md: 10 }
        }}>
            {allDrinksData.map((drink) => (
                <Card
                    sx={{
                        width: 205,
                    }}
                    key={drink.idDrink}
                    onClick={() => console.log(drink.idDrink, drink.strAlcoholic)}
                >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={drink.strDrinkThumb}
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