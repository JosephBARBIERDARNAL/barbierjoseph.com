import Header from "../../components/header";
import Footer from "../../components/footer";
import Spacing from "../../components/spacing";
import FooterBlog from "../footerBlog";

const INEC: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-black">
      <Header />
      <Spacing size={4} />
      <main className="blogpost container mx-auto flex-grow p-">
        <h1>It's not even correlation</h1>
        <p className="text-sm text-gray-400 italic text-center">
          Last updated: Oct 2024 | Estimated read time: 5 min
        </p>

        <h2>TLDR</h2>
        <p>
          Our brains often jump to conclusions about causality without good
          reason, looking for patterns and links where there are none. In
          everyday life, we may mistakenly assume that there is a causal link
          based on a simple correlation. For example, when studying success,
          it's important to focus on differences rather than similarities, and
          not to rely on self-reported data, as individuals may not really
          understand the reasons for their own success. Chance plays a bigger
          role than we think, and understanding it can help avoid logical
          fallacies. For more on this subject, read "Fooled by Randomness".
        </p>
        <p>
          To understand the characteristics of a group, it is essential to take
          into account the characteristics of people outside the group. False
          data are used to show that studying a population group does not
          provide information about what defines it. It is necessary to compare
          populations and look for differences rather than similarities. People
          often overlook what they don't know, which underlines the importance
          of being aware of missing information.
        </p>

        <h2>Causality everywhere, dumb brain</h2>
        <p>
          We tend to fall easily into the trap of inferring causality without
          valid reasons. To get those reasons, you need solid data. However,
          this article is not about the error that can be found in research or
          data analysis, but in our everyday lives.
        </p>
        <p>
          Indeed, human beings often tend to infer causal links, even if they
          are unfounded. Our brains often look for patterns and connections, and
          we sometimes mistakenly perceive cause and effect where there is none.
          While solid data and rigorous analysis are needed to establish
          cause-and-effect relationships in scientific research, in everyday
          life we don't always have access to such solid evidence. This can lead
          to various biases and logical fallacies when trying to determine
          causality.
        </p>
        <p>
          One example is the correlation-causation fallacy, where people assume
          that simply because two things are correlated, one must be the cause
          of the other. However, correlation alone does not imply causation.
          Other underlying factors or coincidences may be behind the observed
          relationship. However, what I want to talk about here is the fact that
          most of the time, what we observe is not even a correlation.{" "}
        </p>

        <h2>Focus on differences, not similarities</h2>
        <p>
          Suppose you want to know what makes people successful. There are two
          different ways of approaching this problem.
        </p>
        <ul className="list-disc pl-5">
          <li>
            looking for correlating factors: looking for things that successful
            people do/have/are and that others don't.
          </li>
          <li>
            looking for causal factors: looking for the determinants of success
            (not discussed in this article).
          </li>
        </ul>
        <p>
          We (and most people interested in this subject) decide to take the
          simplest option with correlated factors. Intuitively, we want to
          interview different successful people and ask them questions about
          their lifestyle, the reasons for their success and try to find
          commonalities. But this method poses a major problem: we have to look
          for differences, not similarities. The famous reasons that I have the
          impression people associate with success are: working hard, being
          fit/exercising regularly, being highly motivated, reading, meditating,
          etc. And it's plausible that, in the course of interviews, these
          elements come up in discussion. However, if most successful people
          play sports regularly, does that mean there's a correlation with being
          successful and those? Not at all.
        </p>
        <p>
          That's where the differences are important. It makes no sense to look
          for similarities since you have nothing to compare your sample to. For
          example, many unsuccessful people play sports regularly. We're
          probably looking for similarities because we have preconceptions about
          what makes people successful.
        </p>
        <p>
          What's more, during the interview, the interviewee confidently told
          you that he or she did sport and considered it an important part of
          his or her success. But unfortunately, there's no reason to think they
          know why they're considered successful. Would you ask a sick person
          the reason for their illness? It's bad practice to be the subject of
          your own study. That's why randomized controlled trials are conducted
          and placebos are used. In "Fooled by Randomness: The Hidden Role of
          Chance in Life and in the Markets", Nassim Taleb explains why we don't
          like chance as an explanation of a phenomenon, why it happens more
          often than we think, and how we tend to rationalize it. If you want to
          go further, this is the book for you.
        </p>

        <h2>Make sure you are measuring something</h2>
        <p>
          When you want to know the characteristics of a group of people, you
          have to make sure that you always have the characteristics of people
          who are not part of that group. Otherwise, you probably won't be
          measuring anything at all. To make this more intuitive, let's take
          some examples. I've arbitrarily taken two characteristics: time spent
          reading and time spent doing sport.
        </p>
        <p>
          In our minds, it might look like this: the more you read and do sport,
          the more likely you are to succeed. If this data were true, the final
          conclusion would be <i>logical</i>.
        </p>
        <p>
          But this is only possible because we are not only looking at the
          characteristics of one group, but of <i>everyone</i>. If we only look
          at the characteristics of a group, we can't say anything about what
          defines it.
        </p>
        <p>
          On Angela Duckworth's Wikipedia page (a professor who wrote a
          bestseller entitled "Grit: The Power of Passion and Perseverance"), we
          read that "Duckworth found that courage was a common factor in the
          high-achievers she studied". With the last sentence, we have no reason
          to draw any conclusions about "high achievers", contrary to what it
          suggests*. It illustrates that "studying" a population group gives you
          no information about what makes them part of that group.
        </p>
        <p className="text-gray-400 italic text-sm">
          *Note: I'm not familiar with Duckworth's work (I've only read her
          book) and she's probably not the author of this sentence, but this
          example illustrates my point well.
        </p>
        <p>
          Moreover, by looking only at successful people, we can easily forget
          that there is actually no relationship between the two
          characteristics. And the only way to know that, is to compare
          populations and seek for differences instead of similarities.
        </p>
        <p>
          Next time someone tells you "most people doing X is Y", check if this
          can be simply explained by "most people are doing X".
        </p>

        <h2>Closing remarks</h2>
        <p>
          Conceptually, depending on what you know at the time, you can give
          "epistemological weight" to your beliefs. Intuitively, think of it
          like what your experience (not only the personal, but everything
          you've seen, read etc) tells you that you should believe. For example,
          if you lived in Nigeria in the 1000's and you have never seen a white
          person, should you think that it's impossible to have a white skin? If
          you never heard about white people, you probably should. However, for
          example, if one of your friends shows you a picture of him with a
          white person, you probably shouldn't. Even if you are wrong a
          posteriori in the first case, you had more reasons to think that only
          black skin existed. From this perspective, you were right.
        </p>
        <p>
          This might sound like a reasonable way to think. However, that is far
          from what we tend to do. The biggest mistake we make is to forget what
          we don't know. And since it's impossible to know what we don't know,
          we have to be rigorous and always aware that we may be missing out on
          important information.
        </p>

        <FooterBlog />
      </main>
      <Footer />
    </div>
  );
};

export default INEC;
