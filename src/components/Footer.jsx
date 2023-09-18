import React from 'react';
import {AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", fontSize:"2rem", alignItems:"center"}}>
        Created By Bhanu js  <a  
         style={{color: "white"}}
         href='https://github.com/Bhanujs18'><AiFillGithub /></a> 
    </div>
  )
}

export default Footer