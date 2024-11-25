import { getCurrentWeather } from "@/app/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Cloud, Sun } from "lucide-react";

export async function WeatherCard() {
  const data = await getCurrentWeather();

  console.log(data);

  const mapIconToWeather = (weather: string) => {
    switch (weather) {
      case "Clouds":
        return (
          <>
            <Cloud size={64} color={"gray"} />
            <span className="text-gray-500 font-semibold">Clouds</span>
          </>
        );
      case "Clear":
        return <Sun />;
      default:
        return <Cloud />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2">
          <Cloud />
          Weather
        </CardTitle>
        <CardDescription>Check out the weather in my location.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <p className="text-slate-800 font-semibold text-5xl">
            {data.main.temp}ºC
          </p>
          <p className="flex flex-row gap-2 text-4xl items-center">
            {mapIconToWeather(data.weather[0].main)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
