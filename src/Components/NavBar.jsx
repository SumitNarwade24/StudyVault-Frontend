import React from 'react'
import { useEffect, useState } from "react";
import AfterLoginNavBar from './AfterLoginNavBar';
import BeforeLoginNavBar from './BeforeLoginNavBar';
const NavBar = ({isLoggedIn,user}) => {
 
  return (
    <div>
        {isLoggedIn?<AfterLoginNavBar user={user}/>:<BeforeLoginNavBar/>}
    </div>
  )
}

export default NavBar