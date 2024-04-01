import { Button, styled, Typography} from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

export default function App() {
  return (
    <div>
        {<Typography
        variant="h1"
        color="GundamBlue"
        align="center"
        >Gundam 
        </Typography>}
        <Button variant="contained" sx={{backgroundColor:"GundamRed"}}>Contained</Button>
    </div>
  );
}
