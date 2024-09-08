import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Spacing from "./components/spacing";
import LinkCard from "./card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-between p-4 sm:p-8 md:p-16 lg:p-24 animate-fadeIn">
        <div className="w-full max-w-5xl items-center justify-between font-mono text-sm">
        </div>

        <div className="relative flex place-items-center">
          <Image
            src="/img/joseph.png"
            alt="Joseph's Profile"
            width={200}
            height={200}
            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
            priority
          />
        </div>

        <Spacing size={1}/>

        <div className="mb-8 text-center font-light max-w-2xl mx-auto px-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl mb-4">Hi! I'm Joseph</h1>
          <p className="mb-4 text-sm sm:text-base">
            I'm passionate about open-source development and data analysis. 
            I have worked in multiple contexts (research, start-up, freelancing, open source)
            and on various topics (health, e-commerce, ecology, data visualization).
          </p>
          <p className="text-sm sm:text-base">
            Today, I'm focusing on open source projects related to data processing: visualization,
            modelling, and other tools.
          </p>
        </div>
        <br/>
        <br/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center lg:text-left w-full max-w-7xl px-4">
          <LinkCard
            href="/opensource"
            title="Open source"
            description="Check out my open-source work and contributions"
          />
          <LinkCard
            href="/dataviz"
            title="Data visualization"
            description="Explore how I do information design and data visualization"
          />
          <LinkCard
            href="/blog"
            title="Blog"
            description="Miscellaneous articles on analysis and data science that I write"
          />
          <LinkCard
            href="/about"
            title="About Me"
            description="Learn more about my background, skills, and services"
          />
        </div>
      </main>
      <Footer/>
    </div>
  );
}