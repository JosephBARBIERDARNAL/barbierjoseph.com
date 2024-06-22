import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Spacing from "./components/spacing";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        </div>

        <div className="relative flex place-items-center">
          <Image
            src="/img/joseph.png"
            alt="Joseph's Profile"
            width={200}
            height={200}
            className="rounded-full"
            priority
          />
        </div>
        {/* ['#FED789FF', '#023743FF', '#72874EFF', '#476F84FF', '#A4BED5FF', '#453947FF'] */}
        <Spacing size={1}/>

        <div className="mb-32 text-center font-light max-w-2xl mx-auto">
          <h1 className="text-2xl mb-4">Hi! I'm Joseph</h1>
          <p className="text-base mb-4">
            I'm passionate about open-source development and data analysis. 
            I have worked in multiple contexts (research, start-up, freelancing, open source)
            and on various topics (health, e-commerce, ecology, data visualization).
          </p>
          <p>
            Today, I'm focusing on open source projects related to data processing: visualization,
            modelling and other tools.
          </p>
        </div>

        <div className="grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left gap-8">
          <a
            href="/opensource"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Open source{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 font-light max-w-[30ch] text-sm opacity-60">
              Check out my open-source work and contributions
            </p>
          </a>

          <a
            href="/data-visualization"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Data visualization{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 font-light max-w-[30ch] text-sm opacity-60">
              Explore how I do information design and data visualization
            </p>
          </a>

          <a
            href="/about"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              About Me{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] font-light text-sm opacity-60">
              Learn more about my background, skills, and services
            </p>
          </a>
        </div>
      </main>
      <Footer/>
    </div>
  );
}