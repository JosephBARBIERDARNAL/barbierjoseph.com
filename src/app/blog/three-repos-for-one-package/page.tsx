import Header from "../../components/header";
import Footer from "../../components/footer";
import Spacing from "../../components/spacing";
import FooterBlog from "../footerBlog";

const TRFOP: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-black">
      <Header />
      <Spacing size={4} />
      <main className="blogpost container mx-auto flex-grow p-4">
        <h1>3 Repos, 1 Package: Why?</h1>
        <p className="text-sm text-gray-400 italic text-center">
          Last updated: November 2024 | Estimated read time: 3 minutes
        </p>

        <h2>The Project</h2>
        <p>
          During the summer of 2024,{" "}
          <a
            href="https://www.yan-holtz.com/"
            target="_blank"
            className="clickable"
          >
            Yan Holtz
          </a>{" "}
          and I created a Python package called <code>PyPalettes</code>. It
          provides a collection of pre-made palettes for data visualization. In
          my opinion, this project has been quite successful: thousands of likes
          on social media, around 250 GitHub stars, and a few articles published
          by others.
        </p>
        <p>
          The project comprises approximately 500 lines of Python code in total
          (excluding documentation) and primarily offers a single function (or
          none in some use cases!). Yet, we structured the project into three
          independent repositories. Why did we choose this approach?
        </p>
        <p>
          Here, I’ll explain our reasoning with the goal of encouraging you to
          explore our package.
        </p>

        <h2>What Are the Three Repos About?</h2>
        <p>
          The first (and main) repository contains the actual Python code and
          the palettes (stored as a single CSV file). This is where I make
          updates, address issues, and so on. See{" "}
          <a
            href="https://github.com/JosephBARBIERDARNAL/pypalettes"
            target="_blank"
            className="clickable"
          >
            here
          </a>
          .
        </p>
        <p>
          The second repository supports the{" "}
          <a
            href="https://python-graph-gallery.com/"
            target="_blank"
            className="clickable"
          >
            Python Graph Gallery website
          </a>
          , which is owned by Yan. This site features hundreds of chart examples
          made with Python and receives significant traffic. This repository was
          not originally created for PyPalettes (it predates it), but two of its
          many pages are dedicated to PyPalettes (one for the doc, one for the
          Color Palette Finder).
        </p>
        <p>
          The third repository is dedicated to the Color Palette Finder, a tool
          we built to browse and interact with the palettes. See{" "}
          <a
            href="https://github.com/holtzy/dataviz-color-finder"
            target="_blank"
            className="clickable"
          >
            here
          </a>
        </p>

        <h2>Documentation Isn’t Automatically Generated</h2>
        <p>
          Typically, package developers write what’s known as "inline
          documentation"—documentation embedded within the code itself. This is
          considered a best practice because it ensures a single source of
          truth. In Python, we use docstrings; in R, tools like Roxygen2 are
          common.
        </p>
        <p>
          For <code>PyPalettes</code>, the official documentation is manually
          written as a blog post on the Python Graph Gallery. See{" "}
          <a
            href="https://python-graph-gallery.com/introduction-to-pypalettes/"
            target="_blank"
            className="clickable"
          >
            here
          </a>
          . This approach gives us greater control over the look and feel of the
          documentation and leverages the traffic already present on the site.
          Given the small size of the project, having two sources of truth isn’t
          a significant issue.
        </p>

        <h2>The Color Palette Finder</h2>
        <p>
          The Color Palette Finder allows users to browse the 2,500+ palettes
          provided by <code>PyPalettes</code>. Users can try different palettes
          on various charts and see instant results—or blazingly fast results,
          if you prefer.
        </p>
        <p>
          This tool is a fantastic way to work with colors, offering an
          immediate preview without the need for coding. It lets you focus
          purely on design.
        </p>
        <div className="flex justify-center my-10">
          <img src="/img/blog/pypalettes.gif" alt="PyPalettes demo" />
        </div>
        <p>
          Building this tool wasn’t easy—Yan did 99% of the work. It’s a React +
          D3.js + Tailwind web app, meaning the charts you see aren’t matplotlib
          charts but JavaScript charts designed to resemble matplotlib.
        </p>
        <p>
          Once Yan had done that, he added a new page on the Python Graph
          Gallery where he integrates the Color Palette Finder (an iframe) with
          an explanation of the context and links to the repo and actual
          documentation.
        </p>

        <h2>User Experience</h2>
        <p>
          I strongly believe that the Color Palette Finder is what makes{" "}
          <code>PyPalettes</code> special. It’s incredibly easy to use and
          achieves its purpose quickly.
        </p>
        <p>
          The way we structured <code>PyPalettes</code> resembles a (very small)
          product rather than a traditional open-source package. Our main
          priorities were: how will people discover it? How can we make them
          understand the package quickly? How do we show its value?
        </p>
        <p>
          This approach was feasible because the project itself is quite simple.
          The Python code is concise and straightforward. We believe many
          excellent open-source tools fail to gain traction due to poor
          branding, limiting their reach and impact.
        </p>

        <h2>Takeaways</h2>
        <p>
          Most packages should avoid relying on multiple repositories,
          especially if they’re small (fewer than 10,000 lines of code, for
          example).
        </p>
        <p>
          However, sometimes it’s worth considering alternatives. Could you do
          something unique? For example, we customized our documentation for{" "}
          <code>PyPalettes</code>. Similarly, you could build a Shiny/Streamlit
          app or explore other creative avenues.
        </p>
        <p>
          The fact that it's open source shouldn't mean that only nerds will be
          able to understand it. Try to make it accessible to everyone without
          any prior knowledge.
        </p>

        <FooterBlog />
      </main>
      <Footer />
    </div>
  );
};

export default TRFOP;
