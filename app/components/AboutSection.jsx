"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>TAILWIND CSS</li>
        <li>JAVASCRIPT</li>
        <li>TYPESCRIPT</li>
        <li>REACT</li>
        <li>MONGODB</li>
        <li>PRISMA DB</li>
        <li>NEXTjs</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Near Completion</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>The Complete 2023 Web Development Bootcamp</li>
        <li>The Creative JavaScript Course</li>
        <li>10 Mega Responsive Websites with HTML, CSS and JavaScript</li>
        <li>Combinatorics (University Level): Counting Principle</li>
        <li>Discrete Math Series : Propositional Logic masterclass</li>
        <li>Discrete Math Series : Set Theory & Algebra masterclass</li>
        <li>Complete Mathematics Masterclass: College & University Level</li>
        <li>Sets, Relations, Functions & Discrete Mathematical Induction</li>
        <li>Discrete Mathematics</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/MEMOJI5.png" alt= "Ayandajr memoji" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">About Me</h2>
          <p className="text-base lg:text-lg text-center">
            I am a Front-End Web Developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, NEXTjs 13, Node.js, Express, Microsoft Access Database Management,
            MONGODB, PRISMA DB, HTML, CSS and TAILWIND CSS. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications and awesome browsing experiences for users.
          </p>
          <div className="flex flex-row justify-center mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 flex justify-center">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;