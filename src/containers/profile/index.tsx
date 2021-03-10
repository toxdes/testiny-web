import * as React from "react";
import { Text } from "../../components";
import { useParams } from "react-router";

interface ProfileProps {
  my_username?: string;
}

export default function Profile(props: ProfileProps) {
  const username = useParams()?.username;

  return <Text>TODO: Fetch details for {username}</Text>;
}
