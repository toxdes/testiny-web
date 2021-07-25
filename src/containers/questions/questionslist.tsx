import React from "react";
import {
  Heading,
  Text,
  Spinner,
  VFlex,
  Code,
  HFlex,
  Tag,
  TagLabel,
  TagCloseButton,
  Avatar,
  Link,
} from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import { FetchDataType, ResponseStatusType } from "../../store/types";
import api from "../../api";

interface QuestionItemProps {
  data: any;
  onFilter: (filteredData: any) => void;
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
      mb="10"
      mr="4"
      _hover="transform:translateX(-4px)"
      justify="start"
      align="start"
      p="4"
      pl="0"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
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
        <Tag
          colorScheme="red"
          fontWeight="bold"
          onClick={() => {
            navigate(`/questions?questionType=${questionType}`);
          }}
        >
          {questionType}
        </Tag>
        <Tag
          colorScheme={license === "FREE" ? "green" : "yellow"}
          onClick={() => navigate(`/questions?license=${license}`)}
          fontWeight="bold"
          ml="2"
        >
          {license.replace("_", " ", "g")}
        </Tag>
        <Tag
          colorScheme="purple"
          fontWeight="bold"
          ml="2"
          onClick={() => navigate(`/questions?difficulty=${difficulty}`)}
        >
          {difficulty}{" "}
        </Tag>
        {tags &&
          tags.map((tag: any) => {
            return (
              <Tag
                colorScheme="purple"
                fontWeight="bold"
                ml="2"
                key={tag.tagName}
                textTransform="uppercase"
                onClick={() => navigate(`/questions?tag=${tag.tagName}`)}
              >
                {tag.tagName}
              </Tag>
            );
          })}
      </HFlex>
      <HFlex mt="4">
        <Avatar src={author.profile.avatar} size="xs" mr="4" cursor="pointer" />
        <Text color="gray.500">
          Posted <b>{createdAt}</b> by
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
  onFilter: (filteredData: any) => void;
}
function Questions({ data, onFilter }: QuestionsProps) {
  if (!data || data.status !== ResponseStatusType.SUCCESS) {
    return <Text>Error. Cannot fetch questions.</Text>;
  }
  return data.data.map((item: any) => (
    <QuestionItem key={item.questionId} data={item} onFilter={onFilter} />
  ));
}

function Loading() {
  return (
    <>
      <Text>Loading...</Text>
      <Spinner size="xl" speed="0.8s" color="purple.500" thickness="4px" />
    </>
  );
}

const getParams = (query: string) => {
  let search_q = new URLSearchParams(query);
  let initialParams = {};
  let itt = search_q.entries();
  let it = itt.next();
  while (!it.done) {
    (initialParams as any)[it.value[0]] = it.value[1];
    it = itt.next();
  }
  return { params: initialParams, query };
};

interface SidebarProps {
  params: any;
  onFilter: (filteredParams: any) => void;
}
function Sidebar({ params, onFilter }: SidebarProps) {
  return (
    <VFlex bg="purple.100" ml="auto" w="100%" maxW="80" overflow="auto">
      <Text>Sidebar</Text>
      <Text>Query parameters</Text>
      <Code w="100%">{JSON.stringify(params)}</Code>
    </VFlex>
  );
}
interface QuestionsListProps {}
export function QuestionsList(_: QuestionsListProps) {
  const search_q = useLocation().search;
  const [params, setParams] = React.useState<any>();

  React.useEffect(() => {
    setParams(getParams(search_q));
  }, [search_q]);

  const [data, setData] = React.useState<FetchDataType>({
    status: ResponseStatusType.IDLE,
  });
  React.useEffect(() => {
    const get = async () => {
      try {
        let res;
        setData({ status: ResponseStatusType.FETCHING });
        res = await api.get(`/questions?${params?.query}`);
        res = res.data;
        console.log(res);
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

  const onFilter = (filteredData: any) => {
    setData(filteredData);
  };

  return (
    <VFlex maxW="1250px" mx="auto" align="start" mt="12" px="4">
      <Heading as="h1" color="gray.600">
        Questions
      </Heading>
      {params &&
        params.params &&
        Object.keys(params.params).map((key) => (
          <HFlex mt="4">
            <Text color="gray.500" fontSize="18px" fontWeight="bold" mr="2ch">
              {" "}
              Filters:{" "}
            </Text>
            <Tag
              variant="solid"
              borderRadius="full"
              colorScheme="purple"
              fontWeight="bold"
              size="md"
            >
              <TagLabel mt="2px" p="0">
                {params.params[key] as string}
              </TagLabel>
              <TagCloseButton
                onClick={() => {
                  let newParams = params.params;
                  delete newParams[key];
                  setParams(newParams);
                }}
              />
            </Tag>
          </HFlex>
        ))}
      <HFlex w="100%" align="start" mt="2" h="80vh">
        <VFlex w="100%" mr="4" h="100%" overflowY="auto" justify="start">
          {data.status === ResponseStatusType.FETCHING && <Loading />}
          {data.status === ResponseStatusType.SUCCESS && (
            <Questions data={data} onFilter={onFilter} />
          )}
        </VFlex>
        <Sidebar params={params} onFilter={onFilter} />
      </HFlex>
    </VFlex>
  );
}
