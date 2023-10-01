
import TopNavbar from "../Components/TopNavbar"
import Footer from '../Components/Footer';
import { DesktopNav } from '../Components/BottomNavbar';
import { SingleProductCard } from '../Components/SingleProductCard';
import { Box } from '@chakra-ui/react';
import FAQ from "../Components/FAQ";

const SingleProduct = () => {

    return (<>
    <TopNavbar />
          <DesktopNav />
          <Box >
          <SingleProductCard />
          </Box>
          <FAQ />
   <Footer />
    </> )
}


export default SingleProduct