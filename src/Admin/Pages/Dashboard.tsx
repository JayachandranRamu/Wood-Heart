import { Grid, GridItem, Stack, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber, useBreakpointValue } from '@chakra-ui/react'

import AdminNavbar from "../Components/Admin-Navbar";
import { AdminFooter } from './AdminFooter';
import { CartesianGrid ,XAxis, ResponsiveContainer ,BarChart, YAxis, Tooltip, Legend, Bar, Line, LineChart, PieChart, Pie, Cell } from 'recharts';
import { BAR_DATA} from '../Components/Constants';


const Dashboard = () => {
  const gridColumns = useBreakpointValue({ base: 1,sm:1, md: 2, lg: 2 });
  const gridRows=useBreakpointValue({base:2,sm:1,md:2,lg:2});

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50']

 const data= BAR_DATA;
 
const piData = [
  { name: 'Products', value: 400 },
  { name: 'Users', value: 300 },
  { name: 'Orders', value: 200 },
  { name: 'Cancel', value: 100 },
];
  return (
    <>
    <AdminNavbar />
    
   <Stack w={"95%"} m={"auto"}>
    <Grid
    mt="10px"
    w="100%"
  
  templateRows={`repeat(${gridRows},1fr )`}
  templateColumns={`repeat(${gridColumns},1fr )`}
  gap={"4"}
  bg='white'
>
  
<GridItem
 boxShadow={"rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;"}
 borderRadius={"15px"}
  h={"100%"} rowSpan={1} colSpan={1} bg="white">
<StatGroup m={"auto"}   w={"50%"} >
  <Stat mt={"20px"}>
    <StatLabel fontStyle={"Poppins"} color={"grey"}  fontSize={useBreakpointValue({ base: "20px", sm: "30px", md: "40px", lg: "40px" })}>Orders</StatLabel>
    <StatNumber textDecor={"underline"} fontSize={useBreakpointValue({base:"30px"})}>345,670</StatNumber>
    <StatLabel color={"grey"} fontSize={useBreakpointValue({ base: "20px", sm: "30px", md: "40px", lg: "40px" })}>Profit</StatLabel>
    <StatNumber textDecor={"underline"} fontSize={useBreakpointValue({base:"30px"})}>408,760,000</StatNumber>
    <StatHelpText fontSize={"2em"}>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>
  </StatGroup>
</GridItem>

<GridItem
boxShadow={"rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;"}
borderRadius={"15px"}
 h={"300px"}  rowSpan={1} colSpan={1} bg="white">
    {/* curve chart for orders place */}
   <Stack w={"90%"} h={"90%"} m={"auto"} mt={"20px"}>
   <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
   </Stack>
</GridItem>
<GridItem 
boxShadow={"rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;"}
borderRadius={"15px"}
 h={"300px"} rowSpan={1} colSpan={1} bg="white">
<Stack w={"90%"} h={"90%"} m={"auto"} mt={"15px"}>
  {/* linChart */}
  <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

</Stack>
</GridItem>
<GridItem 
boxShadow={"rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;"}
borderRadius={"15px"}
 h={"300px"}  rowSpan={1} colSpan={1} bg="white">
  {/* pi chart for user gained */}
  <Stack w={"90%"} h={"90%"} m={"auto"} mt={"20px"}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={piData} dataKey="value" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
          {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Stack>
</GridItem>
  </Grid> 
  </Stack>
  
  <AdminFooter/>
    </>
  )
}

export default Dashboard