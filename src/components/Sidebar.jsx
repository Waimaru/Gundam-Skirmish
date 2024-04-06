import { Box, Button, TextField, styled} from '@mui/material';
import React, { useState } from 'react';

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
    const [formData, setFormData] = useState({
        universe: '',
        mobile: '',
        group: '',
        basePoints: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleSubmit = () => {
        fetch('http://localhost:8000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then (response => {
            if (!response.ok) {
                throw new Error('error');
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('dota not saved', error);
        });
    };

    return (
        <Box color="GundamRed" flex={2} p={2} display="Flex" flexDirection="column" justifyContent="center" alignItems="center">
            <h3>Submit your Mobile Suit</h3>
            <StyledTextField fullWidth label="Universe" id="universe" />
            <StyledTextField fullWidth label="Military Group" id="mobile" />
            <StyledTextField fullWidth label="Mobile suit" id="group" />
            <StyledTextField fullWidth label="Points" id="base points" />
            <Button variant="contained" style={{backgroundColor: "#fb2f38", alignSelf: "flex-end", width: 50, margin: 10 }} onClick={handleSubmit}>Submit</Button>
        </Box>
    );
};

export default Sidebar;