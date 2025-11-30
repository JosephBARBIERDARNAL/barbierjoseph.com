# Open source starts with a good issue

<div class="read-time">

Estimated read time: 4 min

</div>

## Open source is hard

Contributing to open source is often advised to people who wants to become better software developer, and even though it's probably the case, it's important to understand how contributing to open source work before.

> Depending on the size and the popularity of the project, the following can vary. But since often times people are interested in contributing to famous projects, we'll assume it.

Often times, open source project have a large, complex codebase and potentially a large userbase. A large userbase means you **can't** just change the behavior of something. Renaming an argument can litteraly break lots people's code.

If it's required, for any reason, to change the behavior of something, then it usually takes **multiple releases** between a first deprecation warning to actually applying the breaking change. This means that maintainer's job is a lot about making sure that new code is not breaking things. This is also why open source projects have a large suite of tests.

Other things such as security, API design or documentation become extra-important as the userbase grow. Those things make open source particularly demanding.

Before you try to make you first contribution, make sure you understand that open source require you to **fully understand** what you're doing (for example, check the [Automated Contributions Policy](https://scikit-learn.org/dev/developers/contributing.html#automated-contributions-policy) of scikit-learn).

## (good) Issues are contributions too

Unless you only care about being in the contributor list (which might not be a good start), **code is just one way of contributing**.

People that develop open source softwares are not writing code all the time. A big part of the work is to review issues, other' people code, deciding new features, trying to reproduce bugs, etc.

If your goal is to help the development of an open source tools, you can be very useful by reporting bugs, **especially if they are well identified**.

It's very common for people to report for what they think is a bug. But **if it's not reproducible, people can't help you**. It helps a lot maintainers if the issue you're describing appears on a very minimalist code snippet.

We call this a reprex (**Repr**oducible **Ex**ample).

> Note that well described and reproducible issues probably have a large impact on whether maintainers will try to fix the issue soon or not.

If you're like me and you like to read Github issues, you'll see that **so many open issues** are in this vague status where there seems to be a bug, but it's not obvious if it's one or not.

<br>
<br>

### (optionnal) Interlude with a concrete example

[**Skip the example**](#learn-how-to-write-reprexes)

Recently I had an issue where a chart title had the wrong size, even though I set it the right way. Here was my function with the issue:

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

For some reason, the chart title (added via `set_title()`) output kept its default size (`size=10`).

What happens if I send this code to a maintainer with the message "The title is too small". It might take them half an hour to find what is the issue and be able to reproduce it themselves, and probably not do it right away because it's not very fun. Instead, I spend this half hour myself trying to make the smallest code possible with the issue I'm seeing.

Then I was able to do so:

```py
import matplotlib.pyplot as plt
from matplotlib.font_manager import FontProperties

fig, ax = plt.subplots()
ax.set_title("hey", size=30, font=FontProperties(family="Roboto"))
```

More importantly, while writing the reprex, I realized that the issue only occur if `font` is a `FontProperties()` object (what I was doing), but not a string (accepted input too) such as `"Roboto"`.

The result? I get an answer 1 hour later saying "This might be the same issue as this other one". I check it, I confirm it's the same, I close the issue and I get a workaround for my use case.

Now imagine what happens if I send my original function and just vaguely describe my issue?

> If you're curious, you can find the issue [here](https://github.com/matplotlib/matplotlib/issues/30797).

<br>
<br>

## Learn how to write reprexes

A reprex is the smallest self-contained example that reliably reproduces a software issue. It should contain **everything** (including importing libraries, data if necessary, etc).

It also demonstrates that you have taken the first step in the debugging process yourself.

Learning to write a reprex is a genuinely valuable skill. It teaches you to isolate behaviors, think carefully about what actually triggers a problem and forces you to **fully understand what's going on**. It sounds simple but often requires patience and precision. Mastering it will make you a better reporter and a better developer too.

On a related note, I fear that LLMs make us much worse at this, but I might be wrong.

## Find your next contribution!

If you're looking to make your first open source contributions, try to consider the following before doing anything:

- focus on things you use often
- focus on things you understand
- focus on things you find fun
- don't believe AI will do the hard part for you
- express you well, in English (LLMs can help you a lot for this)
- be kind to others

## Feedback

Having a different opinion? A nuance to bring? A question to ask? Please share it!

I'm always looking for feedback. The best way to share your thoughts is to open an issue on the [GitHub repository](https://github.com/JosephBARBIERDARNAL/barbierjoseph.com/issues) of the site.
