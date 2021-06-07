import React, {useState} from 'react'

import * as API from '../api'

const MyContext = React.createContext()



const MyContextProvider = props => {

  const [theme, setTheme] = useState("dark")
  const [user, setUser] = useState([])
  const [currentUser, setCurrentUser] = useState([])

  const switchTheme = newTheme => {
    setTheme(newTheme)
  }
  
  const logIn = async (username, password) =>{
   const test = await API.login(username, password)
    setUser(username)
    //console.log('storage' + test)
    return test
  }

  const getMe = async () =>{
    //console.log('hej');
    const me = await API.getMe()
    setCurrentUser(me)
    //console.log(me);
    return me
  }
  
  return(
    <MyContext.Provider value={{theme, switchTheme, user, logIn, currentUser, getMe}}>
      {props.children}   
    </MyContext.Provider>
  )
}






export {MyContextProvider, MyContext}