import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import { MdArrowRightAlt } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { FaPeopleArrows } from "react-icons/fa6";
import { RiShieldCheckFill } from "react-icons/ri";
import { BsFillBarChartLineFill } from "react-icons/bs";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <Header />
      <Box
        backgroundImage={"url(/milestone.webp)"}
        position={"relative"}
        minH={"85vh"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        // display={"flex"}
        // alignItems={"center"}
        // justifyContent={"center"}
        // zIndex={1}
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
              Who We Are
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
              Contact us
            </Button>
          </Box>
        </Box>
      </Box>

      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        py={{ base: "10px", lg: "60px" }}
        px={{ base: "10px", lg: "100px" }}
        alignItems={"center"}
        justifyContent={""}
      >
        <Flex
          order={{ base: "2", lg: "1" }}
          justifyContent={""}
          w={{ base: "100%", lg: "50%" }}
        >
          <Image height={"600px"} src="/marketing.jpg" />
        </Flex>
        <Flex
          order={{ base: "1", lg: "2" }}
          mt={{ base: "20px", lg: "" }}
          justifyContent={"center"}
          w={{ base: "100%", lg: "50%" }}
        >
          <Box>
            <Text
              fontSize={"40px"}
              fontWeight={"500"}
              mt={""}
              color={"#FF5E29"}
            >
              <span className="learn"> Learn</span> About Our Agency{" "}
            </Text>
            <Text
              fontSize={"30px"}
              fontWeight={"600"}
              mt={""}
              color={"#353535"}
            >
              Helping Online Businesses
            </Text>
            <Text
              fontSize={"16px"}
              lineHeight={"1.5"}
              fontWeight={""}
              mt={"5px"}
              color={""}
            >
              We deeply understand the ever-changing digital landscape and use
              our expertise to create custom marketing strategies that deliver
              results. Every business is unique, and we tailor our approach to
              each client. We start by understanding your business nature, goals
              and objectives and then develop a plan to help you achieve them.
              We work with you every step of the way and are always available to
              answer your questions and provide support.
            </Text>
            <Button mt={"20px"} bg={"#FF5E29"} color={"white"} w={"100%"}>
              Let's chat
            </Button>
            <Image
              mt={"20px"}
              w={"100%"}
              height={"220px"}
              src="/letschat.jpg"
            />
          </Box>
        </Flex>
      </Flex>

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
              color={"#17478E"}
            >
              Help Businesses Worldwide
            </Text>
            <Text
              fontSize={"30px"}
              fontWeight={"500"}
              mt={""}
              color={"#FF5E29"}
            >
              Succeed to the Next Level
            </Text>
            <Text
              fontSize={"16px"}
              lineHeight={"1.5"}
              fontWeight={""}
              mt={"5px"}
              color={""}
            >
              At our digital agency, we specialize in search engine optimization
              (SEO) and marketing through social media development of websites
              and writing content and email marketing. Furthermore, we provide
              voice-over artist services to promote promotional videos. We aim
              to provide unique online marketing strategies and branding
              solutions for clients worldwide. We have the expert team, and
              passion to help you succeed. Contact us today if you are ready to
              take your business to the next level.
            </Text>
            <Button mt={"20px"} bg={"#056BD2"} color={"white"} w={"200px"}>
              Our Services
            </Button>
          </Box>
        </Flex>

        <Flex
          mt={{ base: "20px", lg: "" }}
          order={{ base: "2", lg: "" }}
          justifyContent={"end"}
          w={{ base: "100%", lg: "50%" }}
        >
          <Image height={"500px"} src="/success.webp" />
        </Flex>
      </Flex>

      {/*score */}

      <Flex
        gap={"20px"}
        justifyContent={"center"}
        alignItems={"center"}
        h={{ base: "", lg: "400px" }}
        bg={"black"}
        flexDirection={{ base: "column", lg: "row" }}
        py={{ base: "30px", lg: "" }}
      >
        <Box
          borderRadius={"15px"}
          minH={"200px"}
          w={"230px"}
          position={"relative"}
          color={"black"}
          bg={"#036797"}
          className=""
        >
          <Box
            backgroundImage={"url(/cardmarketing.jpg)"}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            borderRadius={"15px"}
            w={"100%"}
            h={"100%"}
            position={"absolute"}
            top={"-5px"}
          >
            <Flex
              borderRadius={"15px"}
              alignItems={"center"}
              justifyContent={"center"}
              w={"100%"}
              h={"100%"}
              bg={"rgba(255,255,255,0.5)"}
            >
              <Box textAlign={"center"}>
                <Text fontSize={"45px"} fontWeight={"600"} mt={""} color={""}>
                  4+
                </Text>
                <Text fontSize={"20px"} fontWeight={"600"} mt={""} color={""}>
                  Years in Marketing
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box
          borderRadius={"15px"}
          minH={"200px"}
          w={"230px"}
          position={"relative"}
          color={"black"}
          bg={"#036797"}
          className=""
        >
          <Box
            backgroundImage={"url(/cardmarketing.jpg)"}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            borderRadius={"15px"}
            w={"100%"}
            h={"100%"}
            position={"absolute"}
            top={"-5px"}
          >
            <Flex
              borderRadius={"15px"}
              alignItems={"center"}
              justifyContent={"center"}
              w={"100%"}
              h={"100%"}
              bg={"rgba(255,255,255,0.5)"}
            >
              <Box textAlign={"center"}>
                <Text fontSize={"45px"} fontWeight={"600"} mt={""} color={""}>
                  32 +
                </Text>
                <Text fontSize={"20px"} fontWeight={"600"} mt={""} color={""}>
                  Team Member
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box
          borderRadius={"15px"}
          minH={"200px"}
          w={"230px"}
          position={"relative"}
          color={"black"}
          bg={"#036797"}
          className=""
        >
          <Box
            backgroundImage={"url(/cardmarketing.jpg)"}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            borderRadius={"15px"}
            w={"100%"}
            h={"100%"}
            position={"absolute"}
            top={"-5px"}
          >
            <Flex
              borderRadius={"15px"}
              alignItems={"center"}
              justifyContent={"center"}
              w={"100%"}
              h={"100%"}
              bg={"rgba(255,255,255,0.5)"}
            >
              <Box textAlign={"center"}>
                <Text fontSize={"45px"} fontWeight={"600"} mt={""} color={""}>
                  100+
                </Text>
                <Text fontSize={"20px"} fontWeight={"600"} mt={""} color={""}>
                  Websites
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box
          borderRadius={"15px"}
          minH={"200px"}
          w={"230px"}
          position={"relative"}
          color={"black"}
          bg={"#036797"}
          className=""
        >
          <Box
            backgroundImage={"url(/cardmarketing.jpg)"}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            borderRadius={"15px"}
            w={"100%"}
            h={"100%"}
            position={"absolute"}
            top={"-5px"}
          >
            <Flex
              borderRadius={"15px"}
              alignItems={"center"}
              justifyContent={"center"}
              w={"100%"}
              h={"100%"}
              bg={"rgba(255,255,255,0.5)"}
            >
              <Box textAlign={"center"}>
                <Text fontSize={"45px"} fontWeight={"600"} mt={""} color={""}>
                  155+
                </Text>
                <Text fontSize={"20px"} fontWeight={"600"} mt={""} color={""}>
                  SEO Campaign
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box
          borderRadius={"15px"}
          minH={"200px"}
          w={"230px"}
          position={"relative"}
          color={"black"}
          bg={"#036797"}
          className=""
        >
          <Box
            backgroundImage={"url(/cardmarketing.jpg)"}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            borderRadius={"15px"}
            w={"100%"}
            h={"100%"}
            position={"absolute"}
            top={"-5px"}
          >
            <Flex
              borderRadius={"15px"}
              alignItems={"center"}
              justifyContent={"center"}
              w={"100%"}
              h={"100%"}
              bg={"rgba(255,255,255,0.5)"}
            >
              <Box textAlign={"center"}>
                <Text fontSize={"45px"} fontWeight={"600"} mt={""} color={""}>
                  600+
                </Text>
                <Text fontSize={"20px"} fontWeight={"600"} mt={""} color={""}>
                  Graphic Design
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>

      {/* our aim mission and vision */}

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
              <span className="learn">Our Aim,</span> Mission & Vison
            </Text>

            <Text
              fontSize={"16px"}
              lineHeight={"1.8"}
              fontWeight={""}
              mt={"5px"}
              color={""}
            >
              Our mission is to provide expert digital marketing and IT services
              that drive brand awareness, generate leads, increase sales, and
              improve efficiency and productivity for businesses. We strive to
              continuously improve and innovate in order to deliver the most
              efficient products and services to our clients.
            </Text>
            <Text
              fontSize={"16px"}
              lineHeight={"1.8"}
              fontWeight={""}
              mt={"20px"}
              color={""}
            >
              Our vision is to be a trusted partner for our clients as they
              navigate the constantly evolving world of technology. We aim to
              establish long-lasting relationships with our clients by providing
              exceptional customer service and support, and to create a positive
              and collaborative workplace culture that attracts and retains
              high-quality talent. Ultimately, we hope to make a positive impact
              in our community through our various social responsibility
              initiatives.
            </Text>
          </Box>
        </Flex>

        <Flex
          mt={{ base: "20px", lg: "" }}
          order={{ base: "2", lg: "" }}
          justifyContent={"end"}
          w={{ base: "100%", lg: "50%" }}
        >
          <Image height={"500px"} src="/successsteps.webp" />
        </Flex>
      </Flex>

      {/* last section about page */}

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
              fontSize={"20px"}
              fontWeight={"500"}
              mt={""}
              color={"#808080"}
            >
              DIGITAL OMNICON
            </Text>
            <Text fontSize={"30px"} fontWeight={"500"} mt={"20px"}>
              Navigating the Business Landscape
            </Text>
            <Text
              fontSize={"50px"}
              fontWeight={"500"}
              mt={""}
              color={"#1C80C5"}
            >
              Business Growth
            </Text>
            <Text
              fontSize={"15px"}
              lineHeight={"1.5"}
              fontWeight={""}
              mt={"5px"}
              color={""}
            >
              At Digital Omnicon, we specialize in creating tailored digital
              marketing strategies that drive results. Our dedicated team is
              committed to boosting your online presence
            </Text>
            <Flex mt={"20px"} alignItems={"center"} gap={"20px"}>
            <Box textAlign={"center"}>
              <Text fontSize={"30px"} fontWeight={"500"} mt={""} color={"#1C80C3"}>
                230+
              </Text>
              <Text fontSize={"20px"} fontWeight={""} mt={""} color={"rgba(0,0,0,0.7)"}>
                Happy Clients
              </Text>
            </Box>
            <Box textAlign={"center"}>
              <Text fontSize={"30px"} fontWeight={"500"} mt={""} color={"#1C80C3"}>
              100%
              </Text>
              <Text fontSize={"20px"} fontWeight={""} mt={""} color={"rgba(0,0,0,0.7)"}>
              Client Satisfaction
              </Text>
            </Box>
            </Flex>

            <Button mt={"20px"} bg={"#1C80C3"} color={"white"} w={"200px"}>
            Get Started
            </Button>
          </Box>
        </Flex>

        <Flex
          mt={{ base: "20px", lg: "" }}
          order={{ base: "2", lg: "" }}
          justifyContent={"end"}
          w={{ base: "100%", lg: "50%" }}
        >
          <Image height={"500px"} src="/success.webp" />
        </Flex>
      </Flex>

      <Footer/>
    </>
  );
};

export default About;
