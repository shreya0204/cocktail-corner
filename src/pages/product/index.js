// All drinks of specific category will be shown here
import SingleCocktailCard from "@/components/SingleCocktailCard";
import { Box } from "@mui/material";
import * as api from '../../CocktailAPI/cocktail'

const Product = () => {
    return (
        <Box>
            <SingleCocktailCard />
        </Box>
    )
}

export default Product;


export async function getServerSideProps(context) {
    const categories = await api.getCategories()
    const categoriesData = await categories.json()
    return {
        props: { categoriesData }, // will be passed to the page component as props
    }
}