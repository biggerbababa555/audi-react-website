import {
    
    Box,
    Flex,
    Heading,
    Icon,
    // Spacer,
    Text,
    useMediaQuery,
  } from "@chakra-ui/react";
//   import portfolio from "../../img/portfolio.png";
import { FaInstagram,FaGithub } from "react-icons/fa";
  // import { GiCondorEmblem } from "react-icons/gi";
//   import { Link } from "react-router-dom";
  const Footer = () => {
    const [isLargerThan] = useMediaQuery("(min-width: 768px)");
    const [isSmallerThan] = useMediaQuery("(min-width: 468px)");
   
    return (
      <div className="Footer">
        <Box
          bg="black"
          color="whitesmoke"
          height={isSmallerThan ? "50vh" : "50vh"}
          pt="3rem"
          lineHeight="2rem"
        >
          <Flex
            justify={"space-evenly"}
            width={["100%", "100%", "100%", "100%"]}
            textAlign={isSmallerThan ? "left" : "center"}
            fontSize={["sm", "md", "md", "md"]}
            flexDirection={isSmallerThan ? "row" : "column"}
          >
            <Box as={Flex} flexDirection="column">
              <Heading>Model overview</Heading>
              <Text>Audi A4</Text>
              <Text>Audi Q5</Text>
              <Text>Audi A5</Text>
              <Text>Audi Q7</Text>
              <Text>Audi RS7</Text>
              
            </Box>
  
            {isSmallerThan ? (
              <Box>
                <Heading>Service & Accessories</Heading>
                <Text>Audi Service Center</Text>
                <Text>Audi Genuine Parts and Accessories</Text>
                <Text>Audi Warranty</Text>
                <Text>Audi Roadside Assistance</Text>
                <Text>Service Appointment</Text>
                <Text>Recall Campaign Enquiry System</Text>
              </Box>
            ) : null}
  
            {isLargerThan ? (
              <Box>
                <Heading>Innovation</Heading>
                <Text>Vorsprung durch Technik</Text>
                <Text>Audi Sport</Text>
                <Text>Audi quattro</Text>
               
              </Box>
            ) : null}
            <Box mt="1rem" display={"flex"} gap="1rem" justifyContent={"center"}>
              <a
                href="https://www.instagram.com/bigger_kp/?hl=th"
                target={"_blank"}
                rel="noreferrer"
              >
                <Icon w={50} h={50} my="1rem" as={FaInstagram} color="white" />
              </a>
              <a
                href="https://github.com/nmewada01"
                target={"_blank"}
                rel="noreferrer"
              >
                <Icon w={50} h={50} my="1rem" as={FaGithub} color="white"/>
              </a>
              <a
                href="https://github.com/biggerbababa555"
                target={"_blank"}
                rel="noreferrer"
              >
                {/* <Avatar w={10} h={10} my="1rem" bg="white" src={portfolio} /> */}
              </a>
            </Box>
          </Flex>
        </Box>
      </div>
    );
  };
  
  export default Footer;