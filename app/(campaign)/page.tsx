import Hero from '@/app/components/sections/Hero';
import About from '@/app/components/sections/About';
import Issues from '@/app/components/sections/Issues';
import EndorsementShowcase from '@/app/components/sections/EndorsementShowcase';
import Volunteer from '@/app/components/sections/Volunteer';
import Donate from '@/app/components/sections/Donate';

export default function Home() {
  return (
    <>
      <Hero
        // videoSrc="/hero.mp4"     ← uncomment when video is ready
        // imageSrc="/hero.jpg"     ← uncomment when photo is ready
      />
      <About />
      <Issues />
      <EndorsementShowcase />
      <Donate
        // imageSrc="/community.jpg"  ← uncomment when photo is ready
      />
      <Volunteer />
    </>
  );
}