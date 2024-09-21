import Header from "../../components/header";
import Footer from "../../components/footer";
import Spacing from "../../components/spacing";
import FooterBlog from "../footerBlog";

const SIODL: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-black">
      <Header />
      <Spacing size={4} />
      <main className="blogpost container mx-auto flex-grow p-">
        <h1>Statistics in our daily life</h1>
        <p className="text-sm text-gray-400 italic text-center">
          Last updated: Sep 2024 | Estimated read time: 10 min
        </p>

        <h2>TLDR</h2>
        <p>
          The aim of this article is to put on scene different ways to use the
          statistics "philosophy" or method in our life, as well as make clearer
          the way statistics works. Because stats might seem reserved only for
          some people, I want to give you the taste of how it feels to think
          like a statistician and give you reasons to do the same. You will see
          that you don't need any math or pre-requisite for this and that it
          might be more relevant than you think.
        </p>

        <h2>Estimation</h2>
        <p>
          It is very common in statistics to want to "estimate" things. These
          can be the average body mass index of undergraduates, as well as more
          complex examples such as the vector of coefficients that best fits a
          regression between several variables. An important part of what an
          estimator is is the fact that we will never know its "true" value. The
          more information we have (quantity and quality), the more accurate our
          estimate will be, but it will never be sufficient.
        </p>
        <p>
          Let's say we are interested in the average number of hours a student
          works before an exam. One way to estimate this is to ask different
          students during the course and calculate the average. Since it is
          impossible to survey every student in the world, how do we know if the
          value we will get is relevant to our goal? We consider an estimator to
          be good when it respects certain properties.
        </p>
        <h3>Is our estimaton biased?</h3>
        <p>
          A bias is simply a deviation from the original objective. Whether in
          statistics or in "real life", it has the same meaning. One can think
          of cognitive biases, statistical biases or more generally scientific
          biases. An estimator can be considered as unbiased if the difference
          between the expected value of the parameter studied (i.e. what we are
          supposed to obtain if we can interview an infinite number of students)
          and the "real" (or "true") parameter is zero. But one could say that
          if we already knew the "true" value of the parameter, why bother
          making an estimate? In fact, we don't know it and that's the problem:
          it is not so easy to know if our estimator is biased or not.
        </p>
        <p>
          Fortunately, we have mathematical statistics that can determine
          whether an estimator is biased or not, but they are not sufficient
          because they regularly assume assumptions that are not always verified
          (we won't talk about this in more detail here because it is mostly
          about mathematics and the way we collect our data).
        </p>
        <p>
          If we return to our example with the average number of hours students
          work before an exam, it's easy to find biases. For example, asking
          only students during class implies that students who do not attend
          class will not answer our question. And it seems plausible that
          students who don't go to class work less (or more? who knows) for
          exams. And if we take a completely opposite example like "How many
          beers did I drink last year per week on average?", I have to think
          about things like "Does my current consumption influence what I think
          I drank last year?". At this point, you might start to wonder why
          being so methodical about such unimportant questions. You'll find an
          answer to that question at the end of this article and you might be
          surprised.
        </p>
        <h3>Does our estimaton have high variance?</h3>
        <p>
          The variance is simply a measure of dispersion. It tells us how far
          people in our sample tend to deviate from the mean. In contrast, a
          variance of zero is equivalent to everyone having the same value (i.e.
          in our example, all students work the same amount of time before an
          exam). The connection to estimation is the fact that we want to know
          if our estimator has a high or low variance.
        </p>
        <p>
          This is important because a low variance implies that, especially if
          our estimator is unbiased, we can be sure that we can make
          generalizations from our sample to the rest of the world. For example,
          if we estimate that a student works an average of 4 hours before an
          exam and we know that this estimate is unbiased and has a low
          variance, it is very likely that the "true" value is around 4.
        </p>
        <p>
          It is important to keep in mind that we make estimates all the time.
          When you wonder if you're going to find a place to park your car,
          which college is best for you, or if you've eaten too much, you're
          making an estimate. You're trying to figure something out, but because
          you don't have all the information in the world, you're making an
          approximation based on what you know.
        </p>
        <p>
          To that end, I think the best way to make a better estimate is to
          think about the possible biases and the level of variance in your
          estimate. In this way, it will naturally force you to doubt your
          beliefs and describe the problem at hand more formally.
        </p>

        <h2>Inferences</h2>
        <p>
          The purpose of estimation is to make inferences. As we said before,
          you don't have all the information in the world. If this were not the
          case, estimation would be meaningless. You only have access to a (very
          small) sample of information, and we can define some criteria that
          tell us whether, based on our data, we can make generalizations to the
          rest of the world from that sample. In statistics, a very common way
          to do this is to calculate the p-value.
        </p>
        <p>
          For example, if we want to know if a drug is effective in reducing LDL
          blood cholesterol, we give it to people with high LDL and after a week
          compare the difference with people who also have high LDL but did not
          take the drug (preferably a placebo). From there, assuming the drug is
          not effective, we can calculate what the probability is of getting the
          results we did (e.g., people who took the drug reduced their LDL by 10
          points and those who took the placebo by only 4 points). If this
          probability is very low, we can deduce that our initial hypothesis
          might not be true (i.e. that the drug is effective for reducing LDL
          blood cholesterol!).
        </p>
        <p>
          The convention is 5%. If a difference of 6 (10 - 4 = 6) had a
          probability of less than 5% of occurring, we say that our result is
          significant and that we cannot accept the hypothesis that the drug is
          ineffective.
        </p>
        <p>
          This concept of p-value implies other important concepts. If we take
          the convention of 5%, this amounts to taking a 5% risk threshold to
          conclude that there is an effect even if this is not the case in
          practice. In a slightly more formal way, we can describe:
        </p>
        <p>
          False positive: conclude that there is an effect even if there is not.
        </p>
        <p>
          False negative: conclude that there is no effect even if there is one.
        </p>
        <p>
          You can familiarize yourself with these concepts by thinking about a
          COVID-19 test. There is a probability that it will say you have it
          even if you don't, as well as a probability that it will say you don't
          have it even if you do (a bit more problematic). In practice, there is
          a trade-off between maximizing and minimizing the probability of false
          positives or negatives. In the clinical field, one would naturally
          prefer to minimize the probability of telling a person that there is
          nothing wrong with them when they are sick. This statistical concept
          is very important in the medical sciences.
        </p>
        <h3>More details</h3>
        <p>
          There is a lot of criticism of the P-value and many people (even those
          who regularly do statistics) don't really understand what it means. In
          fact, the people who criticize the P-value are mostly criticizing the
          way people tend to use and interpret it. For us, it doesn't really
          matter because I just want to give you the conceptual idea of what a
          p-value is: a way to define whether what we observe is sufficiently
          unlikely and we have to say "something is happening" (in the latter
          case: the drug is not ineffective).
        </p>

        <h2>Bayesianism</h2>
        <p>
          Bayesianism is an approach that assumes that beliefs can be formulated
          as probabilities (of distribution). For each subject in life, we can
          subjectively associate a probability distribution of what is true, and
          update this distribution with new information. Let's take an example:
          I believe that it rains almost every Sunday in Bordeaux. I have this
          belief because since I moved to Bordeaux, it rains almost every
          Sunday. But last year, for some reason, every other Sunday was very
          sunny. Adding this information to my last belief (and if I am a
          rational Bayesian person), I would have to change my belief. My new
          belief about Sunday weather in Bordeaux is more nuanced than my old
          belief. If I believed that 95% of Sundays are rainy and last year I
          only observed 50%, I need to update my belief and it will be about 70%
          (or any other value between 50 and 95, depending on other parameters).
        </p>
        <p>
          Bayesian statistics work the same way. This drug has been shown in the
          past to reduce blood sugar by 3 units, but in the last 3 published
          RCTs (clinical trials), the average effect was 2. We should start
          thinking that the average effect of this drug might be about 2.6 (for
          example). And you can use this approach for literally anything related
          to knowledge (i.e. a lot of things). Non-exhaustive list of questions
          for which it is relevant to think like a Bayesian:
        </p>
        <ul>
          <li>
            This professor was absent one out of three times last year, but only
            one out of ten times last semester.
          </li>
          <li>
            Every time I run, my leg hurts. But since my surgery, it only
            happens when I have a bad night.
          </li>
          <li>
            I think vegetarianism is bad for your health, but a study published
            in Nature tends to show that vegetarians have no deficiencies and
            are not less healthy.
          </li>
        </ul>
        <p>
          Whenever you have new information, add it to what you already know in
          order to update your beliefs and always improve.
        </p>
        <p>
          You may think this is a way of thinking that you already do sometimes,
          and it's probably true: it's pretty intuitive to change what we
          believe based on new information. But I suggest that you use this
          approach most of the time. Mainly, it will force you to be
          open-minded: unless you consider that you already know everything, new
          information is always better. You just have to give low "weight" to
          information that you consider poor. In fact, information from a
          top-notch peer-reviewed scientific paper is much better than a random
          Facebook user's comment on the same topic: you can't give it the same
          credit. You will have the opportunity to change what you think all
          your life and never have a closed opinion, but also to constantly
          remind yourself that there is a lot you don't know.
        </p>
        <p>
          For all these reasons, I strongly encourage you to think this way.
        </p>

        <h2>Machine learning</h2>
        <p>
          Machine learning is a very popular field whose goal is to use
          optimization algorithms to create mathematical models capable of
          "predicting" things. Recommendation systems, chatGPT or tumor
          recognition from MRI scans are entirely based on advanced machine
          learning algorithms. I don't think they can be considered as pure
          statistical tools, because it is quite difficult to interpret what
          they "learn" from the world: they are excellent at predicting, but not
          so much at explaining. But as I probably said, the purpose of
          statistics is to give us information that we cannot perceive with raw
          data. However, there are still many useful concepts for what we are
          talking about here.
        </p>
        <p>
          Let's say I want to create a model that can predict if a person has a
          tumor using an MRI scan. To do this, I've created a dumb model that
          can't do anything right. When I show it a scan and ask it if there is
          a tumor, its answers are purely random. Then I show it a lot of MRI
          scans with and without tumors and tell him for each one if there is
          one or not. By doing this (and using optimization algorithms), it
          starts to learn the difference between good and bad MRI scans. Now my
          model is much better than it was at the beginning and I ask if there
          is a tumor on the new scans that it hasn't already seen. If I did all
          the last things right, my model can now predict if a person has a
          tumor using MRIs. It has "learned" from the example and is now able to
          generalize to new scans.
        </p>
        <p>
          If you understood that last point, you now have in mind the main idea
          of how machine learning works. Of course, it is much more complex in
          practice, but we use exactly the same logic when we train a model to
          perform a task.
        </p>
        <h3>Over/under-fitting</h3>
        <p>
          Overfitting and under-fitting are two very important concepts in
          machine learning. Over-fitting occurs when we train our model, it
          learns so much from the example you gave it that it cannot generalize
          to new examples. This can happen when we over-train a model, for
          example. An analogy would be a student who memorizes all their
          lectures, but doesn't know how to respond when the professor asks a
          question that is based on understanding the lecture, not memorizing it
          (sound familiar? Yeah, me too).
        </p>
        <p>
          Another way to think about this concept is to consider that our
          experience is representative of what happens to others in life. Over
          the course of our lives, we have many experiences, learn from them,
          and then try to avoid the mistakes and repeat the positive things.
          This is fine until the overfitting occurs: we should not be
          overconfident in generalizing to new events since our experience is
          not necessarily representative. Also, you can see here that more
          experience could lead to more overfitting. One way to overcome this is
          to "train" yourself with a "variety of data": get into the habit of
          asking other people what they think about things you have experienced
          and compare the differences.
        </p>
        <p>
          On the other hand, under-fitting is when a student has not studied
          enough for an exam and simply cannot answer the questions. For
          example, it's like having no experience in public speaking and trying
          to give advice to others. You don't need to know everything, and being
          "sub-competent" in a given area is not a problem at all. It's actually
          an excellent quality to know when we don't know (probably more often
          than we'd like).
        </p>

        <h2>Closing remarks</h2>
        <p>
          This might be a good time to explain why being so methodical, even for
          unimportant matters, is so important. The main reason is that it
          creates excellent habits of epistemology. You will be more
          open-minded, better at describing problems formally, more critical of
          yourself, and learn from others. I really believe that most of our
          beliefs come from the way we approach information based on our
          epistemological habits, i.e. on a day-to-day basis.
        </p>
        <p>
          Another benefit of using all of these concepts on a daily basis is the
          fact that it makes the discussion much more precise, fun, interesting
          and with a great vocabulary. You can't imagine how nice it is to have
          a discussion with someone who always uses the right term and how easy
          it is to understand the point.
        </p>
        <p>
          This article was just an introduction to many different concepts that
          would all deserve a full book. I made a lot of approximations because
          my main goal is not to be accurate but to give you the intuition of
          how statistical methods work. If you don't come from a stats
          background, I hope you have a better understanding of stats and have
          found some useful concepts here for you. If you do statistics
          regularly, I hope you'll start thinking about using these concepts
          outside of work. If you are somewhere in between, I hope you learned
          something.
        </p>

        <FooterBlog />
      </main>
      <Footer />
    </div>
  );
};

export default SIODL;
