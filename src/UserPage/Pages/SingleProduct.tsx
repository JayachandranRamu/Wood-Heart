
import TopNavbar from "../Components/TopNavbar"
import Footer from '../Components/Footer';
import { DesktopNav } from '../Components/BottomNavbar';
import { SingleProductCard } from '../Components/SingleProductCard';
import { Box } from '@chakra-ui/react';

const SingleProduct = () => {

    return (<>
    <TopNavbar />
          <DesktopNav />
          <Box bg={"#f5f5f5"}>
          <SingleProductCard />
          </Box>
          
   <Footer />
    </> )
}


export default SingleProduct