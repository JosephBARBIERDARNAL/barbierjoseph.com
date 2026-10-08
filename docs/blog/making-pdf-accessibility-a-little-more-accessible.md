# Making PDF accessibility a little more accessible

<div class="read-time">

Estimated read time: 4 min

</div>

PDFs are everywhere, but making sure they're accessible to everyone is surprisingly difficult. A PDF can look perfectly fine while being almost impossible to navigate with a screen reader. Even knowing whether a PDF is accessible, and if not, why, isn't simple.

## State of measuring PDF accessibility

For PDF accessibility checks, [veraPDF](https://verapdf.org/) is the tool I use most. It's open source, well maintained, and has been used in many real-world settings. It's also comprehensive and gets the job done.

But it has some limits. First, veraPDF requires Java to be installed, which can be a significant barrier for non-technical and semi-technical users. Java can also be awkward to integrate into other tools, such as Python packages or browser-based WebAssembly applications. It's technically possible, but the Java runtime is a poor fit for some of these environments.

Even for technical users, veraPDF isn't always easy to use. Its command-line output doesn't always clearly explain accessibility issues or how to fix them. Other solutions exist, but some are not open source, are not free, or do not work across operating systems. There are also open-source tools that claim to validate PDF files but check only a small part of what needs to be checked, so it's worth looking closely at which rules a tool actually covers.

A couple of newer projects look promising: [pdfa11y](https://github.com/speedata/pdfa11y) and [Horn](https://github.com/focusring/horn). They take different approaches to checking PDF accessibility, and are worth keeping an eye on.

## Rethinking PDF validation

I use veraPDF a lot in my work, so over time I've noted all the things I wish were different in my dream validator. I wanted output designed for people that was still easy for other tools to parse, such as a JSON export. I also wanted it to be fast: veraPDF can take several seconds to validate a single document, which adds up when you need to validate hundreds of files.

Finally, I wanted a tool that works natively in different places. The command-line interface would be the default, with the core engine also available as a Rust crate, a Python package, and a WebAssembly build for use in a browser. Other options, such as Node.js and R, could come later.

For those reasons, and because I like the language, Rust felt like a great fit.

Earlier this year (2026), I decided to see if I could make a proof of concept. My goal was to validate the PDF/A-1b profile. PDF/A is a family of profiles for long-term document preservation. PDF/A-1b is a relatively simple profile to validate, while PDF/UA-1, the main profile for PDF accessibility, is more complex.

Once I had a correct version, I decided to implement validation for other PDF profiles too.

## Introducing `page`

The result is a project called [page](https://github.com/JosephBARBIERDARNAL/page). In short, it's a PDF validator that can check either PDF accessibility (PDF/UA) or PDF archiving (PDF/A). It's around [an order of magnitude faster](https://josephbarbierdarnal.github.io/page/benchmark/) than veraPDF and passes [100% of the veraPDF corpus test suite](https://github.com/JosephBARBIERDARNAL/page/blob/main/crates/page_cli/src/corpus.rs). That means `page` and veraPDF agree on about 2,200 PDF files in that corpus.

`page` also compiles to WebAssembly and runs in the browser; [you can try the demo here](https://josephbarbierdarnal.github.io/page/demo/). It's easy to use, with a one-line install command and outputs that are easy to read. The project is open source and MIT licensed.

For example, here's what the output looks like:

```console
$ page document.pdf --profile ua1 --format details
Result  : Non-conformant
Rules   : 4 failed rules / 104 total
Profile : PDF/UA-1
Time    : 0.052s

[PDFUA1-ID-SCHEMA-001] Metadata: XMP does not contain the PDF/UA Identification schema (object 12378 0)
[PDFUA1-LINK-LINK-TAG-001] Conformance: annotation 0 on page 4 is not nested within a Link structure element
[PDFUA1-METADATA-TITLE-001] Metadata: the catalog Metadata stream must contain a dc:title entry (object 12378 0)
[PDFUA1-PAGE-TABS-001] Conformance: page 4 has annotations but no /Tabs /S entry
```

There are still some key things missing. PDF/A-4, PDF/UA-2, and WTPDF aren't implemented yet; these profiles are based on PDF 2.0. I also want to add hints on how to fix failed rules. Many of the rules currently produce messages like _"The document catalog dictionary shall include a ViewerPreferences dictionary containing a DisplayDocTitle key, whose value shall be true."_ I want to translate these into more human-readable guidance.

Automated validation can't judge everything about accessibility. For example, a tool can't decide whether a document's reading order makes sense or whether its alternative text is useful. `page` checks technical requirements, but people still need to review parts of a document themselves.

> You can find [page on GitHub](https://github.com/JosephBARBIERDARNAL/page).

## Fun things learned along the way

Did you know you can use JavaScript **inside** a PDF? A PDF file can even be a **valid ZIP file**. And AI is both your best friend and your worst enemy.

## What's next

I'm already using it daily in my professional work, and I plan to continue. There's still a lot of work to do, especially to fill the PDF 2.0 gap. I'd also like to find external contributors, since many issues aren't that complicated to fix, and more testers and users who can share feedback, feature ideas, and bug reports.

If you think you fit into any of those categories, please feel free to contact me!
