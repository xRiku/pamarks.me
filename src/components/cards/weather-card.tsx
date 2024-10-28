import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Cloud } from "lucide-react";

export function WeatherCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2">
          <Cloud />
          Weather
        </CardTitle>
        <CardDescription>Check out the weather in my location.</CardDescription>
      </CardHeader>
      <CardContent>To be Added</CardContent>
    </Card>
  );
}
