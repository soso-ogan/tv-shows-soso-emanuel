import { removeHtmlTags } from "./removeHtmlTags";

test("removeHtmlTags removes html tags from a string", () => {
  expect(
    removeHtmlTags({
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
        "<p>Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/4952",
        },
      },
    })
  ).toStrictEqual(
    "Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage."
  );
  expect(
    removeHtmlTags({
      id: 4972,
      url: "https://www.tvmaze.com/episodes/4972/game-of-thrones-3x01-valar-dohaeris",
      name: "Valar Dohaeris",
      season: 3,
      number: 1,
      type: "regular",
      airdate: "2013-03-31",
      airtime: "21:00",
      airstamp: "2013-04-01T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/1/2628.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/1/2628.jpg",
      },
      summary:
        "<p></p><p>Jon is brought before Mance Rayder, the King Beyond the Wall, while the Night's Watch survivors retreat south. In King's Landing, Tyrion asks for his reward. Littlefinger offers Sansa a way out. Cersei hosts a dinner for the royal family. Daenerys sails into Slaver's Bay.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/4972",
        },
      },
    })
  ).toStrictEqual(
    "Jon is brought before Mance Rayder, the King Beyond the Wall, while the Night's Watch survivors retreat south. In King's Landing, Tyrion asks for his reward. Littlefinger offers Sansa a way out. Cersei hosts a dinner for the royal family. Daenerys sails into Slaver's Bay."
  );
});
