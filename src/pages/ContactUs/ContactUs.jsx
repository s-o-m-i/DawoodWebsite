import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Image,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import { MdArrowRightAlt } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { FaPeopleArrows } from "react-icons/fa6";
import { RiShieldCheckFill } from "react-icons/ri";
import { BsFillBarChartLineFill } from "react-icons/bs";
import Footer from "../../components/Footer";
import { Input } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const ContactUs = () => {
  const [showServices, setShowServices] = useState("");
  const handleShow = (e) => {
    setShowServices(e);
  };
  return (
    <>
      <Header />
      <Box
        backgroundImage={"url(/milestone.webp)"}
        position={"relative"}
        minH={"85vh"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={""}
          px={{ base: "20px", lg: "56px" }}
          w={"100%"}
          minH={"85vh"}
          bg={"rgba(0,0,0,0.5)"}
        >
          <Box>
            <Text
              fontSize={{ base: "35px", lg: "55px" }}
              fontWeight={"600"}
              mt={""}
              color={"white"}
            >
              Contact Us
            </Text>
            <Text
              w={{ base: "100%", lg: "700px" }}
              fontSize={{ base: "14px", lg: "18px" }}
              fontWeight={"300"}
              mt={"20px"}
              color={"white"}
            >
              What truly sets us apart is our unwavering commitment to your
              success. Your business becomes our business, and your goals become
              ours too.
            </Text>
            <Button
              mt={"50px"}
              className="hireus"
              w={"140px"}
              fontSize={""}
              borderRadius={"5px"}
              fontWeight={400}
              bg={"#FF5E29"}
              size={"lg"}
              color={"white"}
              _hover={{ color: "#FF5E29", background: "black" }}
            >
              Hire Us!
            </Button>
          </Box>
        </Box>
      </Box>

      <Box textAlign={"center"} mt={"40px"}>
        <Text fontSize={"40px"} fontWeight={""} mt={""} color={""}>
          Get a Free Digital Marketing Consultation
        </Text>
        <Text fontSize={"40px"} fontWeight={""} mt={""} color={"#FF5E29"}>
          We'll Help You Grow Your Business Online
        </Text>
      </Box>

      <Box py={"40px"} px={"56px"}>
        <Box></Box>
        <Box>
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            alignItems={"center"}
            gap={"20px"}
          >
            <Box
              color={"#056BD2"}
              bg={"#DEE8F1"}
              borderRadius={"50%"}
              p={"15px"}
            >
              <FaLocationDot size={"25px"} />
            </Box>
            <Box>
              <Text fontSize={""} fontWeight={"500"} mt={""} color={""}>
                California, USA - HQ
              </Text>
              <Text
                mt={"10px"}
                fontSize={""}
                fontWeight={""}
                color={"rgba(0,0,0,0.8)"}
              >
                9070 Irvine Centre DR, Suite 220, Irvine, CA 92618
              </Text>
            </Box>
          </Flex>
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            mt={"50px"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Box
              color={"#056BD2"}
              bg={"#DEE8F1"}
              borderRadius={"50%"}
              p={"15px"}
            >
              <FaLocationDot size={"25px"} />
            </Box>
            <Box>
              <Text fontSize={""} fontWeight={"500"} mt={""} color={""}>
                California, USA - HQ
              </Text>
              <Text
                mt={"10px"}
                fontSize={""}
                fontWeight={""}
                color={"rgba(0,0,0,0.8)"}
              >
                9070 Irvine Centre DR, Suite 220, Irvine, CA 92618
              </Text>
            </Box>
          </Flex>

          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            mt={"50px"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Box
              color={"#056BD2"}
              bg={"#DEE8F1"}
              borderRadius={"50%"}
              p={"15px"}
            >
              <FaMailBulk size={"25px"} />
            </Box>
            <Box>
              <Text fontSize={""} fontWeight={"500"} mt={""} color={""}>
                info@digitalomnicon.com
              </Text>
              <Text
                mt={"10px"}
                fontSize={""}
                fontWeight={""}
                color={"rgba(0,0,0,0.8)"}
              >
                Email
              </Text>
            </Box>
          </Flex>

          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            mt={"50px"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Box
              color={"#056BD2"}
              bg={"#DEE8F1"}
              borderRadius={"50%"}
              p={"15px"}
            >
              <FaPhoneVolume size={"25px"} />
            </Box>
            <Box>
              <Text fontSize={""} fontWeight={"500"} mt={""} color={""}>
                +91-7037233300
              </Text>
              <Text
                mt={"10px"}
                fontSize={""}
                fontWeight={""}
                color={"rgba(0,0,0,0.8)"}
              >
                Phone Number
              </Text>
            </Box>
          </Flex>

          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            mt={"30px"}
            alignItems={"center"}
            gap={"40px"}
          >
            <Box color={"white"} bg={"#056BD2"} borderRadius={"50%"} p={"10px"}>
              <FaLinkedin size={"20px"} />
            </Box>
            <Box color={"white"} bg={"#056BD2"} borderRadius={"50%"} p={"10px"}>
              <FaFacebookF size={"20px"} />
            </Box>
            <Box color={"white"} bg={"#056BD2"} borderRadius={"50%"} p={"10px"}>
              <IoLogoInstagram size={"20px"} />
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box bg={"#F9F9F9"} py={"40px"} px={{ base: "", lg: "56px" }}>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
          <GridItem colSpan={{ base: "1fr" }}>
            <Text
              w={{ base: "100%", lg: "450px" }}
              fontSize={"40px"}
              fontWeight={"700"}
              mt={""}
              color={""}
            >
              7 Years For Your Dream Vacation And Memories!
            </Text>
            <Text fontSize={""} fontWeight={""} mt={"20px"} color={""}>
              7 At our digital agency, we specialize in search engine
              optimization (SEO) and marketing through social media development
              of websites and writing content and email marketing. Furthermore,
              we provide voice-over artist services to promote promotional
              videos.
            </Text>
          </GridItem>
          <GridItem colSpan={{ base: "1fr" }}>
            <Box
              transition={"all .5s ease"}
              onClick={() => handleShow("first")}
              p={"20px"}
              bg={"white"}
              h={showServices === "first" ? "180px" : "60px"}
              overflow={"hidden"}
            >
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Text fontSize={""} fontWeight={""} mt={""} color={""}>
                  What services does Digital Omnicon offer?
                </Text>
                {showServices !== "first" && (
                  <IoMdArrowDropdown size={"20px"} />
                )}
              </Flex>
              <Text fontSize={""} fontWeight={""} mt={"20px"} color={""}>
                Digital Omnicon provides a comprehensive range of digital
                marketing services, including SEO, content marketing, social
                media management, PPC advertising, web design and development,
                and email marketing
              </Text>
            </Box>
            <Box
              transition={"all .5s ease"}
              onClick={() => handleShow("second")}
              p={"20px"}
              bg={"white"}
              h={showServices === "second" ? "180px" : "60px"}
              overflow={"hidden"}
            >
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Text fontSize={""} fontWeight={""} mt={""} color={""}>
                  What services does Digital Omnicon offer?
                </Text>
                {showServices !== "second" && (
                  <IoMdArrowDropdown size={"20px"} />
                )}
              </Flex>
              <Text fontSize={""} fontWeight={""} mt={"20px"} color={""}>
                Digital Omnicon provides a comprehensive range of digital
                marketing services, including SEO, content marketing, social
                media management, PPC advertising, web design and development,
                and email marketing
              </Text>
            </Box>
            <Box
              transition={"all .5s ease"}
              onClick={() => handleShow("third")}
              p={"20px"}
              bg={"white"}
              h={showServices === "third" ? "180px" : "60px"}
              overflow={"hidden"}
            >
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Text fontSize={""} fontWeight={""} mt={""} color={""}>
                  What services does Digital Omnicon offer?
                </Text>
                {showServices !== "third" && (
                  <IoMdArrowDropdown size={"20px"} />
                )}
              </Flex>
              <Text fontSize={""} fontWeight={""} mt={"20px"} color={""}>
                Digital Omnicon provides a comprehensive range of digital
                marketing services, including SEO, content marketing, social
                media management, PPC advertising, web design and development,
                and email marketing
              </Text>
            </Box>
            <Box
              transition={"all .5s ease"}
              onClick={() => handleShow("fourth")}
              p={"20px"}
              bg={"white"}
              h={showServices === "fourth" ? "180px" : "60px"}
              overflow={"hidden"}
            >
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Text fontSize={""} fontWeight={""} mt={""} color={""}>
                  What services does Digital Omnicon offer?
                </Text>
                {showServices !== "fourth" && (
                  <IoMdArrowDropdown size={"20px"} />
                )}
              </Flex>
              <Text fontSize={""} fontWeight={""} mt={"20px"} color={""}>
                Digital Omnicon provides a comprehensive range of digital
                marketing services, including SEO, content marketing, social
                media management, PPC advertising, web design and development,
                and email marketing
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      <Box py={"40px"} px={{ base: "", lg: "56px" }}>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          gap={"8px"}
          my={"30px"}
        >
          <Text
            fontSize={{ base: "30px", lg: "40px" }}
            fontWeight={""}
            color={"#17478E"}
          >
            Leave
          </Text>
          <Text
            fontSize={{ base: "30px", lg: "40px" }}
            fontWeight={""}
            color={"#FF5E29"}
          >
            A Message
          </Text>
        </Flex>

        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
          <GridItem px={"20px"} colSpan={{ base: "1fr" }}>
            <Text mb={"5px"}>First Name</Text>
            <Input placeholder="First Name" size="md" />
          </GridItem>
          <GridItem px={"20px"} colSpan={{ base: "1fr" }}>
            <Text mb={"5px"}>Last Name</Text>
            <Input placeholder="Last Name" size="md" />
          </GridItem>
        </Grid>
        <Grid mt={"40px"} templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
          <GridItem px={"20px"} colSpan={{ base: "1fr" }}>
            <Text mb={"5px"}>E-Mail Address</Text>
            <Input placeholder="E-Mail Address" size="md" />
          </GridItem>
          <GridItem px={"20px"} colSpan={{ base: "1fr" }}>
            <Text mb={"5px"}>Phone Number</Text>
            <Input placeholder="Phone Number" size="md" />
          </GridItem>
        </Grid>

        <Grid mt={"40px"} templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
          <GridItem px={"20px"} colSpan={{ base: "1fr" }}>
            <Text mb={"5px"}>Website URL</Text>
            <Input placeholder="Website URL" size="md" />
          </GridItem>
          <GridItem px={"20px"} colSpan={{ base: "1fr" }}>
            <Text mb={"5px"}>Company/Organization</Text>
            <Input placeholder="Company/Organization" size="md" />
          </GridItem>
        </Grid>

       

        <Box px={"20px"} mt={"20px"}>
          <Text fontSize={"20px"} fontWeight={""} mt={""} color={""}>
            What services can we provide you?
          </Text>

          <Grid mt={"20px"} templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}>
            <GridItem colSpan={{ base: "1fr" }}>
              <Checkbox mt={""} size={"lg"} iconColor="" iconSize="">
                <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                  Search Engine Optimization (SEO)
                </Text>
              </Checkbox>
         
            </GridItem>
            <GridItem colSpan={{ base: "1fr" }}>
              <Checkbox mt={""} size={"lg"} iconColor="" iconSize="">
                <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                 
Pay Per Click (PPC)
                </Text>
              </Checkbox>
         
            </GridItem>
            <GridItem colSpan={{ base: "1fr" }}>
              <Checkbox mt={""} size={"lg"} iconColor="" iconSize="">
                <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                  
Social Media Marketing
                </Text>
              </Checkbox>
         
            </GridItem>
          </Grid>
          <Grid mt={"20px"} templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}>
            <GridItem colSpan={{ base: "1fr" }}>
              <Checkbox mt={""} size={"lg"} iconColor="" iconSize="">
                <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                Web Design
                </Text>
              </Checkbox>
         
            </GridItem>
            <GridItem colSpan={{ base: "1fr" }}>
              <Checkbox mt={""} size={"lg"} iconColor="" iconSize="">
                <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                 
ECommerce Optimization
                </Text>
              </Checkbox>
         
            </GridItem>
            <GridItem colSpan={{ base: "1fr" }}>
              <Checkbox mt={""} size={"lg"} iconColor="" iconSize="">
                <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                Social Media Managment
                </Text>
              </Checkbox>
         
            </GridItem>
          </Grid>
          <Grid mt={"20px"} templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}>
            <GridItem colSpan={{ base: "1fr" }}>
              <Checkbox mt={""} size={"lg"} iconColor="" iconSize="">
                <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                Reputation / Reviews Management
                </Text>
              </Checkbox>
         
            </GridItem>
            <GridItem colSpan={{ base: "1fr" }}>
              <Checkbox mt={""} size={"lg"} iconColor="" iconSize="">
                <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                Content Writing
                </Text>
              </Checkbox>
         
            </GridItem>
            <GridItem colSpan={{ base: "1fr" }}>
              <Checkbox mt={""} size={"lg"} iconColor="" iconSize="">
                <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                Graphic Designing (Logo/Flyer)
                </Text>
              </Checkbox>
         
            </GridItem>
          </Grid>
          <Grid mt={"20px"} templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}>
            <GridItem colSpan={{ base: "1fr" }}>
              <Checkbox mt={""} size={"lg"} iconColor="" iconSize="">
                <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                Web Hosting / Maintenance
                </Text>
              </Checkbox>
         
            </GridItem>
            <GridItem colSpan={{ base: "1fr" }}>
              <Checkbox mt={""} size={"lg"} iconColor="" iconSize="">
                <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                Backlink
                </Text>
              </Checkbox>
         
            </GridItem>
            <GridItem colSpan={{ base: "1fr" }}>
              <Checkbox mt={""} size={"lg"} iconColor="" iconSize="">
                <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                Photography / Video
                </Text>
              </Checkbox>
         
            </GridItem>
          </Grid>
          <Grid mt={"20px"} templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}>
            <GridItem colSpan={{ base: "1fr" }}>
              <Checkbox mt={""} size={"lg"} iconColor="" iconSize="">
                <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                Guest Posting
                </Text>
              </Checkbox>
         
            </GridItem>
            <GridItem colSpan={{ base: "1fr" }}>
              <Checkbox mt={""} size={"lg"} iconColor="" iconSize="">
                <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                Link Building
                </Text>
              </Checkbox>
         
            </GridItem>
            <GridItem colSpan={{ base: "1fr" }}>
              <Checkbox mt={""} size={"lg"} iconColor="" iconSize="">
                <Text fontSize={"14px"} fontWeight={""} mt={""} color={""}>
                Email Marketing
                </Text>
              </Checkbox>
         
            </GridItem>
          </Grid>
        </Box>




        <Grid mt={"40px"} templateColumns={{ base: "1fr", lg: "1fr" }}>
          <GridItem px={"20px"} colSpan={{ base: "1fr" }}>
            <Text mb={"5px"}>Estimated Monthly Budget *</Text>
            <Select placeholder='Select option'>
  <option value='option1'>Under $400 Per Month</option>
  <option value='option2'>$400-$750 Per Month</option>
  <option value='option3'>$750-$1500 Per Month</option>
  <option value='option3'>$1500-$3000 Per Month</option>
  <option value='option3'>$5000-$10000 Per Month</option>
  <option value='option3'>10000+ Per Month</option>
</Select>
          </GridItem>
        </Grid>




        <Grid mt={"40px"} templateColumns={{ base: "1fr", lg: "1fr" }}>
          <GridItem px={"20px"} colSpan={{ base: "1fr" }}>
            <Text mb={"5px"}>Message</Text>
            <Textarea placeholder="Message" resize={"none"} />
          </GridItem>
        </Grid>






        <Box mt={"20px"} px={"20px"}>
          <Button
            className="hireus"
            w={"120px"}
            fontSize={""}
            py={"4px"}
            px={"16px"}
            borderRadius={"2px"}
            bg={"#FF5E29"}
            size={"md"}
            color={"white"}
            _hover={{ color: "#FF5E29", background: "black" }}
          >
            Submit
          </Button>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default ContactUs;
