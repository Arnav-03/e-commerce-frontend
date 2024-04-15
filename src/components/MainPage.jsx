import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios';
import Navigation from './Navigation';
function MainPage() {
   return (
    <div>
      <Navigation/>
      <img src="https://i.ibb.co/kxKJBwF/1.png" alt="1" border="0"/>
    </div>
  )
}

export default MainPage
