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
            height: '70vh',
            flexWrap: 'wrap',
            // backgroundColor: 'pink',
        }}>
            {/* Left side */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.3rem',
                alignItems: 'center',
                // backgroundColor: 'green',
            }}>
                <Typography color="#146C94" fontSize={'3rem'}>THE COCKTAIL</Typography>
                <Typography color="#060F13" fontSize={'3rem'}>CORNER</Typography>
            </Box>
            {/* right side image */}
            <Box sx={{
                display: 'flex',
                // backgroundColor: 'red',
                width: '50%',
                height: '60%',
                padding: '1rem',
            }}>
                <Image
                    layout="responsive"
                    src='/hero.png'
                    alt='Verified'
                    width={800}
                    height={600}
                />
            </Box>

        </Box>
    );
}

export default HomePage;