import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';

export default function Home() {
  return (
    <div>
      {/* Hero Section  */}
      <section id="home" className="">
        <Hero className="" />
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
      <footer className="bg-gradient-to-br text-black dark:text-white from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className=" py-8 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Hungry</h3>
              <p className="">Delicious food delivered to your door</p>
            </div>
            <div className="border-t border-gray-600 pt-4">
              <p className="text-sm">
                © 2024 Shohorab H Shawon. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
