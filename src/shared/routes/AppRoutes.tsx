import { Navigate, Route, Routes } from "react-router-dom"
import { AboutMe, Skills } from "../../pages"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<AboutMe />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/experience' element={<AboutMe />}/>
        <Route path='/contact-me' element={<AboutMe />}/>
        <Route path='/*' element={<Navigate to='/' />}/>
    </Routes>
  )
}

export default AppRoutes