import Caraousel from "./Caraousel";
import Categories from "./Categories";
import { Box } from '@mui/material'

const HeroSection = (props) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
        }}>
            <Caraousel drinks={props.randomDrinks} />
            <Categories categories={props.categories} />
        </Box>
    )
}

export default HeroSection;