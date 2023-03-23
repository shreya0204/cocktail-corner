import Box from "@mui/material/Box";


const BannerCard = ({ key, image }) => {
    return (
        <>
            <Box
                minWidth={"100%"}
                width={"100%"}
                px={{ lg: 3, md: 3, sm: 0, xs: 0 }}
                pb={{ lg: 3, md: 3, sm: 1, xs: 1 }}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                    // if (entityType === 2) {
                    //     window.open(entityId, "blank");
                    // }
                }}
            >
                <img src={image} width={"100%"} alt={"banner"} style={{ aspectRatio: '12/8' }} />
            </Box>
        </>
    );
};
export default BannerCard;