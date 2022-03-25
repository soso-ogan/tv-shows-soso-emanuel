import { isSearchTerminEpOrSum } from "./isSearchTerminEpOrSum";

test("isSearchTerminEpOrSum returns an array with objects which match the searchterm", () => {
  expect(
    isSearchTerminEpOrSum(
      [
        {
          id: 4952,
          url: "https://www.tvmaze.com/episodes/4952/game-of-thrones-1x01-winter-is-coming",
          name: "Winter is Coming",
          season: 1,
          number: 1,
          type: "regular",
          airdate: "2011-04-17",
          airtime: "21:00",
          airstamp: "2011-04-18T01:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/1/2668.jpg",
          },
          summary:
            "Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.",
          _links: {
            self: {
              href: "https://api.tvmaze.com/episodes/4952",
            },
          },
        },
        {
          id: 729575,
          url: "https://www.tvmaze.com/episodes/729575/game-of-thrones-6x10-the-winds-of-winter",
          name: "The Winds of Winter",
          season: 6,
          number: 10,
          type: "regular",
          airdate: "2016-06-26",
          airtime: "21:00",
          airstamp: "2016-06-27T01:00:00+00:00",
          runtime: 69,
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/63/157920.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/63/157920.jpg",
          },
          summary:
            "Alliances are made, the High Sparrow is holding trials at King's Landing, Daenerys is sailing for the Seven Kingdoms and a new King of the North is crowned.",
          _links: {
            self: {
              href: "https://api.tvmaze.com/episodes/729575",
            },
          },
        },
      ],
      "Winter"
    )
  ).toStrictEqual([
    {
      id: 4952,
      url: "https://www.tvmaze.com/episodes/4952/game-of-thrones-1x01-winter-is-coming",
      name: "Winter is Coming",
      season: 1,
      number: 1,
      type: "regular",
      airdate: "2011-04-17",
      airtime: "21:00",
      airstamp: "2011-04-18T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/1/2668.jpg",
      },
      summary:
        "Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/4952",
        },
      },
    },
    {
      id: 729575,
      url: "https://www.tvmaze.com/episodes/729575/game-of-thrones-6x10-the-winds-of-winter",
      name: "The Winds of Winter",
      season: 6,
      number: 10,
      type: "regular",
      airdate: "2016-06-26",
      airtime: "21:00",
      airstamp: "2016-06-27T01:00:00+00:00",
      runtime: 69,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/63/157920.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/63/157920.jpg",
      },
      summary:
        "Alliances are made, the High Sparrow is holding trials at King's Landing, Daenerys is sailing for the Seven Kingdoms and a new King of the North is crowned.",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/729575",
        },
      },
    },
  ]);
});
