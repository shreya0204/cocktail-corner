import { Box } from "@mui/material"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import * as api from '../CocktailAPI/cocktail'
import HomePage from "@/components/Home"

export default function Home(props) {
  console.log(props)
  const { categories, randomDrinks } = props
  console.log(categories, randomDrinks)
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
    }}>
      <Navbar />
      <HomePage />
      <HeroSection {...props} />
    </Box>
  )
}


export async function getServerSideProps(context) {

  const categories = await api.getCategories()
  const randomDrinks = await api.getRandomDrinks(4)

  return {
    props: { categories, randomDrinks },
  }
}