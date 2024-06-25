import Link from 'next/link';

interface LinkCardProps {
  href: string;
  title: string;
  description: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ href, title, description }) => (
  <Link href={href} passHref>
    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <h2 className="mb-3 text-2xl font-semibold">
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          &#8594;
        </span>
      </h2>
      <p className="m-0 font-light max-w-[30ch] text-base opacity-60">
        {description}
      </p>
    </div>
  </Link>
);

export default LinkCard;