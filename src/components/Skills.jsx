const Skills = () => {
  const skills = [
    { name: "ReactJS", icon: "devicon-react-original colored" },
    { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "Django", icon: "devicon-django-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "HTML5", icon: "devicon-html5-plain colored" }, // Added HTML5
    { name: "CSS3", icon: "devicon-css3-plain colored" }, // Added CSS3
  ];

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Skills</h2>
      <ul className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center gap-2 bg-white text-black dark:bg-gray-800 dark:text-white px-4 py-2 rounded-full shadow"
          >
            <i className={`${skill.icon} text-xl`}></i>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
