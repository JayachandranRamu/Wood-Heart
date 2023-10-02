import { Route, Routes } from "react-router-dom";

import { Alert, AlertIcon, Stack } from "@chakra-ui/react";
import HomePage from "../Pages/HomePage";
import ProductPage from "../Pages/ProductPage";
import SingleProduct from "../Pages/SingleProduct";
import Dashboard from "../../Admin/Pages/Dashboard";
// import Analytics from '../../Admin/Pages/Analytics'
import Users from "../../Admin/Pages/Users";
import Products from "../../Admin/Pages/Products";

import Admin from "../../Admin/Pages/Admin";
import SingleUserAdmin from "../../Admin/Pages/SingleUserAdmin";
import { Checkout } from "../../user/Checkout";
import PrivateRouter from "./PrivateRoute";
import { Cart } from "../../user/Cart";
import UserPrivateRouter from "./UserPrivateRoute";
import { EditProduct } from "../../Admin/Pages/editProduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:name" element={<ProductPage />} />

      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route
        path="/admin"
        element={
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        }
      ></Route>
      <Route path="/admin/products/edit/:id" element={<EditProduct />}></Route>
      <Route
        path="/admin/admin-user"
        element={
          <PrivateRouter>
            <Admin />
          </PrivateRouter>
        }
      ></Route>
      <Route path="/admin/users" element={<Users />}></Route>
      <Route path="/admin/singleUser/:id" element={<SingleUserAdmin />}></Route>
      <Route path="/admin/products" element={<Products />}></Route>
      <Route
        path="/checkout"
        element={
          <UserPrivateRouter>
            <Checkout />
          </UserPrivateRouter>
        }
      ></Route>
      <Route
        path="/cart"
        element={
          <UserPrivateRouter>
            <Cart />
          </UserPrivateRouter>
        }
      ></Route>

      <Route
        path="*"
        element={
          <Stack spacing={3}>
            <Alert status="error">
              <AlertIcon />
              There was an error processing your request
            </Alert>{" "}
          </Stack>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
