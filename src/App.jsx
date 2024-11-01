import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProvider from './hooks/useContext'
import { UserProfile } from './hooks/useContext'

function App() {

  return (
    <UserProvider>
      <UserProfile/>
    </UserProvider>
  )
}

export default App
