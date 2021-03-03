import * as React from "react";
import { TabList, Tab, Tabs, IconButton, HFlex } from "../../../../components";
import { normalFontSize, orange, selectedTabStyle } from "../styles";
import { IoIosCalculator } from "react-icons/io";
type Subject = {
  title: string;
};
interface SubjectTabProps {
  subjects: Subject[];
  calculatorAllowed?: boolean;
  activeIndex: number;
  onTabChange:(index:number)=>void;
  containerProps?: any;
}

export default function SubjectTab({
  subjects,
  calculatorAllowed,
  activeIndex,
  onTabChange,
  containerProps,
}: SubjectTabProps) {
  
  return (
    <HFlex bg="gray.200" w="100%" {...containerProps}>
      <Tabs
        align="start"
        w="100%"
        px="2"
        onChange={onTabChange}
        variant="unstyled"
        defaultIndex={activeIndex}
        my="2"
      >
        <TabList>
          {subjects.map((each) => (
            <Tab
              key={each.title}
              // overflow="hidden"
              fontSize={normalFontSize}
              fontWeight="bold"
              _selected={selectedTabStyle}
            >
              {each.title.length > 18
                ? `${each.title.slice(0, 18)}...`
                : each.title}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      {calculatorAllowed && (
        <IconButton
          as={IoIosCalculator}
          color={orange}
          aria-label="calculator"
          size="sm"
          cursor="pointer"
          ml="2"
          bg="gray.200"
          borderRadius="0px"
          onClick={() => alert("Open Calculator")}
        />
      )}
    </HFlex>
  );
}
