import * as React from "react";
import {
  VFlex,
  HFlex,
  Image,
  Link,
  Text,
  Input,
  Button,
  Slide,
  useDisclosure,
} from "../../components";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
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
  } else {
    bg = "white";
    fg = "purple.600";
  }
  return (
    <HFlex
      bg={bg}
      {...bgProps}
      color={fg}
      onClick={onClick}
      justify="center"
      transition="0.2s ease-out"
      _hover={{ transform: "translateY(-2px)" }}
      _active={{ transform: "translateY(2px)" }}
    >
      {hasIcon && <IconComponent {...iconProps} />}
      {value && (
        <Button
          {...fgProps}
          fontWeight="700"
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
                  <Link
                    onClick={onToggle}
                    w="100%"
                    fontSize="28px"
                    fontWeight="bold"
                    color={"white"}
                    href="#feedback"
                    py="8"
                  >
                    Feedback
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
                fontWeight="700"
                mx="4"
              >
                Questions
              </Link>
              <Link
                href="#how-it-works"
                color={"white"}
                fontWeight="700"
                mx="4"
              >
                How it works
              </Link>
              <Link href="#why" color={"white"} fontWeight="700" mx="4">
                Why
              </Link>
              <Link
                href="#feedback"
                color={"white"}
                fontWeight="700"
                mx="4"
                mr="8"
              >
                Feedback
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
              fontWeight="900"
            >
              How
            </Text>
            <Text fontSize="48px" fontWeight="900" color="gray.700">
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
            fontWeight="700"
          >
            Video
          </Text>
          <Text fontSize="48px" fontWeight="700" color="gray.700">
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
            fontWeight="900"
            fontSize={{ base: "24px", md: "36px", lg: "48px" }}
            mt="40"
            color={"white"}
          >
            Why?
          </Text>
          <Text
            fontWeight="900"
            fontSize={{ base: "72px", lg: "96px" }}
            mt="60px"
            textAlign="center"
            color="yellow.500"
          >
            I wish I knew.
          </Text>
          <Text
            fontWeight="600"
            fontSize="24px"
            mt="40px"
            lineHeight="164%"
            maxW="960px"
            color="white"
            textAlign="center"
          >
            If you are really interested in contributing, or tracking
            development progress of this project, or the current state of
            things,
          </Text>

          <Link
            href="https://github.com/toxdes/testiny-web/projects"
            rel="noopener noreferer"
            target="_blank"
            mt="2ch"
            fontWeight="700"
            color="pink.400"
            fontSize="24px"
          >
            Check this out.
          </Link>

          <HFlex mt="120px" direction={{ base: "column", lg: "row" }}>
            <Text
              fontWeight="600"
              fontSize="24px"
              lineHeight="164%"
              color="white"
              textAlign="center"
            >
              Want to reach out?
            </Text>
            <Link
              fontWeight="600"
              fontSize="24px"
              lineHeight="164%"
              mx="1ch"
              href="mailto://malivp3494@gmail.com"
              color="pink.500"
              cursor="pointer"
              textAlign="center"
            >
              Email us
            </Link>
            <Text
              fontWeight="600"
              fontSize="24px"
              lineHeight="164%"
              color={"white"}
              textAlign="center"
            >
              or give us your email, and we'll get back to you.
            </Text>
          </HFlex>
          <HFlex
            mt="60px"
            mb="200px"
            id="feedback"
            w={{ base: "90%", lg: "70%" }}
            maxW="940px"
            mx="auto"
          >
            <Input
              type="email"
              placeholder="Email"
              fontSize={{ base: "18px", md: "28px" }}
              flex={0.7}
              border="none"
              py={{ base: "24px", md: "30px" }}
              borderRadius="0px"
              pl={{ base: "4", md: "12" }}
              h={{ base: "60px", md: "100px" }}
              fontWeight="900"
              w="100%"
              variant="outline"
              bgColor="white"
            />
            <Button
              variant="solid"
              // w="360px"
              h={{ base: "60px", md: "100px" }}
              borderRadius="0px"
              bg={"pink.500"}
              onClick={() => alert("Does nothing, by the way.")}
              px="2"
              flex={0.3}
              minW="120px"
              _hover={{ bg: "yellow.500", color: "purple.600" }}
              color={"white"}
              fontSize={{ base: "18px", md: "28px" }}
              fontWeight="700"
            >
              Let's talk!
            </Button>
          </HFlex>
        </VFlex>
      </VFlex>
    </div>
  );
}
