import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section  */}
      <section id="home">
        <Hero />
      </section>

      {/* About  */}
      <section id="about" className="">
        <About />
      </section>

      {/* Menu  */}
      <section id="menu" className="">
        <Menu />
      </section>

      {/* Contact  */}
      <section id="contact" className="">
        <div>
          <Contact />
        </div>
      </section>
    </div>
  );
}
