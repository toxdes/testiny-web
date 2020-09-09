import * as React from "react";
import { VFlex, HFlex, Image, Link, Text } from "../../components";
import { colors } from "./styles";

interface CustomButtonProps {
  value: string;
  variant: string;
  bgProps?: any;
  fgProps?: any;
}
function CustomButton({ value, variant, bgProps, fgProps }: CustomButtonProps) {
  let bg, fg;
  if (variant === "yellow") {
    bg = colors.yellow;
    fg = colors.purple;
  } else {
    bg = colors.white2;
    fg = colors.purple;
  }
  return (
    <VFlex bg={bg} {...bgProps}>
      <Text color={fg} {...fgProps} fontWeight="700">
        {value}
      </Text>
    </VFlex>
  );
}

// TODO: Figure out what to do with the background image
//@body Currenntly I cannot tilt the background div as I wanted, it adds a horizontal scrollbar dispite having a `overflow:hidden` on the parent div. I thought I had all this figured out, but I don't.
export default function LandingPage() {
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
              <Link href="#" color={colors.white2} fontWeight="700" mx="4">
                How it works
              </Link>
              <Link href="#" color={colors.white2} fontWeight="700" mx="4">
                Why
              </Link>
              <Link href="#" color={colors.white2} fontWeight="700" mx="4">
                Feedback
              </Link>
              <CustomButton
                value="Login"
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
              <HFlex my="24">
                <CustomButton
                  variant="yellow"
                  value="Get Started"
                  bgProps={{
                    w: "260px",
                    h: "56px",
                    borderRadius: "12px",
                    mr: "8",
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
                  bgProps={{
                    w: "260px",
                    h: "56px",
                    borderRadius: "12px",
                    mr: "8",
                    cursor: "pointer",
                  }}
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
      </VFlex>
    </>
  );
}
