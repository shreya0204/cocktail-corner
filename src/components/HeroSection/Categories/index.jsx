import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import Link from 'next/link'

const Categories = (props) => {

    const { categories } = props;
    const allcategories = categories.drinks.map((category) => category.strAlcoholic)
    const urlCategories = {
        0: 'Alcoholic',
        1: 'Non_Alcoholic',
        2: 'Optional_Alcohol'
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: { xs: 'center', lg: 'space-between' },
            flexWrap: 'wrap',
            gap: '2rem',
            backgroundColor: '#F5F2EB',
            padding: '3rem',
            marginTop: '4rem',
        }}>
            <Typography fontSize={'32px'} color="#3F000F" fontWeight={'bold'}>CATEGORIES</Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                gap: '2rem',
            }}>
                {allcategories.map((category, i) => (
                    <Link href={`/product/${urlCategories[i]}`} key={category + Math.random().toString()}>
                        <Card
                            sx={{ maxWidth: 345, minWidth: 250, }}
                            value={category}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={`/alcoholic${i}.png`}
                                    alt="cocktail picture"
                                    onClick={(e) => console.log(category, i)}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" color={'#50151A'}>
                                        {category.toUpperCase()}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                ))}
            </Box>
        </Box>

    );
}

export default Categories;


