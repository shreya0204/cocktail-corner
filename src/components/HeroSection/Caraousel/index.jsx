import { Box, Typography } from "@mui/material";
import BannerCard from "./BannerCard";
import { Fab } from "@mui/material";
import { useRef } from "react";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Link from 'next/link';

const Caraousel = (props) => {

    const { randomDrinks } = props;

    const refCard = useRef(null);
    const scrollDiv = (scrollOffset, ref) => {
        ref.current.scrollLeft += scrollOffset;
    };

    const nameMapping = {
        'Alcoholic': 'Alcoholic',
        'Non alcoholic': 'Non_Alcoholic',
        'Optional alcohol ': 'Optional_Alcohol'
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: { md: 'row', xs: 'column' },
            padding: '1rem',
        }}>
            <Box position={"relative"} width={{ md: '50vw', xs: '85vw' }}>
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    ref={refCard}
                    width={"100%"}
                    sx={{
                        scrollBehavior: "smooth",
                        overflowX: "hidden",
                    }}
                >
                    {randomDrinks.map((each) => (
                        <BannerCard
                            key={each.drinks[0].idDrink}
                            id={each.drinks[0].idDrink}
                            category={nameMapping[each.drinks[0].strAlcoholic]}
                            image={each.drinks[0].strDrinkThumb}
                        />
                    ))}
                </Box>
                <Fab
                    size="small"
                    aria-label="add"
                    sx={{ position: "absolute", left: -20, top: "45%" }}
                    onClick={() => scrollDiv(-1140, refCard)}
                >
                    <ArrowBackIosSharpIcon />
                </Fab>
                <Fab
                    size="small"
                    aria-label="add"
                    sx={{ position: "absolute", right: -20, top: "45%" }}
                    onClick={() => scrollDiv(1140, refCard)}
                >
                    <ArrowForwardIosSharpIcon />
                </Fab>
            </Box>

            <Box width={{ md: '50vw', xs: '100vw' }} padding={5}>
                <Typography color="#50151A" fontSize={{ xs: '30px', sm: '48px' }} fontWeight={'bold'}>THE COCKTAIL BLISS</Typography>
                <Typography color="#906468" fontSize={{ xs: '10px', sm: '16px' }} lineHeight={{ xs: '1.2rem', sm: '2rem' }} mt={4} fontWeight={'light'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum</Typography>
            </Box>
        </Box >
    )
}

export default Caraousel;