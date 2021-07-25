import React from "react";
import { Text, VFlex, HFlex, Heading } from "../../components";
import Header from "../header";
import { useNavigate } from "react-router-dom";

export const settingsTabs = ["profile", "notifications", "privacy", "account"];

const firstUppercase = (s: string): string => {
  return s[0].toUpperCase() + s.substr(1);
};

interface TabListProps {
  activeTab: string;
}

function TabList({ activeTab }: TabListProps) {
  const navigate = useNavigate();
  return (
    <VFlex align="start" textAlign="left" w="200px">
      {settingsTabs.map((tab) => {
        return (
          <Text
            py="2"
            my="2"
            px="8"
            w="100%"
            transition="0.2s"
            userSelect="none"
            cursor="pointer"
            color="gray.500"
            fontWeight="bold"
            borderLeft={tab === activeTab ? "4px solid" : "none"}
            bg={tab === activeTab ? "purple.50" : "white"}
            _hover={{ bg: "gray.100" }}
            _active={{ bg: "purple.500", color: "white" }}
            onClick={() => navigate(`/settings/${tab}`)}
          >
            {firstUppercase(tab)}
          </Text>
        );
      })}
    </VFlex>
  );
}

interface TabProps {
  activeTab: string;
}

function Tab({ activeTab }: TabProps) {
  return (
    <VFlex align="start" ml="8" mt="2">
      <Heading as="h1" color="gray.500" fontWeight="bold">
        {firstUppercase(activeTab)} settings{" "}
      </Heading>
      <VFlex mt="10" fontWeight="bold">
        <Text color="gray.500"> Not implemented yet. :) </Text>
      </VFlex>
    </VFlex>
  );
}

interface SettingsProps {
  activeTab: string;
}
export default function Settings({ activeTab }: SettingsProps) {
  return (
    <VFlex w="100vw" maxW="1250px" m="auto">
      <Header />
      <HFlex w="100%" align="start" justify="start" mt="8">
        <TabList activeTab={activeTab} />
        <Tab activeTab={activeTab} />
      </HFlex>
    </VFlex>
  );
}
