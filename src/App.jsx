import React from 'react';
import { ReactDOM } from 'react';
import { Box, Button, Menu, Stack } from '@mui/material';
import RightBar from './components/RightBar';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';


function App() {
  return (
    <Box>
      <Navigation></Navigation>
      <Stack direction='row' spacing={2} justifyContent='space-between' >
        <RightBar />
        <Sidebar />
      </Stack>
    </Box>
  )
}

export default App
