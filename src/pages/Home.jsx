import Hero from "../components/homepage/Hero.jsx";
import Services from "../components/homepage/Services.jsx";
import About from "../components/homepage/About.jsx";
import Testimonials from "../components/homepage/Testimonials.jsx";
import ContactCTA from "../components/global/ContactCTA.jsx";

export default function Home() {

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ContactCTA />
    </>
  )
}