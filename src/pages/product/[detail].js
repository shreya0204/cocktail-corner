import { Box } from "@mui/material";
import CocktailDetail from "../../components/CocktailDetailsCard";
import * as api from '../../CocktailAPI/cocktail'

const ProductDetail = (props) => {
    console.log(props)

    return (
        <Box>
            <CocktailDetail />
        </Box>
    );
};

export default ProductDetail;

export async function getServerSideProps(context) {
    const { detail } = context.query;
    const drinksData = await api.getDrinkDetails(detail)
    return {
        props: { drinksData },
    }
}