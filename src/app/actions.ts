"use server";

import SpotifyWebApi from "spotify-web-api-node";

const api = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT,
});

type SpotifyData = {
  name: string;
  images: { url: string }[];
  artist: string;
};

export async function nowPlaying(): Promise<SpotifyData | undefined> {
  try {
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
    if (!refreshToken) {
      throw new Error("SPOTIFY_REFRESH_TOKEN is not defined");
    }
    api.setRefreshToken(refreshToken);
    const data = await api.refreshAccessToken();
    api.setAccessToken(data.body["access_token"]);

    const recentTracks = await api.getMyRecentlyPlayedTracks({
      limit: 1,
    });
    return {
      name: recentTracks.body.items[0].track.name,
      images: recentTracks.body.items[0].track.album.images,
      artist: recentTracks.body.items[0].track.artists[0].name,
    };
  } catch (err) {
    console.log("Something went wrong!", err);
  }
}
