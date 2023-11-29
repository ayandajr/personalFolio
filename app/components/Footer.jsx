import React from "react";
import GithubIcon from "@/public/github-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white" id="#contact">
        <div className="container pt-12 flex justify-center">
            <div className="z-10">
                <h5 className="text-xl text-center font-bold text-white my-2">
                    Let&apos;s Connect
                </h5>
                <p className="justify-center text-center text-[#ADB7BE] mb-4 max-w-md" style={{paddingLeft: "15px", paddingRight: "15px"}}>
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className=" mt-3 mb-3 pr-2 pl-2 socials flex flex-row justify-center gap-2">
                    081 431 6527
                </div>
                <div className=" mt-3 mb-3 pr-2 pl-2 socials flex flex-row justify-center gap-2">
                    <Link href="https://github.com/ayandajr">
                      <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                </div>
            </div>
          {/* <span>AJV</span> */}
          {/* <p className="text-slate-600">All rights reserved.</p> */}
        </div>
    </footer>
  );
};

export default Footer;