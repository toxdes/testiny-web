import React from "react";
import {
  Heading,
  Text,
  VFlex,
  HFlex,
  AlertIcon,
  Loading,
  InputWithLabel,
  Tag,
  TagLabel,
  TagCloseButton,
  Avatar,
  Link,
  Alert,
  Menu,
  MenuItemOption,
  MenuButton,
  Button,
  MenuOptionGroup,
  MenuList,
} from "../../components";

import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FetchDataType, ResponseStatusType } from "../../store/types";
import api from "../../api";
import { fromNow } from "../../config/helpers";
interface QuestionItemProps {
  data: any;
}

function QuestionItem({ data }: QuestionItemProps) {
  const navigate = useNavigate();
  const {
    questionType,
    license,
    text,
    difficulty,
    questionId,
    tags,
    author,
    createdAt,
  } = data;
  return (
    <VFlex
      my="4"
      mr="4"
      _hover="transform:translateX(-4px)"
      justify="start"
      align="start"
      p="4"
      pl="0"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 2px 6px"
    >
      <Link
        fontSize="22px"
        color="gray.600"
        fontWeight="bold"
        onClick={(e) => {
          e.preventDefault();
          navigate(`/questions/${questionId}`);
        }}
      >
        Q. {text.length > 120 ? `${text.substring(0, 120)}...` : text}{" "}
      </Link>
      <HFlex justify="start" mt="2" overflowX="auto" width="100%">
        <Tag colorScheme="red" fontWeight="bold">
          {questionType}
        </Tag>
        <Tag
          colorScheme={license === "FREE" ? "green" : "yellow"}
          fontWeight="bold"
          ml="2"
        >
          {license.replace("_", " ", "g")}
        </Tag>
        <Tag colorScheme="purple" fontWeight="bold" ml="2">
          {difficulty}{" "}
        </Tag>
        {tags &&
          tags.map((tag: any) => {
            return (
              <Tag
                colorScheme="cyan"
                fontWeight="bold"
                ml="2"
                key={tag.tagName}
                textTransform="uppercase"
              >
                {tag.tagName}
              </Tag>
            );
          })}
      </HFlex>
      <HFlex mt="4">
        <Avatar src={author.profile.avatar} size="xs" mr="4" cursor="pointer" />
        <Text color="gray.500">
          Posted <b>{fromNow(createdAt)}</b> by
        </Text>
        <Link
          href={`/users/${author.username}`}
          target="_blank"
          rel="noopener"
          fontWeight="bold"
          color="purple.500"
          mx="1ch"
        >
          {author.username}
        </Link>
      </HFlex>
    </VFlex>
  );
}

interface QuestionsProps {
  data: any;
}

function Questions({ data }: QuestionsProps) {
  if (!data || data.data.length <= 0) {
    return (
      <Text fontWeight="normal" color="gray.500">
        No Questions to show.{" "}
      </Text>
    );
  }

  if (data.status !== ResponseStatusType.SUCCESS) {
    return <Text>Error. Cannot fetch questions.</Text>;
  }

  return data.data.map((item: any) => (
    <QuestionItem key={item.questionId} data={item} />
  ));
}

const getParams = (query: string) => {
  let search_q = new URLSearchParams(query);
  let initialParams: TParamsObject = JSON.parse(
    JSON.stringify(DEFAULT_PARAMS.params)
  );
  let itt = search_q.entries();
  let it = itt.next();
  while (!it.done) {
    let key = it.value[0];
    let val = it.value[1].split(",");
    initialParams[key] = val;
    it = itt.next();
  }
  return {
    params: initialParams,
    query: query.startsWith("?") ? query.substring(1) : query,
  };
};

const convertToQueryString = (params: TParamsObject): string => {
  // consider only non-undefined ones
  if (!params) return "";
  const searchParams = new URLSearchParams();
  Object.keys(params).forEach((key: string) => {
    if (!Array.isArray(params[key])) return;
    let val = params[key]?.join();
    if (!val) return;
    searchParams.append(key, val);
  });
  return searchParams.toString();
};

interface SidebarProps {}

