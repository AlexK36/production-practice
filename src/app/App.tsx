import { Route, Routes } from 'react-router-dom'
import "./styles/index.scss"
import { Link } from 'react-router-dom'
import { MainPageLazy } from 'pages/MainPage/ui/MainPage.async'
import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'


export default function App() {

  const { theme, toggleTheme } = useTheme()


  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>о сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
