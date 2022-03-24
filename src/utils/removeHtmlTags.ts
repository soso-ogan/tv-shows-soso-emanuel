import { IEpisode } from "../propsTypes/types";

export function removeHtmlTags(tvEpisodeList: IEpisode): string {
  const cleanedSummary = tvEpisodeList["summary"].replace(/(<([^>]+)>)/gi, "");

  return cleanedSummary;
}
