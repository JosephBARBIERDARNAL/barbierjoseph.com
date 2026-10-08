# Making PDF accessibility a little more accessible

<div class="read-time">

Estimated read time: 4 min

</div>

PDFs are everywhere, but making sure they're accessible to everyone is surprisingly difficult. A PDF can look perfectly fine while being almost impossible to navigate with a screen reader.

## State of measuring PDF accessibility

- verapdf is basically the best option available since it's well maintained (since a long time) and has been used in tons of places in "real world" environments. It's open source and comprehensive and gets the job done.
- but it requires Java installed (which adds a runtime requirement and is an important limitant factor for non and semi technical people)
- and Java isn't the best language for being integrated into other tools (Python, Webassembly browser, etc, while Java is mostly great for JVM languages), even if that's technically possible\*
- veraPDF isn't easy to use even for technical people (CLI output doesn't clearly help you figure out accessibility issues)
- Other solutions exist but those are either non open source, not free or not cross platform (eg cant be used on all OSes)
- Add note on open source tools that claim validating PDF files while they often have a pretty poor coverage of what needs to be checked.
- Add note about special cases that are (or either look) early stage but are promising: https://github.com/speedata/pdfa11y, https://github.com/focusring/horn

## Rethinking PDF validation, from scratch

- I use verapdf a lot in my work, so throught time I noted all of the things that I wish would be different, by default, in my dream validator
- Out of this is:

      - output that is designed for human but stays easy to parse (JSON export)
      - fast: verapdf can litteraly take multiple seconds to validate a single document, which adds up a lot when you validate hundreds of files
      - usable anywhere, natively without any kind of hacking: CLI as default usage, with the core engine available as a rust crate, a Python package, compiled to Webassembly for browser-local experience, and probably more later (Node.js, R-lang, etc).

- for those reasons (and because I like this language), Rust felt like a great fit.

Earlier this year (2026), I decided to see if I was able to make a proof of concept of this thing. My goal was: validate the PDF/A-1b profile (add side note explaining that this is a sub-profile of PDF/A that is simpler to validate that PDF/UA-1, which is the main accessibility profile).

Once I made a correct version, I decided that I'll implement other PDF profiles validation

## Introducing `page`

The result of this is a project called [page](https://github.com/JosephBARBIERDARNAL/page). In short it's a PDF validator, and can be used to validate either PDF accessibility (aka PDF/UA) or PDF archiving (aka PDF/A). Key features are:

- around an [order of magnitude faster](https://josephbarbierdarnal.github.io/page/benchmark/) than verapdf
- passes [100% verapdf corpus test suite](https://github.com/JosephBARBIERDARNAL/page/blob/main/crates/page_cli/src/corpus.rs) (which means that `page` and `verapdf` exactly agree on ~2200 PDF files)
- compiles to the Wasm (in the browser!), see [the demo](https://josephbarbierdarnal.github.io/page/demo/)
- easy to use: one line install command and easy-to-read outputs:

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

> page is open source and MIT licensed.

key things missing are:

- PDF/A-4, PDF/UA-2 and WTPDF aren't implemented. Those profiles are PDF based on PDF 2.0
- hints on how to fix failed rules: many failed rule looks like this _"The document catalog dictionary shall include a ViewerPreferences dictionary containing a DisplayDocTitle key, whose value shall be true."_, and I want to translate each of those into a more human-readable way.

## Fun things learned along the way

- Did you know that you can use JavaScript **inside** PDF
- A PDF file can be a **valid zip file**
- AI is both your best friend and your worst enemy

## What's next

I'm already personnally using it daily in my professional work, and plan to continue. Yet, there is still tons of work remaining, especially to complete the PDF 2.0 gap.

- Find external contributors: many issues are not _that_ complicated too fix
- Find more testers/users to get feedback, feature idea and bug reports

If you think you fit in any of those categories, please feel free to contact me!
