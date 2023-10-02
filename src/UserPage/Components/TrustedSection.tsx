
import { Text, SimpleGrid, Box, Image, Flex, Stack } from '@chakra-ui/react';
import CountUp from 'react-countup';

interface StatData {
  id: number;
  label: string;
  score: number;
  start?:string;
  end?:string
}

const statData: StatData[] = [
  {
    id: 1,
    label: 'Clients',
    score: 550,
    start:"",
    end:""
  },
  {
    id: 2,
    label: 'Projects',
    score: 421,
    start:"",
    end:""
  },
  {
    id: 3,
    label: 'Revenue',
    start:"$",
    score: 5,
    end:"M"
  }
];

const TrustedSection = () => {
  return (
    <Stack  w={"80%"} direction={{ base: 'column', md: 'row' }} m={"50px auto"} fontFamily={"Poppins"} color={"#0b3954"}>
      <Flex flex={1}>
        <Image alt="Cover image" w={"90%"} borderRadius={"30%"} src="https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-home-pic6.webp" />
      </Flex>
      <Flex p={8} flex={1} align="center" justify="center">
        <Flex direction="column">
          <Text fontWeight="500" fontSize={["40","52"]} mb={2}>
            <Box  display="inline-block" position="relative">
              Trusted by Our Customers
            
            </Box>
          </Text>
          <Text>
Good furniture stores provide knowledgeable and friendly staff who are well-versed in furniture products, helping customers make informed decisions.
Above all, a top-notch furniture store values long-term relationships with its customers, striving to exceed their expectations and create loyal, satisfied clients.
          </Text>
          <SimpleGrid columns={{ base: 2, sm: 3, md: 3 }} spacing={1} mt={12} mb={4}>
            {statData.map((data) => (
              <Box key={data.id} p={{ base: 2, sm: 5 }} textAlign="center">
                <span style={{color:"#ffb128", fontWeight:"bold",fontSize:48}}>{data.start}</span>
                 <CountUp style={{color:"#ffb128", fontWeight:"bold",fontSize:48}}  end={data.score} enableScrollSpy >
                
                </CountUp>
                <span style={{color:"#ffb128", fontWeight:"bold",fontSize:48}}>{data.end}</span>
                <Text fontSize="18" >{data.label}</Text>
            
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default TrustedSection;