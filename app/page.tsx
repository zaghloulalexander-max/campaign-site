import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import Hero from '@/app/components/sections/Hero';
import About from '@/app/components/sections/About';
import Issues from '@/app/components/sections/Issues';
import Endorsements from '@/app/components/sections/Endorsements';
import Volunteer from '@/app/components/sections/Volunteer';
import Donate from '@/app/components/sections/Donate';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero
          // videoSrc="/hero.mp4"     ← uncomment when video is ready
          // imageSrc="/hero.jpg"     ← uncomment when photo is ready
        />
        <About />
        <Issues />
        <Endorsements />
        <Donate />
        <Volunteer />
      </main>
      <Footer />
    </>
  );
}
