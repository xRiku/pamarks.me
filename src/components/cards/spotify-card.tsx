import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Music } from "lucide-react";

export function SpotifyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2">
          <Music />
          Spotify
        </CardTitle>
        <CardDescription>
          Check out the music I&apos;m listening to.
        </CardDescription>
      </CardHeader>
      <CardContent>To be Added</CardContent>
    </Card>
  );
}
