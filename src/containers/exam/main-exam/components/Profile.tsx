import * as React from "react";
import { Text, HFlex, Image, VFlex } from "../../../../components";
import { TCandidateData } from "../types";
import { normalFontSize } from "../styles";

interface ProfileProps {
  profile: TCandidateData;
}
export default function Profile({ profile }: ProfileProps) {
  return (
    <HFlex
      alignSelf="flex-start"
      h="120px"
      bg="gray.100"
      w="100%"
      p="2"
      justify="flex-start"
    >
      <Image
        width="100px"
        height="110px"
        src={profile.avatar}
        objectFit="cover"
        p="1"
        border="1px solid"
        aria-label="avatar"
        alt="avatar"
        borderColor="gray.300"
      />
      <VFlex flexGrow="1" align="start" ml="2">
        <Text fontSize={normalFontSize} fontWeight="bold">
          {profile.name}
        </Text>
        <Text fontSize={normalFontSize} color="gray.500">
          {profile.rollNumber}
        </Text>
      </VFlex>
    </HFlex>
  );
}
