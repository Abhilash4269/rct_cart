import * as React from 'react';
import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MultiActionAreaCard from './Card'
import './App.css'

const pages = ['Home', 'About', 'Shop'];



const ResponsiveAppBar = (props) => {


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    //   const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [score,setScore] = useState(0);

    const handleClick =(e)=>{
       console.log(e.target.textContent) 
       if(e.target.textContent==='Add to cart'){
            e.target.textContent = 'Remove from cart';
            setScore(score+1) 
       }
       else{
           e.target.textContent= 'Add to cart';
           setScore(score-1)
       }
    }

    return (
        <>
            <AppBar position="sticky" id='bar'>
                <Container maxWidth="xl" >
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex', color: 'black' } }}

                        >
                            Start Bootstrap
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', color: 'black' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (

                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>

                                ))}
                            </Menu>

                        </Box>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', color: 'black' } }}
                        >
                            Start Bootstrap
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (

                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    {page}
                                </Button>

                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>

                            <Button className='btn' startIcon={<ShoppingCartIcon />}>Cart &nbsp;<p className='cart'>{score}</p></Button>

                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>

            <div className='err'>
                <h1 style={{ fontSize: '60px', marginBottom: '0' }}>Shop in style</h1>
                <p style={{ color: 'grey' }}>whith this show homepage template</p>

            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginInline: '150px' }}>

                <MultiActionAreaCard items='Fancy Product' sale={false} price='$40.00 - $80.00' popular={false} nam='1' cart={true} click={(e)=>handleClick(e)}/>
                <MultiActionAreaCard items='Special Item' sale={true} price='$18.00' popular={true} dprice='$20.00' nam='2' cart={true}  click={(e)=>handleClick(e)}/>
                <MultiActionAreaCard items='Sale Item' sale={true} price='$25.00' popular={false} dprice='$50.00' nam='3' cart={true}  click={(e)=>handleClick(e)}/>
                <MultiActionAreaCard items='Popular Item' sale={false} price='$40.00' popular={true} nam='4' cart={true}  click={(e)=>handleClick(e)}/>
                <MultiActionAreaCard items='Sale Item' sale={true} price='$25.00' popular={false} dprice='$50.00' nam='5' cart={true}  click={(e)=>handleClick(e)}/>
                <MultiActionAreaCard items='Fancy Product' sale={false} price='$120.00 - $280.00' popular={false} nam='6' cart={true}  click={(e)=>handleClick(e)}/>
                <MultiActionAreaCard items='Special Item' sale={true} price='$18.00' dprice='$20.00' popular={true} nam='7' cart={true}  click={(e)=>handleClick(e)}/>
                <MultiActionAreaCard items='Popular Item' sale={false} price='$40.00' popular={true} nam='8' cart={true}  click={(e)=>handleClick(e)}/>

            </div>
        </>

    );
};
export default ResponsiveAppBar;