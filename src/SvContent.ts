const SvContent = {
  sidebar: {
    references: [
      {
        name: "Jessica Viklund",
        jobTitle: "Product Owner",
        quote: `Melvin är en teamspelare och har fungerat mycket bra i vårt team [...] Melvin håller bra 
        kvalitet på det som utvecklas.`,
        companyName: "IKEA",
        teleNo: "+46 00 000 00 00",
      },
      {
        name: "Emric Månsson",
        jobTitle: "Ägare",
        companyName: "Symbistruct",
        quote:
          "Melvin är en duktig problemlösare som hjälper dig att se problem från nya synvinklar.",
        teleNo: "+46 73 326 96 82",
        email: "emric@symbistruct.com",
      },
      {
        name: "Emil Holgersson (Fråga Emil)",
        jobTitle: "Ägare",
        companyName: "SKFM Syd",
        teleNo: "+46 00 000 00 00",
      },
    ],
    education: [
      {
        schoolName: "TE, Knut Hahnsskolan",
        date: { from: "2020", to: "2023" },
      },
    ],
    contactInfo: {
      teleNo: "+46 79 347 17 10",
      email: "privat.melvin.wahlberg@gmail.com",
      linkedIn: "Melvin Wahlberg",
      website: "melvinwahlberg.com",
      address: "Ronneby, Sverige",
    },
  },

  mainSection: {
    aboutMe: [
      `Mitt namn är Melvin Wahlberg och jag är en utvecklare som tycker
  om att lära mig nya saker och att lösa nya utamingar. Mina styrkor
  är att jag är noggrann, lättlärd och effektiv.`,
      `Här kan mina föregående uppdrag finnas, jag hoppas ni gillar det
  ni ser! För ytterliggare information se gärna min hemsida, eller
  hör av er till min mail vid några frågor.`,
    ],
    experiences: [
      {
        companyName: "Symbistruct",
        position: "Webbutvecklare",
        workDescription:
          "Utvecklade en bokningsapp i JavaScript ramverket Remix. Själva appen kan finnas på min hemsida vid projektet 'Bokahundtrim'. Viktigt i detta uppdrag: TypeScript, Tailwind, Remix, Git.",
        period: {
          started: "2023",
          ended: "2023",
        },
      },
      {
        companyName: "IKEA",
        position: "Webbutvecklare",
        workDescription:
          "Utvecklade en intern applikation för IKEA som skulle underlätta med att beställa bilder, möbler och andra resurser. Appen skrevs i React. Viktigt i detta uppdrag: Typescript, Tailwind, React, Git.",
        period: {
          started: "2022",
          ended: "2023",
        },
      },
      {
        companyName: "SKFM Syd",
        position: "Kundtjänst",
        workDescription:
          "Satt i kundtjänst och hjälpte till med fakturering m.m.",
        period: {
          started: "2020",
          ended: "2022",
        },
      },
      {
        companyName: "Symbistruct",
        position: "Webbutvecklare",
        workDescription:
          "Gjorde mindre webbutvecklings-uppgifter i en hemsida skriven i Ruby on Rails. Viktigt i detta uppdrag: HTML, CSS, JavaScript, Git, Ruby on Rails.",
        period: {
          started: "2021",
          ended: "2022",
        },
      },
    ],

    skillsSection: {
      intro:
        "Under åren har jag arbetat med många olika tekniker, ramverk och programmeringsspråk för att lyckas lösa alla problem som jag har stött på. Nedan finns några av de främsta som jag har arbetat med och ungefär hur länge jag har använt dem.",
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
        `Som sagt innan gillar jag att lära mig nya saker, och drar mig
      inte från att lära mig nya tekniker om det krävs för att lösa
      vissa problem, eller bara för att jag själv tycker om utmaningen
      att lära mig något nytt.`,
        `Har du fler frågor angående mina förra uppdrag, eller vill du bara
      veta mer om mig som person? Hör gärna av er isåfall så kan vi
      prata vidare!`,
      ],
    },

    references: [
      {
        name: "Jessica Viklund",
        jobTitle: "Product Owner",
        quote: `Melvin är en teamspelare och har fungerat mycket bra i vårt team även om han inte har jobbat full tid. Melvin håller bra kvalitet på det
        som utvecklas. Han förstår snabbt vad som ska göras och vad som behöver göras och om han fastnar är han inte rädd för att be om
        hjälp. Melvin är lätt att ha att göra med, en ansvarstagande, positiv och serviceminded person.`,
        companyName: "IKEA",
        teleNo: "+46 00 000 00 00",
      },
      {
        name: "Emric Månsson",
        jobTitle: "Ägare",
        companyName: "Symbistruct",
        quote: `Melvin började med programmering vid en tidig ålder och har gång på gång
          imponerat mig sedan dess. Melvin är en duktig problemlösare som hjälper dig att
          se problem från nya synvinklar. Han är alltid mån om att leverera kvalitet
          samtidigt som stolhet aldrig står i vägen för hans sympatiska personlighet och
          stora lagkänsla.`,
        teleNo: "+46 73 326 96 82",
        email: "emric@symbistruct.com",
      },
    ],
  },
};

export default SvContent;
