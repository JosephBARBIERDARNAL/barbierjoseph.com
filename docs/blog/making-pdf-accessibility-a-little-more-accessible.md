# Making PDF accessibility a little more accessible

<div class="read-time">

Estimated read time: 4 min

</div>

PDFs are everywhere, but making sure they're accessible to everyone is surprisingly difficult. A PDF can look perfectly fine while being almost impossible to navigate with a screen reader. Even knowing whether a PDF is accessible, and if not, why, isn't _that_ simple.

## State of measuring PDF accessibility

For PDF accessibility checks, [veraPDF](https://verapdf.org/) is the tool I use most. It's open source, well maintained, works well, and is used in many real-world settings.

But it has some limits. First, veraPDF requires Java to be installed, which can be a significant barrier for non/semi-technical users. Java can also be awkward to integrate into other tools, such as Python packages or browser-based WebAssembly applications. It's technically possible, but the Java runtime is a poor fit for some of these environments.

Even for technical users, veraPDF isn't always easy to use. Its command-line output doesn't always clearly explain accessibility issues or how to fix them.

Other solutions exist, but they are not open source, are not free (Abobe), or do not work across operating systems (PAC). **Only veraPDF matches all of those criteria**.

> There are also open-source tools that claim to validate PDF files but check only a small part of what needs to be checked, so it's worth looking closely at which rules a tool actually covers.

A couple of newer projects look promising: [pdfa11y](https://github.com/speedata/pdfa11y) and [Horn](https://github.com/focusring/horn). They take different approaches to checking PDF accessibility, and are worth keeping an eye on.

## Rethinking PDF validation

I use veraPDF a lot in my work, so over time I've noted all the things I wish were different.

- output designed for human, but stays easy to parse (e.g., JSON export)
- easy to integrate natively in different places: a CLI as default usage, but should work in the browser (with Wasm) and other programming languages (with appropriate bindings)
- high performance: veraPDF can take several seconds to validate a large document, which adds up when you need to validate tons of files

For those reasons (and if I'm being honest, because I like the language), Rust felt like a great fit.

Earlier this year (2026), I decided to see if I could make a proof of concept. My goal was to validate the <span title="PDF/A is a family of profiles for long-term document preservation. PDF/A-1b is a relatively simple profile to validate, while PDF/UA-1, the main profile for PDF accessibility, is more complex"><u>PDF/A-1b profile</u></span>.

Once I had a correct version, I decided to implement validation for other PDF profiles too.

## Introducing `page`

The result is a project called [page](https://github.com/JosephBARBIERDARNAL/page). In short, it's a PDF validator that can check either PDF accessibility (PDF/UA) or PDF archiving (PDF/A).

- It passes [100% of the veraPDF corpus test suite](https://github.com/JosephBARBIERDARNAL/page/blob/main/crates/page_cli/src/corpus.rs). That means `page` and veraPDF **agree on about 2,200 PDF files** in that corpus.
- It compiles to WebAssembly and runs in the browser; [you can try the demo here](https://josephbarbierdarnal.github.io/page/demo/).
- It's around [an order of magnitude faster](https://josephbarbierdarnal.github.io/page/benchmark/) than veraPDF
- Last but not least, it's **easy to use**, with a one-line install command and outputs that are **easy to read**
- The project is open source and <span title="Except third-party resources that must keep their original licenses (e.g., the Adobe CMap Resources)"><u>MIT licensed</u></span>.

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

There are still some key features missing:

- PDF/A-4, PDF/UA-2, and WTPDF aren't implemented yet; these profiles are based on PDF 2.0
- Hints on how to fix failed rules and what they mean. Many of the rules currently produce messages like _"The document catalog dictionary shall include a ViewerPreferences dictionary containing a DisplayDocTitle key, whose value shall be true."_ I want to translate these into more human-readable guidance.

**Automated validation can't judge everything about accessibility**. For example, a tool can't decide whether its alternative text is useful. `page` checks technical requirements, but people still need to review parts of a document themselves.

> You can find [page on GitHub](https://github.com/JosephBARBIERDARNAL/page).

## `page` only exists because of `veraPDF`

If `veraPDF` wasn't there to invalidate `page` behaviors and give me hints on what it's doing wrong, I would never have started this project in the first place. Validating a PDF validator is [surprisingly difficult](https://pdfa.org/how-verapdf-does-pdfa-validation/) and having already existing well implemented validations makes this litteraly 100x easier.

Also, the fact that veraPDF built a [publicly available test corpus](https://github.com/veraPDF/veraPDF-corpus) is a big amount of work that page can reuse to test itself on clear fail/pass tests. Even if page isn't built on top of veraPDF, it's clear that it feels like so to me.

I wish it would have been easily possible to compare `page` and `veraPDF` with other implementations such as [PAC](https://pac.pdf-accessibility.org/en) or [Adobe Acrobat](https://www.adobe.com/acrobat.html).

## Fun things learned along the way

This project was also a big work on understanding what a PDF actually is and how they work, why there are so many different kind of PDFs, and discover some weird PDF features.

### Did you know you can use JavaScript **inside** a PDF?

You can embed JavaScript inside a PDF with `/JavaScript` actions.

This isn't like a "true" JavaScript API in the sense that it's not meant to do DOM manipulation like in an HTML web page, you can still do random fun things like HTTP request (both GET and POST), alerts, mouse/keyboard events, etc.

> Note that a lot of those features are **poorly documented** and often **don't** work in PDF reader outside of Adobe Acrobat (and some of them aren't even part of the official PDF specification).

### A PDF file can be a valid ZIP file

A PDF file can be "polyglot", in the sense that it can be considered to be a valid ZIP file too. For example you can have a file called document.pdf:

- open it with a PDF reader → you see a normal document.
- open the exact same file with a ZIP extractor → you get files inside an archive.

This isn't something that will happen randomly when making PDFs, you have to "force" it by adjusting the bytes, and I'm unsure whether that can be useful at all or not.

## What's next

I'm already using `page` daily in my professional work, and I plan to continue. There's still a lot of work to do, especially to fill the PDF 2.0 gap. The key next steps are:

- find testers and users who can share feedback, feature ideas, and bug reports
- find external contributors, since many issues aren't that complicated to fix

If you think you fit into any of those categories or if you're just interested in PDF accessibility/validation, please feel free to contact me!
