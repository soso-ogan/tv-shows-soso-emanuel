import { IEpisode } from "../propsTypes/types";

export function episodeCode(tv: IEpisode): string {
  let season = "";
  let number = "";
  if (tv.season.toString().length === 1) {
    season = `S0${tv.season}`;
  } else if (tv.season.toString().length > 1) {
    season = `S${tv.season}`;
  }

  if (tv.number.toString().length === 1) {
    number = `E0${tv.number}`;
  } else if (tv.number.toString().length > 1) {
    number = `E${tv.number}`;
  }
  return season + number;
}
