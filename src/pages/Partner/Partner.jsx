import { Box, Button, Flex, Grid, GridItem, Image, Text, Textarea } from "@chakra-ui/react";
import Header from "../../components/Header";
import { MdArrowRightAlt } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { FaPeopleArrows } from "react-icons/fa6";
import { RiShieldCheckFill } from "react-icons/ri";
import { BsFillBarChartLineFill } from "react-icons/bs";
import Footer from "../../components/Footer";
import { Input } from '@chakra-ui/react'

const Partner = () => {
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
              Become Our Partner
            </Text>
            <Text
              w={{ base: "100%", lg: "700px" }}
              fontSize={{ base: "14px", lg: "18px" }}
              fontWeight={"300"}
              mt={"20px"}
              color={"white"}
            >
              If you have connections with other companies that would be a good
              fit for Digital Omnicon as clients, we should discuss forming a
              partnership. The collaboration will expand your services and offer
              extra source income for revenue generation.
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
              Partner With Us
            </Button>
          </Box>
        </Box>
      </Box>

      <Box textAlign={"center"} p={"40px"}>
        <Text fontSize={"50px"} fontWeight={""} mt={""} color={""}>
          How is the partnership set up?
        </Text>
        <Text fontSize={""} fontWeight={""} mt={"20px"} color={""}>
          At Digital Omnicon, partnerships are the cornerstone of our growth
          strategy. Our setup process is seamless, rooted in collaboration, and
          designed to ensure mutual success. We begin with understanding your
          business goals, followed by aligning our digital expertise with your
          needs. With transparent communication and a structured integration
          system, we forge partnerships that drive digital excellence and shared
          triumphs.
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
          Book A Call
        </Button>
      </Box>
      <Box p={"20px"}>
        <Image w={"600px"} src="/partner.webp" />
      </Box>

      <Box textAlign={"center"} my={"60px"}>
        <Text fontSize={"35px"} fontWeight={"700"} mt={""} color={""}>
          Collaborate & Conquer
        </Text>
        <Text fontSize={"40px"} fontWeight={"700"} mt={""} color={"#FF5E29"}>
          <span className="learn">Digital Omnicon's</span> Partnership Spectrum
        </Text>
        <Flex justifyContent={"center"}>
          <Text
            textAlign={"center"}
            w={"1000px"}
            fontSize={""}
            fontWeight={""}
            mt={"20px"}
            color={""}
          >
            Dive into a world of collaboration with Digital Omnicon’s diverse
            range of partnership models. From strategic alliances to white-label
            solutions, our spectrum is tailored to fit varying business
            objectives and growth ambitions. Together, let’s shape the digital
            landscape, ensuring mutual success and unparalleled innovation.
          </Text>
        </Flex>
      </Box>

      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        py={{ base: "10px", lg: "60px" }}
        px={{ base: "10px", lg: "60px" }}
        alignItems={"center"}
        justifyContent={""}
      >
        <Flex
          order={{ base: "2", lg: "1" }}
          mt={{ base: "20px", lg: "" }}
          justifyContent={""}
          w={{ base: "100%", lg: "50%" }}
        >
          <Box>
            <Text
              fontSize={"40px"}
              fontWeight={"500"}
              mt={""}
              color={"#FF5E29"}
            >
              Referral Partnership
            </Text>

            <Text
              fontSize={"16px"}
              lineHeight={"1.8"}
              fontWeight={""}
              mt={"5px"}
              color={""}
            >
              Spot an opportunity but can’t cater to it? Refer businesses in
              need of top-tier digital marketing services to Digital Omnicon. In
              return, enjoy handsome commissions or benefits tailored to the
              value you bring.
            </Text>
          </Box>
        </Flex>

        <Flex
          mt={{ base: "20px", lg: "" }}
          order={{ base: "2", lg: "" }}
          justifyContent={"end"}
          w={{ base: "100%", lg: "50%" }}
        >
          <Image height={"500px"} src="/referalparnership.webp" />
        </Flex>
      </Flex>

      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        py={{ base: "10px", lg: "60px" }}
        px={{ base: "10px", lg: "60px" }}
        alignItems={"center"}
        justifyContent={""}
      >
        <Flex
          mt={{ base: "20px", lg: "" }}
          order={{ base: "2", lg: "1" }}
          justifyContent={"start"}
          w={{ base: "100%", lg: "50%" }}
        >
          <Image height={"500px"} src="/strategicpartnership.webp" />
        </Flex>

        <Flex
          order={{ base: "1", lg: "2" }}
          mt={{ base: "20px", lg: "" }}
          justifyContent={""}
          w={{ base: "100%", lg: "50%" }}
        >
          <Box>
            <Text
              fontSize={"40px"}
              fontWeight={"500"}
              mt={""}
              color={"#FF5E29"}
            >
              Strategic Partnership
            </Text>

            <Text
              fontSize={"16px"}
              lineHeight={"1.8"}
              fontWeight={""}
              mt={"5px"}
              color={""}
            >
              We can partner with you strategically if you have a large client
              base and a similar value proposition to ours. You can affiliate
              your brand with Neil Patel, and we can cross-promote each other’s
              products and services. This will help us both attract more
              qualified leads.
            </Text>
          </Box>
        </Flex>
      </Flex>

      {/* Channel Reseller */}

      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        py={{ base: "10px", lg: "60px" }}
        px={{ base: "10px", lg: "60px" }}
        alignItems={"center"}
        justifyContent={""}
      >
        <Flex
          order={{ base: "2", lg: "1" }}
          mt={{ base: "20px", lg: "" }}
          justifyContent={""}
          w={{ base: "100%", lg: "50%" }}
        >
          <Box>
            <Text
              fontSize={"40px"}
              fontWeight={"500"}
              mt={""}
              color={"#FF5E29"}
            >
              Channel Reseller
            </Text>

            <Text
              fontSize={"16px"}
              lineHeight={"1.8"}
              fontWeight={""}
              mt={"5px"}
              color={""}
            >
              If you are an agency that wants to broaden your offerings,
              increase your advertising reach, and generate new revenue streams,
              you can become a channel reseller for us. This means you will sell
              our products and services under your brand. We will provide you
              with the tools and support you need to be successful.
            </Text>
          </Box>
        </Flex>

        <Flex
          mt={{ base: "20px", lg: "" }}
          order={{ base: "2", lg: "" }}
          justifyContent={"end"}
          w={{ base: "100%", lg: "50%" }}
        >
          <Image height={"500px"} src="/channel reseller.webp" />
        </Flex>
      </Flex>

      <Flex alignItems={"center"} px={{base:"10px",lg:"54px"}} minH={"80vh"}>
        <Text w={{base:"100%",lg:"900px"}} fontSize={{base:"30px",lg:"70px"}} fontWeight={""} mt={""} color={""}>
          Step Into the Future  with Digital Omnicon.
           Partner Now!
        </Text>
      </Flex>

      <Box textAlign={"center"}>
        <Flex flexDirection={{base:"column",lg:"row"}} gap={"8px"} justifyContent={"center"} alignItems={"center"}>
          <Text fontSize={{base:"30px",lg:"40px"}} fontWeight={""} mt={""} color={"#17478E"}>
            Key Elements of Our{" "}
          </Text>
          <Text fontSize={{base:"30px",lg:"40px"}} fontWeight={""} color={"#FF5E29"}>
             Partner Program
          </Text>
        </Flex>
        <Flex mt={{base:"20px",lg:""}}   justifyContent={"center"} >
        <Text w={{base:"100%",lg:"600px"}} fontSize={""} fontWeight={""} mt={""} color={""}>
          As a member of the Digital Omnicon Partner program, we offer a variety
          of benefits to help you and your clients succeed. These benefits
          include:
        </Text>
        </Flex>
      </Box>

      <Grid mt={"50px"} templateColumns={{base:"1fr",lg:"1fr 1fr 1fr 1fr"}}>
      <GridItem display={"flex"} justifyContent={"center"} colSpan={{base:"1fr"}}>
            <Flex border={"1px solid #17478E"} alignItems={"center"} justifyContent={"center"} p={"20px"} boxShadow={"0px 4px 20px #17478E"} w={"300px"} h={"300px"} borderRadius={"25px"}>
            <Box mt={"40px"} textAlign={"center"}>

            <Text fontSize={"25px"} fontWeight={""} mt={""} color={"#FF5E29"}>Technical training</Text>
            <Text fontSize={""} lineHeight={"1.8"} fontWeight={""} mt={"10px"} color={""}>We provide you with the training you need to understand our products and services, so you can better serve your clients.</Text>
            </Box>
            </Flex>
        </GridItem>
        <GridItem display={"flex"} justifyContent={"center"} colSpan={{base:"1fr"}}>
            <Flex border={"1px solid #17478E"} alignItems={"center"} justifyContent={"center"} p={"20px"} boxShadow={"0px 4px 20px #17478E"} w={"300px"} h={"300px"} borderRadius={"25px"}>
            <Box mt={"40px"} textAlign={"center"}>

            <Text fontSize={"25px"} fontWeight={""} mt={""} color={"#FF5E29"}>Technical training</Text>
            <Text fontSize={""} lineHeight={"1.8"} fontWeight={""} mt={"10px"} color={""}>We provide you with the training you need to understand our products and services, so you can better serve your clients.</Text>
            </Box>
            </Flex>
        </GridItem>
        <GridItem display={"flex"} justifyContent={"center"} colSpan={{base:"1fr"}}>
            <Flex border={"1px solid #17478E"} alignItems={"center"} justifyContent={"center"} p={"20px"} boxShadow={"0px 4px 20px #17478E"} w={"300px"} h={"300px"} borderRadius={"25px"}>
            <Box mt={"40px"} textAlign={"center"}>

            <Text fontSize={"25px"} fontWeight={""} mt={""} color={"#FF5E29"}>Technical training</Text>
            <Text fontSize={""} lineHeight={"1.8"} fontWeight={""} mt={"10px"} color={""}>We provide you with the training you need to understand our products and services, so you can better serve your clients.</Text>
            </Box>
            </Flex>
        </GridItem>

        <GridItem display={"flex"} justifyContent={"center"} colSpan={{base:"1fr"}}>
            <Flex border={"1px solid #17478E"} alignItems={"center"} justifyContent={"center"} p={"20px"} boxShadow={"0px 4px 20px #17478E"} w={"300px"} h={"300px"} borderRadius={"25px"}>
            <Box mt={"40px"} textAlign={"center"}>

            <Text fontSize={"25px"} fontWeight={""} mt={""} color={"#FF5E29"}>Technical training</Text>
            <Text fontSize={""} lineHeight={"1.8"} fontWeight={""} mt={"10px"} color={""}>We provide you with the training you need to understand our products and services, so you can better serve your clients.</Text>
            </Box>
            </Flex>
        </GridItem>

        <GridItem mt={"40px"} display={"flex"} justifyContent={"center"} colSpan={{base:"1fr"}}>
            <Flex border={"1px solid #17478E"} alignItems={"center"} justifyContent={"center"} p={"20px"} boxShadow={"0px 4px 20px #17478E"} w={"300px"} h={"250px"} borderRadius={"25px"}>
            <Box mt={"40px"} textAlign={"center"}>

            <Text fontSize={"25px"} fontWeight={""} mt={""} color={"#FF5E29"}>Technical training</Text>
            <Text fontSize={""} lineHeight={"1.8"} fontWeight={""} mt={"10px"} color={""}>We provide you with the training you need to understand our products and services, so you can better serve your clients.</Text>
            </Box>
            </Flex>
        </GridItem>
        <GridItem mt={"40px"} display={"flex"} justifyContent={"center"} colSpan={{base:"1fr"}}>
            <Flex border={"1px solid #17478E"} alignItems={"center"} justifyContent={"center"} p={"20px"} boxShadow={"0px 4px 20px #17478E"} w={"300px"} h={"250px"} borderRadius={"25px"}>
            <Box mt={"40px"} textAlign={"center"}>

            <Text fontSize={"25px"} fontWeight={""} mt={""} color={"#FF5E29"}>Technical training</Text>
            <Text fontSize={""} lineHeight={"1.8"} fontWeight={""} mt={"10px"} color={""}>We provide you with the training you need to understand our products and services, so you can better serve your clients.</Text>
            </Box>
            </Flex>
        </GridItem>
        <GridItem mt={"40px"} display={"flex"} justifyContent={"center"} colSpan={{base:"1fr"}}>
            <Flex border={"1px solid #17478E"} alignItems={"center"} justifyContent={"center"} p={"20px"} boxShadow={"0px 4px 20px #17478E"} w={"300px"} h={"250px"} borderRadius={"25px"}>
            <Box mt={"40px"} textAlign={"center"}>

            <Text fontSize={"25px"} fontWeight={""} mt={""} color={"#FF5E29"}>Technical training</Text>
            <Text fontSize={""} lineHeight={"1.8"} fontWeight={""} mt={"10px"} color={""}>We provide you with the training you need to understand our products and services, so you can better serve your clients.</Text>
            </Box>
            </Flex>
        </GridItem>
        <GridItem mt={"40px"} display={"flex"} justifyContent={"center"} colSpan={{base:"1fr"}}>
            <Flex border={"1px solid #17478E"} alignItems={"center"} justifyContent={"center"} p={"20px"} boxShadow={"0px 4px 20px #17478E"} w={"300px"} h={"250px"} borderRadius={"25px"}>
            <Box mt={"40px"} textAlign={"center"}>

            <Text fontSize={"25px"} fontWeight={""} mt={""} color={"#FF5E29"}>Technical training</Text>
            <Text fontSize={""} lineHeight={"1.8"} fontWeight={""} mt={"10px"} color={""}>We provide you with the training you need to understand our products and services, so you can better serve your clients.</Text>
            </Box>
            </Flex>
        </GridItem>
      </Grid>



<Box py={"40px"}>
<Flex my={"40px"} gap={"8px"} justifyContent={"center"} alignItems={"center"}>
          <Text fontSize={"40px"} fontWeight={""} mt={""} color={"#17478E"}>
          Partner
          </Text>
          <Text fontSize={"40px"} fontWeight={""} mt={""} color={"#FF5E29"}>
          with us.
          </Text>
        </Flex>


<Grid templateColumns={{base:"1fr",lg:"1fr 1fr"}}>
    <GridItem px={"20px"} colSpan={{base:"1fr"}}>
    <Text mb={"5px"}>First Name</Text>
    <Input placeholder='First Name' size='md' />
    </GridItem>
    <GridItem px={"20px"} colSpan={{base:"1fr"}}>
    <Text mb={"5px"}>Last Name</Text>
    <Input placeholder='Last Name' size='md' />
    </GridItem>
</Grid>
<Grid mt={"40px"} templateColumns={{base:"1fr",lg:"1fr 1fr"}}>
    <GridItem px={"20px"} colSpan={{base:"1fr"}}>
    <Text mb={"5px"}>E-Mail Address</Text>
    <Input placeholder='E-Mail Address' size='md' />
    </GridItem>
    <GridItem px={"20px"} colSpan={{base:"1fr"}}>
    <Text mb={"5px"}>Phone Number</Text>
    <Input placeholder='Phone Number' size='md' />
    </GridItem>
</Grid>

<Grid mt={"40px"} templateColumns={{base:"1fr",lg:"1fr 1fr"}}>
    <GridItem px={"20px"} colSpan={{base:"1fr"}}>
    <Text mb={"5px"}>Website URL</Text>
    <Input placeholder='Website URL' size='md' />
    </GridItem>
    <GridItem px={"20px"} colSpan={{base:"1fr"}}>
    <Text mb={"5px"}>I'm interest in...</Text>
    <Input placeholder='interest in' size='md' />
    </GridItem>
</Grid>
<Grid mt={"40px"} templateColumns={{base:"1fr",lg:"1fr"}}>
    <GridItem px={"20px"} colSpan={{base:"1fr"}}>
    <Text mb={"5px"}>Message</Text>
    <Textarea placeholder='Message' resize={"none"} />
    </GridItem>
    
</Grid>

</Box>


<Footer/>

    </>
  );
};

export default Partner;
