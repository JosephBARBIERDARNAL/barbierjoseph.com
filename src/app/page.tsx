import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Spacing from "./components/spacing";
import LinkCard from "./card";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 animate-fadeIn">
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

        <Spacing size={1}/>

        <div className="mb-32 text-center font-light max-w-2xl mx-auto">
          <h1 className="text-2xl mb-4">Hi! I"m Joseph</h1>
          <p className="mb-4">
            I"m passionate about open-source development and data analysis. 
            I have worked in multiple contexts (research, start-up, freelancing, open source)
            and on various topics (health, e-commerce, ecology, data visualization).
          </p>
          <p>
            Today, I"m focusing on open source projects related to data processing: visualization,
            modelling, and other tools.
          </p>
        </div>

        <div className="grid text-center lg:mb-0 lg:w-full lg:max-w-7xl lg:grid-cols-4 lg:text-left gap-">
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