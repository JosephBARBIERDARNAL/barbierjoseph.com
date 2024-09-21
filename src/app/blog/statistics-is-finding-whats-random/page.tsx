import Header from "../../components/header";
import Footer from "../../components/footer";
import Spacing from "../../components/spacing";
import FooterBlog from "../footerBlog";

const SIFWR: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-black">
      <Header />
      <Spacing size={4} />
      <main className="blogpost container mx-auto flex-grow p-">
        <h1>
          Statistics are basically about finding out what is random and what is
          not
        </h1>
        <p className="text-sm text-gray-400 italic text-center">
          Last updated: Sep 2024 | Estimated read time: 5 min
        </p>

        <h2>TLDR</h2>
        <p>
          In our daily lives, we spend a lot of time discussing patterns and
          randomness. Even if you're not interested in statistics or
          epistemology, you probably do too. For example, when you say "there
          are more yellow cars in this town", you're talking about a pattern.
          It's a very simple one, but it's a pattern.
        </p>
        <p>
          The point is that we are always trying to determine what's random and
          what's not. When someone says that there are more yellow cars, this
          person is actually saying that he or she has observed so many yellow
          cars that it's unlikely that it's just a coincidence: it's a pattern.
          Statistics is just the formal way of doing that.
        </p>

        <h2>A word on randomness</h2>
        <p>
          The question of "Is our world fundamentally random or not?" is a very
          complex one and lots of smarter people than me have tried to answer
          it. However, for this post, it's not an issue. It doesn't matter if
          the world is really random or not, because at the human scale, it's
          like it is: the number of yellow cars that you'll see in a city might
          not be random, but for you it is, and it will behave like a random
          phenomenon.
        </p>
        <p>
          To the contrary, we can define pattern as something that is not
          random. In an intuitive way, we can think of a pattern as "when X
          happens, Y tends to happen too, but not always".
        </p>

        <h2>How it works</h2>
        <p>
          A big part of how people use statistics is to calculate the
          probability of some events to happen, supposing that there is no
          pattern. For example, if men and women have the same grades in a
          class, the difference in terms of average grades between them should
          not be higher than a certain value. So we compute this theoretical
          value and compare it to the real one. If the real difference is higher
          than the theoretical one, we can say that there is a pattern: men or
          women have higher or lower grades. With this example, we can say that
          the grades are not random, but they are at least partially determined
          by the gender.
        </p>
        <p>
          This is a very simple example, but it's the same for more complex
          ones. The point is that we are always trying to determine what's
          random and what's not. And statistics is just the formal way to do
          that.
        </p>

        <h2>Ok but i can do it myself</h2>
        <p>
          Yes, if you're the God of probability, you can do it yourself. But for
          the rest of us, we need statistics. We tend to overestimate our
          ability to find pattern. We specially tend to see patterns where there
          are none.
        </p>
        <p>
          Imagine, if Monday morning you see someone with a red bike at a coffee
          place. Then, on Tuesday morning, you see the same person with the same
          red bike at the same coffee place. Same thing on Wednesday. Who would
          not think that this person will be there on Thursday? Not many people.
          You starting to understand an important problem: we need to define a
          method to determine if something is a pattern or not. And statistics
          is one way of doing that.
        </p>

        <h2>Statistics and epistemology</h2>
        <p>
          For the red bike example, statistics will likely tell us that we can't
          say that it's a pattern. Actually, we can't say much about it. And
          that's the whole thing: it's frustrating and counter intuitive. For
          some reason, we tend to love finding patterns and hate not even being
          able to say there aren't any.
        </p>
        <p>
          When actually thinking about how much we should believe something,
          based on our experience, it's generally disappointing. There are so
          many biases, not enough real data and a lack of definitions. One good
          thing is that it does not really matter in our everyday life: very few
          people want to know if there are more yellow cars in this city. But
          for science and important decision making, it's a big deal.
        </p>
        <p>
          A practical application of this is the marketing. Companies now hire
          data analysts to examine their data and trying to draw conclusions on
          what customers are thinking / want / need, and not just some random
          opinions. It's a way better method of understanding customer behavior
          rather than theorethical knowledge or thinking that we know what they
          want. If it's done the right way, we can actually gain a lot of
          insights. And even if the decisions made did not lead to the expected
          results, we litterally can't have any regrets: and that's the beauty
          of it. We were wrong for the right reasons.
        </p>

        <h2>Closing remarks</h2>
        <p>
          The whole point of statistics, and even machine learning, is to
          determine what's random and what's not. Patterns are what make the
          world a bit predictable, and that gives us a lot of power. Thanks to
          these tools, we can anticipate diseases in early stages, detect
          frauds, understand inequalities, and so much more.
        </p>
        <p>
          It's a very powerful tool, but it's also a very complex one,
          especially because technical knowledge is not enough. We need to
          understand the epistemological part of it, and that's a whole other
          story. Doing statistics is actually fighing against our own brain, and
          epistemology can help us to be more convinced (and win the fight!).
        </p>

        <FooterBlog />
      </main>
      <Footer />
    </div>
  );
};

export default SIFWR;
