import { ContactCard } from "@/components/cards/contact-card";
import { ProjectsCard } from "@/components/cards/projects-card";
import { SpotifyCard } from "@/components/cards/spotify-card";
import { WeatherCard } from "@/components/cards/weather-card";
import Container from "@/components/container";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen md:p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-5xl">
          <span className="text-6xl">P</span>hilipe{" "}
          <span className="text-6xl">M</span>arques
        </h1>
        <Container>
          <ProjectsCard />
          <ContactCard />
          <SpotifyCard />
          <WeatherCard />
        </Container>
      </main>
    </div>
  );
}
