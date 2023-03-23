import { Box } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from "next/link";


const SingleCocktailCard = (props) => {

    const { productCategory, allDrinksData } = props;

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            gap: 5,
            padding: { xs: 1, md: 10 }
        }}>
            {allDrinksData.map((drink) => (
                <Link href={`/product/${productCategory}/${drink.idDrink}`} key={drink.idDrink}>
                    <Card
                        sx={{
                            width: 205,
                        }}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={drink.strDrinkThumb}
                                alt="drink picture"
                            />
                            <CardContent>
                                <Typography gutterBottom fontSize={'15px'} component="div" color={'#50151A'}>
                                    {drink.strDrink}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            ))}
        </Box>

    );
}

export default SingleCocktailCard;