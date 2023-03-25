import { Box, Button, Typography } from "@mui/material";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const ProductNotFound = (props) => {
    const { search, name = 'name' } = props;

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '60vh',
        }}>
            <SentimentDissatisfiedIcon sx={{ fontSize: 100 }} />
            <Typography variant="h4" color="text.primary" sx={{ margin: '2rem' }}>
                Oops! No drink found by {name} {search}
            </Typography>
            <Button variant="contained" href="/" sx={{
                backgroundColor: '#50151A',
                color: 'white'
            }}>
                Go Back
            </Button>
        </Box>
    );
}
export default ProductNotFound;