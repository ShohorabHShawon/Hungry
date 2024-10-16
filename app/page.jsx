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
        <div className="">
          <h1 className="text-3xl text-center font-lexend m-6 p-2 font-bold">
            Healthy and Tasty
          </h1>
          <div className="flex justify-evenly items-center flex-wrap">
            <div className="flex max-w-7xl text-wrap justify-evenly items-center">
              <Image
                src="/capsicum.png"
                width={200}
                height={200}
                alt="image"
                className="p-2 drop-shadow-xl"
              />
              <p className="p-2">
                Our food is made with the freshest ingredients and is perfect
                for those who want to eat healthy and tasty food. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Enim, sit iusto
                dolore voluptate, quod porro, facere tempore ex corrupti
                excepturi reprehenderit iure id doloribus ratione ad vel
                eveniet. Sunt, neque.
              </p>
            </div>

            <div className="flex max-w-7xl text-wrap justify-evenly items-center">
              <p className="p-2">
                Our food is made with the freshest ingredients and is perfect
                for those who want to eat healthy and tasty food. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Officia, eligendi.
                Deleniti nobis nulla cupiditate reprehenderit aliquid, fuga
                aliquam ipsum asperiores voluptatum inventore debitis adipisci
                natus non laboriosam ea perspiciatis ipsam?
              </p>
              <Image
                src="/greencapsicum.png"
                width={200}
                height={200}
                alt="image"
                className="p-2 drop-shadow-xl"
              />
            </div>
            <div className="flex max-w-7xl text-wrap justify-evenly items-center">
              <Image
                src="/leaf.png"
                width={200}
                height={200}
                alt="image"
                className="p-2 drop-shadow-xl"
              />
              <p className="p-2">
                Our food is made with the freshest ingredients and is perfect
                for those who want to eat healthy and tasty food. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Est, ad deleniti
                eum praesentium temporibus sit unde porro quod commodi et
                suscipit quos iste harum modi! Tempora iusto eaque at
                accusantium.
              </p>
            </div>
          </div>
        </div>
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
      <section id="contact" className="h-screen">
        <h1 className="text-3xl text-center font-lexend m-6 p-2 font-bold">
          Contact
        </h1>
        <Contact />
      </section>
    </div>
  );
}
