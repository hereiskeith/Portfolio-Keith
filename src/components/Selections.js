import React, { useEffect, useState } from "react";

const Selections = (props) => {
  const [focus, setFocus] = useState("#about");
  const [resize, setResizeTimes] = useState(0);

  // const handleClick = (e) => setFocus(e.target.id);

  useEffect(() => {
    document.addEventListener(
      "resize",
      () => {
        setResizeTimes(resize + 1);
      },
      false
    );

    return () => {
      document.removeEventListener(
        "resize",
        () => {
          setResizeTimes(resize + 1);
        },
        false
      );
    };
  }, [resize]);

  useEffect(() => {
    const about = document.getElementById("about").offsetTop;
    const skills = document.getElementById("skills").offsetTop - 2;
    const experience = document.getElementById("experience").offsetTop - 2;
    const projects = document.getElementById("projects").offsetTop - 2;
    const contact = document.getElementById("contact").offsetTop - 2;
    // const contactElTopToViewportTop = document.getElementById("contact").getBoundingClientRect().top;

    const trackFocusSelection = () => {
      const { scrollY } = window;
      // console.log(scrollY, skills, experience, projects, contact);

      if (about <= scrollY && scrollY < skills) {
        setFocus("#about");
      } else if (skills <= scrollY && scrollY < experience) {
        setFocus("#skills");
      } else if (experience <= scrollY && scrollY < projects) {
        setFocus("#experience");
      } else if (projects <= scrollY && scrollY < contact) {
        setFocus("#projects");
      } else if (scrollY >= contact) {
        setFocus("#contact");
      }
    };

    document.addEventListener("scroll", trackFocusSelection, false);

    const aboutLink = document.getElementById("#about");
    const skillsLink = document.getElementById("#skills");
    const experienceLink = document.getElementById("#experience");
    const projectsLink = document.getElementById("#projects");
    const contactLink = document.getElementById("#contact");
    const selectionElements = [
      [aboutLink, about],
      [skillsLink, skills],
      [experienceLink, experience],
      [projectsLink, projects],
      [contactLink, contact],
    ];

    selectionElements.forEach((selection) => {
      selection[0].addEventListener(
        "mouseover",
        (e) => (e.target.style = "color: #268FA5; textDecoration: none"),
        false
      );

      selection[0].addEventListener(
        "mouseout",
        (e) => (e.target.style = ""),
        false
      );

      selection[0].addEventListener("click", () =>
        window.scrollTo(0, selection[1])
      );
    });
  }, [resize]);

  return (
    <div className="selectionsWrapper">
      <a
        id="#about"
        href="#about"
        //onClick={handleClick}
        className={
          "eachSelection " + (focus === "#about" ? "eachSelection-clicked" : "")
        }
      >
        About
      </a>
      <a
        id="#skills"
        href="#skills"
        //onClick={handleClick}
        className={
          "eachSelection " +
          (focus === "#skills" ? "eachSelection-clicked" : "")
        }
      >
        Skills
      </a>
      <a
        id="#experience"
        href="#experience"
        //onClick={handleClick}
        className={
          "eachSelection " +
          (focus === "#experience" ? "eachSelection-clicked" : "")
        }
      >
        Experience
      </a>
      <a
        id="#projects"
        href="#projects"
        //onClick={handleClick}
        className={
          "eachSelection " +
          (focus === "#projects" ? "eachSelection-clicked" : "")
        }
      >
        Projects
      </a>
      <a
        id="#contact"
        href="#contact"
        //onClick={handleClick}
        className={
          "eachSelection " +
          (focus === "#contact" ? "eachSelection-clicked" : "")
        }
      >
        Contact
      </a>
    </div>
  );
};

export default Selections;
