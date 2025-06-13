import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Home from "./components/Home"; // Importing the Home component

import {
  Home as HomeIcon,
  BadgeInfo,
  Hammer,
  FolderOpen,
  FileBadge2,
} from "lucide-react";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    axios.get("http://localhost:8000/api/projects").then((res) => {
      setProjects(res.data);
    });
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return (
          <div>
            <h2 className="section-title">Projects</h2>
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        );
      case "resume":
        return <Resume />;
      default:
        return <Home />; // Rendering the Home component for the "home" section
    }
  };

  return (
    <div className="app-container">
      <div className="nav-brand">Druva</div>
      <nav className="navbar">
        <div className="nav-links">
          <button onClick={() => setActiveSection("home")} className="nav-btn">
            <HomeIcon size={18} style={{ marginRight: "8px" }} />
            Home
          </button>

          <button onClick={() => setActiveSection("about")} className="nav-btn">
            <BadgeInfo size={18} style={{ marginRight: "8px" }} />
            About
          </button>

          <button
            onClick={() => setActiveSection("skills")}
            className="nav-btn"
          >
            <Hammer size={18} style={{ marginRight: "8px" }} />
            Skills
          </button>

          <button
            onClick={() => setActiveSection("projects")}
            className="nav-btn"
          >
            <FolderOpen size={18} style={{ marginRight: "8px" }} />
            Projects
          </button>

          <button
            onClick={() => setActiveSection("resume")}
            className="nav-btn"
          >
            <FileBadge2 size={18} style={{ marginRight: "8px" }} />
            Resume
          </button>
        </div>
      </nav>

      <main className="main-content">{renderSection()}</main>

      <footer className="footer">Copyright © 2025</footer>
    </div>
  );
};

export default App;
