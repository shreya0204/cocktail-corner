import Caraousel from "./Caraousel";
import Categories from "./Categories";
import { Box } from '@mui/material'

const HeroSection = (props) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '6rem',
        }}>
            <Caraousel randomDrinks={props.randomDrinks} />
            <Categories categories={props.categories} />
        </Box>
    )
}

export default HeroSection;