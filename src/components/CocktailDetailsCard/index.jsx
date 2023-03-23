import { Box, Grid } from "@mui/material";

const CocktailDetails = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box>
                        
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CocktailDetails;