
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { Box, Image, Text } from '@chakra-ui/react';

export function Carousal() {
  let Items=[{
    image:"https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic1.webp",
    name:"Batchata Lamp",
  },{
    image:"https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic10.webp",
    name:"Circle Corner Table"
  },{
    image:"https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic9.webp",
    name:"CircleLamp"
  },{
    image:"https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic4.webp",
    name:"Coxy Arm Chair"
  },{
    image:"https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic11.webp",
    name:"Modern NightStand"
  }
]
  return (
    <Box w={"85%"} m={"auto"} mt={"100px"} color={"#0b3954"} mb={"100px"} fontFamily={"Poppins"}> 
      <Text fontSize={"48"} fontWeight={"600"}  textAlign={"center"} m={"40px"} fontFamily={"poppins"} >Our Aesthetic Furnitures</Text>
      <Swiper 
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          Items.map(el=>{
return <>
<SwiperSlide>
  <Box bg={"#f5f5f5"} m={"auto"} borderRadius={"30px"} p={"20px"}>
  <Image src={el.image} w={"90%"} m={"10px"} mt={"30px"} margin={"auto"}></Image>
          <Text mt={"60px"} mb={"60px"} fontSize={"18px"} textAlign={"center"}>{el.name}</Text>
  </Box>
         
        </SwiperSlide>
</>
          })
        }

      </Swiper>
    </Box>
  );
}
