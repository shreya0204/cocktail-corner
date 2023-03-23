// All drinks of specific category will be shown here
import Navbar from "@/components/Navbar";
import SingleCocktailCard from "@/components/SingleCocktailCard";
import { Box, Typography } from "@mui/material";
import * as api from '../../CocktailAPI/cocktail'
import Head from "next/head";

const Product = (props) => {

    const allDrinksData = props.allDrinks.drinks;

    return (
        <>
            <Head>
                <title>All Cocktails</title>
            </Head>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
            }}>
                <Typography variant="h4" sx={{ textAlign: "center", mt: 5, mb: 5, color: '#3F000F', fontWeight: 'bold' }}>See All Our Drinks Here</Typography>
                {allDrinksData ? <SingleCocktailCard allDrinksData={allDrinksData} /> : <Box>No drinks found</Box>}
            </Box>
        </>
    )
}

export default Product;


export async function getServerSideProps(context) {
    const search = ""
    let allDrinks;
    if (search == "" || search == undefined) {
        allDrinks = await api.getAllDrinks()
    }
    else {
        allDrinks = await api.getDrinksBySearch(search)
    }
    return {
        props: { allDrinks }, // will be passed to the page component as props
    }
}