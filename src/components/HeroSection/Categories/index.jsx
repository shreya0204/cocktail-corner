import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';


const Categories = (props) => {

    const { categories } = props;
    const allcategories = categories.drinks.map((category) => category.strAlcoholic)


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100%',
            flexWrap: 'wrap',
            gap: '2rem',
            backgroundColor: 'pink',
            padding: '2rem',
        }}>
            <Typography variant="h3" color="#146C94">Categories</Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                gap: '2rem',
            }}>
                {allcategories.map((category) => (
                    <Card
                        sx={{ maxWidth: 345, minWidth: 250, }}
                        key={category + Math.random().toString()}
                        value={category}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="240"
                                image={`/alcoholic${1}.png`}
                                alt="cocktail picture"
                                onClick={(e) => console.log(category)}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {category.toUpperCase()}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Box>

    );
}

export default Categories;