function Sidebar(_: SidebarProps) {
  return (
    <VFlex
      display={{ base: "none", md: "flex" }}
      ml="auto"
      boxShadow="rgba(0, 0, 0, 0.2) 0px 3px 12px"
      w="100%"
      borderRadius="12px"
      maxW="80"
      p="8"
      overflow="auto"
      align="start"
      transition="0.1s linear"
      _hover={{ boxShadow: "rgba(0,0,0,0.4) 0px 3px 12px", cursor: "pointer" }}
      _active={{ transform: "translateY(2px)" }}
    >
      <Text color="gray.600" w="100%" fontSize="22px" fontWeight="bold">
        A Special Surprise!
      </Text>
      <Text color="gray.600" my="2">
        We are adding more and more features, stay tuned!
      </Text>
    </VFlex>
  );
}

interface FilterProps {
  onFilter: (key: string, newData: string[]) => void;
  onClearAllFilters: () => void;
  onSetParams: (newParams: TParams) => void;
  params: TParamsObject;
}

const filterMenuItemProps = {
  // fontWeight: "normal",
  //fontSize: "md",
  color: "gray.600",
  w: "100%",
  _hover: {
    bg: "gray.100",
  },
};

const menuButtonStyles = {
  color: "gray.600",
  bg: "gray.50",
  w: "100%",
  mr: "4",
  fontWeight: "normal",
};

interface DropdownMenuProps {
  title: string;
  options: string[];
  labels?: string[];
  onChange: (newChoices: string | string[]) => void;
  multiple?: boolean;
  defaultValue: string[];
  containerProps?: any;
}

