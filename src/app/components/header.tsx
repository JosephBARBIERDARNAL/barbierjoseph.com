import Link from 'next/link';

const navItems = [
  { text: 'Open Source', slug: 'opensource' },
  { text: 'Visualization', slug: 'dataviz' },
  { text: 'About', slug: 'about' },
];

const Header: React.FC = () => {
  return (
    <header className="bg-black-600 text-white pt-12">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-sm z-30 font-light fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Joseph - Open Source Developer & Data Analyst
        </Link>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.text}>
              <Link href={`/${item.slug}`}>
                <span className="px-4 py-2 rounded-lg border border-transparent transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg">
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;