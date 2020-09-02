import * as React from "react";
import { VFlex, HFlex, Image, Link, Text, Box } from "../../components";
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
export default function LandingPage() {
  return (
    <>
      <VFlex position="relative">
        <VFlex
          flexGrow="1"
          w="100vw"
          h="100vh"
          mt="-40vh"
          zIndex="-2"
          backgroundColor={colors.purple}
          position="absolute"
          top="0px"
          left="0px"
        ></VFlex>
      </VFlex>
      <VFlex w="100%" justify="start" o="hidden">
        <HFlex maxWidth="1250px" w="100%" justify="flex-start">
          <Image
            src={require("../../assets/landing-page/logo.svg")}
            h="36px"
            mx="12"
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
      </VFlex>
    </>
  );
}
