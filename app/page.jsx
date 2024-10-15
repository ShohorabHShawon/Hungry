import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <section>
        <h1 className="text-9xl uppercase text-center font-black m-5 font-lexend">
          HUNGRY
        </h1>
        <div className="flex items-end justify-end mr-8">
          <Image src="/image.png" width={500} height={500} alt="image" />
        </div>
      </section>
    </div>
  );
}
