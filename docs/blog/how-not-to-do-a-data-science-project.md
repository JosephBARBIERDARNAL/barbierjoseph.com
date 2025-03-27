# How (not) to do a data science project

<div class="read-time">

Estimated read time: 5 min

</div>

## Why this post

In order for people to find value in your work in data science (and want to hire you!), you need to show them what you've worked on. In practice, this will mostly be school projects or side projects.

But when someone starts working on their first data science projects, they inevitably fall into basic traps that make their project look **boring/useless/ugly**, even if the project is an amazing idea.

Here, I want to share what I think would make **a great data science project** (not enterprise production-level, but mostly side projects).

## Put your project online

Whatever your project is—a machine learning model, an exploratory analysis, a chart, a package, or anything else—it needs to be visible somewhere. And those places are:

- **GitHub**: A place where most developers in the world put their code. Knowing how to work with Git and GitHub is a **huge** bonus point. And I'm sure ChatGPT will help you get started super easily.
- **A website**: Instead of just uploading a Jupyter Notebook to a GitHub repo, make it a website! With tools like [Quarto](https://quarto.org/) and GitHub Pages, it has never been easier to create a beautiful website from a data science analysis (and it's free).

If you know how to use the basics of Git, GitHub, and Quarto, the **hardest part is already done**, and your work's quality just increased 10x.

A friend of mine has [a course dedicated to this objective](https://www.productive-r-workflow.com/)!

## Make it reproducible

Data science suffers from not being very rigorous in terms of good software development practices. This isn't because of data science itself, but I think mostly because of how we tend to learn it. However, **a good data scientist is actually a software developer**.

So how do you make a project reproducible? Here are a few things you **need** to do:

- **Use a package manager**. This ensures you know the exact versions of the packages you used (e.g., scikit-learn 1.6.3, etc.). In Python, I recommend [uv](https://docs.astral.sh/uv/). In R, I've only heard about [renv](https://rstudio.github.io/renv/articles/renv.html).
- **Don't use Jupyter Notebooks**. This might be controversial, but there are **so many better alternatives**: just using a plain `.py` file, [Quarto](https://quarto.org/) (mentioned earlier), [Marimo](https://marimo.io/), etc.
- **Never** write absolute paths in your code (e.g., `C:\Users\User\Documents\data.csv` or `/home/user/documents/data.csv`). Learn the difference between relative and absolute paths, and stop creating projects that only run on your computer.

## Keep only what matters

Most people are **not interested** in seeing the first few rows of a dataset or a printout of how many rows/columns your dataset has.

Approach your project like you're solving a problem: separate the internal workings of your program (e.g., printing the first few rows) from the final report, which should highlight the most important results. Data science is **not useful in itself**—most people aren't interested in the technical aspects; they want to see actual value.

## Tell me a story

I want to know **what's the point of this project** without having to dig into it. Instead of presenting "my car price prediction project," explain how being able to predict car prices is valuable for certain people. The reason can also simply be that you're interested in the topic—but you still need to justify what you're doing.

Mentioning other people's work on the subject is also interesting—compare their methods/results with yours, etc.

In general, give me reasons **why I should be interested** in your project. If the first thing I see in your project is "First I import the packages," something is wrong.

## Make nice charts

Visualization is **the most visual thing** in your project, so make it look nice. It doesn't have to be complicated—it’s about taking the time to make it look polished. If you're using Python, check out the [Python Graph Gallery](https://python-graph-gallery.com/). In R, check out the [R Graph Gallery](https://r-graph-gallery.com/).

I've also created [a course](https://www.matplotlib-journey.com/) to help you create great charts with Matplotlib.

## Going further

If you've followed all the previous steps, your project is already really good, and I want to take a look at it. But if you want to make your project even better, here are a few additional things that I think are really valuable:

- Write **unit tests**.
- Use a **code formatter**.
- Create a **CI/CD pipeline**.

There are many other improvements you can make, but these are a great start! Congratulations—you’re now much more credible when presenting one of your projects to someone.

## Feedback

Having a different opinion? A nuance to bring? A question to ask? Please share it!

I'm always looking for feedback. The best way to share your thoughts is to open an issue on the [GitHub repository](https://github.com/JosephBARBIERDARNAL/barbierjoseph.com/issues) of the site.
