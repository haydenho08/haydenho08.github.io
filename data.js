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

// Colour logos for frameworks and tools, from devicon.dev (pinned version)
var DEVICON = "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/";

window.PORTFOLIO = {
  profile: {
    name: "Hayden Ho",
    greetingEmoji: "👋",
    status: "Looking for Summer 2027 internships",
    subline: "software engineering @ york u · payload software @ arbalest rocketry",
    bio: "I'm a first-year Software Engineering student at York University interested in software and embedded systems. I'm currently developing rocket payload software and working with STM32 microcontrollers. Outside of school, I enjoy rock climbing and playing video games.",
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
    result:  one line with a real number, e.g. "Monitors 120 sites per minute with 99.8% alert delivery"
    image:   a screenshot in assets/projects/, e.g. "assets/projects/studyflow.png"
    github / demo:  links. Leave "" to hide.
  */
  projects: [
    {
      folder: "studyflow",
      title: "StudyFlow",
      status: "In progress",
      date: "Oct 2026",
      summary: "A full-stack student productivity platform. Assignments are organized by course with deadline prioritization, study-session tracking and progress analytics, served by a FastAPI REST API backed by PostgreSQL.",
      result: "",
      tags: ["react", "typescript", "python", "fastapi", "postgresql"],
      image: "",
      github: "",
      demo: ""
    },
    {
      folder: "pulsewatch",
      title: "PulseWatch",
      status: "In progress",
      date: "Oct 2026",
      summary: "A distributed website monitoring system. Concurrent background workers run scheduled health checks from a Redis job queue, and failed checks trigger configurable retries and alerts.",
      result: "",
      tags: ["java", "spring boot", "postgresql", "redis", "docker"],
      image: "",
      github: "",
      demo: ""
    },
    {
      folder: "gamepulse",
      title: "GamePulse",
      status: "In progress",
      date: "Oct 2026",
      summary: "A real-time analytics platform for Roblox games. Server-side telemetry streams gameplay events into a Node.js pipeline that aggregates player sessions, progression funnels and retention into dashboards.",
      result: "",
      tags: ["typescript", "node.js", "postgresql", "redis", "luau"],
      image: "",
      github: "",
      demo: ""
    }
  ],

  /*
    Skills, in groups
    icon:  a file in assets/icons/ (".svg" is assumed; include the extension
           for other types, e.g. "c.png"), or a full https:// link to a logo.
  */
  skills: [
    {
      group: "Languages",
      items: [
        { name: "Java",       icon: "java" },
        { name: "Python",     icon: "python" },
        { name: "C",          icon: "c.png" },
        { name: "TypeScript", icon: DEVICON + "typescript/typescript-original.svg" },
        { name: "JavaScript", icon: "javascript" },
        { name: "SQL",        icon: "sql" },
        { name: "Luau",       icon: "luau" },
        { name: "HTML",       icon: DEVICON + "html5/html5-original.svg" },
        { name: "CSS",        icon: DEVICON + "css3/css3-original.svg" }
      ]
    },
    {
      group: "Frameworks",
      items: [
        { name: "React",       icon: DEVICON + "react/react-original.svg" },
        { name: "Node.js",     icon: DEVICON + "nodejs/nodejs-original.svg" },
        { name: "FastAPI",     icon: DEVICON + "fastapi/fastapi-original.svg" },
        { name: "Spring Boot", icon: DEVICON + "spring/spring-original.svg" }
      ]
    },
    {
      group: "Embedded systems",
      items: [
        { name: "STM32 Cortex-M7",   icon: "stm32" },
        { name: "STM32 HAL",         icon: "stm32" },
        { name: "GPIO · UART · I²C", icon: "chip" }
      ]
    },
    {
      group: "Developer tools",
      items: [
        { name: "Git",          icon: "git" },
        { name: "GitHub",       icon: "github" },
        { name: "Docker",       icon: DEVICON + "docker/docker-original.svg" },
        { name: "PostgreSQL",   icon: DEVICON + "postgresql/postgresql-original.svg" },
        { name: "Redis",        icon: DEVICON + "redis/redis-original.svg" },
        { name: "VS Code",      icon: "vscode" },
        { name: "STM32CubeIDE", icon: "stm32" },
        { name: "Roblox Studio", icon: "robloxstudio" }
      ]
    }
  ],

  /*
    Experience (newest first)
    logo:  image in assets/experience/ shown in the timeline circle.
           Leave "" to show the emoji instead.
  */
  experience: [
    {
      logo: "assets/experience/arbalest-rocketry.png",
      emoji: "🚀",
      org: "Arbalest Rocketry",
      role: "Payload Software Team Member",
      dates: "Sep 2026 – present",
      summary: "Writing embedded C firmware for the rocket's science payload on an STM32H723 (Arm Cortex-M7), setting up GPIO, UART and I²C with STM32 HAL for payload data acquisition."
    },
    {
      logo: "assets/experience/cshub.png",
      emoji: "",
      org: "CSHub",
      role: "Member",
      dates: "Sep 2026 – present",
      summary: ""
    },
    {
      logo: "assets/experience/gdg-york.png",
      emoji: "",
      org: "Google Developer Group York",
      role: "Member",
      dates: "Sep 2026 – present",
      summary: ""
    },
    {
      logo: "assets/experience/korean-grill-house.png",
      emoji: "",
      org: "Korean Grill House",
      role: "Server",
      dates: "Jun 2025 – present",
      summary: "Handle 10+ tables at once on busy 200–300-guest nights, keeping orders accurate under time pressure."
    },
    {
      logo: "assets/experience/york-university.png",
      emoji: "🎓",
      org: "York University",
      role: "BEng Software Engineering, Lassonde School of Engineering",
      dates: "Sep 2026 – Apr 2031",
      summary: "🏆 York University Entrance Scholarship"
    }
  ]
};
