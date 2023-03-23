import CocktailDetails from "@/components/CocktailDetailsCard";
import { Box } from "@mui/material";
import * as api from "../../../CocktailAPI/cocktail";

const ProductCategory = (props) => {
    console.log(props)

    return (
        <Box>
            <CocktailDetails />
        </Box>
    );
};

export default ProductCategory;

// export async function getServerSideProps(context) {
//     const { productCategory } = context.query;
//     const drinksData = await api.getDrinksByFilter(productCategory)
//     return {
//         props: { drinksData },
//     }
// }