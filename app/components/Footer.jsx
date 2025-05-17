import React from "react";
import Link from "next/link";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-6 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-semibold">Abhishek</h3>
            <p className="text-gray-400 mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-0 md:space-x-8 mb-4 md:mb-0">
            <Link href="/" className="hover:text-gray-400 transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/experience"
              className="hover:text-gray-400 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="hover:text-gray-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-400 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/blogs"
              className="hover:text-gray-400 transition-colors"
            >
              Blogs
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://www.x.com/humonious"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon className="text-gray-400 hover:text-gray-300 transition-colors" />
            </Link>
            <Link
              href="https://www.github.com/humoniosu17/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="text-gray-400 hover:text-gray-300 transition-colors" />
            </Link>
            <Link
              href="https://www.instagram.com/humonious/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="text-gray-400 hover:text-gray-300 transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="text-gray-400 hover:text-gray-300 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
