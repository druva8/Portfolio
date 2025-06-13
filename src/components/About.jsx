import React, { useEffect, useState } from "react";

const About = () => {
  const staticIntro = " Python Full Stack Developer,Freelancer,";
  const roles = ["Developer 👨‍💻", "Engineer ⚙️"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[wordIndex % roles.length];
    const speed = isDeleting ? 50 : 120;

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? currentWord.substring(0, charIndex - 1)
          : currentWord.substring(0, charIndex + 1)
      );

      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section
      className="about-section"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "2rem",
        marginTop: "5rem",
        padding: "0 2rem",
      }}
    >
      {/* Left Text Content */}
      <div style={{ flex: "1 1 400px" }}>
        <h2 className="section-title">About Me</h2>

        <h1 className="typewriter-text">
          {staticIntro}{" "}
          <span className="wave" role="img" aria-label="wave">
            👋🏻
          </span>
        </h1>

        <h2 className="looping-text">
          Hi I am a <span className="highlight">{text}</span>
          <span className="cursor">|</span>
        </h2>

        <p className="welcome-text" style={{ marginTop: "1rem" }}>
          Hello! I'm a passionate full-stack developer skilled in building
          modern web applications using <strong>React</strong>,{" "}
          <strong>Python</strong>, and <strong>MongoDB</strong>,
          <strong>Mysql</strong>,<strong>MongoDB</strong>. I enjoy crafting
          clean UI, scalable systems, and solving challenging technical
          problems.
        </p>
      </div>

      {/* Right Image */}
      <div style={{ flex: "1 1 300px", textAlign: "center" }}>
        <img
          src="/assets/Home-DAM0Mqxq.png"
          alt="Profile"
          style={{
            width: "100%",
            maxWidth: "300px",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
          }}
        />
      </div>
    </section>
  );
};

export default About;
