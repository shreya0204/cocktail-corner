import { Box } from "@mui/material";
import BannerCard from "./BannerCard";
import { Fab } from "@mui/material";
import { useRef } from "react";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

const Caraousel = (props) => {

    const { randomDrinks } = props;
    console.log("All drinks", randomDrinks[0].drinks[0].strDrinkThumb);

    const refCard = useRef(null);
    const scrollDiv = (scrollOffset, ref) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: { md: 'row', xs: 'column' }
        }}>
            <Box position={"relative"} width={{ md: '50vw', xs: '100vw' }}>
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
                            image={each.drinks[0].strDrinkThumb}
                        />
                    ))}
                </Box>
            </Box>

            <Box width={{ md: '50vw', xs: '100vw' }} bgcolor={'red'}>
                hi
            </Box>

        </Box>
    )
}

export default Caraousel;