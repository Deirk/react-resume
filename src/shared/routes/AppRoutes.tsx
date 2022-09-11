import { Navigate, Route, Routes } from "react-router-dom"
import { AboutMe } from "../../pages"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<AboutMe />}/>
        <Route path='/skills' element={<AboutMe />}/>
        <Route path='/experience' element={<AboutMe />}/>
        <Route path='/contact-me' element={<AboutMe />}/>
        <Route path='/*' element={<Navigate to='/' />}/>
    </Routes>
  )
}

export default AppRoutes