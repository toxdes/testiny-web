import * as React from "react";
import {
  VFlex,
  HFlex,
  Image,
  Link,
  Text,
  Button,
  Slide,
  useDisclosure,
} from "../../components";

import { openInNewTab } from "../../config/helpers";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { useDisableBodyScroll } from "../../hooks";
import { useNavigate } from "react-router-dom";
interface CustomButtonProps {
  value?: string;
  variant: string;
  bgProps?: any;
  fgProps?: any;
  hasIcon?: boolean;
  iconProps?: any;
  IconComponent?: any;
  onClick: () => void;
}

function CustomButton({
  value,
  variant,
  bgProps,
  fgProps,
  hasIcon,
  onClick,
  iconProps,
  IconComponent,
}: CustomButtonProps) {
  let bg, fg;
  if (variant === "yellow") {
    bg = "yellow.500";
    fg = "purple.600";
  } else if (variant === "outline") {
    bg = "transparent";
    fg = "white";
  } else {
    bg = "white";
    fg = "purple.600";
  }
  return (
    <HFlex
      bg={bg}
      color={fg}
      onClick={onClick}
      justify="center"
      transition="0.2s ease-out"
      _hover={{ transform: "translateY(-2px)" }}
      _active={{ transform: "translateY(2px)" }}
      {...bgProps}
    >
      {hasIcon && <IconComponent {...iconProps} />}
      {value && (
        <Button
          {...fgProps}
          fontWeight="bold"
          variant="ghost"
          colorScheme="whitealpha"
        >
          {value}
        </Button>
      )}
    </HFlex>
  );
}

function PlayIcon() {
  return (
    <Image
      src={require("../../assets/landing-page/play.svg")}
      w="34px"
      mr="2ch"
      h="34px"
    />
  );
}

interface CardProps {
  image: string;
  title: string;
  description: string;
}

function Card({ image, title, description }: CardProps) {
  return (
    <VFlex w="280px" mx={{ md: "12" }} textAlign="center">
      <Image src={image} w="280px" my="12" h="auto" />
      <Text my="4" fontSize="24px" color="gray.700" fontWeight="bold">
        {title}
      </Text>
      <Text textAlign="center" fontSize="16px" my="2" color="gray.500">
        {description}
      </Text>
    </VFlex>
  );
}

