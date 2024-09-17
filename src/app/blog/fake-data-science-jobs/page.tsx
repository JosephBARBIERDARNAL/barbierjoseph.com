import Header from "../../components/header";
import Footer from "../../components/footer";
import Spacing from "../../components/spacing";
import FooterBlog from "../footerBlog";
import Image from "next/image";

const FDSJ: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-black">
      <Header />
      <Spacing size={4} />
      <main className="blogpost container mx-auto flex-grow p-4">
        <h1>Fake Data Science Jobs</h1>
        <p className="text-sm text-gray-400 italic text-center">
          Last updated: Sep 2024 | Estimated read time: 3 min
        </p>

        <h2>TLDR</h2>
        <p>
          Some so-called "data science" jobs you've come across might seem odd.
          These roles often focus on data labeling, a repetitive task that
          involves assigning "labels" to data. This process can take various
          forms, but in this case, it revolves around labeling, comparing, and
          ranking code based on its quality. It's crucial for training AI
          systems, such as large language models (LLMs), by providing
          high-quality labels to improve their coding abilities. Once companies
          hire these "data scientists," they have them label and rank code or
          LLM outputs, then sell this labeled data to businesses training AI
          models.
        </p>

        <h2>Weird Job Offers</h2>
        <p>
          If you work in a field related to data science/analysis, you might
          have encountered some peculiar job offers. These job titles usually
          contain the word "data" and mention the task of doing data analysis,
          but they are far from what we usually mean by data analysis (ETL,
          database, modeling, A/B testing, dashboards, etc.).
        </p>
        <p>Let's see what these job offers look like:</p>
        <div className="flex justify-center my-10">
          <Image
            src="/img/blog/example-fake-datascience-job-1.png"
            width={700}
            height={100}
            alt="example of a fake data science job"
            className="rounded-lg"
          />
        </div>
        <p>Interesting things to note:</p>
        <ul className="list-disc pl-5">
          <li>Looking for multiple persons (use of plural)</li>
          <li>No idea of what the projects are about or the kind of clients</li>
          <li>Focus on being able to express one's reasoning and logic</li>
          <li>
            Mention of "AI" while the job doesn't seem related to AI on
            technical aspects
          </li>
        </ul>

        <h2>I Applied</h2>
        <p>
          Since I was very curious, I applied to the job offer to understand
          more about it. I then filled in the basic info they asked for. And
          then, for some reason, they really wanted me to work with them:
        </p>
        <div className="flex justify-center my-10">
          <Image
            src="/img/blog/turing-messages.gif"
            width={700}
            height={100}
            alt="message from the company gif"
            className="rounded-lg"
          />
        </div>
        <p>
          They kept saying in their messages that I only had a few days to do
          their tests, and otherwise I would be removed from the recruiting
          process. What's even more interesting is that they didn't know much
          about my skills, but they still sent lots of automatic messages,
          meaning I'm probably not the only one in this case.
        </p>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Other Job Offers</h2>
          <p className="mb-6">
            Let's have a look at different job offers, but from other companies
            to highlight the nonsense.
          </p>

          <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:space-x-4 items-center">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <Image
                  src="/img/blog/example-fake-datascience-job-2.png"
                  width={300}
                  height={100}
                  alt="example of a fake data science job 2"
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <p className="w-full md:w-2/3">
                Here we have an offer that has a ridiculous pay rate, a very
                suspicious required experience, and a weird location requirement
                (probably working solo on data labeling tasks with zero
                meetings).
              </p>
            </div>

            <div className="flex flex-col-reverse md:flex-row md:space-x-4 items-center">
              <div className="w-full md:w-2/3 space-y-4">
                <p>
                  This other offer literally doesn't ask for any experience, nor
                  any programming/data skills. When we look at the description,
                  this has nothing to do with data analysis, and they have very
                  weird requirements such as living in France for at least 5
                  years.
                </p>
                <p>
                  Their benefits only focus on the "flexibility" of the job
                  (once again: solo work on data annotation with no meetings).
                </p>
              </div>
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <Image
                  src="/img/blog/example-fake-datascience-job-3.png"
                  width={300}
                  height={100}
                  alt="example of a fake data science job 3"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4 items-center">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <Image
                  src="/img/blog/example-fake-datascience-job-4.png"
                  width={300}
                  height={100}
                  alt="example of a fake data science job 4"
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <p>
                  On this other job offer from another company, we find a
                  similar pattern with very specific requirements and no mention
                  of data analysis whatsoever.
                </p>
                <p>
                  Interestingly, they mention "extra income" for their
                  remuneration, as if this was not even a real job but just a
                  side thing to do.
                </p>
              </div>
            </div>
          </div>
        </section>

        <h2>The Actual Job</h2>
        <p>
          I found a platform where it was easy to access the tasks and tried a
          few exercises (I even made $0.54). And as I said before, the tasks are
          nothing close to data analysis. Here is the description of the project
          I worked on:
        </p>
        <p className="text-gray-400 italic text-sm">
          "In this task, you'll see a prompt that's related to coding, such as
          generating code, explaining code, debugging a code snippet, writing
          comments/documentation, etc. You'll also see two responses from
          different models that attempt to respond to the prompt. Your job is to
          look closely at each response and determine the following: How correct
          is the response? How well did the response follow the prompt's
          instructions? Were you able to run the code in the response to check
          its correctness? Based on the correctness of each response, which is
          better?"
        </p>
        <p>
          The code they are talking about was <i>related</i> to data science,
          but was so vast it does not make any sense to look for "data analysts"
          to assess it. The first question was about using AutoML and Google
          Cloud, while the second question was about backend in Go.
        </p>
        <p>
          There is lots of text to read (assignment + compare 2 LLMs output on
          long tasks), with very specific questions such as:
        </p>
        <div className="flex my-10 space-x-4 justify-center">
          <Image
            src="/img/blog/llm-ranking.png"
            width={700}
            height={100}
            alt="example of a fake data science job 4"
            className="rounded-lg"
          />
        </div>
        <p>
          This might be only personal, but I find this kind of task very boring
          while requiring lots of focus. You lose all the fun parts about
          programming (aka solving a problem).
        </p>

        <h2>The Problem</h2>
        <p>
          One could argue that there is no problem with this kind of job. And in
          itself, it's true. It offers more job opportunities to more people.
          But the fact that they suggest that this is a real data science
          position can lead to some surprises.
        </p>
        <p>
          These jobs will not help you get a job as a data analyst, nor get
          related skills. You will not work on real projects, but rather work on
          some sort of "meta data analysis", which consists of labeling and
          ranking tasks related to data analysis.
        </p>
        <p>
          Another issue I see here is that they are not very explicit about what
          the job is about, and how it works. If you want to have a career in
          the data world, these jobs are probably the last ones you want to
          apply to.
        </p>

        <h2>Will This Make AI Better?</h2>
        <p>
          Probably not. As I mentioned earlier, the company's main goal is to
          sell the labeled data to other businesses. My theory is that since
          these jobs are far from enjoyable, skilled developers are unlikely to
          be interested. Instead, the work will likely be done by people who,
          unfortunately, haven't been able to secure more desirable positions.
          Offering high pay could attract better talent, but the best rates I've
          found are around $50 per hour—and even those are rare and require
          passing multiple tests.
        </p>

        <FooterBlog />
      </main>
      <Footer />
    </div>
  );
};

export default FDSJ;
