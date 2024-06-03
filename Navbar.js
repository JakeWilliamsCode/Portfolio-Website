import {
    AppBar,
    Button,
    MenuList,
    MenuListItem,
    Separator,
    TextInput,
    Toolbar
    } from 'react95';
    import styled from 'styled-components';
    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
import './Navbar.css'

export function Navbar(){
    const [open, setOpen] = useState(false);

    return(
        <>
        
        <AppBar className={Navbar} position='initial'>
        <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
         <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold', width:'150px' }}
            
          >
           
            {"Start"}               
          </Button>
          {open && (
            <MenuList
              style={{
                position: 'absolute',              left: '0',              top: '100%'
              }}
              onClick={() => setOpen(false)}
            >
            <Link to="/About">
              <MenuListItem>
              
                <span role='img' aria-label='👨‍💻'>
                  👨‍💻
                </span>
                Experience
              </MenuListItem>
              </Link>
              <Link to="/Contact">
              <MenuListItem>
                <span role='img' aria-label='📁'>
                  📁
                </span>
                Contact me
              </MenuListItem>
              </Link>
              <Separator />
              <Link to="/">
              <MenuListItem>
                <span role='img' aria-label='🔙'>
                  🔙
                </span>
                Home
              </MenuListItem>
              </Link>
            </MenuList>
          )}
        </div>

       
      </Toolbar>
    </AppBar>    
    
    </>
    )
}
