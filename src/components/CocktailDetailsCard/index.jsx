import { Box, Typography, Chip, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Image from 'next/image';
import { Divider } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const CocktailDetails = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection: { md: 'row', xs: 'column' },
            padding: '1rem',
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
                        src='/hero.png'
                        alt='Verified'
                        width={600}
                        height={400}
                    />
                </Box>
            </Box>
            <Box width={{ md: '50vw', xs: '100vw' }} padding={5}>
                <Chip label="Alcoholic" />
                <Typography color="#50151A" fontSize={{ xs: '30px', sm: '40px' }} >Name of the product</Typography>
                <Box>
                    <Chip label="Alcoholic" /><Chip label="Alcoholic" /><Chip label="Alcoholic" />
                </Box>
                <Divider sx={{ width: '100%', mt: 2, mb: 2 }} />
                <Box>
                    <Typography color="#000" fontSize={{ xs: '10px', sm: '16px' }}>INGREDIENTS</Typography>
                    <Box>
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '0', minWidth: '0px', color: '#83553B' }}
                            aria-label="contacts"
                        >
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon >
                                        <ArrowRightIcon color="#83553B" />
                                    </ListItemIcon>
                                    <ListItemText primary="Chelsea Otakan" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
                <Divider sx={{ width: '100%', mt: 2, mb: 2 }} />
                <Typography color="#000" fontSize={{ xs: '10px', sm: '16px' }}>MEASURES</Typography>
                <Box>
                    <Chip label="Alcoholic" /><Chip label="Alcoholic" /><Chip label="Alcoholic" />
                </Box>
                <Divider sx={{ width: '100%', mt: 2, mb: 2 }} />
                <Box>
                    <Typography color="#000" fontSize={{ xs: '10px', sm: '16px' }}>INSTRUCTION</Typography>
                    <Typography color="#000" fontSize={{ xs: '10px', sm: '14px' }} lineHeight={{ xs: '1.2rem', sm: '2rem' }} mt={4} fontWeight={'light'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CocktailDetails;