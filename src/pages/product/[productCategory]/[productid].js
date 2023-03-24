import { Box } from "@mui/material";
import CocktailDetail from "../../../components/CocktailDetailsCard";
import * as api from '../../../CocktailAPI/cocktail'
import Navbar from "@/components/Navbar";
import Head from "next/head";
import ProductNotFound from "@/components/ErrorComponents/ProductNotFound";


const ProductId = (props) => {

    const { drinkData, productid } = props;
    let singleDrinkData;
    if (!drinkData.drinks) {
        singleDrinkData = null
    }
    else {
        singleDrinkData = drinkData.drinks[0]
    }
    return (
        <>
            <Head>
                <title>Cocktail Details</title>
            </Head>
            <Box>
                {singleDrinkData ? <CocktailDetail singleDrinkData={singleDrinkData} /> : <ProductNotFound name={'id'} search={productid}/>}
            </Box>
        </>
    );
};

export default ProductId;

export async function getServerSideProps(context) {
    const { productid } = context.query;
    const drinkData = await api.getDrinkDetails(productid)
    return {
        props: { drinkData, productid },
    }
}