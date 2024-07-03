/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import Header from "../components/Header";
import "./Home.css";
import { useEffect, useRef, useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { FaPeopleArrows } from "react-icons/fa6";
import { RiShieldCheckFill } from "react-icons/ri";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import Footer from "../components/Footer";
import AnimatedCircularProgress from "../components/AnimatedCircularProgress ";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typed from "typed.js";

import MyCarousel from "../components/MyCarousel";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const duration = 200; // Duration of the animation in milliseconds
    const interval = 10; // Interval time in milliseconds
    const increment = 300 / (duration / interval); // Amount to increment per interval

    const intervalId = setInterval(() => {
      setValue((prev) => {
        if (prev + increment >= 300) {
          clearInterval(intervalId);
          return 300;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: ["Front-End Developer"],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  useGSAP(() => {
    let tl = gsap.timeline();

    // gsap.to(".navbar", {
    //   background: "#1C80C5",

    //   height: "80px",
    //   scrollTrigger: {
    //     trigger: ".navbar",
    //     start: "top -10%",
    //     end: "top -10%",
    //     scrub: true,
    //   },
    // });
    gsap.from(".aboutImg", {
      y: 300,

      scrollTrigger: {
        trigger: ".aboutImg",
        start: "top 100%",
        end: "top 40%",

        scrub: true,
      },
    });

    gsap.from(".ourServicesFirstRow", {
      y: 300,
      scrollTrigger: {
        trigger: ".ourServicesFirstRow",
        // markers: true,
        start: "top 150%",
        end: "top 120%",
        scrub: 2,
      },
    });
    gsap.from(".ourServicesLongCard", {
      y: 300,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".ourServicesLongCard",
        markers: true,
        start: "top 150%",
        end: "top 120%",
        scrub: 2,
      },
    });

    gsap.to(".hireus", {
      y: 1,
      rotateZ: "20deg",
      repeat: -1,
      yoyo: true,
    });
  }, {});
  return (
    <>
      <Header />

      <Flex
        p={{ base: "10px", lg: "" }}
        py={{ base: "30px", lg: "" }}
        alignItems={"center"}
        justifyContent={"center"}
        minH={"100vh"}
        //  bg={"black"}
        color={"white"}
        className="home-bg"
        position={"relative"}
        zIndex={"9"}
      >
        <Box
          zIndex={"-1"}
          w={"100%"}
          h={"100%"}
          bg={"rgba(0,0,0,0.7)"}
          position={"absolute"}
        />
        <Box textAlign={"center"}>
          <Flex className="mytext" justifyContent={"center"}>
            <Text
              width={"fit-content"}
              py={"5px"}
              px={{ base: "10px", lg: "20px" }}
              border={"1px solid #E6F2FD"}
              borderRadius={"20px"}
              fontSize={"18px"}
              fontWeight={""}
              color={"#E6F2FD"}
            >
              👋 Hey there! We’re Digital Omnicon
            </Text>
          </Flex>
          <Text
            my={"20px"}
            fontSize={{ base: "20px", lg: "42px" }}
            fontWeight={""}
            color={""}
          >
            We are Expert in Providing <span className="auto-type"></span>
          </Text>
          <Text
            fontSize={{ base: "20px", lg: "33px" }}
            fontWeight={""}
            color={"#FF5E29"}
          >
            solutions that accelerate growth
          </Text>
          <Text
            mt={"20px"}
            fontSize={{ base: "15px", lg: "18px" }}
            fontWeight={""}
            color={""}
          >
            Search is in our DNA, and it always will be. But to drive true
            <br />
            business growth we look at the bigger omni-channel picture.
          </Text>
          <Button
            width={"300px"}
            borderRadius={"20px"}
            mt={"30px"}
            fontSize={"22px"}
            colorScheme="orange"
          >
            Get In Touch
          </Button>
        </Box>
      </Flex>

      <Box>
        <Grid templateColumns={{ base: "1fr", lg: "2fr 3fr" }}>
          <GridItem
            minHeight={{ base: "", lg: "100vh" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            colSpan={{ base: "1fr" }}
            p={{ base: "10px", lg: "" }}
          >
            <Box className="aboutImg">
              <Image
                h={{ base: "", lg: "500px" }}
                src="/homedigitalmarketing.png"
              />
            </Box>
          </GridItem>
          <GridItem
            minHeight={{ base: "", lg: "100vh" }}
            justifyContent={"center"}
            bg={""}
            display={"flex"}
            alignItems={{ base: "start", lg: "center" }}
            colSpan={{ base: "1fr" }}
            p={{ base: "10px", lg: "" }}
          >
            <Box>
              <Flex alignItems={"center"} gap={"5px"}>
                <Text fontSize={{ base: "25px", lg: "37px" }} color={""}>
                  About
                </Text>
                <Text fontSize={{ base: "25px", lg: "37px" }} color={"#FF5E29"}>
                  Digital Omnicon
                </Text>
              </Flex>
              <Text
                w={{ base: "100%", lg: "700px" }}
                mt={"20px"}
                fontSize={"15px"}
                color={""}
              >
                Are you tired of watching your startup fade into obscurity while
                your competitors thrive? Discover the secret behind explosive
                business growth with our groundbreaking International Digital
                Marketing Agency.
              </Text>
              <Text
                w={{ base: "100%", lg: "700px" }}
                mt={"20px"}
                fontSize={"15px"}
                color={""}
              >
                Ready to turn your struggling startup into a thriving empire? As
                part of our exclusive offer for entrepreneurs ready to take
                their businesses to new heights, we will provide you with a
                comprehensive digital marketing strategy tailored to your
                company’s needs.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* <Box className="our-services" py={"90px"} px={"50px"}>
        <Text
          textAlign={"center"}
          fontSize={"20px"}
          fontWeight={""}
          color={"white"}
        >
          --------- What We Do For You ---------
        </Text>
        <Text
          my={"20px"}
          textAlign={"center"}
          fontSize={"59px"}
          fontWeight={""}
          color={"white"}
        >
          Our Services
        </Text>

        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}>
          <GridItem
            display={"flex"}
            justifyContent={"center"}
            colSpan={{ base: "1fr" }}
          >
            <Box
              backgroundPosition={"center"}
              backgroundSize={"cover"}
              backgroundRepeat={"no-repeat"}
              backgroundImage={"url(/ocean.jpg)"}
              p={"20px"}
              w={"300px"}
              h={"450px"}
              bg={""}
              position={"relative"}
            >
              <Box
                position={"absolute"}
                top={"0px"}
                left={0}
                w={"100%"}
                h={"100%"}
                bg={""}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                p={"20px"}
                _hover={{ bg: "#84D1D5", transition: "all linear .8s" }}
              >
                <Text
                  textAlign={"center"}
                  fontSize={"25px"}
                  fontWeight={""}
                  color={"transparent"}
                  _hover={{ color: "white", transition: "all linear .8s" }}
                >
                  EcoSystem and it's Beautiful Nature
                </Text>
              </Box>
              <Box color={"white"} textAlign={"center"} mt={"220px"}>
                <Text fontSize={"30px"} fontWeight={""} color={""}>
                  Ocean Life
                </Text>
                <Text
                  lineHeight={""}
                  mt={"10px"}
                  fontSize={"14px"}
                  fontWeight={""}
                  color={""}
                >
                  Certain but she but shyness why cottage. May the put
                  instrument sir entreaties affronting. Pretended exquisite see
                  cordially the you.
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            display={"flex"}
            justifyContent={"center"}
            colSpan={{ base: "1fr" }}
          >
            {" "}
            <Box
              backgroundPosition={"center"}
              backgroundSize={"cover"}
              backgroundRepeat={"no-repeat"}
              backgroundImage={"url(/creamproduct.jpg)"}
              p={"20px"}
              w={"300px"}
              h={"450px"}
              bg={""}
              position={"relative"}
            >
              <Box
                position={"absolute"}
                top={"0px"}
                left={0}
                w={"100%"}
                h={"100%"}
                bg={""}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                p={"20px"}
                _hover={{ bg: "#EFCCD8", transition: "all linear .8s" }}
              >
                <Text
                  textAlign={"center"}
                  fontSize={"25px"}
                  fontWeight={""}
                  color={"transparent"}
                  _hover={{ color: "white", transition: "all linear .8s" }}
                >
                  EcoSystem and it's Beautiful Nature
                </Text>
              </Box>
              <Box color={"white"} textAlign={"center"} mt={"30px"}>
                <Text fontSize={"30px"} fontWeight={""} color={""}>
                  Beauty Products
                </Text>
                <Text
                  lineHeight={""}
                  mt={"10px"}
                  fontSize={"14px"}
                  fontWeight={""}
                  color={""}
                >
                  Departure so attention pronounce satisfied daughters am. But
                  shy tedious pressed studied opinion entered windows off.
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            display={"flex"}
            justifyContent={"center"}
            colSpan={{ base: "1fr" }}
          >
            {" "}
            <Box
              backgroundPosition={"center"}
              backgroundSize={"cover"}
              backgroundRepeat={"no-repeat"}
              backgroundImage={"url(/girldancer.jpg)"}
              p={"20px"}
              w={"300px"}
              h={"450px"}
              bg={""}
              position={"relative"}
            >
              <Box
                position={"absolute"}
                top={"0px"}
                left={0}
                w={"100%"}
                h={"100%"}
                bg={""}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                p={"20px"}
                _hover={{ bg: "#FBB446", transition: "all linear .8s" }}
              >
                <Text
                  textAlign={"center"}
                  fontSize={"25px"}
                  fontWeight={""}
                  color={"transparent"}
                  _hover={{ color: "white", transition: "all linear .8s" }}
                >
                  EcoSystem and it's Beautiful Nature
                </Text>
              </Box>
              <Box color={"white"} textAlign={"center"} mt={"220px"}>
                <Text fontSize={"30px"} fontWeight={"600"} color={""}>
                  Organic Beauty
                </Text>
                <Text
                  lineHeight={""}
                  mt={"10px"}
                  fontSize={"14px"}
                  fontWeight={""}
                  color={""}
                >
                  Cordially convinced did incommode existence put out suffering
                  certainly. Besides another and saw ferrars limited ten say
                  unknown.
                </Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>

        <Grid mt={"60px"} templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}>
          <GridItem
            display={"flex"}
            justifyContent={"center"}
            colSpan={{ base: "1fr" }}
          >
            <Box
              backgroundPosition={"center"}
              backgroundSize={"cover"}
              backgroundRepeat={"no-repeat"}
              backgroundImage={"url(/ocean.jpg)"}
              p={"20px"}
              w={"300px"}
              h={"450px"}
              bg={""}
              position={"relative"}
            >
              <Box
                position={"absolute"}
                top={"0px"}
                left={0}
                w={"100%"}
                h={"100%"}
                bg={""}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                p={"20px"}
                _hover={{ bg: "#84D1D5", transition: "all linear .8s" }}
              >
                <Text
                  textAlign={"center"}
                  fontSize={"25px"}
                  fontWeight={""}
                  color={"transparent"}
                  _hover={{ color: "white", transition: "all linear .8s" }}
                >
                  EcoSystem and it's Beautiful Nature
                </Text>
              </Box>
              <Box color={"white"} textAlign={"center"} mt={"220px"}>
                <Text fontSize={"30px"} fontWeight={""} color={""}>
                  Ocean Life
                </Text>
                <Text
                  lineHeight={""}
                  mt={"10px"}
                  fontSize={"14px"}
                  fontWeight={""}
                  color={""}
                >
                  Certain but she but shyness why cottage. May the put
                  instrument sir entreaties affronting. Pretended exquisite see
                  cordially the you.
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            display={"flex"}
            justifyContent={"center"}
            colSpan={{ base: "1fr" }}
          >
            {" "}
            <Box
              backgroundPosition={"center"}
              backgroundSize={"cover"}
              backgroundRepeat={"no-repeat"}
              backgroundImage={"url(/creamproduct.jpg)"}
              p={"20px"}
              w={"300px"}
              h={"450px"}
              bg={""}
              position={"relative"}
            >
              <Box
                position={"absolute"}
                top={"0px"}
                left={0}
                w={"100%"}
                h={"100%"}
                bg={""}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                p={"20px"}
                _hover={{ bg: "#EFCCD8", transition: "all linear .8s" }}
              >
                <Text
                  textAlign={"center"}
                  fontSize={"25px"}
                  fontWeight={""}
                  color={"transparent"}
                  _hover={{ color: "white", transition: "all linear .8s" }}
                >
                  EcoSystem and it's Beautiful Nature
                </Text>
              </Box>
              <Box color={"white"} textAlign={"center"} mt={"30px"}>
                <Text fontSize={"30px"} fontWeight={""} color={""}>
                  Beauty Products
                </Text>
                <Text
                  lineHeight={""}
                  mt={"10px"}
                  fontSize={"14px"}
                  fontWeight={""}
                  color={""}
                >
                  Departure so attention pronounce satisfied daughters am. But
                  shy tedious pressed studied opinion entered windows off.
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            display={"flex"}
            justifyContent={"center"}
            colSpan={{ base: "1fr" }}
          >
            {" "}
            <Box
              backgroundPosition={"center"}
              backgroundSize={"cover"}
              backgroundRepeat={"no-repeat"}
              backgroundImage={"url(/girldancer.jpg)"}
              p={"20px"}
              w={"300px"}
              h={"450px"}
              bg={""}
              position={"relative"}
            >
              <Box
                position={"absolute"}
                top={"0px"}
                left={0}
                w={"100%"}
                h={"100%"}
                bg={""}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                p={"20px"}
                _hover={{ bg: "#FBB446", transition: "all linear .8s" }}
              >
                <Text
                  textAlign={"center"}
                  fontSize={"25px"}
                  fontWeight={""}
                  color={"transparent"}
                  _hover={{ color: "white", transition: "all linear .8s" }}
                >
                  EcoSystem and it's Beautiful Nature
                </Text>
              </Box>
              <Box color={"white"} textAlign={"center"} mt={"220px"}>
                <Text fontSize={"30px"} fontWeight={"600"} color={""}>
                  Organic Beauty
                </Text>
                <Text
                  lineHeight={""}
                  mt={"10px"}
                  fontSize={"14px"}
                  fontWeight={""}
                  color={""}
                >
                  Cordially convinced did incommode existence put out suffering
                  certainly. Besides another and saw ferrars limited ten say
                  unknown.
                </Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box> */}

      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        bg={"#035CB4"}
        h={"400px"}
      >
        <Box textAlign={"center"}>
          <Text fontSize={""} color={"white"} mt={""} fontWeight={"500"}>
            --------- Digital Omnicon ---------
          </Text>
          <Text fontSize={"50px"} color={"white"} mt={""} fontWeight={"500"}>
            Our Services
          </Text>
        </Box>
      </Flex>

      <Box>
        <Flex
          className="ourServicesFirstRow"
          flexDirection={{ base: "column", lg: "row" }}
          alignItems={"center"}
          gap={"50px"}
          justifyContent={"center"}
        >
          <Box
            mt={"-100px"}
            bg={"white"}
            boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
            w={"270px"}
            h={"220px"}
            p={"20px"}
            borderRadius={"10px"}
          >
            <Box mb={"10px"} color={"#1B80C2"}>
              <FaEdit fontSize={"30px"} />
            </Box>
            <Text fontSize={"19px"} color={""} mt={""} fontWeight={"500"}>
              Interaction Design
            </Text>
            <Text
              fontSize={"13px"}
              lineHeight={"1.5"}
              color={"GrayText"}
              mt={"5px"}
              fontWeight={"#1B80C2"}
            >
              Stunning graphic design for impactful branding and visual
              storytelling. Contact us
            </Text>
          </Box>
          <Box
            mt={{ base: "20px", lg: "-100px" }}
            bg={"white"}
            boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
            w={"270px"}
            h={"220px"}
            p={"20px"}
            borderRadius={"10px"}
          >
            <Box mb={"10px"} color={"#1B80C2"}>
              <FaEdit fontSize={"30px"} />
            </Box>
            <Text fontSize={"19px"} color={""} mt={""} fontWeight={"500"}>
              Interaction Design
            </Text>
            <Text
              fontSize={"13px"}
              lineHeight={"1.5"}
              color={"GrayText"}
              mt={"5px"}
              fontWeight={"#1B80C2"}
            >
              Stunning graphic design for impactful branding and visual
              storytelling. Contact us
            </Text>
          </Box>
          <Box
            mt={{ base: "20px", lg: "-100px" }}
            bg={"white"}
            boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
            w={"270px"}
            h={"220px"}
            p={"20px"}
            borderRadius={"10px"}
          >
            <Box mb={"10px"} color={"#1B80C2"}>
              <FaEdit fontSize={"30px"} />
            </Box>
            <Text fontSize={"19px"} color={""} mt={""} fontWeight={"500"}>
              Interaction Design
            </Text>
            <Text
              fontSize={"13px"}
              lineHeight={"1.5"}
              color={"GrayText"}
              mt={"5px"}
              fontWeight={"#1B80C2"}
            >
              Stunning graphic design for impactful branding and visual
              storytelling. Contact us
            </Text>
          </Box>
          <Box
            mt={{ base: "20px", lg: "-100px" }}
            bg={"white"}
            boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
            w={"270px"}
            h={"220px"}
            p={"20px"}
            borderRadius={"10px"}
          >
            <Box mb={"10px"} color={"#1B80C2"}>
              <FaEdit fontSize={"30px"} />
            </Box>
            <Text fontSize={"19px"} color={""} mt={""} fontWeight={"500"}>
              Interaction Design
            </Text>
            <Text
              fontSize={"13px"}
              lineHeight={"1.5"}
              color={"GrayText"}
              mt={"5px"}
              fontWeight={"#1B80C2"}
            >
              Stunning graphic design for impactful branding and visual
              storytelling. Contact us
            </Text>
          </Box>
        </Flex>

        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          alignItems={"center"}
          gap={"50px"}
          justifyContent={"center"}
          mt={"30px"}
        >
          <Flex
            className="ourServicesLongCard"
            alignItems={"center"}
            bg={"white"}
            boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
            w={{ base: "100%", lg: "350px" }}
            h={"200px"}
            p={"20px"}
            borderRadius={"10px"}
          >
            <Box>
              <Box mb={"10px"} color={"#FF348B"}>
                <FaPeopleArrows fontSize={"30px"} />
              </Box>
              <Text fontSize={"18px"} color={""} mt={""} fontWeight={"500"}>
                Interaction Design
              </Text>
              <Text
                fontSize={"13px"}
                lineHeight={"1.5"}
                color={"GrayText"}
                mt={"5px"}
                fontWeight={"#1B80C2"}
              >
                Stunning graphic design for impactful branding and visual
                storytelling. Contact us
              </Text>
            </Box>
          </Flex>
          <Flex
            className="ourServicesLongCard"
            alignItems={"center"}
            bg={"white"}
            boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
            w={{ base: "100%", lg: "350px" }}
            h={"200px"}
            p={"20px"}
            borderRadius={"10px"}
          >
            <Box>
              <Box mb={"10px"} color={"#1B80C2"}>
                <RiShieldCheckFill fontSize={"30px"} />
              </Box>
              <Text fontSize={"18px"} color={""} mt={""} fontWeight={"500"}>
                Interaction Design
              </Text>
              <Text
                fontSize={"13px"}
                lineHeight={"1.5"}
                color={"GrayText"}
                mt={"5px"}
                fontWeight={"#1B80C2"}
              >
                Stunning graphic design for impactful branding and visual
                storytelling. Contact us
              </Text>
            </Box>
          </Flex>
          <Flex
            className="ourServicesLongCard"
            alignItems={"center"}
            bg={"white"}
            boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
            w={{ base: "100%", lg: "350px" }}
            h={"200px"}
            p={"20px"}
            borderRadius={"10px"}
          >
            <Box>
              <Box mb={"10px"} color={"#FF348B"}>
                <BsFillBarChartLineFill fontSize={"30px"} />
              </Box>
              <Text fontSize={"18px"} color={""} mt={""} fontWeight={"500"}>
                Interaction Design
              </Text>
              <Text
                fontSize={"13px"}
                lineHeight={"1.5"}
                color={"GrayText"}
                mt={"5px"}
                fontWeight={"#1B80C2"}
              >
                Stunning graphic design for impactful branding and visual
                storytelling. Contact us
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        my={"100px"}
        alignItems={"center"}
        justifyContent={"space-around"}
        gap={"50px"}
      >
        <Flex flexDirection="column" alignItems="center">
          <AnimatedCircularProgress
            targetValue={300}
            label="300+"
            color="#FF348B"
            sign={"+"}
          />
          <Text fontSize="22px" color="#000" mt="20px" fontWeight="500">
            Happy Clients
          </Text>
        </Flex>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <AnimatedCircularProgress
            color={"#0077D4"}
            targetValue={99}
            label="99%"
            sign={"%"}
          />
          <Text fontSize={"22px"} color={""} mt={""} fontWeight={"500"}>
            Customer Satisfaction
          </Text>
        </Flex>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <AnimatedCircularProgress
            color={"#FF348B"}
            targetValue={100}
            label="99%"
            sign={"%"}
          />

          <Text fontSize={"22px"} color={""} mt={""} fontWeight={"500"}>
            Projects Completed
          </Text>
        </Flex>

        <Flex flexDirection={"column"} alignItems={"center"}>
          <AnimatedCircularProgress
            color={"#0077D4"}
            targetValue={100}
            label="100%"
            sign={"%"}
          />
          <Text fontSize={"22px"} color={""} mt={""} fontWeight={"500"}>
            Customer support
          </Text>
        </Flex>
      </Flex>

      <Box
        minH={"100vh"}
        backgroundImage={"url(/milestone.webp)"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        objectFit={"cover"}
        position={"relative"}
        zIndex={"1"}
        p={{ base: "10px", lg: "50px" }}
      >
        <Box
          zIndex={"-1"}
          width={"100%"}
          minHeight={"100vh"}
          top={"0"}
          left={0}
          position={"absolute"}
          bg={"rgba(0,0,0,0.7)"}
        ></Box>
        <Box textAlign={"center"}>
          <Text fontSize={""} fontWeight={""} color={"white"}>
            --------- Digital Omnicon ---------
          </Text>
          <Text
            fontSize={"40px"}
            mb={"50px"}
            fontWeight={"500"}
            color={"white"}
          >
            Why Choose Us
          </Text>
        </Box>

        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={"100px"}>
          <GridItem
            display={"flex"}
            justifyContent={{ base: "center", lg: "end" }}
            colSpan={{ base: "1fr" }}
          >
            <Box>
              <Flex
                flexDirection={{ base: "column", lg: "row" }}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"20px"}
              >
                <Box textAlign={{ base: "start", lg: "right" }}>
                  <Text fontSize={"22px"} fontWeight={""} color={"white"}>
                    Client-Centric Approach
                  </Text>
                  <Text
                    w={{ base: "100%", lg: "350px" }}
                    mt={"10px"}
                    fontSize={{ base: "100%", lg: "14px" }}
                    fontWeight={"500"}
                    color={"#A8A8A8"}
                  >
                    We offer personalized service, taking the time to understand
                    your business
                  </Text>
                </Box>
                <Box
                  position={"relative"}
                  transform="rotate(45deg)"
                  display={{ base: "none", lg: "flex" }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  w={"55px"}
                  h={"55px"}
                  bg={"#1B80C2"}
                  color={"white"}
                  borderRadius={"5px"}
                >
                  <Box position={"absolute"} transform="rotate(135deg)">
                    <MdArrowRightAlt size={"20px"} />
                  </Box>
                </Box>
              </Flex>
              <Flex
                mt={"30px"}
                justifyContent={{ base: "start", lg: "center" }}
                alignItems={"center"}
                gap={"20px"}
              >
                <Box textAlign={{ base: "start", lg: "right" }}>
                  <Text fontSize={"22px"} fontWeight={""} color={"white"}>
                    Client-Centric Approach
                  </Text>
                  <Text
                    mt={"10px"}
                    w={{ base: "100%", lg: "350px" }}
                    fontSize={"14px"}
                    fontWeight={""}
                    color={"#A8A8A8"}
                  >
                    We offer personalized service, taking the time to understand
                    your business
                  </Text>
                </Box>
                <Box
                  position={"relative"}
                  transform="rotate(45deg)"
                  display={{ base: "none", lg: "flex" }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bg={"#FE6E00"}
                  w={"55px"}
                  h={"55px"}
                  color={"white"}
                  borderRadius={"5px"}
                >
                  <Box position={"absolute"} transform="rotate(135deg)">
                    <MdArrowRightAlt size={"20px"} />
                  </Box>
                </Box>
              </Flex>
              <Flex
                mt={"30px"}
                justifyContent={{ base: "start", lg: "center" }}
                alignItems={"center"}
                gap={"20px"}
              >
                <Box textAlign={{ base: "start", lg: "right" }}>
                  <Text fontSize={"22px"} fontWeight={""} color={"white"}>
                    Client-Centric Approach
                  </Text>
                  <Text
                    w={{ base: "100%", lg: "350px" }}
                    mt={"10px"}
                    fontSize={"14px"}
                    fontWeight={"500"}
                    color={"#A8A8A8"}
                  >
                    We offer personalized service, taking the time to understand
                    your business
                  </Text>
                </Box>
                <Box
                  position={"relative"}
                  transform="rotate(45deg)"
                  display={{ base: "none", lg: "flex" }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  w={"55px"}
                  h={"55px"}
                  bg={"#1B80C2"}
                  color={"white"}
                  borderRadius={"5px"}
                >
                  <Box position={"absolute"} transform="rotate(135deg)">
                    <MdArrowRightAlt size={"20px"} />
                  </Box>
                </Box>
              </Flex>
              <Flex
                mt={"30px"}
                justifyContent={{ base: "start", lg: "center" }}
                alignItems={"center"}
                gap={"20px"}
              >
                <Box textAlign={{ base: "start", lg: "right" }}>
                  <Text fontSize={"22px"} fontWeight={""} color={"white"}>
                    Client-Centric Approach
                  </Text>
                  <Text
                    w={{ base: "100%", lg: "350px" }}
                    mt={"10px"}
                    fontSize={"14px"}
                    fontWeight={"500"}
                    color={"#A8A8A8"}
                  >
                    We offer personalized service, taking the time to understand
                    your business
                  </Text>
                </Box>
                <Box
                  position={"relative"}
                  transform="rotate(45deg)"
                  display={{ base: "none", lg: "flex" }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  w={"55px"}
                  h={"55px"}
                  bg={"#1B80C2"}
                  color={"white"}
                  borderRadius={"5px"}
                >
                  <Box position={"absolute"} transform="rotate(135deg)">
                    <MdArrowRightAlt size={"20px"} />
                  </Box>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          <GridItem display={"flex"} colSpan={{ base: "1fr" }}>
            <Box mt={"100px"}>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                gap={"20px"}
              >
                <Box
                  position={"relative"}
                  transform="rotate(45deg)"
                  display={{ base: "none", lg: "flex" }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  w={"55px"}
                  h={"55px"}
                  bg={"#1B80C2"}
                  color={"white"}
                  borderRadius={"5px"}
                >
                  <Box position={"absolute"} transform="rotate(-45deg)">
                    <MdArrowRightAlt size={"20px"} />
                  </Box>
                </Box>
                <Box>
                  <Text fontSize={"22px"} fontWeight={""} color={"white"}>
                    Client-Centric Approach
                  </Text>
                  <Text
                    w={{ base: "100%", lg: "350px" }}
                    fontSize={"14px"}
                    fontWeight={"500"}
                    mt={"10px"}
                    color={"#A8A8A8"}
                  >
                    We offer personalized service, taking the time to understand
                    your business
                  </Text>
                </Box>
              </Flex>
              <Flex
                mt={"30px"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"20px"}
              >
                <Box
                  position={"relative"}
                  transform="rotate(45deg)"
                  display={{ base: "none", lg: "flex" }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bg={"#1B80C2"}
                  w={"55px"}
                  h={"55px"}
                  color={"white"}
                  borderRadius={"5px"}
                >
                  <Box position={"absolute"} transform="rotate(-45deg)">
                    <MdArrowRightAlt size={"20px"} />
                  </Box>
                </Box>
                <Box>
                  <Text fontSize={"22px"} fontWeight={""} color={"white"}>
                    Client-Centric Approach
                  </Text>
                  <Text
                    w={{ base: "100%", lg: "350px" }}
                    fontSize={"14px"}
                    fontWeight={"500"}
                    mt={"10px"}
                    color={"#A8A8A8"}
                  >
                    We offer personalized service, taking the time to understand
                    your business
                  </Text>
                </Box>
              </Flex>
              <Flex
                mt={"30px"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"20px"}
              >
                <Box
                  position={"relative"}
                  transform="rotate(45deg)"
                  display={{ base: "none", lg: "flex" }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bg={"#1B80C2"}
                  w={"55px"}
                  h={"55px"}
                  color={"white"}
                  borderRadius={"5px"}
                >
                  <Box position={"absolute"} transform="rotate(-45deg)">
                    <MdArrowRightAlt size={"20px"} />
                  </Box>
                </Box>
                <Box>
                  <Text fontSize={"22px"} fontWeight={""} color={"white"}>
                    Client-Centric Approach
                  </Text>
                  <Text
                    w={{ base: "100%", lg: "350px" }}
                    fontSize={"14px"}
                    fontWeight={"500"}
                    mt={"10px"}
                    color={"#A8A8A8"}
                  >
                    We offer personalized service, taking the time to understand
                    your business
                  </Text>
                </Box>
              </Flex>
              <Flex
                mt={"30px"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"20px"}
              >
                <Box
                  position={"relative"}
                  transform="rotate(45deg)"
                  display={{ base: "none", lg: "flex" }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bg={"#FE6E00"}
                  w={"55px"}
                  h={"55px"}
                  color={"white"}
                  borderRadius={"5px"}
                >
                  <Box position={"absolute"} transform="rotate(-45deg)">
                    <MdArrowRightAlt size={"20px"} />
                  </Box>
                </Box>
                <Box>
                  <Text fontSize={"22px"} fontWeight={""} color={"white"}>
                    Client-Centric Approach
                  </Text>
                  <Text
                    w={{ base: "100%", lg: "350px" }}
                    fontSize={"14px"}
                    fontWeight={"500"}
                    mt={"10px"}
                    color={"#A8A8A8"}
                  >
                    We offer personalized service, taking the time to understand
                    your business
                  </Text>
                </Box>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      <Box>
        <Grid gap={"50px"} templateColumns={{ base: "1fr", lg: "1.3fr 1fr" }}>
          <GridItem
            minHeight={"100vh"}
            colSpan={{ base: "1fr" }}
            display={"flex"}
            justifyContent={{ base: "start", lg: "center" }}
          >
            <Flex
              flexDirection={{ base: "column", lg: "row" }}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"50px"}
            >
              <Box p={"20px"}>
                <Box className="container">
                  <Box
                    className="card"
                    boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
                   
                    borderRadius={"10px"}
                  >
                    <Box className="firstCard" p={"20px"} >
                      <Box mb={"10px"} color={"#1B80C2"}>
                        <FaEdit fontSize={"30px"} />
                      </Box>
                      <Text
                        fontSize={"22px"}
                        color={""}
                        mt={""}
                        fontWeight={"500"}
                      >
                        Interaction Design
                      </Text>
                      <Text
                        fontSize={"13px"}
                        lineHeight={"2"}
                        color={"GrayText"}
                        mt={"20px"}
                        fontWeight={"#1B80C2"}
                      >
                        Stunning graphic design for impactful branding and
                        visual storytelling. Contact us
                      </Text>
                    </Box>
                    <Box className="backCard" p={"20px"}>
                      <Box mb={"10px"} color={"#1B80C2"}>
                        <FaEdit fontSize={"30px"} />
                      </Box>
                      <Text
                        fontSize={"22px"}
                        color={""}
                        mt={""}
                        fontWeight={"500"}
                      >
                        Interaction Design back
                      </Text>
                      <Text
                        fontSize={"13px"}
                        lineHeight={"2"}
                        color={"GrayText"}
                        mt={"20px"}
                        fontWeight={"#1B80C2"}
                      >
                        Stunning graphic design for impactful branding and
                        visual storytelling. Contact us
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box className="container" mt={"50px"}>
                  <Box
                    className="card"
                    boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
                  
                    borderRadius={"10px"}
                  >
                    <Box className="firstCard"   p={"20px"}>
                      <Box mb={"10px"} color={"#FE6E00"}>
                        <GrOptimize fontSize={"30px"} />
                      </Box>
                      <Text
                        fontSize={"22px"}
                        color={""}
                        mt={""}
                        fontWeight={"500"}
                      >
                        SEO Optimizing
                      </Text>
                      <Text
                        fontSize={"13px"}
                        lineHeight={"2"}
                        color={"GrayText"}
                        mt={"20px"}
                        fontWeight={"#1B80C2"}
                      >
                        Stunning graphic design for impactful branding and
                        visual storytelling. Contact us
                      </Text>
                    </Box>
                    <Box className="backCard"   p={"20px"}>
                      <Box mb={"10px"} color={"#FE6E00"}>
                        <GrOptimize fontSize={"30px"} />
                      </Box>
                      <Text
                        fontSize={"22px"}
                        color={""}
                        mt={""}
                        fontWeight={"500"}
                      >
                        SEO Optimizing back
                      </Text>
                      <Text
                        fontSize={"13px"}
                        lineHeight={"2"}
                        color={"GrayText"}
                        mt={"20px"}
                        fontWeight={"#1B80C2"}
                      >
                        Stunning graphic design for impactful branding and
                        visual storytelling. Contact us
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box mt={"50px"} p={"20px"}>
                <Box className="container">
                  <Box
                    className="card"
                    boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
                  
                    borderRadius={"10px"}
                  >
                    <Box className="firstCard"   p={"20px"}>
                      <Box mb={"10px"} color={"#1B80C2"}>
                        <FaEdit fontSize={"30px"} />
                      </Box>
                      <Text
                        fontSize={"22px"}
                        color={""}
                        mt={""}
                        fontWeight={"500"}
                      >
                        Interaction Design
                      </Text>
                      <Text
                        fontSize={"13px"}
                        lineHeight={"2"}
                        color={"GrayText"}
                        mt={"20px"}
                        fontWeight={"#1B80C2"}
                      >
                        Stunning graphic design for impactful branding and
                        visual storytelling. Contact us
                      </Text>
                    </Box>
                    <Box className="backCard"   p={"20px"}>
                      <Box mb={"10px"} color={"#1B80C2"}>
                        <FaEdit fontSize={"30px"} />
                      </Box>
                      <Text
                        fontSize={"22px"}
                        color={""}
                        mt={""}
                        fontWeight={"500"}
                      >
                        Interaction Design back
                      </Text>
                      <Text
                        fontSize={"13px"}
                        lineHeight={"2"}
                        color={"GrayText"}
                        mt={"20px"}
                        fontWeight={"#1B80C2"}
                      >
                        Stunning graphic design for impactful branding and
                        visual storytelling. Contact us
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box className="container" mt={"50px"}>
                  <Box
                    className="card"
                    boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
                   
                    borderRadius={"10px"}
                  >
                    <Box className="firstCard"  p={"20px"}>
                      <Box mb={"10px"} color={"#FE6E00"}>
                        <GrOptimize fontSize={"30px"} />
                      </Box>
                      <Text
                        fontSize={"22px"}
                        color={""}
                        mt={""}
                        fontWeight={"500"}
                      >
                        SEO Optimizing
                      </Text>
                      <Text
                        fontSize={"13px"}
                        lineHeight={"2"}
                        color={"GrayText"}
                        mt={"20px"}
                        fontWeight={"#1B80C2"}
                      >
                        Stunning graphic design for impactful branding and
                        visual storytelling. Contact us
                      </Text>
                    </Box>
                    <Box className="backCard"  p={"20px"}>
                      <Box mb={"10px"} color={"#FE6E00"}>
                        <GrOptimize fontSize={"30px"} />
                      </Box>
                      <Text
                        fontSize={"22px"}
                        color={""}
                        mt={""}
                        fontWeight={"500"}
                      >
                        SEO Optimizing back
                      </Text>
                      <Text
                        fontSize={"13px"}
                        lineHeight={"2"}
                        color={"GrayText"}
                        mt={"20px"}
                        fontWeight={"#1B80C2"}
                      >
                        Stunning graphic design for impactful branding and
                        visual storytelling. Contact us
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </GridItem>

          <GridItem
            display={"flex"}
            alignItems={"center"}
            minHeight={"100vh"}
            bg={""}
            colSpan={{ base: "1fr" }}
            p={{ base: "10px", lg: "" }}
          >
            <Box>
              <Text
                fontSize={{ base: "30px", lg: "40px" }}
                color={""}
                mt={""}
                fontWeight={"600"}
              >
                We Are Expertise In
              </Text>
              <Text
                w={{ base: "100%", lg: "500px" }}
                fontSize={"14px"}
                color={"GrayText"}
                lineHeight={"1.7"}
                mt={"15px"}
                fontWeight={""}
              >
                At Digital Omnicon, we offer a comprehensive suite of digital
                services designed to elevate your brand and drive business
                success. Our web development team creates stunning, responsive
                websites tailored to your needs, from custom builds to
                e-commerce solutions and web applications. Our graphic design
                experts craft impactful visual identities, including logos,
                marketing materials, and digital graphics, to captivate your
                audience. With our SEO services, we boost your online visibility
                and search rankings through on-page optimization, keyword
                research, and local SEO
              </Text>
              <Button
                fontSize={"16px"}
                fontWeight={"500"}
                colorScheme="blue"
                size={"lg"}
                borderRadius={"5px"}
                w={"200px"}
                mt={"30px"}
              >
                Contact us
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* testimonials */}
      <Box py={"70px"}>
        <Text textAlign={"center"} fontSize={"30px"} fontWeight={""}>
          --------- What We Do For You ---------
        </Text>
        <Text textAlign={"center"} fontSize={"50px"} fontWeight={"500"}>
          Testimonials
        </Text>
        <Box mt={"30px"}>
          <MyCarousel />
        </Box>
      </Box>

      <Box p={{ base: "10px", lg: "50px" }} bg={"#F7F7F7"}>
        <Flex justifyContent={"center"}>
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            alignItems={"center"}
            gap={"40px"}
          >
            <Text fontSize={""} color={""} mt={""} fontWeight={"600"}>
              All
            </Text>
            <Text fontSize={""} color={""} mt={""} fontWeight={"600"}>
              Websites
            </Text>
            <Text fontSize={""} color={""} mt={""} fontWeight={"600"}>
              Graphic Design
            </Text>
            <Text fontSize={""} color={""} mt={""} fontWeight={"600"}>
              Digital Marketing
            </Text>
          </Flex>
        </Flex>

        <Grid
          mt={"30px"}
          rowGap={"20px"}
          templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr 1fr" }}
        >
          <GridItem
            display={{ base: "flex", lg: "" }}
            justifyContent={{ base: "center", lg: "" }}
            colSpan={{ base: "1fr" }}
          >
            <Box bg={"red"} w={"300px"} h={"200px"}></Box>
          </GridItem>
          <GridItem
            display={{ base: "flex", lg: "" }}
            justifyContent={{ base: "center", lg: "" }}
            colSpan={{ base: "1fr" }}
          >
            <Box bg={"red"} w={"300px"} h={"200px"}></Box>
          </GridItem>
          <GridItem
            display={{ base: "flex", lg: "" }}
            justifyContent={{ base: "center", lg: "" }}
            colSpan={{ base: "1fr" }}
          >
            <Box bg={"red"} w={"300px"} h={"200px"}></Box>
          </GridItem>
          <GridItem
            display={{ base: "flex", lg: "" }}
            justifyContent={{ base: "center", lg: "" }}
            colSpan={{ base: "1fr" }}
          >
            <Box bg={"red"} w={"300px"} h={"200px"}></Box>
          </GridItem>
        </Grid>
      </Box>

      <Footer />
    </>
  );
};

export default Home;
