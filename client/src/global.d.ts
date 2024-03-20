interface Song {
  id: number;
  link: string;
  image: string;
  alt: string;
  artist: string;
  title: string;
  src: string;
}

export interface MusicData {
  "New Released": Song[];
  "Popular Artists": Song[];
  "Popular Tracks": Song[];
}
