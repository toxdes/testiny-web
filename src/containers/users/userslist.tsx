import React from "react";
import api from "../../api";
import {
  Heading,
  VFlex,
  Center,
  Box,
  Avatar,
  Text,
  Stack,
  Button,
  Loading,
  Alert,
  AlertIcon,
  HFlex,
  useToast,
} from "../../components";
import {
  FetchDataType,
  ResponseStatusType,
  UserDetails,
} from "../../store/types";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../store/selector";

type TUserDetails = UserDetails & { alreadyFollowing: boolean };
interface UserProfileCardProps {
  user: TUserDetails;
}
function UserProfileCard({ user }: UserProfileCardProps) {
  const navigate = useNavigate();
  const userLoggedIn = useTypedSelector(
    (state) => state.globalState.userLoggedIn
  );
  const toast = useToast();
  const [state, setState] = React.useState({
    followersCount: user.followersCount,
    alreadyFollowing: user.alreadyFollowing,
  });
  const onFollow = async () => {
    let data;
    if (userLoggedIn) {
      let res = await api.post(`/users/${user.username}/follow`);
      data = res.data;
    } else {
      data = { status: "error", message: "You need to login to do this." };
    }
    toast({
      status: data.status === "success" ? "success" : "error",
      title: data.message,
      duration: 1200,
      isClosable: true,
      position: "top-right",
    });
    if (userLoggedIn) {
      setState({
        followersCount: state.alreadyFollowing
          ? state.followersCount - 1
          : state.followersCount + 1,
        alreadyFollowing: !state.alreadyFollowing,
      });
    }
  };

  return (
    <Center py={6} w="320px">
      <Box
        maxW={"320px"}
        w={"full"}
        bg="white"
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        m="4"
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={user.avatar}
          alt={"Profile Picture"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {user.name ? user.name : user.username}
        </Heading>
        <Text fontWeight="bold" color={"purple.500"} mb={4}>
          {user.username}
        </Text>
        <Text textAlign={"center"} color={"gray.700"} px={3}>
          {user.bio}
        </Text>
        <HFlex>
          <Text color="gray.500" px="1ch">
            {user.followingCount} Following{" "}
          </Text>
          <Text color="gray.500" px="1ch">
            {state.followersCount} Followers
          </Text>
        </HFlex>
        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            variant="outline"
            colorScheme="purple"
            _active={{
              bg: "purple.200",
            }}
            onClick={() => navigate(`/users/${user.username}`)}
          >
            View Profile
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            bg={state.alreadyFollowing ? "purple.200" : "purple.500"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "purple.400",
            }}
            onClick={onFollow}
          >
            {state.alreadyFollowing ? "Unfollow" : "Follow"}
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}

export function UsersList() {
  const [data, setData] = React.useState<FetchDataType>({
    status: ResponseStatusType.IDLE,
  });
  React.useEffect(() => {
    const get = async () => {
      try {
        let res;
        setData({ status: ResponseStatusType.FETCHING });
        res = await api.get(`/users`);
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
  }, []);

  return (
    <VFlex w="100%" maxW="1250px" m="auto" align="start" mt="12" px="4">
      <Heading as="h1" color="gray.600">
        Discover people
      </Heading>
      <Text my="4" textAligh="left" color="gray.500">
        Based on your interests, we recommend you to check these awesome people
        out...
      </Text>
      <HFlex w="100%" flexWrap="wrap">
        {data.status === ResponseStatusType.FETCHING && (
          <Loading containerProps={{ mt: "20" }} />
        )}
        {data.status === ResponseStatusType.SUCCESS &&
          data.data.map((user: TUserDetails) => (
            <UserProfileCard user={user} />
          ))}
        {(!data || data.status === ResponseStatusType.ERROR) && (
          <Alert status="error">
            <AlertIcon />
            There was an error. Failed to connect to backend or other error.
          </Alert>
        )}
      </HFlex>
    </VFlex>
  );
}
