import React, { useEffect } from 'react'
import   AdminNavbar  from '../Components/Admin-Navbar'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getAllusers } from '../../UserPage/Redux/Admin/userAction'
import { user } from '../../UserPage/Redux/Admin/constants'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
const Users = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [userData,totalPages]=useSelector((store:any)=>{
     return [store.adminReducer.users,store.adminReducer.totalPages] 
  },shallowEqual);
console.log(userData,totalPages,"from user store data");

  useEffect(()=>{
       dispatch(getAllusers());
  },[]);
  // axios.get(`http://localhost:8080/user`)
  // .then(res=>{
  //   console.log(res.data)
  // })
  // .catch(err=>{
  //   console.log(err);
  // })

  return (
    <>
         <AdminNavbar />
         <div>
         <Table>
          <thead>
            <th>User name</th><th>E-mail</th><th>Orders</th>
            {/* <th>Manage</th> */}
          </thead>
          <tbody>
            {
              userData?.map((ele:user)=>(
               
                <tr onClick={()=>navigate(`/admin/singleUser/${ele.id}`)}>
                  <td>{ele.username}</td>
                  <td>{ele.email}</td>
                  <td>{ele.orders.length}</td>
                  <TD>
                    <Link to={`/admin/singleUser/${ele.id}`}>
                    <Button colorScheme='teal' variant='ghost'>
                     View
                    </Button>
                    </Link>
                    <Button colorScheme='red' variant='ghost'>
                     Delete
                    </Button>
                  </TD>
                </tr>
              ))
            }
          </tbody>
         </Table>
         </div>
    </>
  )
}


const Table=styled.table`
   width:80%;
   height:100%;
   border-radius:10%;
   border:1px solid black;
   flex-flow:row ;
   text-align: center;
   margin:auto;

   tr{
    cursor:pointer;
    height:40px;
    border:1px solid black;
   }
`

const TD=styled.td`
   /* background-color: red; */
   display: flex;
   justify-content: space-around;
   button{
    display: block;
   }
`
export default Users