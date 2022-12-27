import React from 'react'
import ReactDOM  from 'react-dom'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Ozbek from './Pages/yorelge/ozbek/Ozbek'
import Rus from './Pages/yorelge/rus/Rus'
import Yapon from './Pages/yorelge/yapon/Yapon'
import Turk from './Pages/yorelge/turk/Turk'
import Arap from './Pages/yorelge/arap/Arap'
import Yorelge from './Pages/yorelge/Yorelge'
import Kesdecilik from './Pages/kesdecilik/Kesdecilik'
import Toy from './Pages/toy/Toy'
import Beyleki from './Pages/beylekiler/Beyleki'

ReactDOM.render(
<Router>
<Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/yorelge' element={<Yorelge/>}/>
    <Route path='/kesdecilik' element={<Kesdecilik/>}/>
    <Route path='/rus' element={<Rus/>}/>
    <Route path='/arap' element={<Arap/>}/>
    <Route path='/rus' element={<Rus/>}/>
    <Route path='/turk' element={<Turk/>}/>
    <Route path='/yapon' element={<Yapon/>}/>
    <Route path='/ozbek' element={<Ozbek/>}/>
    <Route path='/toy' element={<Toy/>}/>
    <Route path='/beylekiler' element={<Beyleki/>}/>
</Routes>
</Router>,


 document.getElementById('root') 
 );