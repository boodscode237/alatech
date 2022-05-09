import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import {Menu, MenuItem} from "@mui/material";


const pages = ['Processors', 'Machines', 'Ram', 'Motherboards', 'Storage', 'Cards']
export default function SectionsBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ flexGrow: 1, display:{xs: 'block', md: 'flex-grow',} }}>
        <Link className='logo-container' to='/processors'>
            <Button color="inherit">PROCESSORS</Button>
        </Link>
        <Link className='logo-container' to='/machines'>
            <Button color="inherit">MACHINES</Button>
        </Link>
        <Link className='logo-container' to='/ram'>
            <Button color="inherit">RAMS</Button>
        </Link>
        <Link className='logo-container' to='/motherboards'>
            <Button color="inherit">MOTHERBOARDS</Button>
        </Link>
        <Link className='logo-container' to='/cards'>
            <Button color="inherit">CARDS</Button>
        </Link>
        <Link className='logo-container' to='/storage'>
            <Button color="inherit">STORAGE</Button>
        </Link>
                        </Toolbar>
            </AppBar>
        </Box>
    );
}