export default function LandingPage() {
  const navigate = useNavigate();
  const navigateTo = (path: string) => {
    navigate(path);
  };
  const { isOpen, onToggle } = useDisclosure();
  useDisableBodyScroll(isOpen);
  return (
    <div style={{ overflowX: "hidden", position: "relative" }}>
      <VFlex
        bg="rgba(0,0,0,0.7)"
        position="absolute"
        zIndex="6"
        display={isOpen ? "flex" : "none"}
        h="100vh"
        w="100vw"
        align="start"
      ></VFlex>
      <VFlex h="100vh" align="start" justify="start" w="100vw">
        <VFlex w="100%" backgroundColor="purple.600">
          <HFlex
            w="80%"
            mx="auto"
            // maxWidth="1250px"
            bg={"purole.600"}
            justify="flex-start"
          >
            <Image
              src={require("../../assets/landing-page/logo-dark-theme.svg")}
              h="12"
              // mx="12"
              my="4"
              w="auto"
              cursor="pointer"
            />

            <CustomButton
              variant="yellow"
              hasIcon
              IconComponent={isOpen ? CloseIcon : HamburgerIcon}
              iconProps={{ boxSize: 23, color: "white" }}
              value={""}
              onClick={onToggle}
              bgProps={{
                ml: "auto",
                bg: "none",
                zIndex: "12",
                outline: "solid",
                display: {
                  base: "flex",
                  lg: "none",
                },
              }}
            />

            <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
              <VFlex
                h="100vh"
                w="80vw"
                m="0"
                p="0"
                align="center"
                justify="center"
                textAlign="center"
                bg={"purple.600"}
              >
                <VFlex mb="4">
                  <Link
                    onClick={onToggle}
                    w="100%"
                    fontSize="28px"
                    fontWeight="bold"
                    color={"white"}
                    href="/questions"
                    py="8"
                  >
                    Explore Questions
                  </Link>
                  <Link
                    onClick={onToggle}
                    w="100%"
                    fontSize="28px"
                    fontWeight="bold"
                    color={"white"}
                    href="#how-it-works"
                    py="8"
                  >
                    How it works
                  </Link>
                  <Link
                    onClick={onToggle}
                    w="100%"
                    fontSize="28px"
                    fontWeight="bold"
                    color={"white"}
                    href="#why"
                    py="8"
                  >
                    Why
                  </Link>
                </VFlex>
                <CustomButton
                  variant="yellow"
                  value="Login"
                  bgProps={{ w: "90%", h: "24" }}
                  fgProps={{ fontSize: "32px" }}
                  onClick={() => navigateTo("/login")}
                />
              </VFlex>
            </Slide>
            <HFlex ml="auto" display={{ base: "none", lg: "flex" }}>
              <Link
                href="questions"
                onClick={() => navigateTo("/questions")}
                color={"white"}
                fontWeight="bold"
                mx="4"
              >
                Explore Questions
              </Link>
              <Link
                href="#how-it-works"
                color={"white"}
                fontWeight="bold"
                mx="4"
              >
                How it works
              </Link>
              <Link href="#why" color={"white"} fontWeight="bold" mx="4">
                Why
              </Link>
              <CustomButton
                value="Login"
                onClick={() => navigateTo("/login")}
                variant="yellow"
                bgProps={{
                  w: "140px",
                  h: "42px",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
              />
            </HFlex>
          </HFlex>
          <HFlex
            w="80%"
            justify="start"
            mt={{ xl: "120px", lg: "60px", base: "80px" }}
          >
            <VFlex
              align={{ base: "center", lg: "start" }}
              textAlign={{ base: "center", lg: "left" }}
              minW={{ xl: "640px", lg: "420px", base: "100%" }}
            >
              <Text
                fontSize={{ base: "48px", md: "64px" }}
                color={"white"}
                fontWeight="extrabold"
              >
                The best
              </Text>
              <Text
                fontSize={{ base: "48px", md: "64px" }}
                color={"white"}
                fontWeight="extrabold"
              >
                Mock Tests Platform
              </Text>
              <HFlex
                my="12"
                direction={{ base: "column", md: "row" }}
                justify={{ lg: "start", base: "center" }}
                w="100%"
                flexWrap="wrap"
              >
                <CustomButton
                  variant="yellow"
                  onClick={() => navigateTo("/signup")}
                  value="Get Started"
                  bgProps={{
                    w: "260px",
                    h: "56px",
                    borderRadius: "12px",
                    cursor: "pointer",
                  }}
                  fgProps={{
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                />
                <CustomButton
                  variant="white"
                  value="Watch a video"
                  onClick={() => alert("Not ready yet :p")}
                  bgProps={{
                    w: "260px",
                    h: "56px",
                    borderRadius: "12px",
                    ml: { md: "4" },
                    mt: { base: 8, md: 0 },
                    cursor: "pointer",
                  }}
                  hasIcon
                  IconComponent={PlayIcon}
                  fgProps={{
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                />
              </HFlex>
            </VFlex>
            <Image
              src={require("../../assets/landing-page/illustration-1.svg")}
              w={{ xl: "auto", lg: "400px" }}
              display={{ base: "none", lg: "block" }}
              ml="auto"
            />
          </HFlex>
        </VFlex>
        <Image src={require("../../assets/landing-page/bg1.svg")} w="100%" />
      </VFlex>
      <VFlex w="80%" mx="auto" mt="40px" justify="start">
        <VFlex w="100%" align="start" id="how-it-works">
          <HFlex mt="40px">
            <Text
              textDecoration="underline #DC188D double"
              fontSize="48px"
              color="gray.600"
              mr="2"
              fontWeight="extrabold"
            >
              How
            </Text>
            <Text fontSize="48px" fontWeight="extrabold" color="gray.700">
              it works
            </Text>
          </HFlex>
          <HFlex flexWrap="wrap" m="auto">
            <Card
              title="Create an exam"
              image={require("../../assets/landing-page/one.png")}
              description="Write out the questions, let it be a quiz, an essay or a multiple correct questions."
            />
            <Card
              title="Select your aspirants"
              image={require("../../assets/landing-page/two.png")}
              description="Selected aspiratns will get a special password they can use to login for the test."
            />
            <Card
              title="Discuss doubts after exam"
              image={require("../../assets/landing-page/three.png")}
              description="Communicate with your followers about the difficulties and the detailed solutions."
            />
          </HFlex>
        </VFlex>
      </VFlex>
      <VFlex
        w="80%"
        display={{ base: "none", md: "flex" }}
        id="watch-a-video"
        mx="auto"
        mt="80px"
        align="start"
      >
        <HFlex align="start">
          <Text
            textDecoration="underline #DC188D double"
            fontSize="48px"
            color="gray.600"
            mr="2"
            fontWeight="bold"
          >
            Video
          </Text>
          <Text fontSize="48px" fontWeight="bold" color="gray.700">
            Demo
          </Text>
        </HFlex>
        <VFlex
          w="720px"
          h="480px"
          cursor="pointer"
          onClick={() => alert("Not ready yet, apologies.")}
          my="40px"
          mx="auto"
          bg="rgba(255, 255, 255, 0.69);"
          boxShadow="0px 0px 21px 5px rgba(163, 163, 163, 0.21), inset -2px -9px 27px 2px rgba(0, 0, 0, 0.1);"
          borderRadius="32px"
        >
          <Image
            src={require("../../assets/landing-page/play.svg")}
            color="#ff9"
          />
        </VFlex>
      </VFlex>
      <VFlex bg={"purple.600"} id="why" mt="80px">
        <VFlex
          w="100vw"
          position="relative"
          h="auto"
          display={{ md: "flex", base: "none" }}
        >
          <Image
            src={require("../../assets/landing-page/why-1.svg")}
            position="absolute"
            top={{ md: "32", lg: "40" }}
            left={{ md: "4", lg: "10" }}
          />
          <Image
            src={require("../../assets/landing-page/why-2.svg")}
            position="absolute"
            right="20"
            top="30"
          />
        </VFlex>
        <VFlex w="80%" mx="auto">
          <Text
            fontWeight="extrabold"
            fontSize={{ base: "24px", md: "36px", lg: "48px" }}
            mt="20"
            color={"white"}
          >
            Why?
          </Text>

          <Text
            fontWeight="normal"
            fontSize="lg"
            mt="40px"
            lineHeight="180%"
            maxW="640px"
            color="white"
            textAlign="justify"
          >
            First, thank you for taking your time to check this website. The
            primary goal of this project is to bridge the gap between
            just-a-showcase project, to a real-world application. I'm working on
            that.
          </Text>
          <Text
            fontWeight="normal"
            fontSize="lg"
            mt="40px"
            lineHeight="180%"
            maxW="640px"
            color="white"
            textAlign="justify"
          >
            If you are really interested in contributing, or tracking
            development progress of this project, or the current state of
            things, check the project out on github or join the discord server.
          </Text>

          <HFlex mt="20" pb="240px" direction={{ base: "column", md: "row" }}>
            <CustomButton
              variant="outline"
              onClick={() =>
                openInNewTab("https://github.com/toxdes/testiny-web")
              }
              value="View on Github"
              hasIcon
              IconComponent={FaGithub}
              bgProps={{
                w: "240px",
                m: "2",
                h: "56px",
                borderWidth: "1px",
                borderRadius: "12px",
                cursor: "pointer",
                _hover: {
                  bg: "white",
                  borderWidth: "0",
                  color: "purple.600",
                },
              }}
              fgProps={{
                fontSize: "22px",
                fontWeight: "bold",
              }}
              iconProps={{
                size: "24px",
              }}
            />

            <CustomButton
              variant="outline"
              onClick={() => openInNewTab("https://twitter.com/testinylive")}
              value="@testinylive"
              hasIcon
              IconComponent={FaTwitter}
              bgProps={{
                w: "240px",
                h: "56px",
                m: "2",
                borderWidth: "1px",
                borderRadius: "12px",
                cursor: "pointer",
                _hover: {
                  bg: "white",
                  borderWidth: "0",
                  color: "purple.600",
                },
              }}
              fgProps={{
                fontSize: "22px",
                fontWeight: "bold",
              }}
              iconProps={{
                size: "24px",
              }}
            />
          </HFlex>
        </VFlex>
      </VFlex>
    </div>
  );
}
