import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { FaMailBulk } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <Box w={""} p={"20px"} bg={"#004270"} color={"white"}>
        <Grid
          gap={"20px"}
          templateColumns={{ base: "1fr", lg: "2fr 1fr 1fr 1fr" }}
        >
          <GridItem colSpan={{ base: "1fr" }}>
            <Text fontSize={"30px"} color={""} mt={""} fontWeight={"500"}>
              SD Soft
            </Text>
            <Text
              fontSize={""}
              lineHeight={"1.6"}
              color={""}
              mt={"20px"}
              fontWeight={""}
            >
              Transform Your Online Presence With Our Full Suite Of Digital
              Marketing Services. Solutions To Boost Your Business With Our
              Experienced Teams And Partner With Us For Best Digital Marketing
              Results.
            </Text>
            <Flex mt={"80px"} alignItems={"center"} gap={"10px"}>
              <Box>
                <FaMailBulk size={"25px"} />
              </Box>
              <Text fontSize={""} color={""} mt={""} fontWeight={""}>
                <a href="mailto:info@digitalomnicon.com:">
                  info@digitalomnicon.com
                </a>
              </Text>
            </Flex>
            <Flex mt={"20px"} alignItems={"center"} gap={"10px"}>
              <Box>
                <FiPhoneCall size={"25px"} />
              </Box>
              <Text fontSize={""} color={""} mt={""} fontWeight={""}>
                <a href="tel:+91-7037233300">+91-7037233300</a>
              </Text>
            </Flex>
            <Flex mt={"20px"} alignItems={"center"} gap={"10px"}>
              <Box>
                <FaLocationDot size={"25px"} />
              </Box>
              <Text fontSize={""} color={""} mt={""} fontWeight={""}>
                <a
                  href="https://www.google.com/maps?q=Your+Location+Address"
                  target="_blank"
                >
                  SomiLand
                </a>
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            display={"flex"}
            justifyContent={{base:"start",lg:"center"}}
            colSpan={{ base: "1fr" }}
          >
            <Box>
              <Text fontSize={"25px"} color={"#FF5E29"} mt={""} fontWeight={""}>
                Quick Links
              </Text>
              <Text fontSize={"14px"} color={""} mt={"20px"} fontWeight={""}>
                Digital Marketing
              </Text>
              <Text fontSize={"14px"} color={""} mt={"20px"} fontWeight={""}>
                Website Design
              </Text>
              <Text fontSize={"14px"} color={""} mt={"20px"} fontWeight={""}>
                Graphic Design
              </Text>
              <Text fontSize={"14px"} color={""} mt={"20px"} fontWeight={""}>
                Partner
              </Text>
              <Text fontSize={"14px"} color={""} mt={"20px"} fontWeight={""}>
                News
              </Text>
            </Box>
          </GridItem>
          <GridItem
            display={"flex"}
            justifyContent={{base:"start",lg:"center"}}
            colSpan={{ base: "1fr" }}
          >
            <Box>
              <Text fontSize={"25px"} color={"#FF5E29"} mt={""} fontWeight={""}>
                Community
              </Text>
              <Text fontSize={"14px"} color={""} mt={"20px"} fontWeight={""}>
                SEO Service
              </Text>
              <Text fontSize={"14px"} color={""} mt={"20px"} fontWeight={""}>
                Online marketing
              </Text>
              <Text fontSize={"14px"} color={""} mt={"20px"} fontWeight={""}>
                Pay Per Click
              </Text>
              <Text fontSize={"14px"} color={""} mt={"20px"} fontWeight={""}>
                Google Adwords
              </Text>
              <Text fontSize={"14px"} color={""} mt={"20px"} fontWeight={""}>
                E-commerce Website
              </Text>
            </Box>
          </GridItem>
          <GridItem
            display={"flex"}
            justifyContent={"center"}
            colSpan={{ base: "1fr" }}
          >
            <Box>
              <Text fontSize={"25px"} color={""} mt={""} fontWeight={"500"}>
                Connected
              </Text>
              <Box display={{base:"flex",lg:"block"}}>
              <Flex mt={"20px"} alignItems={"center"} gap={"5px"} justifyContent={"center"}>
                <Box>
                  <FaLinkedin size={"30px"} />
                </Box>
                <Box>
                  <FaFacebookF size={"30px"} />
                </Box>
              </Flex>
              <Flex mt={"20px"} alignItems={"center"} gap={"5px"} justifyContent={"center"}>
              <Box>
                <IoLogoInstagram size={"30px"} />
              </Box>
              <Box>
                <CiTwitter size={"30px"} />
              </Box>
              </Flex>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
