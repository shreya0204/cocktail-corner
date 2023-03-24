// All drinks of specific category will be shown here
import Navbar from "@/components/Navbar";
import SingleCocktailCard from "@/components/SingleCocktailCard";
import { Box, Typography } from "@mui/material";
import * as api from '../../CocktailAPI/cocktail'
import Head from "next/head";
import ProductNotFound from "@/components/ErrorComponents/ProductNotFound";

const Product = (props) => {

    const allDrinksData = props.allDrinks.drinks;
    const { search } = props;

    return (
        <>
            <Head>
                <title>All Cocktails</title>
            </Head>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
            }}>
                {allDrinksData ? <>
                    <Typography variant="h4" sx={{ textAlign: "center", mt: 5, mb: 5, color: '#3F000F', fontWeight: 'bold' }}>See All {search} Drinks Here</Typography>
                    <SingleCocktailCard allDrinksData={allDrinksData} /> </> : <ProductNotFound search={search} />}
            </Box>
        </>
    )
}

export default Product;


export async function getServerSideProps(context) {
    console.log("baljdhcfhd", context.query.search)
    const search = context.query.search;
    let allDrinks;
    if (search == undefined || search == "" || search == null) allDrinks = await api.getAllDrinks()
    else allDrinks = await api.getDrinksBySearch(search)
    return {
        props: { search, allDrinks },
    }
}