import { IEpisode } from "../propsTypes/types";

export function isSearchTerminEpOrSum(
  tvEpisodeList: IEpisode[],
  searchTerm: string
): IEpisode[] {
  const newtvEpisodeList = tvEpisodeList.filter(
    (obj) =>
      obj["name"].toLowerCase().includes(searchTerm.toLowerCase()) ||
      obj["summary"].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return newtvEpisodeList;
}
