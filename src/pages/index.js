import { Box } from "@mui/material"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import * as api from '../CocktailAPI/cocktail'
import HomePage from "@/components/Home"
import Head from "next/head"

export default function Home(props) {
  const { categories, randomDrinks } = props

  return (
    <>
      <Head>
        <title>Cocktail</title>
      </Head>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
      }}>
        <HomePage />
        <HeroSection {...props} />
      </Box>
    </>
  )
}


export async function getServerSideProps(context) {

  const categories = await api.getCategories()
  const randomDrinks = await api.getRandomDrinks(4)

  return {
    props: { categories, randomDrinks },
  }
}