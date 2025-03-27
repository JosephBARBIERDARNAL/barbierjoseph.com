# Don't try to reverse engineer the data

<div class="read-time">

Estimated read time: 3 min

</div>

## TLDR

It does not feel uncommon to me to see people that want to quickly make the first analysis of a dataset by looking at the data and trying to understand it. I think this is a mistake, because except if you are working with a very simple dataset, you'll spend too much time trying to infer what is the data about and its structure. Instead, I would recommend to start by looking at the documentation of the dataset, and more generally try to find info about how data was collected, what it represents, and how it is structured.

## Reverse Engineering

Reverse engineering is the process of discovering the technological principles of a device, object, or system through analysis of its structure, function, and operation. It often involves taking something apart and analyzing its workings in detail to be used in maintenance, or to try to create a new device or program that does the same thing without copying the original.

In this post, the term "reverse engineering" is more used as a metaphor rather than in its strict sense. I'm talking about the process of trying to understand a dataset by looking at its content and structure, without any prior knowledge about it.

## Data format

In my opinion, the key is to know the format of the data. Before diving into any, even very basic, analysis, we should always be able to explicitly say what one row of the dataset represents, and what each column is about.

For example, let's say we want to create a machine learning model that predicts if a doctor is a good doctor or not. Our dataset contains info on medical visits, the doctor that performed it, the patient, the date, the diagnosis, the outcome after X days, etc. We should be able to say that one row of the dataset represents one medical visit.

One mistake would be to model the outcome on this dataset, even tough we don't want to predict the outcome of a medical visit, but the quality of the doctor. In this case, we should have a dataset where one row represents one doctor. We also have to find a way of measuring the quality of a doctor, and this is not trivial.

## Real life

In the previous example, it may seem obvious, but it's because I've explicitly said what the dataset is about and what was the goal. If you want to actually obtain insights, you will usually take an underexplored dataset, and you will have to find out what it is about.

If you go on Kaggle, you will see that some of the datasets are well documented (don't use the others!). I highly suggest you to spend time on the documentation before importing the data in order to ensure that you have the tools to understand it. One good point is that you can literally ask the author of the dataset where the data came from, how it was collected, etc. and this will save you a lot of time AND errors.

It's actually very easy to directly open the dataset in your editor and start looking at the data, but you have to force yourself to ask "What one row actually represents?". If you are not able to answer this question, there is a high chance that your analysis won't make sense.

## Pre-requisites

Here I define some pre-requisites that I think are necessary to be able to analyze a dataset. You should at least be able to answer these questions explicitly in a clear sentence:

- What one row represents?
- What each column is about?
- What is the goal of the analysis?
- Is the format of the data adapted to the goal?

## Feedback

Having a different opinion? A nuance to bring? A question to ask? Please share it!

I'm always looking for feedback. The best way to share your thoughts is to open an issue on the [GitHub repository](https://github.com/JosephBARBIERDARNAL/barbierjoseph.com/issues) of the site.
