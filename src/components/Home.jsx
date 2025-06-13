import React from "https://cdn.jsdelivr.net/npm/react@18.2.0/+esm";

const Home = () => {
  // onClick handlers for navigation
  const handleEmailClick = () => {
    window.location.href = "mailto:bdruva8@gmail.com"; // Use mailto: for email links
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/", "_blank"); // Open in a new tab for external links
  };

  const handleApnaClick = () => {
    window.open("https://apna.co/profile", "_blank"); // Open in a new tab for external links
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/druva-n-a84572353/", "_blank"); // Open in a new tab for external links
  };

  return (
    // The home-container is now a flex container to hold the image and text side-by-side
    <div className="home-container">
      {/* Wrapper for the circular profile image */}
      <div className="profile-image-wrapper">
        <img
          src="/assets/pic.jpg" // Placeholder image URL
          alt="Profile Picture"
          className="profile-image"
        />
      </div>
      {/* Container for the text content (title, description, and social icons) */}
      <div className="profile-text-content">
        <h1 className="title">GETTING TO KNOW ME</h1>
        <p className="text-lg">
          A motivated and detail-oriented fresher with expertise as a full Stack
          Developer, skilled in building efficient and user-friendly web
          applications. Proficient in frontend technologies like HTML, CSS,
          JavaScript, React.js, along with backend development using FastAPI,
          Python, and database management with MySQL and MongoDB. Dedicated to
          learning new technologies, creating innovative solutions, and
          delivering smooth and reliable user experiences.
        </p>
        <div>
          <p className="text-sm">Connect with me via</p>
        </div>
        <div className="icon-container">
          {/* Email Icon */}
          <a onClick={handleEmailClick} className="icon">
            <svg viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
          {/* GitHub Icon */}
          <a onClick={handleGitHubClick} className="icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.089 2.91.833.091-.645.351-1.086.635-1.336-2.22-.251-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.203 2.393.1 2.646.64.699 1.026 1.592 1.026 2.683 0 3.841-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.335-.012 2.415-.012 2.741 0 .267.18.516.688.478C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          {/* Apna Icon */}
          <a onClick={handleApnaClick} className="icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5v-4h-1v4h-1.5v-5.5h3.5V10h-5v7.5H5V9h7V7h-2.5V5.5h4V7H11v2h5v3h-3.5z" />
            </svg>
          </a>
          {/* LinkedIn Icon */}
          <a onClick={handleLinkedInClick} className="icon">
            <svg viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>
        </div>

        <p className="text-sm italic">Always open to connect!</p>
      </div>
    </div>
  );
};

export default Home;
