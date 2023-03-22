import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';


const Categories = () => {

    const categories = ['Alcoholic', 'Non-Alcoholic', 'Optional alcohol']

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100%',
            flexWrap: 'wrap',
            gap: '2rem',
        }}>
            {categories.map((category) => (
                <Card
                    sx={{ maxWidth: 345, minWidth: 250, }}
                    key={category.strAlcoholic + Math.random().toString()}
                    value={category}

                >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                            onClick={(e) => console.log(category)}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {category}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>

    );
}

export default Categories;


