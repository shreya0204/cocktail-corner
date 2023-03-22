import { Box } from "@mui/material"
import Navbar from "@/components/Navbar"
// import HeroSection from "@/components/HeroSection"


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
      {/* <HeroSection /> */}
    </Box>
  )
}
