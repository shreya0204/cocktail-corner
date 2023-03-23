import { Box } from "@mui/material";
import CocktailDetail from "../../../components/CocktailDetailsCard";
import * as api from '../../../CocktailAPI/cocktail'

const ProductId = (props) => {
    console.log(props)

    return (
        <Box>
            <CocktailDetail />
        </Box>
    );
};

export default ProductId;

export async function getServerSideProps(context) {
    const { productid } = context.query;
    const drinksData = await api.getDrinkDetails(productid)
    return {
        props: { drinksData },
    }
}