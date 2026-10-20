/*
  ============================================================
  YOUR CONTENT LIVES HERE.
  Edit this file to update the site. You never need to touch
  index.html, styles.css or script.js to change your content.

  Tips
  - Text goes inside quotes: "like this".
  - Leave a field as "" (empty) to hide it on the site.
  - To add a project, copy one { ... } block, paste it, and edit it.
    Keep the comma between blocks.
  ============================================================
*/

window.PORTFOLIO = {
  profile: {
    name: "Hayden Ho",
    greetingEmoji: "👋",
    status: "open to Summer 2027 internships",
    subline: "software engineering @ york u · payload software @ arbalest rocketry",
    bio: "I'm a first-year Software Engineering student who likes building software and is learning to run it close to the hardware. Right now that means rocket payload code and embedded development on STM32.",
    email: "hydnho@gmail.com",
    github: "https://github.com/haydenho08",
    linkedin: "https://linkedin.com/in/hayden-ho-b49485326",
    // Put your resume PDF in this folder, name it resume.pdf, then set this to "resume.pdf"
    resume: "",
    contactLine: "Looking for a Summer 2027 software engineering internship, Toronto or remote.",
    lastUpdated: "October 2026"
  },

  /*
    Projects
    status:  "In progress" or "Complete"
    result:  one line with a real number, e.g. "Analyzed 6 flights; apogee within 2% of the altimeter's own reading"
    image:   a screenshot in assets/projects/, e.g. "assets/projects/flight-analyzer.png"
    github / demo:  links. Leave "" to hide.
  */
  projects: [
    {
      folder: "flight-analyzer",
      title: "Rocket Flight Data Analyzer",
      status: "In progress",
      date: "Oct 2026",
      summary: "Reads altimeter flight logs, finds apogee, peak velocity and acceleration, and plots the flight profile.",
      result: "",
      tags: ["python", "pandas", "matplotlib"],
      image: "",
      github: "",
      demo: ""
    },
    {
      folder: "tableflow",
      title: "TableFlow",
      status: "In progress",
      date: "Oct 2026",
      summary: "A restaurant order manager for tables, orders and the kitchen queue, designed from my time working as a server.",
      result: "",
      tags: ["java", "oop", "junit"],
      image: "",
      github: "",
      demo: ""
    },
    {
      folder: "stm32-logger",
      title: "STM32 Sensor Logger",
      status: "In progress",
      date: "Oct 2026",
      summary: "Firmware for the NUCLEO-H723ZG that reads a sensor and streams readings over UART to a Python logger.",
      result: "",
      tags: ["c", "stm32", "uart", "python"],
      image: "",
      github: "",
      demo: ""
    }
  ],

  /*
    Skills
    icon:  file name in assets/icons/ (without .svg)
    Logos come from devicon.dev and simpleicons.org.
  */
  skills: [
    { name: "Python",     icon: "python" },
    { name: "Java",       icon: "java" },
    { name: "JavaScript", icon: "javascript" },
    { name: "C",          icon: "c" },
    { name: "Git",        icon: "git" },
    { name: "GitHub",     icon: "github" },
    { name: "VS Code",    icon: "vscode" },
    { name: "STM32",      icon: "stm32" }
  ],

  /*
    Experience (newest first)
    current: true highlights the dot on the timeline
  */
  experience: [
    {
      emoji: "🚀",
      org: "Arbalest Rocketry",
      role: "Payload Software",
      dates: "Sep 2026 – present",
      summary: "Contributing to payload systems software and exploring embedded development on the STM32 NUCLEO-H723ZG.",
      current: true
    },
    {
      emoji: "",
      org: "CSHub",
      role: "Member",
      dates: "Sep 2026 – present",
      summary: "York University computer science community.",
      current: false
    },
    {
      emoji: "",
      org: "Korean Grill House",
      role: "Server",
      dates: "Jun 2025 – present",
      summary: "Run multiple tables during busy service and relay orders and changes between front of house and the kitchen.",
      current: false
    },
    {
      emoji: "",
      org: "Bayview Engineering Club",
      role: "Executive",
      dates: "2024 – 2026",
      summary: "Planned design and technology activities with the executive team.",
      current: false
    },
    {
      emoji: "🎓",
      org: "York University",
      role: "BEng Software Engineering",
      dates: "Sep 2026 – 2030",
      summary: "",
      current: false
    }
  ]
};
