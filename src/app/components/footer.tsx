import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="other text-white p-6 mt-8">
      {/* <h1 className="text-center text-base pb-5">CONTACT</h1> */}
      <div className="container mx-auto flex flex-col items-center">
      <p className="font-thin">joseph.barbierdarnal@gmail.com</p>
      <br/>
        
        <div className="flex space-x-6 mb-4">
          <a
            href="https://github.com/JosephBARBIERDARNAL"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-110"
          >
            <Image src="/img/github.png" alt="GitHub" width={50} height={50} className="inverted-image"/>
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-barbier-4ab531224/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-110"
          >
            <Image src="/img/linkedin.png" alt="LinkedIn" width={50} height={50} className="inverted-image"/>
          </a>
          <a
            href="https://x.com/joseph_barbier"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-110"
          >
            <Image src="/img/twitter.png" alt="Twitter" width={50} height={50} className="rounded inverted-image"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;