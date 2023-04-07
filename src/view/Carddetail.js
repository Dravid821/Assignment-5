import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "..."
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  // Heading,
  // Text,
  // Button,
} from "@chakra-ui/react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
// import Carousel from "react-bootstrap/Carousel";

import ImageSlider from "../Components/ImageSlider";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Carddetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(data);
  console.log(data.images);

  useEffect(() => {
    axios
      .get(` https://dummyjson.com/products/${id}`)
      .then((response) => {
        setData(response.data);
        console.log("data", data);
      })
      .catch((error) => {
        const msg = error.message;
        console.log("error", msg);
      });
  }, []);
  const BackToShop = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        {data.title ? (
          <section>
            {/* <div class="container py-2">
              <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-4">
                  <div class="card text-black">
                    <ImageSlider images={data.images} className=""/>
                    <div className="card-body">
                      <div class="text-center">
                        <h1 className="card-title">{data.category}</h1>
                        <div className="d-flex justify-content-between pt-3">
                          <h5 className="text-danger mb-4">{data.brand}</h5>
                          <p className="text-success mb-4">{data.title}</p>
                        </div>
                      </div>
                      <div>
                        <div class="d-flex justify-content-between">
                          <span className="">Stock:</span>
                          <span>{data.stock}</span>
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                          <span>Rating :&nbsp;</span>
                          <span className="text-warning">
                            <div>
                              {data.rating}
                              <StarIcon />
                              <StarHalfIcon />
                            </div>
                          </span>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between total font-weight-bold mt-4">
                        <span>Description :&nbsp;{data.description}</span>
                      </div>
                      <div class="d-flex justify-content-between total font-weight-bold mt-4">
                        <span>Discount :&nbsp;</span>
                        <h6>{data.discountPercentage}% off</h6>
                      </div>
                      <div class="d-flex justify-content-between total font-weight-bold mt-4">
                        <span>Price :</span>
                        <h4 className="mb-1 me-1">$13.99</h4>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <NavLink>
                        <button
                          className="btn btn-primary btn-md m-2"
                          type="button"
                        >
                          Add To Cart
                        </button>
                      </NavLink>
                      <NavLink to={`/cardmap`}>
                        <button
                          onClick={BackToShop}
                          className="btn btn-outline-primary btn-md m-2"
                          type="button"
                        >
                          <ShoppingCartIcon />
                          Back To Shopping Page
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <Container maxW={"7xl"}>
              <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}
              >
                <Flex>
                  <Image
                    rounded={"md"}
                    alt={"product image"}
                    src={
                      "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"
                    }
                    fit={"cover"}
                    align={"center"}
                    w={"100%"}
                    h={{ base: "100%", sm: "400px", lg: "500px" }}
                  />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                  <Box as={"header"}>
                    <Heading
                      lineHeight={1.1}
                      fontWeight={600}
                      fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                    >
                      Automatic Watch
                    </Heading>
                    <Text
                      color={useColorModeValue("gray.900", "gray.400")}
                      fontWeight={300}
                      fontSize={"2xl"}
                    >
                      $350.00 USD
                    </Text>
                  </Box>

                  <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={"column"}
                    divider={
                      <StackDivider
                        borderColor={useColorModeValue("gray.200", "gray.600")}
                      />
                    }
                  >
                    <VStack spacing={{ base: 4, sm: 6 }}>
                      <Text
                        color={useColorModeValue("gray.500", "gray.400")}
                        fontSize={"2xl"}
                        fontWeight={"300"}
                      >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore
                      </Text>
                      <Text fontSize={"lg"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ad aliquid amet at delectus doloribus dolorum
                        expedita hic, ipsum maxime modi nam officiis porro,
                        quae, quisquam quos reprehenderit velit? Natus, totam.
                      </Text>
                    </VStack>
                    <Box>
                      <Text
                        fontSize={{ base: "16px", lg: "18px" }}
                        color={useColorModeValue("yellow.500", "yellow.300")}
                        fontWeight={"500"}
                        textTransform={"uppercase"}
                        mb={"4"}
                      >
                        Features
                      </Text>

                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        <List spacing={2}>
                          <ListItem>Chronograph</ListItem>
                          <ListItem>Master Chronometer Certified</ListItem>{" "}
                          <ListItem>Tachymeter</ListItem>
                        </List>
                        <List spacing={2}>
                          <ListItem>Anti‑magnetic</ListItem>
                          <ListItem>Chronometer</ListItem>
                          <ListItem>Small seconds</ListItem>
                        </List>
                      </SimpleGrid>
                    </Box>
                    <Box>
                      <Text
                        fontSize={{ base: "16px", lg: "18px" }}
                        color={useColorModeValue("yellow.500", "yellow.300")}
                        fontWeight={"500"}
                        textTransform={"uppercase"}
                        mb={"4"}
                      >
                        Product Details
                      </Text>

                      <List spacing={2}>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Between lugs:
                          </Text>{" "}
                          20 mm
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Bracelet:
                          </Text>{" "}
                          leather strap
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Case:
                          </Text>{" "}
                          Steel
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Case diameter:
                          </Text>{" "}
                          42 mm
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Dial color:
                          </Text>{" "}
                          Black
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Crystal:
                          </Text>{" "}
                          Domed, scratch‑resistant sapphire crystal with
                          anti‑reflective treatment inside
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Water resistance:
                          </Text>{" "}
                          5 bar (50 metres / 167 feet){" "}
                        </ListItem>
                      </List>
                    </Box>
                  </Stack>

                  <Button
                    rounded={"none"}
                    w={"full"}
                    mt={8}
                    size={"lg"}
                    py={"7"}
                    bg={useColorModeValue("gray.900", "gray.50")}
                    color={useColorModeValue("white", "gray.900")}
                    textTransform={"uppercase"}
                    _hover={{
                      transform: "translateY(2px)",
                      boxShadow: "lg",
                    }}
                  >
                    Add to cart
                  </Button>

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={"center"}
                  >
                    <MdLocalShipping />
                    <Text>2-3 business days delivery</Text>
                  </Stack>
                </Stack>
              </SimpleGrid>
            </Container>
          </section>
        ) : (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </div>
    </>
  );
};
export default Carddetail;
