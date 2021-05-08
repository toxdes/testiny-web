import * as React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Divider,
  Spinner,
  VFlex,
  Avatar,
  HFlex,
  Heading,
  Link,
  Badge,
  Tag,
  Text,
  Code,
} from "../../components";
import { useParams } from "react-router";
import { FetchDataType, ResponseStatusType } from "../../store/types";
import api from "../../api";
interface ProfileProps {
  own?: boolean;
  containerProps?: any;
}

export function Question({ own, containerProps }: ProfileProps) {
  // if user is logged in, then we allow the user to edit the profile
  let question_id: string = useParams()?.id;
  const [data, setData] = React.useState<FetchDataType>({
    status: ResponseStatusType.IDLE,
  });
  React.useEffect(() => {
    const get = async () => {
      try {
        let res;
        setData({ status: ResponseStatusType.FETCHING });
        res = await api.get(`/questions/${question_id}`);
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
          data: { message: "Probably, cannot connect to the server." },
        });
      }
    };
    get();
  }, [own, question_id]);

  if (data.status === ResponseStatusType.ERROR) {
    return (
      <VFlex w="100%" m="auto" {...containerProps}>
        <VFlex mt="40" p={{ base: "4", lg: "12" }}>
          <Alert status="error">
            <AlertIcon />
            <AlertDescription>{JSON.stringify(data.data)}</AlertDescription>
          </Alert>
          <Text my="20">Should I just give 404 NOT FOUND here?</Text>
        </VFlex>
      </VFlex>
    );
  }
  if (data.status === ResponseStatusType.SUCCESS) {
    let {
      questionId,
      questionType,
      text,
      questionVisibility,
      license,
      choices,
      difficulty,
      tags,
      author,
      createdAt,
      updatedAt,
    } = data.data;
    text = text.slice(0, Math.min(text.length, 150));
    return (
      <VFlex w="80%" maxW="1250px" m="auto" mt="2em" align="start">
        <Heading as="h2" color="gray.600">
          Q. {text}
        </Heading>
        <Text color="gray.500" fontSize="14px" mt="2">
          {questionId}{" "}
        </Text>
        <Tag colorScheme="red" fontWeight="bold" mt="2">
          {questionType}
        </Tag>
        <HFlex align="start"></HFlex>
        <Divider mt="2" />

        <VFlex align="start" p="4">
          <Text fontWeight="bold" mt="2" fontSize="18px" fontFamily="serif">
            Q. {text}{" "}
          </Text>
          {choices?.map((choice: string, i: number) => (
            <Text my="2" fontFamily="serif" fontSize="18px">
              <b>{String.fromCharCode(97 + i).toUpperCase()}.</b> {choice}{" "}
            </Text>
          ))}
        </VFlex>
        <Divider mb="2" />
        <HFlex>
          <Tag
            borderRadius="full"
            colorScheme="purple"
            px="2ch"
            fontWeight="bold"
          >
            {difficulty}{" "}
          </Tag>
          {tags &&
            tags.map((tag: any) => {
              return (
                <Tag
                  borderRadius="full"
                  colorScheme="purple"
                  px="2ch"
                  ml="2ch"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  {tag.tagName}
                </Tag>
              );
            })}
        </HFlex>
        <HFlex mt="4" ml="auto">
          <Avatar src={author.profile.avatar} size="sm" mr="4" />
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
        <Code mt="4">
          {JSON.stringify(
            {
              questionId,
              questionType,
              text,
              questionVisibility,
              license,
              choices,
              difficulty,
              tags,
              author,
              createdAt,
              updatedAt,
            },
            null,
            2
          )}
        </Code>
      </VFlex>
    );
  }
  if (data.status === ResponseStatusType.FETCHING) {
    return (
      <VFlex w="100%" m="auto" h="100%" {...containerProps}>
        <VFlex mt="40" p={{ base: "4", lg: "12" }}>
          <Text>Loading...</Text>
          <Spinner size="xl" speed="0.8s" color="purple.500" thickness="4px" />
        </VFlex>
      </VFlex>
    );
  }
  // I don't know when this state is reachable
  return null;
}
