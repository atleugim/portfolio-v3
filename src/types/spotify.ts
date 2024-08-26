export interface SpotifyArtist {
  name: string;
}

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifyExternalUrls {
  spotify: string;
}

export interface SpotifyNowPlaying {
  artists: SpotifyArtist[];
  external_urls: SpotifyExternalUrls;
  name: string;
  image?: SpotifyImage;
}
