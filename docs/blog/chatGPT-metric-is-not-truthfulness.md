# ChatGPT's metric is not truthfulness

<div class="read-time">

Estimated read time: 10 min

</div>

## TLDR

Language models such as ChatGPT, for a given prompt, try to predict which word is most likely. Once they have done so, they repeat until the most likely word is the end of the sentence. The associated probabilities are defined using the training data in the model. Based on this, we can easily see that these models do not try to tell true things or give the best possible outcome (relative to what we would want), but only the most likely outcome. Furthermore, because of the way they are constructed, large language models have various unresolved interpretability and safety issues. Reinforcement learning with human feedback does not seem to be a very scalable way to make models safe, although OpenAI seems to think it might work.

## Foreword: how an LLM works?

If you are already familiar with the following concepts, you can skip this section because there will be nothing more: probability distribution, statistical model, machine learning, word embedding and fine tuning. It doesn't really matter if you don't understand everything. It is very complex and not necessary to understand the core of this article.

### Probability distribution

A probability distribution is a way of describing the chances or probabilities of different things happening in a given situation. It is like a map that shows all the possible outcomes and the likelihood of them occurring. By looking at this map, we can determine what the most likely outcome is, what the range of possible outcomes is, and what the probability of the different outcomes is. A language model wants to predict what is the most likely word that will occur (not totally accurate, but that doesn't matter here) after a sequence of words. For example, what is the most likely word after the sentence "The day is off to a bad start, my car crashed this …"? A language model might suggest something like "morning" with 60%, "afternoon" with 25%, "evening" with 10%, and other words for the last 5%. This is a probability distribution of what is the most likely word for that sentence.

### Statistical model

A statistical model is a simplified representation of a real-world situation that uses mathematics to help us understand how different factors relate to each other. It allows us to make predictions about what might happen in the future based on what we have observed in the past. Think of it as a map that helps us navigate and understand a complex landscape. Just as a map can show us the location of different cities or landmarks, a statistical model can help us understand how different variables such as age, gender, income, or education may relate to each other. Although statistical models involve mathematics, you don't need to know it to understand the basic concepts behind it. The parameters of language models are determined so that they predict the next most likely word at a given state. To do this, we show them many examples (mostly texts from the Internet) and they keep the patterns present in these texts. Example: most conversations containing "How are you?" are followed by "Fine, and you?" (or something similar). It is not a universal property that we respond with "Fine, and you?", but it is a pattern in the sense that it is something that happens most of the time. ChatGPT is a complex language model that "understands" many (most?) of the language patterns that we (humans) use when we communicate via text.

### Machine learning

Machine learning is a method of teaching computers to perform tasks without being explicitly programmed to do so. Instead of giving the computer a set of instructions, you give it a large amount of data and let it "learn" patterns and relationships in the data. The computer uses these patterns to make predictions or decisions on new data that it has not seen before. Machine learning is used in a wide range of applications, from image and speech recognition to recommendation systems and self-driving cars.

### Word embedding

Since computers cannot interpret text itself, we had to create an architecture that allows us to go from text to mathematics, and from mathematics to text (to put it simply). Word embedding is a technique used in natural language processing to represent words as numerical vectors (if you are not at all familiar with vectors, think of them as mathematical objects, like numbers, functions, addition…) in a high-dimensional space. This allows machines to analyze and understand the meaning of words based on their relationships to other words in the same space. Essentially, word embedding helps computers interpret language in a way that approximates the way humans do. The beauty of vectors is that you can do mathematical operations on them, unlike text. For example, a famous example of embedding is that when we remove the vector equivalent of "man" from the vector equivalent of "king" and add the vector equivalent of "woman", we get the vector equivalent of "queen", which makes a lot of sense to us! More intuitively: king - man + woman = queen.

### Fine tuning

Fine-tuning is a common approach used in natural language processing (NLP) to improve the performance of pre-trained models on specific tasks such as text classification, language translation or question answering. First, ChatGPT was pre-trained on many different texts from the Internet without any specialization (i.e., it does not specialize in translation, code completion, text classification or anything else). Then it was fine tuned using reinforcement learning with human feedback (we will see later what this is about). This means that we ask humans to chat with it, and every time the response is considered harmful, sexist or racist, people send it negative feedback to make it learn the pattern it should avoid, and vice versa. By doing this many times, the model tends not to be harmful.

### On a broader level

ChatGPT has been trained on a lot of text from the internet, and the internet contains a lot of stuff: from Javascript code to German literature to Minecraft sub reddits. From this, it learns text patterns and draws generalizations from them. When we give it a prompt, it puts a probability distribution on the most likely word that should appear. If we use our last example, the model predicts "The day is off to a bad start, my car crashed this morning" since "morning" is the most likely word. It will then repeat the same thing, but the prompt will be "The day is off to a bad start, my car crashed this morning" and predict the next word, over and over, until the most likely word is the end of the sequence. The most important thing to keep in mind about how chatGPT works is that it doesn't use the Internet or any database, but only tries to predict the most likely word based on what it has seen. And while there may be a correlation between them, what is true and what is most likely are not the same thing. Now that you know the basics of how LLMs like ChatGPT work, let's look at the problems in more detail.

Example of how LLM like ChatGPT responds to the prompt: "Hello sir, any mail for":

- chatGPT calculating a probability distribution of what the next word in this state might be "Hello sir, any mail for me"
- chatGPT calculating a probability distribution of what the next word in this state might be "Hello sir, any mail for me today?"
- chatGPT calculating a probability distribution of what the next word in this state might be "Hello sir, any mail for me today? No"
- chatGPT calculating a probability distribution of what the next word in this state might be "Hello sir, any mail for me today? No sorry"

This will happen until the most likely word is nothing. Actually, chatGPT doesn't really try to predict words but rather tokens, but you can consider it more or less the same thing.

## Reinforcement learning with human feedback

Reinforcement learning (RL) is a type of machine learning in which an agent learns to perform a task through trial and error. The agent interacts with an environment, receives feedback in the form of rewards or penalties, and uses this feedback to adjust its behavior over time. The agent's goal is to maximize its long-term reward by learning which actions to take in which situations.

One approach to using human feedback in RL is to have humans provide feedback during the learning process. In this case, humans can guide the agent on what actions to take in certain situations, or provide feedback on the agent's decisions in real time. This type of feedback can be particularly useful in situations where the agent is learning a complex task and may need additional guidance to achieve good performance.

In the case of LLMs, OpenAI (the creators of ChatGPT) used reinforcement learning with human feedback (RLHF) by employing dozens of people (called AI trainers) and asking them to rank model outputs for a given text input.

Who did it? What were the criteria? Since the goal of RLHF is to make LLMs less harmful, we need to define them. If we want to be rigorous, we should make explicit the method used since this is an important feature of ChatGPT. But OpenAI chooses not to give any information about this: what was considered harmful? Were instructions given to the AI trainers before or during the training phase? The heart of the problem is that this method will never be 100% safe since it is approximate: the model will tend to be non-harmful (according to a subjective, undefined definition). With enough roleplay (example here), you can make ChatGPT say harmful things easily. Rather than working on the real security issues like developing a better understanding of LLM decisions (interpretability issues), OpenAI unfortunately chose the easy way out. Moreover, according to Time magazine, there are other ethical problems (not discussed here).

## Goodhart's law

ChatGPT's metric is not truthfulness As you should understand by now, ChatGPT is not a search engine. Rather, it is an agent that tries to suggest as many answers as possible to our prompts. However, unlike a human agent, its reasoning is very specific: it predicts what the most likely word will be until the end of the sequence. And what is most plausible in a discussion and the truth are not the same thing. The metric of ChatGPT is not truthfulness. In fact, we are not able to create a similar ChatGPT whose goal will be to say what is true since it is extremely complex to formally ask an LLM to be as true as possible. One could argue that we can simply train the LLM only on texts that are true. But how do we objectively distinguish a text that is true from one that is not? What is true (not so easy to answer…)? And even if we were able to solve these questions, there is no reason to think that this guarantees that the model will only say true things.

What if ChatGPT's metric was truthfulness? Goodhart's Law (named after the economist Charles Goodhart) is a concept that states that "When a measure becomes a goal, it ceases to be a good measure". In other words, when a specific measure or indicator is used to assess or induce a particular behavior, people may change their behavior to achieve that measure, even though it may not reflect the true desired outcome. This can lead to unintended consequences and distortions in the system being measured. This means that even if we create a model that optimizes for veracity, there will still be no reason for the model to say the wrong things. One name for this problem is the specification gaming: we are not able to specify clearly what we want. You can find examples of this problem in this article from Deepmind.

More generally, the measurement problem is not specific to the field of AI but to statistics as a whole. I will soon write an article on a similar topic. Check out this excellent article about the same subject (also available as a podcast) if you are interested.

## Various information

ChatGPT is overconfident, regardless of his "knowledge". It regularly says false things with the same confidence as basic facts. It is problematic when users with no knowledge of how LLMs work (probably the majority of its current users) use it.

Examples of LLMs that are harmful, behave strangely or are used maliciously:

- [Chat is blatantly, aggressively misaligned](https://www.lesswrong.com/posts/jtoPawEhLNXNxvgTT/bing-chat-is-blatantly-aggressively-misaligned)
- [SolidGoldMagikarp (plus, prompt generation)](https://www.lesswrong.com/posts/aPeJE8bSo6rAFoLqg/solidgoldmagikarp-plus-prompt-generation)
- [ChatGPT's Dark Side: An Endless Supply of Polymorphic Malware](https://www.esecurityplanet.com/threats/chatgpt-malware/)

## Utility and upgrade direction

ChatGPT is extremely powerful and very impressive. It is ultra versatile, can handle complex concepts, and can be very useful (assuming you don't use it blindly) for specific tasks like summarizing, solving coding problems, proposing an outline for an essay… It's probably not a problem in itself to use it on a daily basis: it can be an incredible time-saving tool. But it is not the right tool when you want to learn history, check facts, and generally find accurate information. For example, a journalist has to be careful when using it, especially since he can't give any references (and if he does, you might be surprised by the accuracy of them).
fake reference

chatGPT which gives a reference that has the same title conventions as other research papers, but does not exist (I did not use prompt engineering).

LLMs are complex models that require people working on their interpretability. If OpenAI really wanted to create safe AI ("We will attempt to directly build safe and beneficial AGI" OpenAI), they would probably choose to focus more on LLM interpretability rather than using RLHF to prevent non-safety.

## Closing remarks

The real problem with all of these issues is that they won't be solved with the next default LLM. A more powerful model might just focus on these issues.

I really hope that the problems with ChatGPT, and LLMs more generally, are now a bit clearer. It's important that we understand the tools we decide to use, especially when they're used by millions of people around the world and will probably tend to grow rapidly.

## Feedback

Having a different opinion? A nuance to bring? A question to ask? Please share it!

I'm always looking for feedback. The best way to share your thoughts is to open an issue on the GitHub repository of the site.
