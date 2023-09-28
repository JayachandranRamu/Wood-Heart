import { DesktopNav } from "../Components/BottomNavbar"
import { Carousal } from "../Components/Carousal"
import Hero from "../Components/Hero"
import NewsLetter from "../Components/NewsLetter"
import TopNavbar from "../Components/TopNavbar"
import TrustedSection from "../Components/TrustedSection"


const HomePage = () => {
  return (
    <div>
        <Hero />
        <TrustedSection />
        <Carousal />
        <NewsLetter />
    </div>
  )
}

export default HomePage