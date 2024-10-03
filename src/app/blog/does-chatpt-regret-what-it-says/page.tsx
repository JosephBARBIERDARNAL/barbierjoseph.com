import Header from "../../components/header";
import Footer from "../../components/footer";
import Spacing from "../../components/spacing";
import FooterBlog from "../footerBlog";

const DCRWIS: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-black">
      <Header />
      <Spacing size={4} />
      <main className="blogpost container mx-auto flex-grow p-">
        <h1>Does chatGPT regret what it says?</h1>
        <p className="text-sm text-gray-400 italic text-center">
          Last updated: Oct 2024 | Estimated read time: 4 min
        </p>

        <h2>TLDR</h2>
        <p>
          The way chatGPT was built (i.e: the transformer architecture) suggests
          that when it's starting to answer a prompt, it's unlikely to suddenly
          change direction along the way. This is a similar phenomena when
          someone asks you your opinion about X, you start answering something,
          but during your explanation you feel that what you say is partially
          wrong or it would have been better to say something else. However, you
          also feel that it would be a bit ridiculous to admit that what you
          just said wasn't the best answer you could give. The (partial)
          solution of this problem is to abuse of the temperature parameter,
          which defines the randomness in chatGPT's answers. This implies that,
          for a given prompt, it will answer different things and give us a
          better panel of the possible answers.
        </p>

        <h2>Foreword: how LLMs work?</h2>
        <p>
          For a more detailed explanation about language models, check{" "}
          <a href="/blog/chatgpt-metric-is-not-truthfulness" target="_blank">
            this article
          </a>
          .
        </p>
        <p>
          When using chatGPT on the official OpenAI website, you can see that
          its answers are coming word by word (or token by token to be
          specific). This isn't only a UI/UX decision by OpenAI but also the way
          chatGPT works. When it receives a prompt, chatGPT uses a probability
          distribution to determine the most likely word that should follow. For
          example, what's the most likely word, based on your experience: "I'm
          so hungry, I really [word]"? Personally, I'd say "need" or "want".
          Once it's done, the process continues again and again. This process is
          repeated iteratively, using the previous sequence as a new prompt,
          predicting the next word and continuing until the most likely word
          marks the end of the sequence.
        </p>
        <p>
          It's essential to note that chatGPT works without access to the
          Internet or an external database. It relies solely on its past
          exposure to data to predict the most appropriate word at a given
          moment in the text.
        </p>

        <h2>An example with programming</h2>
        <p>
          Don't worry, there are no programming prerequisites to understand this
          section.
        </p>
        <p>
          You now understand the basic functioning of chatGPT. This way of
          "reasoning" implies that chatGPT may "lock" itself in a direction that
          is not optimal. In order to make it intuitive, we will talk about
          programming.{" "}
        </p>
        <p>
          When coding, you regularly need to import packages. Packages are a
          group of functions, coded by other developers, that do stuff. The
          point behind using packages is that it makes you gain lots of time
          since you can use super useful functions without even knowing how they
          work. For example, if you want to create some charts with the Python
          programming language, you regularly use the Matplotlib package since
          it has a lot of tools, very easy to use, that create very customizable
          charts. You can also use the Seaborn package, similar and related to
          Matplotlib, but with some different features. One last detail about
          packages is that generally a code looks like this: you first "call"
          the package, and then you write your code.{" "}
        </p>
        <p>
          To this, if we add the way chatGPT works, we can reveal something
          interesting. When chatGPT is writing code, it will first write the
          import package1 etc, and then write the code. And since it uses past
          words to predict the next word, it means that it will only
          (theoretically, but that's usually true) use functions from the
          imported packages.{" "}
        </p>
        <p>
          This also means when it has finished importing the packages (let's say
          it just imported the matplotlib package), it will not use the seaborn
          package, even though it would have been a good idea for this issue.
          You can think of it intuitively if you ask someone the best scientific
          argument that proves global warming, and the person starts saying that
          it's pretty hot outside today. It was one of the possible answers, but
          probably not the best one. Once it started, for most humans, it's hard
          to say "I was wrong, this argument is not a good one". And chatGPT is
          even worse than humans because the way it works reinforces the fact
          that once you've started making mistakes, you're stuck with them.
        </p>

        <h2>The solution: increase the heat</h2>
        <p>
          It would be super cool if it was possible to have let's say 3 or 4
          chatGPT, trained (or finetuned) on different data, to compare their
          answers. So far it's not possible (as far as I know), but we can use a
          "trick" or a "masked" feature from chatGPT: the temperature. The
          temperature of a language model is a setting that affects the
          randomness of its responses. Have you ever seen that chatGPT give you
          slightly different answers even when you give it the exact same
          prompt?
        </p>
        <p>
          When using chatGPT on the official website we can't change this
          parameter: we don't even know its current value. But when using it
          with the OpenAI API (this just means using it in another service like
          google doc, some coding program or anything else), you can choose this
          parameter value. It ranges from 0 (answers are deterministic, no
          randomness and the model tends to always answer the same thing to the
          same prompt) to 2 (highly random model, answers may be very
          significantly different for the same prompt).
        </p>
        <p>
          The technique here is to use this parameter to see different responses
          to the same prompt, so as to be able to compare them. When ChatGPT
          generates text, it does so by predicting the next word in the sequence
          based on the previous words. The next word is predicted using a
          probability distribution over the entire vocabulary of the model. Each
          word in the vocabulary has an associated probability that indicates
          how likely it is to be the next word in the sequence.
        </p>
        <p>
          Adjusting the temperature will affect the importance of each word. If
          the temperature is high, the probabilities will be more uniform,
          meaning that the model will be more exploratory and make less certain
          choices. This can lead to more creative and diverse responses, but it
          could also produce less consistent or riskier results.
        </p>

        <FooterBlog />
      </main>
      <Footer />
    </div>
  );
};

export default DCRWIS;
