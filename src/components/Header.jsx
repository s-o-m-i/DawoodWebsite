/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "./MyContext";

const Header = () => {

const {init,setinit} = useContext(MyContext)

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#1C80C5";
        // navbar.style.height = "80px";
      } else {
        
        navbar.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Flex
        transition={"all .5s ease"}
        id="navbar"
        className="navbar"
        position={{ base: "static", lg: "fixed" }}
        zIndex={"99"}
        bg={{ base: "black", lg: "transparent" }}
        w={"100%"}
        py={"20px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        h={{ base: "500px", lg: "80px" }}
        color={"white"}
        px={"56px"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Text fontSize={"30px"}>SD-Soft</Text>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          alignItems={"center"}
          gap={"40px"}
        >
          <NavLink
            to={"/"}
            className={({ isActive }) => `${isActive ? "active" : ""}`}
          >
            <Text
              fontWeight={"600"}
              fontSize={"14px"}
              textTransform={"uppercase"}
            >
              Home
            </Text>
          </NavLink>
          <NavLink
            to={"/services"}
            className={({ isActive }) => `${isActive ? "active" : ""}`}
          >
            <Text fontWeight={"600"} fontSize={"14px"} textTransform={"uppercase"}>
              Services
            </Text>
          </NavLink>
          <NavLink
            to={"/partner"}
            className={({ isActive }) => `${isActive ? "active" : ""}`}
          >
          <Text fontWeight={"600"} fontSize={"14px"} textTransform={"uppercase"}>
            Partner
          </Text>
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) => `${isActive ? "active" : ""}`}
          >
            <Text fontSize={"14px"} textTransform={"uppercase"}>
              About US
            </Text>
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => `${isActive ? "active" : ""}`}
          >
          <Text fontSize={"14px"} textTransform={"uppercase"}>
            CONTACT US
          </Text>
          </NavLink>
          <Text fontSize={"14px"} textTransform={"uppercase"}>
            BLOG
          </Text>
        </Flex>
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
          {init}
        </Button>
      </Flex>
    </>
  );
};

export default Header;
