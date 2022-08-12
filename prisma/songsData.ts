export const artistsData: {
  name: string;
  avatar: string;
  songs: any[];
}[] = [
  {
    name: "Glitch",
    avatar:
      "https://www.free-stock-music.com/thumbnails/glitch-fermi-paradox.jpg",
    songs: [
      {
        name: "Fermi Paradox",
        duration: 235,

        url: "https://dl.dropboxusercontent.com/s/7xmpwvvek6szx5n/fermi-paradox.mp3?dl=0",
      },
    ],
  },
  {
    name: "Purple Cat",
    avatar: "https://i.scdn.co/image/ab6761610000e5eb6cd75d73b76d8c3d14fee48a",
    songs: [
      {
        name: "Long Day",
        duration: 185,
        url: "https://dl.dropboxusercontent.com/s/9h90r7ku3df5o9y/long-day.mp3?dl=0",
      },
    ],
  },
  {
    name: "Ben Sound",
    avatar:
      "https://image.winudf.com/v2/image1/Y29tLm5ld2FuZHJvbW8uZGV2OTkyOTc2LmFwcDEyMTE5MDBfaWNvbl8xNjE2NDUwOTkwXzAwOQ/icon.png?w=184&fakeurl=1",
    songs: [
      {
        name: "The Elevator Bossa Nova",
        duration: 238,
        url: "https://dl.dropboxusercontent.com/s/7dh5o3kfjcz0nh3/The-Elevator-Bossa-Nova.mp3?dl=0",
      },
    ],
  },
  {
    name: "LiQWYD",
    avatar:
      "data:image/jpeg;base64,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",
    songs: [
      {
        name: "Winter",
        duration: 162,
        url: "https://dl.dropboxusercontent.com/s/tlx2zev0as500ki/winter.mp3?dl=0",
      },
    ],
  },
  {
    name: "FSM Team",
    avatar: "https://f4.bcbits.com/img/a0883902749_65",
    songs: [
      {
        name: "Eternal Springtime",
        duration: 302,
        url: "https://dl.dropboxusercontent.com/s/92u8d427bz0b1t8/eternal-springtime.mp3?dl=0",
      },
      {
        name: "Astronaut in a Submarine",
        duration: 239,
        artist: "FSM Team",
        url: "https://dl.dropboxusercontent.com/s/9b43fr6epbgji4f/astronaut-in-a-submarine.mp3?dl=0",
      },
    ],
  },
];
