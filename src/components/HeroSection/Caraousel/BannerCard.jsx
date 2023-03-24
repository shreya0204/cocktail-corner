import Box from "@mui/material/Box";
import Link from "next/link";

const BannerCard = ({ id, image, category }) => {
    return (
        <>


            <Box
                minWidth={"100%"}
                width={"100%"}
                px={{ lg: 3, md: 3, sm: 0, xs: 0 }}
                pb={{ lg: 3, md: 3, sm: 1, xs: 1 }}
                sx={{ cursor: "pointer" }}
            >
                <Link href={`/product/${category}/${id}`} key={id}>
                    <img src={image} width={"100%"} alt={"banner"} style={{ aspectRatio: '12/8' }} />
                </Link>
            </Box>
        </>
    );
};
export default BannerCard;