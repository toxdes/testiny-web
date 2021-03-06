import * as React from "react";
import { TabList, Tab, Tabs, HFlex } from "../../../../components";
import { selectedTabStyle } from "../styles";

type Section = {
  title: string;
};
interface SectionTabProps {
  sections: Section[];
  activeIndex: number;
  onTabChange: (index:number) => void;
  containerProps?: any;
}
export default function SubjectTab({
  sections,
  activeIndex,
  onTabChange,
  containerProps,
}: SectionTabProps) {
  return (
    <HFlex bg="gray.200" w="100%" {...containerProps}>
      <Tabs
        align="start"
        w="100%"
        px="2"
        onChange={onTabChange}
        variant="unstyled"
        defaultIndex={activeIndex}
        // my="2"
      >
        <TabList>
          {sections.map((each) => (
            <Tab
              key={each.title}
              // overflow="hidden"
              fontSize={"11px"}
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
    </HFlex>
  );
}
