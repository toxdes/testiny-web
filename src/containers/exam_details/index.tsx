import * as React from "react";
import { Text } from "../../components";
import { useParams } from "react-router";

export default function ExamsList() {
  const params = useParams();
  return (
    <Text>
      Details about a single exam! It's this one: {JSON.stringify(params)}
    </Text>
  );
}
