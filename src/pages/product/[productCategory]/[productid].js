import { Box } from "@mui/material";
import CocktailDetail from "../../../components/CocktailDetailsCard";
import * as api from '../../../CocktailAPI/cocktail'
import Navbar from "@/components/Navbar";
import Head from "next/head";


const ProductId = (props) => {

    const { drinkData } = props;
    const singleDrinkData = drinkData.drinks[0]

    return (
        <>
            <Head>
                <title>Cocktail Details</title>
            </Head>
            <Box>
                <CocktailDetail singleDrinkData={singleDrinkData} />
            </Box>
        </>
    );
};

export default ProductId;

export async function getServerSideProps(context) {
    const { productid } = context.query;
    const drinkData = await api.getDrinkDetails(productid)
    return {
        props: { drinkData },
    }
}