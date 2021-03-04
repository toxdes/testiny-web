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
import { colors } from "./styles";
import { useDisableBodyScroll } from "../../hooks";
import { useNavigate } from "react-router";
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
    bg = colors.yellow;
    fg = colors.purple;
  } else {
    bg = colors.white2;
    fg = colors.purple;
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

// TODO: Figure out what to do with the background image
//@body Currenntly I cannot tilt the background div as I wanted, it adds a horizontal scrollbar dispite having a `overflow:hidden` on the parent div. I thought I had all this figured out, but I don't.
export default function LandingPage() {
  const navigate = useNavigate();
  const doLogin = () => {
    navigate("/login");
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
        <VFlex w="100%" bg={colors.purple}>
          <HFlex
            w="80%"
            mx="auto"
            // maxWidth="1250px"
            backgroundColor={colors.purple}
            justify="flex-start"
          >
            <Image
              src={require("../../assets/landing-page/logo.svg")}
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
                bg={colors.purple}
              >
                <VFlex mb="4">
                  <Link
                    onClick={onToggle}
                    w="100%"
                    fontSize="28px"
                    fontWeight="bold"
                    color={colors.white}
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
                    color={colors.white}
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
                    color={colors.white}
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
                  onClick={doLogin}
                />
              </VFlex>
            </Slide>
            <HFlex ml="auto" display={{ base: "none", lg: "flex" }}>
              <Link
                href="#how-it-works"
                color={colors.white2}
                fontWeight="700"
                mx="4"
              >
                How it works
              </Link>
              <Link href="#why" color={colors.white2} fontWeight="700" mx="4">
                Why
              </Link>
              <Link
                href="#feedback"
                color={colors.white2}
                fontWeight="700"
                mx="4"
                mr="8"
              >
                Feedback
              </Link>
              <CustomButton
                value="Login"
                onClick={doLogin}
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
                color={colors.white}
                fontWeight="extrabold"
              >
                The best
              </Text>
              <Text
                fontSize={{ base: "48px", md: "64px" }}
                color={colors.white}
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
                  onClick={doLogin}
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
                  onClick={() => navigate("#watch-a-video")}
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
              mr="2"
              fontWeight="900"
            >
              How
            </Text>
            <Text fontSize="48px" fontWeight="900">
              it works
            </Text>
          </HFlex>
          <HFlex flexWrap="wrap" m="auto">
            <VFlex w="280px" mx={{ md: "12" }} textAlign="center">
              <Image
                src={require("../../assets/landing-page/one.png")}
                w="280px"
                my="12"
                h="auto"
              />
              <Text fontWeight="bold" my="4" fontSize="24px">
                Create an exam
              </Text>
              <Text textAlign="center" fontSize="16px" my="2" fontWeight="300">
                Write out the questions, let it be a quiz, an essay or a
                multiple correct questions.
              </Text>
            </VFlex>
            <VFlex w="280px" mx={{ md: "12" }} textAlign="center">
              <Image
                src={require("../../assets/landing-page/two.png")}
                w="280px"
                my="12"
                h="auto"
              />
              <Text fontWeight="bold" my="4" fontSize="24px">
                Select your aspirants
              </Text>
              <Text fontSize="16px" my="2" fontWeight="300">
                Selected aspirants will get a special password that they can use
                to login for the test
              </Text>
            </VFlex>
            <VFlex w="280px" mx={{ md: "12" }} textAlign="center">
              <Image
                src={require("../../assets/landing-page/three.png")}
                w="280px"
                my="12"
                h="auto"
              />
              <Text fontWeight="bold" my="4" fontSize="24px">
                Discuss doubts after exam
              </Text>
              <Text fontSize="16px" my="2" w="280px" fontWeight="300">
                Communicate with your followers about the difficulties and the
                detailed solutions.
              </Text>
            </VFlex>
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
            mr="2"
            fontWeight="900"
          >
            Video
          </Text>
          <Text fontSize="48px" fontWeight="900">
            Demo
          </Text>
        </HFlex>
        <VFlex
          w="720px"
          h="480px"
          cursor="pointer"
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
      <VFlex bg={colors.purple} id="why" mt="80px">
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
            color={colors.white2}
          >
            Why?
          </Text>
          <Text
            fontWeight="900"
            fontSize={{ base: "72px", lg: "96px" }}
            mt="60px"
            textAlign="center"
            color={colors.yellow}
          >
            I wish I knew.
          </Text>
          <Text
            fontWeight="700"
            fontSize="24px"
            opacity={0.7}
            mt="40px"
            lineHeight="164%"
            maxW="960px"
            color={colors.white2}
            textAlign="center"
          >
            There are some reasons to be honest, but it’s all in the air for
            now. Nothing concrete, so hang in there.{" "}
          </Text>
          <HFlex mt="120px" direction={{ base: "column", lg: "row" }}>
            <Text
              fontWeight="700"
              fontSize="24px"
              lineHeight="164%"
              color={colors.white2}
              textAlign="center"
            >
              Want to reach out?
            </Text>
            <Text
              fontWeight="700"
              fontSize="24px"
              lineHeight="164%"
              mx="2px"
              color={colors.pink}
              cursor="pointer"
              textDecoration="underline"
              textAlign="center"
            >
              Email us,
            </Text>
            <Text
              fontWeight="700"
              fontSize="24px"
              lineHeight="164%"
              color={colors.white2}
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
              fontSize={{ sm: "18px", md: "28px" }}
              flex={0.7}
              border="none"
              py={{ sm: "24px", md: "30px" }}
              borderRadius="0px"
              pl={{ sm: "4", md: "12" }}
              h={{ sm: "60px", md: "100px" }}
              fontWeight="900"
              w="100%"
              variant="outline"
              bgColor="white"
            />
            <Button
              variant="solid"
              // w="360px"
              h={{ sm: "60px", md: "100px" }}
              borderRadius="0px"
              bg={colors.pink}
              px="2"
              flex={0.3}
              _hover={{ bg: colors.yellow, color: colors.purple }}
              color={colors.white}
              fontSize={{ sm: "18px", md: "28px" }}
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
