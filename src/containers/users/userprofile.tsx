import * as React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Loading,
  VFlex,
  Text,
  Image,
  Link,
  HFlex,
  Badge,
} from "../../components";
import { useParams } from "react-router-dom";
import { FetchDataType, ResponseStatusType } from "../../store/types";
import api from "../../api";
interface ProfileProps {
  own?: boolean;
  containerProps?: any;
}

export function Profile({ own, containerProps }: ProfileProps) {
  // if user is logged in, then we allow the user to edit the profile
  let username: string = useParams()?.username;
  const [data, setData] = React.useState<FetchDataType>({
    status: ResponseStatusType.IDLE,
  });
  React.useEffect(() => {
    const get = async () => {
      try {
        let res;
        setData({ status: ResponseStatusType.FETCHING });
        if (own) {
          res = await api.get("/me");
        } else {
          res = await api.get(`/users/${username}`);
        }
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
    // if (data.status === ResponseStatusType.IDLE) {
    //   get();
    // }
    get();
  }, [own, username]);

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
  const fallBackImg = "https://randomuser.me/api/portraits/men/81.jpg";

  if (data.status === ResponseStatusType.SUCCESS) {
    let { avatar, username, email_verified, bio, ownProfile } = data.data;
    console.log("profile data", data.data);
    let name = data.data.name ? data.data.name : username;
    if (!avatar) avatar = fallBackImg;
    return (
      <VFlex w="100%" m="auto" h="100%" {...containerProps}>
        <VFlex mt="40" p={{ base: "4", lg: "12" }}>
          <Image src={avatar} w="120px" height="120px" />
          <HFlex mt="12">
            <Text fontWeight="bold" fontSize="24px">
              {name}
            </Text>
            <Badge
              colorScheme={!email_verified ? "green" : "red"}
              mx="2"
              mb="4"
            >
              {!email_verified ? "Verified" : "not verified"}
            </Badge>
          </HFlex>
          <Link
            href={`/users/${username}`}
            color="purple.400"
          >{`@${username}`}</Link>
          <Text
            w="40ch"
            textAlign="center"
            fontStyle={bio ? "normal" : "italic"}
          >
            {bio ? bio : " - This user prefers mystery. -"}
          </Text>
          {ownProfile && (
            <Text color="green.400" mt="4">
              It's your own Profile, you should be able to edit these things...
            </Text>
          )}
        </VFlex>
      </VFlex>
    );
  }
  // if (data.status === ResponseStatusType.IDLE) {
  //   fetchDetails();
  // }
  if (data.status === ResponseStatusType.FETCHING) {
    return (
      <VFlex w="100%" m="auto" h="100%" {...containerProps}>
        <Loading
          containerProps={{ mt: 40 }}
          spinnerProps={{
            size: "xl",
            thickness: "4px",
          }}
        />
      </VFlex>
    );
  }
  // I don't know when this state is reachable
  return null;
}
