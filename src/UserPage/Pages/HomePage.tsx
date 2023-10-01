import { useDispatch } from "react-redux"
import { DesktopNav } from "../Components/BottomNavbar"
import { Carousal } from "../Components/Carousal"
import FAQ from "../Components/FAQ"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import LoginMenu from "../Components/Login"
import NewsLetter from "../Components/NewsLetter"
import TopNavbar from "../Components/TopNavbar"
import TrustedSection from "../Components/TrustedSection"
import {useEffect} from "react"
import { GetAllUserData } from "../Redux/Auth/action"

const HomePage = () => {

  const dispatch=useDispatch();
  
 

  return (
    <div>
        <TopNavbar />
        <DesktopNav />
        
        <Hero />
        <TrustedSection />
        <Carousal />
        <FAQ />
       
        <Footer />
        
    </div>
  )
}

export default HomePage