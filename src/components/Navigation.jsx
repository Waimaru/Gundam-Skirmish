import { AppBar, Avatar, Box, styled, Toolbar, Typography, Button, Dialog, DialogContent, DialogContentText, TextField, DialogActions, Icon, SvgIcon} from '@mui/material';
import React, { useState} from 'react';
import Login from '@mui/icons-material/Login';
import GundamLogo from '../material/GundamLogo.png'
import Gundam from '../material/Gundam.png'
import { theme } from '../theme'

const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between",
    padding: "0, 10px",
    border: "3px solid #fff867",
});
const StyledBox = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "space-evenly",
}))

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
        <AppBar color="GundamBlue" position='sticky'>
            
            <StyledToolbar >
                <Box> 
                    <img src={GundamLogo} width={240} height={70} alt='Gundam Skirmish'/> 
                </Box>
                <StyledBox >
                    <Button color="GundamYellow" href='https://drive.google.com/file/d/1DzOz47p-DcZs3UaeVUM6AaNzVDqpegXa/view?usp=sharing' target='_blank'>Rules</Button>
                    <Button color="GundamYellow" href='https://discord.gg/69UwTRK5' target='_blank'>Discord</Button>
                    <Button color="GundamYellow" onClick={handleClickOpen}>Log in</Button>
                    <Avatar sx={{ width: 30, height: 30 }} src=''/>
                </StyledBox>
            </StyledToolbar>
        </AppBar>
         <Dialog open={open} onClose={handleClose}>
         <DialogContent>
           <DialogContentText>
             Log in or register to access exclusive content and features.
           </DialogContentText>
           <TextField
             autoFocus
             margin="dense"
             id="email"
             label="Email Address"
             type="email"
             fullWidth
             variant="standard"
           />
           <TextField
             margin="dense"
             id="password"
             label="Password"
             type="password"
             fullWidth
             variant="standard"
           />
         </DialogContent>
         <DialogActions>
           <Button onClick={handleClose}>Cancel</Button>
           <Button onClick={handleClose}>Log in</Button>
           <Button onClick={handleClose}>Register</Button>
         </DialogActions>
       </Dialog>
       </>
    );
};

export default Navigation;
