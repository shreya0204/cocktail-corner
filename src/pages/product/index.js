// All drinks of specific category will be shown here
import Navbar from "@/components/Navbar";
import SingleCocktailCard from "@/components/SingleCocktailCard";
import { Box, Typography } from "@mui/material";
import * as api from '../../CocktailAPI/cocktail'

const Product = (props) => {

    const allDrinksData = props.allDrinks.drinks;

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
        }}>
            <Navbar />
            <Typography variant="h4" sx={{ textAlign: "center", mt: 5, mb: 5, color: '#3F000F', fontWeight: 'bold' }}>See All Our Drinks Here</Typography>
            <SingleCocktailCard allDrinksData={allDrinksData} />
        </Box>
    )
}

export default Product;


export async function getServerSideProps(context) {
    const allDrinks = await api.getAllDrinks()
    // const categoriesData = await categories.json()
    return {
        props: { allDrinks }, // will be passed to the page component as props
    }
}