function DropdownMenu({
  title,
  options,
  labels,
  multiple,
  onChange,
  defaultValue,
  containerProps,
}: DropdownMenuProps) {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        variant="solid"
        {...menuButtonStyles}
        {...containerProps}
        rightIcon={<ChevronDownIcon />}
      >
        {title}
      </MenuButton>
      <MenuList py="0px" minWidth="0px">
        <MenuOptionGroup
          type={multiple ? "checkbox" : "radio"}
          onChange={onChange}
          value={defaultValue}
        >
          {options.map((option, i) => (
            <MenuItemOption
              {...filterMenuItemProps}
              value={option}
              key={option}
            >
              {labels ? labels[i] : options[i]}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

function Filter({
  params,
  onFilter,
  onClearAllFilters,
  onSetParams,
}: FilterProps) {
  const handleFilterChange = (key: string, newOptions: string | string[]) => {
    if (Array.isArray(newOptions)) {
      onFilter(key, newOptions);
    } else {
      onFilter(key, [newOptions]);
    }
  };
  return (
    <VFlex my="4" w={{ base: "80%", lg: "100%" }}>
      <HFlex w="100%" flexDirection={{ base: "column", lg: "row" }}>
        <InputWithLabel
          placeholder="Search Questions..."
          containerProps={{
            base: { pr: "4", mb: "4" },
            lg: { minW: "200px" },
          }}
        />
        <HFlex flexDirection={{ base: "column", md: "row" }} ml="4">
          <DropdownMenu
            multiple
            title="Difficulty"
            options={["EASY", "MEDIUM", "HARD"]}
            labels={["Easy", "Medium", "Hard"]}
            containerProps={{ mb: { base: "4", lg: "" } }}
            defaultValue={params && params["difficulty"]}
            onChange={(newOptions) =>
              handleFilterChange("difficulty", newOptions)
            }
          />

          <DropdownMenu
            multiple
            title="Question Type"
            options={["MCQ", "MSQ", "NAT"]}
            containerProps={{ mb: { base: "4", lg: "" } }}
            defaultValue={params && params["questionType"]}
            onChange={(newOptions) =>
              handleFilterChange("questionType", newOptions)
            }
          />

          <DropdownMenu
            multiple
            title="License"
            options={["FREE", "NON_FREE"]}
            containerProps={{ mb: { base: "4", lg: "" } }}
            defaultValue={params && params["license"]}
            onChange={(newOptions) => handleFilterChange("license", newOptions)}
            labels={["Free", "Non Free"]}
          />
        </HFlex>
      </HFlex>
      <ActiveParams
        params={params}
        onClearAllFilters={onClearAllFilters}
        onSetParams={onSetParams}
      />
    </VFlex>
  );
}

interface QuestionsListProps {}

type TParamsObject = {
  difficulty: string[];
  questionType: string[];
  license: string[];
  [key: string]: string[];
};

type TParams = {
  params: TParamsObject;
  query: string;
};

const DEFAULT_PARAMS: TParams = {
  params: {
    difficulty: [],
    questionType: [],
    license: [],
  },
  query: "",
};

interface ActiveParamsProps {
  params: TParamsObject;
  onClearAllFilters: () => void;
  onSetParams: (newParams: TParams) => void;
}

const tagProps = {
  variant: "solid",
  borderRadius: "full",
  textAlign: "center",
  fontWeight: "bold",
  size: "sm",
  mr: "2",
};

function ActiveParams({
  params,
  onClearAllFilters,
  onSetParams,
}: ActiveParamsProps) {
  const navigate = useNavigate();
  let hasActiveParams = false;
  Object.keys(params).forEach((key) => {
    if (params[key].length > 0) hasActiveParams = true;
  });
  if (!hasActiveParams) return null;
  return (
    <HFlex mt="4" mx="2" w="80%" justifyContent="center" flexWrap="wrap">
      {Object.keys(params)
        .map((key: string) => {
          return params[key]?.map((val) => (
            <Tag {...tagProps} key={`${key}:${val}`} m="2">
              <TagLabel>{val}</TagLabel>
              <TagCloseButton
                onClick={() => {
                  let newParams = { params, query: "" };
                  newParams.params[key] = newParams.params[key].filter(
                    (v) => v !== val
                  );
                  newParams.query = convertToQueryString(newParams.params);
                  onSetParams(newParams);
                  navigate(`/questions?${newParams.query}`);
                }}
              />{" "}
            </Tag>
          ));
        })
        .filter((val) => val)}
      <Button
        variant="outline"
        colorScheme="red"
        m="2"
        size="sm"
        onClick={onClearAllFilters}
      >
        Clear All
      </Button>
    </HFlex>
  );
}

export function QuestionsList(_: QuestionsListProps) {
  // BRUH MOMENT: there exists https://github.com/remix-run/react-router/blob/dev/docs/api-reference.md#usesearchparams
  // so no need to implement from scratch
  // BRUH MOMENT FOR THE PREVIOUS BRUH MOMENT: it doesn't work like I want it to so using `navigate`
  // TODO: Refactor `QuestionsList`
  // @body Since the primary target is to write a working implementation, the code is all over the place. Need to move things around, so that the code is more human-accessible.
  // Also, not sure if filtering logic should be on the frontend or backend, currently feels easier to do this on backend.

  let search_q = useLocation().search;
  const navigate = useNavigate();
  // for state
  const [params, setParams] = React.useState<TParams>(getParams(search_q));

  const [data, setData] = React.useState<FetchDataType>({
    status: ResponseStatusType.IDLE,
  });

  const onClearAllFilters = () => {
    setParams(getParams(""));
    navigate("/questions");
  };

  React.useEffect(() => {
    const get = async () => {
      try {
        let res;
        setData({ status: ResponseStatusType.FETCHING });
        res = await api.get(`/questions?${params?.query}`);
        res = res.data;
        if (res.status === "error") {
          setData({ status: ResponseStatusType.ERROR, data: res.message });
          return;
        }
        setData({ status: ResponseStatusType.SUCCESS, data: res });
      } catch (e) {
        console.error(e);
        setData({
          status: ResponseStatusType.ERROR,
          data: { message: "Probably cannot connect to the server" },
        });
      }
    };
    get();
  }, [params]);

  const onFilter = (key: keyof TParamsObject, newValue: string[]) => {
    let newParams = { ...params };
    if (newParams) newParams.params[key] = newValue;
    newParams.query = convertToQueryString(newParams.params);
    setParams(newParams);
    navigate(`/questions?${newParams.query}`, { replace: true });
  };

  const onSetParams = (newParams: TParams) => {
    setParams(newParams);
  };
  return (
    <VFlex maxW="1250px" mx="auto" align="start" mt="12" px="4">
      <Heading as="h1" color="gray.600">
        Questions
      </Heading>
      <HFlex w="100%" align="start" mt="2" h="80vh">
        <VFlex
          w="100%"
          mr={{ base: "0", md: "4" }}
          h="100%"
          overflowY="scroll"
          justify="start"
        >
          <Filter
            params={params.params}
            onFilter={onFilter}
            onClearAllFilters={onClearAllFilters}
            onSetParams={onSetParams}
          />
          {data.status === ResponseStatusType.FETCHING && <Loading />}
          {data.status === ResponseStatusType.SUCCESS && (
            <Questions data={data} />
          )}
          {(!data || data.status === ResponseStatusType.ERROR) && (
            <Alert status="error">
              <AlertIcon />
              There was an error. Failed to connect to backend or other error.
            </Alert>
          )}
        </VFlex>
        <Sidebar />
      </HFlex>
    </VFlex>
  );
}
