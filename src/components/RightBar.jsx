import { Box, Button, InputLabel, MenuItem, Select, TextField, styled } from '@mui/material';
import React, { useState, useEffect } from 'react';
import mobileSuitsData from '../mobile_suits.json';

const StyledSelect = styled(Select)(({theme}) => ({
        color: "#fff867",
        backgroundColor: "#5a5b6d",
        margin: 30,
        border: "1px solid #fff867",
        boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.4)"
}));
const RightBar = () => {
    const [universe, setUniverse] = useState('');
    const [groups, setGroups] = useState([]);
    const [group, setGroup] = useState('');
    const [mobiles, setMobiles] = useState([]);
    const [mobile, setMobile] = useState('');
    const [selectedMobiles, setSelectedMobiles] = useState([]);
    const [universes, setUniverses] = useState([]); 
  
    function onlyUnique(value, index, array) {
        return array.indexOf(value) === index;
      }

    useEffect(() => {
        // to pobiera dane universe z mobile_suits
        const uniqueUniverses = mobileSuitsData["Mobile suits"].reduce((acc, mobileSuit) => {
          if (!acc.includes(mobileSuit.universe)) {
            acc.push(mobileSuit.universe);
          }
          return acc;
        }, []);
        setUniverse('');
        setGroups([]);
        setMobiles([]);
        setUniverses(uniqueUniverses);
      }, []);
  
    useEffect(() => {
      // to mi pozwala na wybór grupy na podstawie uniwersum
      if (universe) {
        const filteredGroups = mobileSuitsData["Mobile suits"].filter((mobileSuit) => mobileSuit.universe === universe).map((mobileSuit) => mobileSuit.group).filter(onlyUnique);
        setGroups(filteredGroups);
      }
    }, [universe]);
  
    useEffect(() => {
      // a to pozwala wybrać mobile suit na podstawie grupy
      if (group) {
        const filteredMobiles = mobileSuitsData["Mobile suits"].filter((mobileSuit) => mobileSuit.group === group).map((mobileSuit) => mobileSuit.mobile).filter(onlyUnique);
        setMobiles(filteredMobiles);
      }
    }, [group]);
  
    const handleUniverseChange = (event) => {
      setUniverse(event.target.value);
      // po zmianie uniwersum powinna się resetować możliwość wyboru innych grup
      setGroup('');
      setMobile('');
      setGroups([]);
      setMobiles([]);
    };
  
    const handleGroupChange = (event) => {
      setGroup(event.target.value);
      // a to resetuje wybór mobilu po wybraniu inngo uniwersum
      setMobile('');
    };
  
    const handleMobileChange = (event) => {
      setMobile(event.target.value);
    };
  
    const handleAddMobile = () => {
        if (mobile) {
            const selectedMobile = mobileSuitsData["Mobile suits"].find((mobileSuit) => mobileSuit.mobile === mobile);
            const newMobile = { ...selectedMobile, id: Date.now() }; // tutaj będzie dodawane też unikalne id dolisty żeby można było usuwać pojędyncze mobile
            setSelectedMobiles([...selectedMobiles, newMobile]);
          }
    };
  
    const handleSubmit = () => {
      console.log(`Selected mobile suits: ${selectedMobiles.map((mobile) => mobile.mobile)}`);
      console.log(`Summary points: ${selectedMobiles.reduce((acc, mobile) => acc + parseInt(mobile["base points"]), 0)}`);
    };

    const handleRemoveMobile = (mobileToRemove) => { // to będzie odpowiedzialne za usuwanie mobili
        const updatedMobiles = selectedMobiles.filter((mobile) => mobile !== mobileToRemove);
        setSelectedMobiles(updatedMobiles);
    }
  
    return (
      <Box bgcolor="#2c52b3" flex={8} p={2} display="flex" flexDirection= "column" >
        <h2>Choose Your Mobile Suits</h2>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Universe"
          value={universe}
          onChange={handleUniverseChange}
        >
          <MenuItem  value="" disabled>Select Universe</MenuItem>
          {universes.map((uni) => (
            <MenuItem key={uni} value={uni}>{uni}</MenuItem>
          ))}
        </StyledSelect>
            
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Group"
          value={group}
          onChange={handleGroupChange}
        >
          <MenuItem value="" disabled>Select Military Group</MenuItem>
          {groups.map((grp) => (
            <MenuItem key={grp} value={grp}>{grp}</MenuItem>
          ))}
        </StyledSelect>
  
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Mobile suit"
          value={mobile}
          onChange={handleMobileChange}
        >
          <MenuItem value="" disabled>Select Mobile Suit</MenuItem>
          {mobiles.map((mob) => (
            <MenuItem key={mob} value={mob}>{mob}</MenuItem>
          ))}
        </StyledSelect>
  
        <Button 
        variant="contained" 
        onClick={handleAddMobile}
        sx={{
            bgcolor: "#fb2f38",
            alignSelf: "flex-end",
            width: 50,
            mt: 2 }}>
            Add
        </Button>
  
        <Box sx={{
                    mt: 10,
                    color: '#fff867',
                    bgcolor: "#5a5b6d",
                    border: "2px solid #fff867",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding: "20px 0",
                    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.4)",
                }}>
            <div>
                <h3>Selected mobile suits:</h3>
                <ul>
                    {selectedMobiles.map((mobile) => (
                    <li key={mobile.id}>
                        {mobile.mobile} ({mobile["base points"]} points)
                        <Button variant="contained" style={{backgroundColor: "#fb2f38", alignSelf: "flex-end", width: 50, margin: 10 }} onClick={() => handleRemoveMobile(mobile)}>Remove</Button>
                        </li>
                    ))}
                </ul>
            </div>          
          <h2>Summary points: {selectedMobiles.reduce((acc, mobile) => acc + parseInt(mobile["base points"]), 0)}/1000</h2>
        </Box>
      </Box>
    );
};

//w teorii powinno to działaś w praktyce nie mogę wybrać innych grup ani innych uniwersum, niż uniwersal century i fereration, 
//zakładam że problem będzie też jak dodam inne mobile dla fereracji

export default RightBar;