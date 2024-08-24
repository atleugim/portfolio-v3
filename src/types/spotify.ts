export interface Artist {
  name: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Item {
  artists: Artist[];
  external_urls: ExternalUrls;
  name: string;
}

export interface SpotifyNowPlaying {
  item: Item;
  is_playing: boolean;
}
