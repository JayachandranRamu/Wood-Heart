import { Cart } from "./user/Cart";



import Admin from "./Admin/Pages/Admin"
import { DesktopNav } from "./UserPage/Components/BottomNavbar"
import Footer from "./UserPage/Components/Footer"
import Hero from "./UserPage/Components/Hero"
import HomePage from "./UserPage/Pages/HomePage"
import TopNavbar from "./UserPage/Components/TopNavbar"
import TrustedSection from "./UserPage/Components/TrustedSection"
import { Carousal } from "./UserPage/Components/Carousal"
import NewsLetter from "./UserPage/Components/NewsLetter"
import MainRoutes from "./UserPage/Route/MainRoute"


function App() {
  return (
    <>
    

      {/* <h1>Vite + React</h1> */}
    
      <MainRoutes />
      

    </>
  )
}

export default App
