import { createStore } from "solid-js/store";

export const get_default_data = () => {
  return {
    "full name": "",
    designation: "",
    phone: "",
    address: "",
    "email address": "",
    "github username": "",
    profile: "",

    education: [
      { institution: "", qualification: "", time: "" },
    ],

    "work experience": [
      { company: "", position: "", time: "" },
    ],

    skills: [""],
    interests: [""],
    oss: [{ "project name": "", description: "", languages: "" }],
  };
};

export const get_demo_data = () => {
  return {
    "full name": "Yashwanth N",
    designation: "Full Stack Dev",
    phone: "+91 9742908395",
    "email address": "yashwanthshetty134@gmail.com",
    "github username": "Yashwanth023",
    profile:
      "I'm a Frontend Web developer and an open source & linux enthusiast. I use Gnu / Artix linux and I maintain several open source projects at github. I'm looking forward to get a junior frontend web developer's position at a reputed corporation / startup and building user friendly & responsive interfaces with Reactjs.",

    education: [
      {
        institution: "Don Bosco Institute Of Technology",
        qualification: "Bachelor of Engineering(CSE)",
        time: "2020-2024",
      },
      {
        institution: "RNS Composite PU College",
        qualification: "intermediate (11-12th grade)",
        time: "2018-2020",
      },
      {
        institution: "Blue Bell Public School",
        qualification: "10th grade (SSC)",
        time: "2012",
      },
    ],

    "work experience": [
      {
        company: "Freshers lab Software Solutions",
        position: "MERN Stack Developer Intern",
        time: "2022 Oct - 2023 Nov",
      },
    ],

    skills: [
      "html skill-icons:html",
      "css skill-icons:css",
      "javascript skill-icons:javascript",
      "typescript skill-icons:typescript",
      "react logos:react",
      "tailwind css logos:tailwindcss-icon",
      "unocss simple-icons:unocss",
      "solid JS logos:solidjs-icon",
    ],

    interests: [
      "tweaking neovim skill-icons:neovim-dark",
      "Gnu / artix linux simple-icons:artixlinux",
      "lua scripting file-icons:lua",
      "Ricing linux bi:palette2",
      "shell scripting file-icons:terminal",
    ],

    oss: [
      {
        "project name": "nvchad",
        description:
          "A Neovim config framework with blazing fast startuptime & beautiful UI providing solid defaults coming with many lua plugins specifically written for it. NvChad currently has more than 13,900+ stars on github, it's the most popular neovim only distro.",
        languages: "lua ",
      },
      {
        "project name": "Nextstep Cv",
        description:
          "Quick resume / cv builder for making beautiful resumes & supports exporting to high quality svgs & pdfs. This resume is generated by quickcv web app.",
        languages: "typescript, solidJs, unocss, vite",
      },
      {
        "project name": "pomoz",
        description:
          "Minimal pomodoro timer & todolist creator web app to track progress of your productiveness.",
        languages: "javascript, solidJs, css ",
      },
    ],
  };
};

export const [store, setStore] = createStore(get_default_data());
