"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Architectural & Interior Design Website",
    description: "A template that can be used for a business in the architectural industry.",
    image: "/images/projects/ARCHIFINISH.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/ayandajr/Architect",
    previewUrl: "https://ayandajr.github.io/Architect/",
  },
  {
    id: 2,
    title: "LAMA",
    description: "Website designed for a client in the Marketing industry.",
    image: "/images/projects/LAMAFINISH.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/ayandajr/LAMA",
    previewUrl: "https://lamamarketing.co.za",
  },
  {
    id: 3,
    title: "XYPO",
    description: "A template website for a business in the tech industry",
    image: "/images/projects/XYPOFINISH.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/ayandajr/XYPO",
    previewUrl: "https://ayandajr.github.io/XYPO/",
  },
  {
    id: 4,
    title: "Digital Agency Website Template",
    description: "A template that can be used for a business providing digital services.",
    image: "/images/projects/AGENCYFINISH.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/ayandajr/AGENCY",
    previewUrl: "https://ayandajr.github.io/AGENCY/",
  },
  {
    id: 5,
    title: "Tindog",
    description: "A template website that is for a mock tinder for dogs.",
    image: "/images/projects/TINDOGFINISH.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/ayandajr/tindog1",
    previewUrl: "https://ayandajr.github.io/tindog1/",
  },
  {
    id: 6,
    title: "Start Up Website",
    description: "A template that can be used for a newly established enterprise.",
    image: "/images/projects/YOCOFINISH.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/ayandajr/startUp1",
    previewUrl: "https://ayandajr.github.io/startUp1/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <p className="text-center text-base font-semilbold text-white mt-4 mb-8 md:mb-12" style={{marginRight: "200px", marginLeft: "200px", lineHeight: "2"}}>
        Please note that the below projects are mere examples showcasing technical ability
        while providing a preview of the depth of flexibility when it comes to the <b>custom</b> development 
        of a clients website.
      </p>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      <h2 className="text-center text-4xl font-bold text-gray-500 mt-10 mb-8 md:mb-12" style={{marginTop: "140px", marginBottom: "50px"}}>
        Coming Soon...
      </h2>
      <p className="text-center text-base font-semilbold text-white mt-4 mb-8 md:mb-12" style={{marginRight: "200px", marginLeft: "200px", lineHeight: "2"}}>
        Experience the future of online shopping: an upcoming ecommerce marvel meticulously crafted with cutting-edge Next 13 and React technologies,
        setting a groundbreaking new standard in website development by the visionary team at ayandajr.
      </p>
    </section>
  );
};

export default ProjectsSection;