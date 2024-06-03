import {
AppBar,
Button,
MenuList,
MenuListItem,
Separator,
TextInput,
Toolbar,
Frame,
Window,
WindowContent,
WindowHeader,
Handle,
GroupBox,
ScrollView,
} from 'react95';
import styled from 'styled-components';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import Footer from './Footer';
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";


const Wrapper = styled.div`
 padding: 5rem;
 background: ${({ theme }) => theme.material};
 #default-buttons button {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
  #cutout {
        background: ${({ theme }) => theme.canvas};
        padding: 1rem;
        width: 300px;
      }
    `;


export function Home(){
    return(<div style={{}}>
    <Navbar style={{zIndex:'9999'}}></Navbar>
    <wrapper >
    <div >
    
    </div>
    <div id="Top" display="inline-flex" style = {{zIndex:'-1'}}>
        <div>
            <div style={{display: 'flex', margin: '0em', marginLeft: '200px', marginRight: '200px', marginTop:'40px'}}>
            <Frame
                style={{
                    
                    display: 'flex',
                    padding: '1rem',
                    fontSize: '90px'
                                    
                }}>
            Jake Williams
            </Frame>
            
        </div>
        <Frame style={{ marginTop: '4rem',
        marginLeft: '150px',
        marginRight: '150px',
                padding: '1rem',
                
                fontSize: '40px'
            }}>[BIO] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolona aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit. Nisl tincidunt eget nullam non. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Vel elit scelerisque mauris pellentesque. Ut placerat or
            
        </Frame>

        
        
        <Frame style = {{marginLeft: '200px',marginRight: '200px',  marginTop:'40px',padding: '1rem', fontSize: '90px'}}>Professional Experience</Frame>
        <div style = {{marginLeft: '150px', marginRight: '150px',}}>
        <Window className='window' style = {{marginTop:'2rem'}}>
            <WindowHeader style={{padding:'1.2rem'}} className='window-title'>
            <span style = {{fontSize:'48px'}}>Software Development Intern @ Paycom</span>
            </WindowHeader>
            <Toolbar> <Frame variant='well' style={{margin:'.1rem', padding:'.4rem'}}><b>May 2024 - August 2024</b></Frame></Toolbar>
            <WindowContent style = {{fontSize:'32px'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</WindowContent>
        </Window>

        <Window className='window' style = {{marginTop:'2rem'}}>
            <WindowHeader style={{padding:'1.2rem'}} className='window-title'>
            <span style = {{fontSize:'48px'}}>Software Development Intern @ Paycom</span>
            
            </WindowHeader>
            <Toolbar> <Frame variant='well' style={{margin:'.1rem', padding:'.4rem'}}><b>May 2023 - August 2023</b></Frame></Toolbar>
            <WindowContent style = {{fontSize:'32px'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</WindowContent>
        </Window>

        <Frame style = {{marginLeft: '50px',marginRight: '50px',  marginTop:'40px',padding: '1rem', fontSize: '90px'}}>Leadership Experience</Frame>
        
        <Window className='window' style = {{marginTop:'2rem'}}>
            <WindowHeader style={{padding:'1.2rem'}} className='window-title'>
            <span style = {{fontSize:'48px'}}>Association of Computer Machinery President @ Oklahoma State University</span>
            
            </WindowHeader>
            <Toolbar> <Frame variant='well' style={{margin:'.1rem', padding:'.4rem'}}><b>May 2023 - August 2023</b></Frame></Toolbar>
            <WindowContent style = {{fontSize:'32px'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</WindowContent>
        </Window>

        <Frame style = {{marginLeft: '50px',marginRight: '50px',  marginTop:'40px',padding: '1rem', fontSize: '90px'}}>Projects</Frame>

        <Window className='window' style = {{marginTop:'2rem'}}>
            <WindowHeader style={{padding:'1.2rem'}} className='window-title'>
            <span style = {{fontSize:'48px'}}>Association of Computer Machinery President @ Oklahoma State University</span>
            
            </WindowHeader>
            <Toolbar> <Frame variant='well' style={{margin:'.1rem', padding:'.4rem'}}><b>May 2023 - August 2023</b></Frame></Toolbar>
            <WindowContent style = {{fontSize:'32px'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</WindowContent>
        </Window>

    <Frame style = {{marginLeft: '50px',marginRight: '50px',  marginTop:'40px', marginBottom: '20px',padding: '1rem', fontSize: '90px'}}>Awards</Frame>
    <div>
        <Frame style={{ padding: '1rem'}}>
        <Window style={{margin:'30px'}}> 
        <WindowContent><ScrollView style={{ padding: '1rem', background: 'white'}}><GroupBox variant='flat'><b>Academic Excellence Scholarship</b></GroupBox></ScrollView></WindowContent>
        </Window>
        <Window style={{margin:'30px'}}> 
            <WindowContent><ScrollView style={{ padding: '1rem', background: 'white'}}><GroupBox variant='flat'><b>2nd Place in 3 Minute Thesis Research Presentation</b></GroupBox></ScrollView></WindowContent>
        </Window>
        <Window style={{margin:'30px'}}> 
            <WindowContent><ScrollView style={{ padding: '1rem', background: 'white'}}><GroupBox variant='flat'><b>Outstanding Undergraduate Computer Science Researcher</b></GroupBox></ScrollView></WindowContent>
        </Window>
        <Window style={{margin:'30px'}}> 
            <WindowContent><ScrollView style={{ padding: '1rem', background: 'white'}}><GroupBox variant='flat'><b>Sue Suggs Reel Scholarship</b></GroupBox></ScrollView></WindowContent>
        </Window>
        <Window style={{margin:'30px'}}> 
            <WindowContent><ScrollView style={{ padding: '1rem', background: 'white'}}><GroupBox variant='flat'><b>Deans Honor Roll</b></GroupBox></ScrollView></WindowContent>
        </Window>
        <Window style={{margin:'30px'}}> 
            <WindowContent><ScrollView style={{ padding: '1rem', background: 'white'}}><GroupBox variant='flat'><b>Tom Carson Scholarship</b></GroupBox></ScrollView></WindowContent>
        </Window>
        <Window style={{margin:'30px'}}> 
            <WindowContent><ScrollView style={{ padding: '1rem', background: 'white'}}><GroupBox variant='flat'><b>General Honors Award</b></GroupBox></ScrollView></WindowContent>
        </Window>
        
        </Frame>   

        <Frame style = {{marginLeft: '50px',marginRight: '50px',  marginTop:'40px',padding: '1rem', fontSize: '90px'}}>Contact Me</Frame>
        <div>
            <MenuList>
            <MenuListItem>✉️ Academic Email: Jake.williams12@okstate.edu</MenuListItem>
            <MenuListItem>✉️ Personal Email: jakewill51503@gmail.com</MenuListItem>
            <MenuListItem
            as='a'
            // TODO: Come up with a more elegant way to allow props when `as` is used
            
            // @ts-ignore
            href='https://expensive.toys'
            target='_blank'
            >
            👔 LinkedIn
            </MenuListItem>
            
        </MenuList>
      </div>
    </div>
        </div>
        </div>
        
    </div>
    </wrapper>
    <Footer/>
    </div>
    )

}
