import {
  ProjectsCard,
  ContactCard,
  LoadingCard,
  SpotifyCard,
  WeatherCard,
} from "@/components/cards";
import Container from "@/components/container";
import { Suspense } from "react";

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
          <Suspense fallback={<LoadingCard />}>
            <SpotifyCard />
          </Suspense>
          <WeatherCard />
        </Container>
      </main>
    </div>
  );
}
