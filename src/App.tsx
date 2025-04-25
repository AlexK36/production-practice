import { Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import "./styles/index.scss"
import { Link } from 'react-router-dom'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.async'
import { MainPageLazy } from './pages/MainPage/MainPage.async'
import { Suspense, useContext, useState } from 'react'
import { Theme, ThemeContext } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'


export default function App() {

  const { theme, toggleTheme } = useTheme()


  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>о сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageLazy />} />
          <Route path='/' element={<MainPageLazy />} />
          {/* <Counter /> */}
        </Routes>
      </Suspense>
    </div>
  )
}
