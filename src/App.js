import React from 'react'
import { GlobalProvider } from './components/Global/GlobalContext'
import Noteapp from './components/Notepad/Noteapp'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Editor from './components/Notepad/Editor'

export default function App() {
  return (
    <GlobalProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Noteapp />} />
          <Route path="/editor/:noteId" element={<Editor />} />
        </Routes>
      </HashRouter>
    </GlobalProvider>
  )
}
