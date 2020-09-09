import * as React from "react";
import {
  VFlex,
  HFlex,
  Image,
  Link,
  Text,
  Input,
  Button,
} from "../../components";
import { colors } from "./styles";

import { login } from "../../store/actions";
import { useDispatch } from "react-redux";

interface CustomButtonProps {
  value: string;
  variant: string;
  bgProps?: any;
  fgProps?: any;
  hasIcon?: boolean;
  onClick: () => void;
}
function CustomButton({
  value,
  variant,
  bgProps,
  fgProps,
  hasIcon,
  onClick,
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
    <HFlex bg={bg} {...bgProps} onClick={onClick} justify="center">
      {hasIcon && (
        <Image
          src={require("../../assets/landing-page/play.svg")}
          w="34px"
          mr="2ch"
          h="34px"
        />
      )}
      <Text color={fg} {...fgProps} fontWeight="700">
        {value}
      </Text>
    </HFlex>
  );
}

// TODO: Figure out what to do with the background image
//@body Currenntly I cannot tilt the background div as I wanted, it adds a horizontal scrollbar dispite having a `overflow:hidden` on the parent div. I thought I had all this figured out, but I don't.
export default function LandingPage() {
  const dispatch = useDispatch();
  const doLogin = () => {
    dispatch(login());
  };
  return (
    <>
      <VFlex w="100%" justify="start">
        <VFlex w="100%" bg={colors.purple} px="12">
          <HFlex
            maxWidth="1250px"
            backgroundColor={colors.purple}
            w="100%"
            justify="flex-start"
          >
            <Image
              src={require("../../assets/landing-page/logo.svg")}
              h="36px"
              // mx="12"
              my="4"
              w="auto"
              cursor="pointer"
            />
            <HFlex ml="auto">
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
                  mr: "8",
                  cursor: "pointer",
                }}
              />
            </HFlex>
          </HFlex>
          <HFlex w="100%" maxW="1250px" h="60vh">
            <VFlex align="start" flexGrow="1" textAlign="left" minW="640px">
              <Text fontSize="54px" color={colors.white} fontWeight="900">
                The best
              </Text>
              <Text fontSize="54px" color={colors.white} fontWeight="900">
                Mock Tests Platform
              </Text>
              <HFlex my="24" flexWrap="wrap">
                <CustomButton
                  variant="yellow"
                  onClick={doLogin}
                  value="Get Started"
                  bgProps={{
                    w: "260px",
                    h: "56px",
                    borderRadius: "12px",
                    mr: "12",
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
                  onClick={() => alert("Navigate to the Demo video")}
                  bgProps={{
                    w: "260px",
                    h: "56px",
                    borderRadius: "12px",
                    mr: "12",
                    cursor: "pointer",
                  }}
                  hasIcon
                  fgProps={{
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                />
              </HFlex>
            </VFlex>

            {/* <VFlex position="relative" w="60vw" h="640px" overflow="hidden">
              <Image
                position="absolute"
                transform="scale(1.5);"
                ml="-120px"
                src={require("../../assets/landing-page/background-1.svg")}
                // bg="blue.300"
              />
            </VFlex> */}
          </HFlex>
        </VFlex>
        <Image
          src={require("../../assets/landing-page/wave2.svg")}
          w="100%"
          pointerEvents="none"
          mt="-60px"
        />
      </VFlex>

      <VFlex w="100%" mt="90px" justify="start">
        <VFlex w="100%" px="12" align="start" maxW="1250px" id="how-it-works">
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
          <HFlex flexWrap="wrap" my="200px">
            <VFlex w="280px" mx="12" textAlign="center">
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
            <VFlex w="280px" mx="12" textAlign="center">
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
            <VFlex w="280px" mx="12" textAlign="center">
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
        <VFlex
          w="720px"
          h="480px"
          cursor="pointer"
          my="200px"
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
      <VFlex bg={colors.purple} id="why">
        <Text fontWeight="900" fontSize="48px" mt="40" color={colors.white2}>
          Why?
        </Text>
        <Text fontWeight="900" fontSize="96px" mt="60px" color={colors.yellow}>
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
          There are some reasons to be honest, but it’s all in the air for now.
          Nothing concrete, so hang in there.{" "}
        </Text>
        <HFlex mt="120px">
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
            Email us
          </Text>
          <Text
            fontWeight="700"
            fontSize="24px"
            lineHeight="164%"
            color={colors.white2}
            textAlign="center"
          >
            , or give us your email, and we'll get back to you.
          </Text>
        </HFlex>
        <HFlex mt="60px" mb="200px" id="feedback">
          <Input
            type="email"
            placeholder="Email"
            fontSize="28px"
            border="none"
            py="30px"
            borderRadius="0px"
            pl="20px"
            h="100px"
            fontWeight="900"
            variant="outline"
          />
          <Button
            variant="solid"
            h="100px"
            w="360px"
            borderRadius="0px"
            bg={colors.pink}
            color={colors.white}
            fontSize="28px"
            fontWeight="700"
          >
            Let's talk!
          </Button>
        </HFlex>
      </VFlex>
    </>
  );
}
