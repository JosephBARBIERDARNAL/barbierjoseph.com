export interface Repo {
  author: string;
  content: React.ReactNode;
  imageAuthor: string;
  linkAuthor: string;
}

export const testimonials: Repo[] = [
  {
    author: "Yan Holtz - Software Engineer",
    content: (
      <div>
        <p>
          I hired Joseph for a six-month internship, during which he contributed
          to several educational websites focused on programming and data
          visualization.
        </p>
        <br />
        <p>
          Joseph consistently delivered outstanding work. He is a fast learner,
          highly productive, detail-oriented, and deeply curious. What impressed
          me most was his autonomy and proactive approach—he always took the
          initiative without needing guidance.
        </p>
        <br />
        <p>
          Whatever role you need to fill, Joseph will exceed your expectations.
        </p>
      </div>
    ),
    imageAuthor: "/img/yanholtz.png",
    linkAuthor: "https://www.yan-holtz.com/",
  },
];
