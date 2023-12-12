"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Architectural & Interior Design Website",
    description: "A template that can be used for a business in the architectural industry.",
    image: "/images/ARCHIFINISH.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/ayandajr/Architect",
    previewUrl: "https://ayandajr.github.io/Architect/",
  },
  {
    id: 2,
    title: "LAMA",
    description: "Website designed for a client in the Marketing industry.",
    image: "/images/LAMAFINISH.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/ayandajr/LAMA",
    previewUrl: "https://lamamarketing.co.za",
  },
  {
    id: 3,
    title: "XYPO",
    description: "A template website for a business in the tech industry",
    image: "/images/XYPOFINISH.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/ayandajr/XYPO",
    previewUrl: "https://ayandajr.github.io/XYPO/",
  },
  {
    id: 4,
    title: "Digital Agency Website Template",
    description: "A template that can be used for a business providing digital services.",
    image: "/images/AGENCYFINISH.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/ayandajr/AGENCY",
    previewUrl: "https://ayandajr.github.io/AGENCY/",
  },
  {
    id: 5,
    title: "Tindog",
    description: "A template website that is for a mock tinder for dogs.",
    image: "/images/TINDOGFINISH.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/ayandajr/tindog1",
    previewUrl: "https://ayandajr.github.io/tindog1/",
  },
  {
    id: 6,
    title: "Start Up Website",
    description: "A template that can be used for a newly established enterprise.",
    image: "/images/YOCOFINISH.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/ayandajr/startUp1",
    previewUrl: "https://ayandajr.github.io/startUp1/",
  },
  {
    id: 7,
    title: "Travel Website",
    description: "A template that can be used for any typical business landing page.",
    image: "/images/travelWebsiteComplete.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://travel-website-mauve.vercel.app/",
    previewUrl: "https://github.com/ayandajr/travel-website",
  },
];

const nextJSProjects = [
  {
    id: 1,
    title: "Ecommerce Store",
    description: "An ecommerce store template for a business selling tech products",
    image: "/images/STOREFINISH.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/ayandajr/e-commerce",
    previewUrl: "https://e-commerce-ajv.payloadcms.app/",
  },
  {
    id: 2,
    title: "Ecommerce Store Admin",
    description: "An ecommerce admin dashboard powered by Payload. Allowing the ultimate administrative control. Refer to the following Login Credentials: Email being 'ayandajr11@gmail.com' and Password being '@BagTOSecure11', to access the dashboard of this particular design.",
    image: "/images/DASHFINISH.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/ayandajr/e-commerce",
    previewUrl: "https://e-commerce-ajv.payloadcms.app/admin",
  }

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

  const filteredProjectsTwo = nextJSProjects.filter((project) =>
  project.tag.includes(tag)
);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const cardVariants1 = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <p className="text-center text-base font-semilbold text-white sm:mr-0 sm:ml-0 sm:mb-0 sm:mt-0 lg:mr-48 lg:ml-48 mt-4 mb-8 md:mb-12" style={{lineHeight: "2"}}>
        Please note that the below projects are mere examples showcasing technical ability
        while providing a preview of the depth of flexibility when it comes to the <b>custom</b> development 
        of a clients website.
      </p>
      <h2 className="text-center text-4xl font-bold text-gray-500 lg:mt-36 lg:mb-12 mt-10 mb-8 md:mb-12">
        ECOMMERCE APPLICATIONS
      </h2>
      <p className="text-center text-base font-semilbold text-white sm:mr-0 sm:ml-0 sm:mb-0 sm:mt-0 lg:mr-48 lg:ml-48 mt-4 mb-8 md:mb-12" style={{lineHeight: "2"}}>
        Experience the future of online shopping: an ecommerce marvel meticulously crafted with cutting-edge Next 13 and React technologies,
        setting the standard in website development by the visionary team at ayandajr.
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
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjectsTwo.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
        ))}
      </ul>
      <h2 className="text-center text-4xl font-bold text-gray-500 lg:mt-36 lg:mb-12 mt-10 mb-8 md:mb-12">
        STATIC & DYNAMIC WEBSITES
      </h2>
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

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/MEMOJI7.png" alt= "Ayandajr memoji" width={500} height={500} />
          <p className="text-base lg:text-lg text-center lg:mt-24">
            Having been trained by Dr Angelu Yu, who&apos;s 2023 Web Development Bootcamp stands as a pinnacle in the realm of web development education. 
            Her profound expertise and dedication in this field are unparalleled, ensuring that her students receive 
            cutting-edge training in line with the latest industry standards and conventions. Graduates from her program 
            are equipped not only with the technical prowess to create exceptional websites and web apps but also with a 
            deep understanding of best practices, ensuring that their creations are crafted with precision, adhere to the 
            highest quality standards, and reflect the forefront of modern development techniques. The stamp of Dr. Yu&apos;s 
            training serves as a hallmark of credibility, assuring that projects developed by her students boast not 
            just functionality but also excellence in execution.
          </p>
      </div>

    </section>
    
  );
};

export default ProjectsSection;