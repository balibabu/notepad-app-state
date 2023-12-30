import React from 'react'
import { GlobalProvider } from './components/Global/GlobalContext'
import Noteapp from './components/Notepad/Noteapp'
import Component1 from './components/redux-test/Component1'
import Component2 from './components/redux-test/Component2'

export default function App() {
  return (
    <GlobalProvider>
      <h1>Noteapp-State-Test</h1>
      <Noteapp />
      {/* <hr />
      <h1>Redux Test</h1>
      <Component1 />
      <Component2 /> */}
    </GlobalProvider>
  )
}
