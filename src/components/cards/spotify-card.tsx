import { nowPlaying } from "@/app/actions";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Music } from "lucide-react";
import Image from "next/image";

export async function SpotifyCard() {
  const data = await nowPlaying();
  if (!data) {
    return <></>;
  }
  const { name, images, artist } = data;

  return (
    <Card className="md:w-[22rem] h-auto md:h-[18rem] w-full">
      <CardHeader>
        <CardTitle className="flex gap-2">
          <Music />
          Spotify
        </CardTitle>
        <CardDescription>
          Check out the music I recently listened to
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2 py-4 md:p-0 md:flex-row">
        <div className="bg-gradient-to-b w-[170px] h-[170px] md:w-[60px] md:h-[60px] from-slate-50 from-30% to-black rounded-md flex items-center justify-center">
          <Image
            src={images[0].url}
            alt="Album Cover for "
            width={160}
            height={160}
            className="rounded-md md:hidden"
          />
          <Image
            src={images[0].url}
            alt="Album Cover for "
            width={60}
            height={60}
            className="rounded-md hidden md:block"
          />
        </div>

        <div className="leading-4 mt-2">
          <p className="font-semibold text-3xl md:text-xl text-black tracking-wide">
            {name}
          </p>
          <p className="text-black text-sm font-extralight">{artist}</p>
        </div>
      </CardContent>
    </Card>
  );
}
