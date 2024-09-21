import Header from "../../components/header";
import Footer from "../../components/footer";
import Spacing from "../../components/spacing";
import FooterBlog from "../footerBlog";

const BCWMS: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-black">
      <Header />
      <Spacing size={4} />
      <main className="blogpost container mx-auto flex-grow p-">
        <h1>Be careful when making statistics</h1>
        <p className="text-sm text-gray-400 italic text-center">
          Last updated: Sep 2024 | Estimated read time: 5 min
        </p>

        <h2>TLDR</h2>
        <p>
          Even for a simple comparison of means, you need to understand well
          what you're doing. Depending on what you want to do, you have to find
          the tool that fits your issue best. However, there is no magic way to
          be sure of the sense of what you are doing. One way of it would be to:
          be aware of the data type, the distribution of your sample, your
          sample size, define clearly what hypothesis you want to test etc. You
          should also always check the documentation of the software you are
          using. The tool you need is determined by the problem you are working
          on: make sure you understand the latter.
        </p>

        <h2>What is statistics?</h2>
        <p>
          Wikipedia defines statistics as "the discipline concerned with the
          collection, organization, analysis, interpretation, and presentation
          of data". More generally, statistics uses mathematics and probability
          theory to study random variables (the word "random" should be
          interpreted with caution). We try to answer questions such as: Is it
          more likely to be diagnosed with cancer if I am a smoker or not? Does
          inflation depend on European wheat consumption? What is the impact of
          taking an extra mg of this drug?
        </p>
        <p>
          In order to answer these questions, we (humans) have invented
          mathematical tools. Thanks to them, we can now calculate the
          probability of occurrence of a phenomenon, make inferences in the real
          world and amplify the amount of information we have access to through
          our data.
        </p>
        <p>
          However, this tool is far from perfect (which is why it is not so easy
          to find a general solution to a specific problem) and needs to be
          understood. Otherwise, there is a very high probability that your
          calculations will not make sense (even if it does look like it!).
          Statistics are complex, but that is also what makes them powerful and
          interesting. It is much better to use basic statistical tools that you
          understand than fancy modeling tools that require a high level of
          knowledge.
        </p>

        <h2>Use the right tool for the right problem</h2>
        <p>
          When we do statistics, we want to answer a question, not just do
          random calculations. Each statistical construct works for a specific
          situation: you need to know which one is yours.
        </p>
        <p>
          If you want to compare the mean of a variable between two groups, you
          can use the Student's t test, for example. But there are many
          different versions of this test, depending on the situation you are
          in. Are the groups paired? Do they have the same variance? Is the
          distribution non-Gaussian? There are solutions if you are in one of
          these cases (respectively: Student's paired sample test, Welch's test,
          non-parametric tests), but statistical software cannot tell you if
          your calculations are not correct (it just does the math). This means
          that you have to know what you're doing.
        </p>
        <p>
          As you can see, even for a simple comparison of means, you have to be
          careful. Also, the tools you use must be determined based on your
          problem. Since different tools can be useful in the same situation,
          you need to find the one that is most relevant. If you want to know if
          smokers are more likely to get cancer, don't use a complex machine
          learning algorithm but rather an odd ratio. Simple tools can perfectly
          give us all the information we are looking for: be parsimonious.
          Complex tools are useless and irrelevant when not used properly. For
          this reason, try to use the simplest thing possible to answer your
          question / solve your problem.
        </p>

        <h2>How to know if you're doing it right?</h2>
        <p>
          Let's say you do your calculations and make sure that everything is
          under control (i.e: there are no random elements in your work).
          Knowing that it is impossible to know everything, how can you know if
          everything is correct? Unfortunately, there is no magic solution to
          this problem, but I do have some advice.
        </p>
        <p>
          For probably almost every test, regression, model etc. there are
          application conditions. It's impossible to be exhaustive but here are
          the most important ones you need to be aware of: Type of data: are you
          working on qualitative variables? quantitative? images? other?
          Depending on the answer, you will not use the same thing. Distribution
          of variables: contrary to what is taught in university, in most
          situations the data are not Gaussian. You cannot ignore this
          information in your calculations unless you use non-parametric tools.
          Sample size: the number of people in your sample has a lot of impact
          (statistical power) and if it is too small, there are things you can't
          do. What hypothesis you want to test And many others...
        </p>
        <p>
          More generally, unless you are doing your calculations by hand (which
          is not recommended), check the documentation for the function you are
          using and make sure you understand what is going on. Also, you should
          be very careful with interpretation. For example, if your p-value is
          below a fixed threshold, it does not mean that this drug is effective
          for that condition. It only means that what you observed in the
          treated group can be considered unlikely (depending on your threshold)
          and that we need another hypothesis than "this drug has no effect" to
          explain the situation. This emphasizes the importance of knowing the
          context of our data (in this case: is our study protocol of good
          quality or not?) Also, it doesn't give us any information about the
          effect size (it only shows that there is probably an effect)! You need
          to do more calculations if you want to know how effective this drug
          is.
        </p>
        <p>
          And finally, ask people who know more than you do. Show them your work
          and you'll probably be very surprised at how many little (or larger)
          details are wrong, and that's not a problem at all. This is one of the
          things that will make you learn the most and save a lot of time in the
          long run, because you will necessarily make mistakes. What matters is
          that you know it as soon as possible.
        </p>

        <h2>Closing remarks</h2>
        <p>
          Statistics are a very useful, but imperfect, human invention and
          cannot be used in any random way. The tool you need is determined by
          the problem you are working on. Make sure you understand what you are
          doing with your calculations so that you don't do things that don't
          make sense. Interpret the result in the right way. Ask people to help
          you and correct your mistakes.
        </p>

        <FooterBlog />
      </main>
      <Footer />
    </div>
  );
};

export default BCWMS;
