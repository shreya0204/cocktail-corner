import { Box, Typography } from "@mui/material";
import Image from "next/image";

const HomePage = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: '1rem',
            height: '80vh',
            flexWrap: 'wrap',
            backgroundColor: 'red',
        }}>
            {/* Left side */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.3rem',
                alignItems: 'center',
            }}>
                <Typography color="#146C94" variant="h1">THE COCKTAIL</Typography>
                <Typography color="#060F13" variant="h1">CORNER</Typography>
            </Box>
            {/* right side image */}
            <Box sx={{
                display: { xs: 'none', md: 'block' },
            }}>
                <Image
                    src='/hero.png'
                    alt='Verified'
                    width={600}
                    height={400}
                />
            </Box>

        </Box>
    );
}

export default HomePage;