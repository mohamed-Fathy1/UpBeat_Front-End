interface Song {
  link: string;
  image: string;
  alt: string;
  artist: string;
  title: string;
}

export interface MusicData {
  "New Released": Song[];
  "Popular Artists": Song[];
  "Popular Tracks": Song[];
}
