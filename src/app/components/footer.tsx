const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Joseph's Portfolio. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="mr-4">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="mr-4">LinkedIn</a>
          <a href="mailto:your.email@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;