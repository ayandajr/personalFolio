import React from "react";
import GithubIcon from "@/public/github-icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-12 flex justify-between">
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">
                Let&apos;s Connect
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                I&apos;m currently looking for new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, I&apos;ll
                try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="github.com">
                  <Image src={GithubIcon} alt="Github Icon" />
                </Link>
                <Link href="linkedin.com">
                  <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </Link>
            </div>
        </div>
        {/* <span>AJV</span> */}
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;