import { Box, Typography } from "@mui/material";
import * as api from "../../../CocktailAPI/cocktail";
import SingleCocktailCard from "@/components/SingleCocktailCard";
import Head from "next/head";

const ProductCategory = (props) => {

    const { productCategory, drinksData } = props;
    const allDrinksData = drinksData.drinks;

    const nameMapping = {
        'Alcoholic': 'Alcoholic',
        'Non_Alcoholic': 'Non Alcoholic',
        'Optional_Alcohol': 'Optional Alcoholic'
    }

    return (
        <>
            <Head>
                <title>All {nameMapping[productCategory]} Cocktails</title>
            </Head>
            <Box>
                <Typography variant="h4" sx={{ textAlign: "center", mt: 5, mb: 5, color: '#3F000F', fontWeight: 'bold' }}>See All {nameMapping[productCategory]} Drinks Here</Typography>
                <SingleCocktailCard productCategory={productCategory} allDrinksData={allDrinksData} />
            </Box>
        </>
    );
};

export default ProductCategory;

export async function getServerSideProps(context) {
    const { productCategory } = context.query;
    const drinksData = await api.getDrinksByFilter(productCategory)
    return {
        props: { productCategory, drinksData },
    }
}