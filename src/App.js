import React from 'react'
import Nav from './Components/Nav';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Utilities/firebasekey';
import Sidebar from './Components/Sidebar';
import SignIn from './Components/SignIn';
import Main from './Components/Main';

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white dark:bg-slate-800'>
      <Nav />
      <section className='flex flex-col justify-center h-screen bg-white dark:bg-slate-800'>
        {user ? <Sidebar /> : <></>}
        {user ? <Main /> : <SignIn />}
      </section>
    </div>
  )
}

export default App

