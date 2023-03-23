import { Box, Typography } from "@mui/material";
import Image from "next/image";

const HomePage = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'url(/hero.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '670px',
            backdropFilter: 'blur(70px)',
            marginTop: '2rem',
        }}>
            <Box sx={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Typography color="#EDE6D7" fontSize={{ xs: '40px', sm: '64px' }} fontWeight={'bold'}>THE COCKTAIL CORNER</Typography>
            </Box>
        </Box >
    );
}

export default HomePage;