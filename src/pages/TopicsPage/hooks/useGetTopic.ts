import { useQuery } from "react-query";
import { getTopic } from "../../../api/topics";
import { ApiPath } from "../../../api/fetcher";

export const useGetTopic = (id: string) =>
  useQuery(["topic" as ApiPath, id], getTopic, {
    refetchOnWindowFocus: false,
  });