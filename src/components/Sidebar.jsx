import { Box, Button, TextField, styled} from '@mui/material';
import React from 'react';

const StyledTextField = styled(TextField)(({theme}) => ({
    color: "#fff867",
    backgroundColor: "#5a5b6d",
    marginTop: 30,
    marginBottom: 30,
    border: "1px solid #fff867",
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.4)",
    borderRadius: 5
}));
const Sidebar = () => {
    return (
        <Box color="GundamRed" flex={2} p={2} display="Flex" flexDirection="column" justifyContent="center" alignItems="center">
            <h3>Submit your Mobile Suit</h3>
            <StyledTextField fullWidth label="Universe" id="universe" />
            <StyledTextField fullWidth label="Military Group" id="mobile" />
            <StyledTextField fullWidth label="Mobile suit" id="group" />
            <StyledTextField fullWidth label="Points" id="base points" />
            <Button variant="contained" style={{backgroundColor: "#fb2f38", alignSelf: "flex-end", width: 50, margin: 10 }}>Submit</Button>
        </Box>
    );
};

export default Sidebar;