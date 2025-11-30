# Open source starts with a good issue

<div class="read-time">

Estimated read time: 4 min

</div>

## Open source is hard

Contributing to open source is often advised to people who want to become better software developers, and even though that's probably true, it's important to understand how contributing to open source works first.

Often, open source projects have a large, complex codebase and potentially a large userbase. A large userbase means you **can't** just change the behavior of something. Renaming an argument can literally break lots of people's code.

If it's necessary, for any reason, to change the behavior of something, then it usually takes **multiple releases**, starting with a deprecation warning before actually applying the breaking change. This means maintainers spend a lot of time ensuring new code doesn't break anything. This is also why open source projects have large test suites.

Other aspects such as security, API design, or documentation become extra important as the userbase grows. These things make open source particularly demanding.

Before making your first contribution, make sure you understand that open source requires you to **fully understand** what you're doing (for example, see the [Automated Contributions Policy](https://scikit-learn.org/dev/developers/contributing.html#automated-contributions-policy) of scikit-learn).

## (Good) issues are contributions too

Unless you only care about being in the contributor list (which might not be the best start), **code is just one way of contributing**.

People who develop open source software are not writing code all the time. A big part of the work is reviewing issues, reviewing other people's code, deciding on new features, trying to reproduce bugs, etc.

If your goal is to help the development of an open source tool, you can be very useful by reporting bugs, **especially if they are well identified**.

It's very common for people to report what they think is a bug. But **if it's not reproducible, people can't help you**. It helps maintainers a lot if the issue you're describing appears in a very minimal code snippet.

We call this a reprex (**Repr**oducible **Ex**ample).

If you're like me and you enjoy reading GitHub issues, you'll notice that **so many open issues** are stuck in a vague state where there seems to be a bug, but it's not obvious whether it actually is one.

Also note that well-described and reproducible issues probably have a large impact on whether maintainers will try to fix the issue soon or not.

<br>
<br>

### (Optional) Interlude with a concrete example

[**Skip the example**](#learn-how-to-write-reprexes)

Recently I had an issue where a chart title had the wrong size even though I set it correctly. Here was my function with the issue:

```py hl_lines="16"
def hbarplot(*, df: pl.DataFrame, colname: str) -> None:
   fig, ax = plt.subplots(figsize=(10, 6), dpi=300)
   df_agg: pl.DataFrame = (
      df.group_by(colname)
      .len()
      .sort(colname)
      .with_columns(pl.col(colname).replace_strict(CODE_TO_LABEL).cast(pl.String))
   )
   y: list = df_agg[colname].to_list()
   x: list = df_agg["len"].to_list()
   n: int | float = df_agg["len"].sum()
   max: int | float = df_agg["len"].max()
   font: FontProperties = load_google_font(FAMILY, weight="bold")

   ax.barh(y=y, width=x)
   ax.set_title(QID_TO_QUESTION[colname], color="black", font=font, size=18)

   for i, val in enumerate(x):
      ax.text(
            x=val + max * 0.02,
            y=i,
            s=f"n = {val} ({val / n * 100:.0f}%)",
            size=14,
            va="center",
      )

   plt.tight_layout()
   plt.savefig(f"src/document/plots/{colname}.png", dpi=300, bbox_inches="tight")
   plt.close()
```

For some reason, the chart title (added via `set_title()`) kept its default size (`size=10`).

What happens if I send this code to a maintainer with the message "The title is too small"? It might take them half an hour to figure out the issue and reproduce it themselves—and they probably won't do it right away because it's not very fun. Instead, I spent that half hour myself trying to make the smallest possible code snippet that still shows the issue.

Then I was able to do this:

```py
import matplotlib.pyplot as plt
from matplotlib.font_manager import FontProperties

fig, ax = plt.subplots()
ax.set_title("hey", size=30, font=FontProperties(family="Roboto"))
```

More importantly, while writing the reprex, I realized that the issue only occurs if `font` is a `FontProperties()` object (which I was using), but not if it's a string (also accepted), such as `"Roboto"`.

The result? I got an answer an hour later saying, "This might be the same issue as this other one." I checked it, confirmed it was the same (but I didn't see it before), closed the issue, and got a workaround for my use case.

Now imagine how much time it'll take if I send my original function and just vaguely describe the issue?

> If you're curious, you can find the issue [here](https://github.com/matplotlib/matplotlib/issues/30797).

<br>
<br>

## Learn how to write reprexes

A reprex is the smallest self-contained example that reliably reproduces a software issue. It should contain **everything** (including imports, data if necessary, etc.).

It also shows that you've taken the first step in debugging yourself.

Learning to write a reprex is a genuinely valuable skill. It teaches you to isolate behaviors, think carefully about what actually triggers a problem, and forces you to **fully understand what's going on**. It sounds simple but often requires patience and precision. Mastering it will make you a better reporter and a better developer, too.

On a related note, I worry that LLMs make us much worse at this, but I might be wrong.

## Find your next contribution!

If you're looking to make your first open source contributions, try to consider the following before doing anything:

- focus on things you use often
- focus on things you understand
- focus on things you find fun
- don't believe AI will do the hard part for you
- express yourself well, in English (LLMs can help a lot with this)
- be kind to others

It's completely fine to be motivated by being an "open source contributor" (I personally am), but it's important to consider open source contributions across the entire pipeline (from discovering a bug to implementing new features).

Once you're comfortable with this, start your first PR and enjoy the journey!

## Feedback

Having a different opinion? A nuance to bring? A question to ask? Please share it!

I'm always looking for feedback. The best way to share your thoughts is to open an issue on the [GitHub repository](https://github.com/JosephBARBIERDARNAL/barbierjoseph.com/issues) of the site.
