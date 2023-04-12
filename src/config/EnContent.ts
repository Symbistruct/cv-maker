const EnContent = {
  sidebar: {
    references: {
      title: "References",
      content: [
        {
          name: "Jessica Viklund",
          jobTitle: "Product Owner",
          quote: `Melvin is a team player who has worked very well in our team [...] Melvin maintains good
          quality of what is developed.`,
          companyName: "IKEA",
          teleNo: "+46 70 478 74 31",
        },
        {
          name: "Emric Månsson",
          jobTitle: "Owner",
          companyName: "Symbistruct",
          quote:
            "Melvin is a good problem solver who helps you see problems from different perspectives.",
          teleNo: "+46 73 326 96 82",
          email: "emric@symbistruct.com",
        },
        {
          name: "Emil Holgersson",
          jobTitle: "Owner",
          companyName: "SKFM Syd",
          teleNo: "+46 73 529 71 07",
        },
      ],
    },
    education: {
      title: "Education",
      content: [
        {
          schoolName: "TE, Knut Hahnsskolan",
          date: { from: "2020", to: "2023" },
        },
      ],
    },
    contactInfo: {
      title: "Contact",
      content: {
        teleNo: "+46 79 347 17 10",
        email: "privat.melvin.wahlberg@gmail.com",
        linkedIn: "Melvin Wahlberg",
        website: "melvinwahlberg.com",
        address: "Ronneby, Sweden",
      },
    },
  },

  mainSection: {
    aboutMe: {
      title: "About Me",
      content: [
        `
      My name is Melvin Wahlberg and I am a developer who likes to learn new things, 
      and to constantly solve new problems. My strengths are that I am very attentive,
      I learn new things easily and I also work efficiently.`,

        `Here you will be able to find my previous assignments, I hope you like what you
      see! For more information, please do check out my website, or contact me via mail
      if you have any other questions.`,
      ],
    },
    experiences: {
      title: "Experiences",
      content: [
        {
          companyName: "Symbistruct",
          position: "Web developer",
          workDescription:
            "Developed a booking app in the JavaScript framework 'Remix'. The app can be found on my website under the project 'Bokahundtrim'. Important during this assignment: TypeScript, Tailwind, Remix, Git.",
          period: {
            started: "2023",
            ended: "2023",
          },
        },
        {
          companyName: "IKEA",
          position: "Web Developer",
          workDescription:
            "Developed an internal application for IKEA and its employees to help order pictures, furniture and other resources. The app used the framework 'React'. Important during this assignment: TypeScript, Tailwind, React, Git.",
          period: {
            started: "2022",
            ended: "2023",
          },
        },
        {
          companyName: "SKFM Syd",
          position: "Customer Service",
          workDescription:
            "Sat in customer service and helped with billing etc.",
          period: {
            started: "2020",
            ended: "2022",
          },
        },
        {
          companyName: "Symbistruct",
          position: "Web Developer",
          workDescription:
            "Did smaller web developer tasks on a website using the framework 'Ruby on Rails'. Important during this task: HTML, CSS, JavaScript, Git, Ruby on Rails.",
          period: {
            started: "2021",
            ended: "2022",
          },
        },
      ],
    },

    skillsSection: {
      title: "Skills",
      yearsTranslation: "years",
      content: {
        intro:
          "During the years I have worked with many different programming languages, frameworks and other tools to manage to solve all the problems I have stumbled upon. Below you can find some of the tools I have worked with, and approximately how long I have been using them.",
        skills: [
          { name: "JavaScript", since: 2018 },
          { name: "Git", since: 2018 },
          { name: "CSS", since: 2018 },
          { name: "HTML", since: 2018 },
          { name: "HTML5", since: 2018 },
          { name: "NodeJS", since: 2020 },
          { name: "Bootstrap", since: 2020 },
          { name: "React", since: 2021 },
          { name: "TypeScript", since: 2021 },
          { name: "SCSS", since: 2021 },
          { name: "Tailwind", since: 2021 },
          { name: "Remix", since: 2022 },
        ],
        outro: [
          `As said previously: I like to learn new things, and I don't stall
          with learning new things if it is necessary to solve different challenges,
          or just because I like learning something new.`,
          `If you have any more questions about my previous assignments, or just want
          to get to know me better; do not hesitate to contact me or check out my website
          for some of the projects that I don't mention here!`,
        ],
      },
    },

    references: {
      title: "References",
      content: [
        {
          name: "Jessica Viklund",
          jobTitle: "Product Owner",
          quote: `Melvin is a team player who has worked very well in our team even if he has not been working full time. 
          Melvin maintains good quality of what is developed. He understands what should be done and what needs to be done 
          and if he gets stuck he is not afraid to ask for help. Melvin is easy to deal with, a responsible, positive and 
          service minded person.`,
          companyName: "IKEA",
          teleNo: "+46 00 000 00 00",
        },
        {
          name: "Emric Månsson",
          jobTitle: "Owner",
          companyName: "Symbistruct",
          quote: `Melvin started programming at a young age and has repeatedly impressed me since
          then. Melvin is a good problem solver who helps you see problems from different perspectives.
          He also cares about providing with quality while at the same time not letting pride get in the
          way of his sympathetic personality and team spirit.`,
          teleNo: "+46 73 326 96 82",
          email: "emric@symbistruct.com",
        },
      ],
    },
  },
};

export default EnContent;
