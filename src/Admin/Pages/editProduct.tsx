import { Box, Button, Heading, Input, Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { editProduct, getProducts } from "../../UserPage/Redux/Admin/action";

export const EditProduct: React.FC = () => {
  const Navigate = useNavigate();

  let { id } = useParams<{ id: any }>();
  const dispatch = useDispatch();
  const { products } = useSelector((store: any) => ({
    products: store.adminReducer.products,
  }));
  const initProduct = {
    name: "",
    category: "",
    price: "",
    image: "",
    brand: "",
    size: "",
    color: "",
    material: "",
    rating: "",
    about: "",
    reviews: [
      {
        username: "Sarah123",
        rating: 5,
        comment: "I love this dining table! It's beautiful and sturdy.",
      },
      {
        username: "JohnDoe45",
        rating: 4,
        comment: "Great value for a modern dining table.",
      },
      {
        username: "ElegantHome",
        rating: 5,
        comment: "I'm very pleased with this purchase. It's perfect.",
      },
      {
        username: "FurnitureFanatic",
        rating: 4,
        comment: "Assembly was straightforward, but it took some time.",
      },
    ],
  };
  const [data, setData] = useState(initProduct);

  let Prod: any;

  const handleChange = (e: any) => {
    Prod = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(Prod);
    console.log(Prod);
  };
  const handleUpdate = (e: any) => {
    e.preventDefault();
    // console.log(data);
    dispatch(editProduct(id, data));
    dispatch(getProducts());
    Navigate("/admin/products");
  };
  useEffect(() => {
    const info = products.find((el: any) => el.id === +id);
    setData(info);
  }, [dispatch]);
  return (
    <>
      <Box
        w={"30%"}
        m={"auto"}
        // mt={"80px"}
        bg={"#fafafa"}
        // border={"1px solid orange"}
        p={"40px"}
        borderRadius={"25px"}
      >
        <Stack spacing={4}>
          <Heading m={"20px auto"} >
            EDIT PRODUCT
          </Heading>
          <Input
            variant="filled"
            placeholder="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
          />
          <Input
            variant="filled"
            placeholder="category"
            type="text"
            name="category"
            onChange={handleChange}
            value={data.category}
          />
          <Input
            variant="filled"
            placeholder="price"
            type="number"
            name="price"
            onChange={handleChange}
            value={data.price}
          />
          <Input
            variant="filled"
            placeholder="image"
            type="url"
            name="image"
            onChange={handleChange}
            value={data.image}
          />
          <Input
            variant="filled"
            placeholder="brand"
            type="text"
            name="brand"
            onChange={handleChange}
            value={data.brand}
          />
          <Input
            variant="filled"
            placeholder="size"
            type="text"
            name="size"
            onChange={handleChange}
            value={data.size}
          />
          <Input
            variant="filled"
            placeholder="color"
            type="text"
            name="color"
            onChange={handleChange}
            value={data.color}
          />
          <Input
            variant="filled"
            placeholder="material"
            type="text"
            name="material"
            onChange={handleChange}
            value={data.material}
          />
          <Input
            variant="filled"
            placeholder="about"
            type="text"
            name="about"
            onChange={handleChange}
            value={data.about}
          />
          <Input
            variant="filled"
            placeholder="rating"
            type="number"
            name="rating"
            onChange={handleChange}
            value={data.rating}
          />
          <Button   bg={"#0b3954"}
          m={"20px 5px"} color={"white"}
          _hover={{bg:"#e89f22"}} onClick={handleUpdate}>
            UPDATE
          </Button>
        </Stack>
      </Box>
    </>
  );
};
