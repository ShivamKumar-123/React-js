import React, { useState, useEffect } from 'react'

import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import { Footer, Header} from './components'



function App() {
  
  const [loading, setLoading] = useState(true) // kyuki hum data other server se le rahe jo kisi or system par hai to request me thoda time lag sakta hai isliye ye state use karenge
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .catch(() => {
        dispatch(logout())
      })
      .finally(() => setLoading(false))
  }, [])
  


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          Todo
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ): null
  
}

export default App
