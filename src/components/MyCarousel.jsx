import { Box, Flex, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStar } from "react-icons/fa";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const MyCarousel = () => {
  return (
    <>
      <Carousel responsive={responsive}>
        <Flex   justifyContent={"center"} minH={"200px"} textColor={""} bg={""} ml={"20px"}>
          <Box boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"   p={'20px'} w={"300px"} bg={""}>
          <Flex alignItems={"center"} gap={"20px"}>
            <Box>User</Box>
            <Box>
              <Text fontSize={"18px"} fontWeight={""} mt={""} color={"blue"}>
                Suleman
              </Text>
              <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                3 months ago
              </Text>
             
            </Box>
          </Flex>
          <Flex mt={"20px"} alignItems={"center"} gap={"10px"} color={"#FB8E28"}>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          </Flex>
          <Text fontSize={"16px"} fontWeight={""} mt={"15px"} color={""}>
              Excellent..... Omnicorn provide best digital marketing service in Moradabad mandal
              </Text>
          </Box>
        </Flex>
        <Flex justifyContent={"center"} minH={"200px"} textColor={""} bg={""} ml={"20px"}>
          <Box boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)" p={'20px'} w={"300px"} bg={""}>
          <Flex alignItems={"center"} gap={"20px"}>
            <Box>User</Box>
            <Box>
              <Text fontSize={"18px"} fontWeight={""} mt={""} color={"blue"}>
                Suleman
              </Text>
              <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                3 months ago
              </Text>
             
            </Box>
          </Flex>
          <Flex mt={"20px"} alignItems={"center"} gap={"10px"} color={"#FB8E28"}>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          </Flex>
          <Text fontSize={"16px"} fontWeight={""} mt={"15px"} color={""}>
              Excellent..... Omnicorn provide best digital marketing service in Moradabad mandal
              </Text>
          </Box>
        </Flex>
        <Flex justifyContent={"center"} minH={"200px"} textColor={""} bg={""} ml={"20px"}>
          <Box boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)" p={'20px'} w={"300px"} bg={""}>
          <Flex alignItems={"center"} gap={"20px"}>
            <Box>User</Box>
            <Box>
              <Text fontSize={"18px"} fontWeight={""} mt={""} color={"blue"}>
                Suleman
              </Text>
              <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                3 months ago
              </Text>
             
            </Box>
          </Flex>
          <Flex mt={"20px"} alignItems={"center"} gap={"10px"} color={"#FB8E28"}>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          </Flex>
          <Text fontSize={"16px"} fontWeight={""} mt={"15px"} color={""}>
              Excellent..... Omnicorn provide best digital marketing service in Moradabad mandal
              </Text>
          </Box>
        </Flex>
        <Flex   justifyContent={"center"} minH={"200px"} textColor={""} bg={""} ml={"20px"}>
          <Box boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"   p={'20px'} w={"300px"} bg={""}>
          <Flex alignItems={"center"} gap={"20px"}>
            <Box>User</Box>
            <Box>
              <Text fontSize={"18px"} fontWeight={""} mt={""} color={"blue"}>
                Suleman
              </Text>
              <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                3 months ago
              </Text>
             
            </Box>
          </Flex>
          <Flex mt={"20px"} alignItems={"center"} gap={"10px"} color={"#FB8E28"}>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          </Flex>
          <Text fontSize={"16px"} fontWeight={""} mt={"15px"} color={""}>
              Excellent..... Omnicorn provide best digital marketing service in Moradabad mandal
              </Text>
          </Box>
        </Flex>
        <Flex justifyContent={"center"} minH={"200px"} textColor={""} bg={""} ml={"20px"}>
          <Box boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)" p={'20px'} w={"300px"} bg={""}>
          <Flex alignItems={"center"} gap={"20px"}>
            <Box>User</Box>
            <Box>
              <Text fontSize={"18px"} fontWeight={""} mt={""} color={"blue"}>
                Suleman
              </Text>
              <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                3 months ago
              </Text>
             
            </Box>
          </Flex>
          <Flex mt={"20px"} alignItems={"center"} gap={"10px"} color={"#FB8E28"}>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          </Flex>
          <Text fontSize={"16px"} fontWeight={""} mt={"15px"} color={""}>
              Excellent..... Omnicorn provide best digital marketing service in Moradabad mandal
              </Text>
          </Box>
        </Flex>
        <Flex justifyContent={"center"} minH={"200px"} textColor={""} bg={""} ml={"20px"}>
          <Box boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)" p={'20px'} w={"300px"} bg={""}>
          <Flex alignItems={"center"} gap={"20px"}>
            <Box>User</Box>
            <Box>
              <Text fontSize={"18px"} fontWeight={""} mt={""} color={"blue"}>
                Suleman
              </Text>
              <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                3 months ago
              </Text>
             
            </Box>
          </Flex>
          <Flex mt={"20px"} alignItems={"center"} gap={"10px"} color={"#FB8E28"}>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          <FaStar size={"20px"}/>
          </Flex>
          <Text fontSize={"16px"} fontWeight={""} mt={"15px"} color={""}>
              Excellent..... Omnicorn provide best digital marketing service in Moradabad mandal
              </Text>
          </Box>
        </Flex>
      </Carousel>
      ;
    </>
  );
};

export default MyCarousel;
