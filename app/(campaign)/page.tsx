import Hero from '@/app/components/sections/Hero';
import About from '@/app/components/sections/About';
import Issues from '@/app/components/sections/Issues';
import EndorsementShowcase from '@/app/components/sections/EndorsementShowcase';
import Donate from '@/app/components/sections/Donate';
import Signup from '@/app/components/sections/Signup';
import { getDictionary, defaultLocale } from '@/app/lib/i18n';

// TODO: When [locale] route segment is added, derive locale from params
const dict = getDictionary(defaultLocale);

export default function Home() {
  return (
    <>
      <Hero
        dict={dict.hero}
        // videoSrc="/hero.mp4"
        // imageSrc="/hero.jpg"
      />
      <About dict={dict.about} />
      <Issues dict={dict.issues} />
      <EndorsementShowcase endorsers={dict.endorsements} />
      <Donate
        dict={dict.donate}
        // imageSrc="/community.jpg"
      />
      <Signup dict={dict.signup} volunteerModalDict={dict.volunteerModal} />
    </>
  );
}