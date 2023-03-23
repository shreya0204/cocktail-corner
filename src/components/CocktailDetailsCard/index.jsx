import { Box, Typography, Chip, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Image from 'next/image';
import { Divider } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const CocktailDetails = (props) => {
    const { singleDrinkData } = props;
    console.log(singleDrinkData)

    // filtering out the ingredients and measures
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = singleDrinkData[`strIngredient${i}`];
        if (ingredient) {
            ingredients.push(ingredient);
        }
    }

    const measures = [];
    for (let i = 1; i <= 15; i++) {
        const measure = singleDrinkData[`strMeasure${i}`];
        if (measure) {
            measures.push(measure);
        }
    }

    const tags = singleDrinkData.strTags ? singleDrinkData.strTags.split(',') : [];

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection: { md: 'row', xs: 'column' },
            padding: '1rem',
            marginTop: '10px'
        }}>
            <Box position={"relative"} width={{ md: '50vw', xs: '100vw' }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    overflowX: 'hidden',
                }}>
                    <Image
                        src={singleDrinkData.strDrinkThumb}
                        alt='Verified'
                        width={600}
                        height={600}
                    />
                </Box>
            </Box>
            <Box width={{ md: '50vw', xs: '100vw' }} padding={5}>
                <Chip label={singleDrinkData.strAlcoholic} sx={{
                    borderRadius: '0px',
                    padding: '10px'
                }} />
                <Typography color="#50151A" mt={1} fontSize={{ xs: '30px', sm: '40px' }} >{singleDrinkData.strDrink}</Typography>
                <Box mt={2} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: 1
                }}>
                    {
                        tags.map((each) => (
                            <Chip key={each + Math.random().toString()} variant="outlined" label={each} />
                        ))
                    }
                </Box>
                <Divider sx={{ width: '100%', mt: 3, mb: 2 }} />
                <Box>
                    <Typography color="#000" fontSize={{ xs: '10px', sm: '16px' }}>INGREDIENTS</Typography>
                    <Box>
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '0', minWidth: '0px', color: '#83553B' }}
                            aria-label="contacts"
                        >
                            {ingredients.map((each) => (
                                <ListItem disablePadding key={each + Math.random().toString()}>
                                    <ListItemButton>
                                        <ListItemIcon >
                                            <ArrowRightIcon color="#83553B" />
                                        </ListItemIcon>
                                        <ListItemText primary={each} />
                                    </ListItemButton>
                                </ListItem>
                            ))}

                        </List>
                    </Box>
                </Box>
                <Divider sx={{ width: '100%', mt: 2, mb: 2 }} />
                <Typography color="#000" fontSize={{ xs: '10px', sm: '16px' }}>MEASURES</Typography>
                <Box mt={2} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: 1,
                    flexWrap: 'wrap'

                }}>
                    {measures.map((each) => (
                        <Chip key={each + Math.random().toString()} label={each} sx={{
                            borderRadius: '0px',
                            padding: '10px'
                        }} />
                    ))}

                </Box>
                <Divider sx={{ width: '100%', mt: 2, mb: 2 }} />
                <Box>
                    <Typography color="#000" fontSize={{ xs: '10px', sm: '16px' }} >INSTRUCTION</Typography>
                    <Typography color="#757272" fontSize={{ xs: '10px', sm: '14px' }} lineHeight={{ xs: '1.2rem', sm: '2rem' }} mt={4} fontWeight={'light'}>{singleDrinkData.strInstructions}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CocktailDetails;