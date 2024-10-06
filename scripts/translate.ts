/** 
 * @author Yassir Elkhaili
 * @license MIT
*/

interface Translations {
  job_title: string;
  about_me: string;
  experience: string;
  education: string;
  languages: string;
  skills: string;
  interests: string;
  references: string;
  projects: string;
  position1_title: string;
  position2_title: string;
  position3_title: string;
  education1_title: string;
  education1_description: string;
  education2_header: string;
  education2_title: string;
  education2_description: string;
  position1_phrase1: string;
  position1_phrase2: string;
  position1_phrase3: string;
  position1_phrase4: string;
  position1_phrase5: string;
  position1_phrase6: string;
  position2_phrase1: string;
  position2_phrase2: string;
  position2_phrase3: string;
  position2_phrase4: string;
  position3_phrase1: string;
  position3_phrase2: string;
  position3_phrase3: string;
  position3_phrase4: string;
  position4_phrase1: string;
  position4_phrase2: string;
  position4_phrase3: string;
  position4_phrase4: string;
  french: string;
  english: string;
  arabic: string;
  german: string;
  recommendation1: string;
  recommendation2: string;
  recommendation3: string;
  recommendation4: string;
  project_title1: string;
  project_title2: string;
  project_title3: string;
  project_title4: string;
  project1_skills: string;
  project2_skills: string;
  project3_skills: string;
  project4_skills: string;
  position4_title: string;
  position4_date: string;
  project5_skills: string;
  project6_skills: string;
}

type Language = "EN" | "FR" | "DE";

const translations: Record<Language, Translations> = {
  EN: {
    job_title: "Full Stack Developer",
    about_me: "Passionate Full Stack Developer skilled in Typescript and PHP. Expertise in designing scalable solutions. Collaborative team player with experience in high-quality project delivery. Actively exploring emerging technologies to stay ahead. Eager to contribute, solve complex challenges and drive impactful results.",
    experience: "Experience",
    education: "Education",
    languages: "Languages",
    skills: "Skills",
    interests: "Interests",
    references: "References",
    projects: "Projects",
    position1_title: "Full Stack Developer",
    position2_title: "Front End Developer",
    position3_title: "Developer Intern",
    position1_phrase1: "Developed features for websites like smiyli.com and partnercorner.com.",
    position1_phrase2: "Enhanced the company's digital landscape, operations and workflow.",
    position1_phrase3: "Maintained and updated web applications to meet evolving requirements.",
    position1_phrase4: "Collaborated with cross-functional teams to implement new functionalities.",
    position1_phrase5: "Enhanced the overall user experience and efficiency of targeted websites.",
    position1_phrase6: "Required Skills: PHP, Laravel, UML, SQL, Javascript.",
    position2_phrase1: "Crafted dynamic websites for diverse clients, including skipcash.com.",
    position2_phrase2: "Demonstrated proficiency in creating dynamic and efficient web experiences.",
    position2_phrase3: "Gained insights into creating responsive and visually appealing websites.",
    position2_phrase4: "Required Skills: Typescript, TailwindCSS, ReactJS.",
    position3_phrase1: "Created static websites for small and medium-sized enterprises.",
    position3_phrase2: "Progressed to more advanced technologies, to meet specific client demands.",
    position3_phrase3: "Developed my understanding of client needs, tailoring solutions accordingly.",
    position3_phrase4: "Required Skills: HTML, CSS, Bootstrap, JavaScript, Laravel.",
    education1_title: "Developer Program",
    education1_description: "Recognizing the value of continuous learning, and despite my prior professional experience. I enrolled in the program to refine my skills, take advantage of the structured curriculum and engage with senior mentors, which fortified my foundation in software engineering.",
    education2_header: "Cadi Ayyad University",
    education2_title: "Faculty of Sciences and Technologies",
    education2_description: "During my time at the Faculty of Sciences and Technology, I gained a foundational understanding of general programming fundamentals as well as C language basics, setting the stage for my journey into computer science and software development.",
    english: "English: IELTS C1",
    french: "French: Fluent",
    german: "German: TELC C1",
    arabic: "Arabic: Native",
    recommendation1: "Aymane Benhima, Fullstack Developer & Referent Trainer",
    recommendation2: "YouCode UM6P",
    recommendation3: "Yassir is an exceptional developer, and it has been a pleasure to have them as a student in my class. I have had the opportunity to observe their growth and development. Yassir excels in writing clean and effective TypeScript and PHP code, crucial skills in modern development. His enthusiasm for both languages and proactive problem-solving make him stand out. I'm confident Yassir will continue to thrive in his career, contributing significantly to any team he joins.",
    recommendation4: "More references available upon request.",
    project_title1: "Developed an open-source web development agency",
    project_title2: "Built a PHP Framework and ORM to develop more optimized webapps",
    project_title3: "Developed a modern and collaborative Wiki platform",
    project_title4: "Developed a robust secrets manager platform tailored for developers",
    project1_skills: "Required Skills: TailwindCSS, Typescript, ReactJS, NextJS, Prisma, SQL",
    project2_skills: "Required Skills: PHP, SQL, design/architectural patterns, ORM design",
    project3_skills: "Required Skills: TailwindCSS, Typescript, ReactJS, PHP, SimpleKit, UML, SQL",
    project4_skills: "Required Skills: Laravel, React, Typescript, Inertia.js, TailwindCSS",
    position4_title: "Developer Intern",
    position4_phrase1: "Completed tasks and enhanced the company's internal framework.",
    position4_phrase2: "collaborated with coworkers to achieve objectives and meet goals.",
    position4_phrase3: "Enhanced the user experience and efficiency of the main solution.",
    position4_phrase4: "Required Skills: Advanced JavaScript, PHP, SQL, Internal framework.",
    position4_date: "Aug 2024 - Present",
    project5_skills: "Status: Continuously updated / Under developement",
    project6_skills: "Source Code: Private / Propriatary"
  },
  FR: {
    job_title: "Développeur Full Stack",
    about_me: "Développeur Full Stack passionné, compétent en Typescript et PHP. Expérience dans la conception de solutions évolutives et haute quelité. Joueur d'équipe collaboratif. Reste à jour avec les technologies émergentes. Avide de contribuer, résoudre des défis complexes et de générer des résultats impactants.",
    experience: "Expérience",
    education: "Éducation",
    languages: "Langues",
    skills: "Compétences",
    interests: "Intérêts",
    references: "Références",
    projects: "Projets",
    position1_title: "Développeur Full Stack",
    position2_title: "Développeur Front End",
    position3_title: "Développeur Stagiaire",
    position1_phrase1: "Développé des fonctionnalités pour les sites: smiyli.com et partnercorner.com.",
    position1_phrase2: "Amélioré les opérations numérique et le flux de travail de l'entreprise.",
    position1_phrase3: "Maintenu et mis à jour des applications web suivant l'évolution du marché.",
    position1_phrase4: "Collaboré avec l'équipes pour mettre en œuvre de nouvaux  fonctionnalités.",
    position1_phrase5: "Amélioré l'expérience utilisateur globale et l'efficacité des sites web ciblés.",
    position1_phrase6: "Compétences requises : PHP, Laravel, UML, SQL, Javascript.",
    position2_phrase1: "Conçu des sites web dynamiques pour divers clients, y compris skipcash.com.",
    position2_phrase2: "Démontré expertise dans la conception d'expériences web dynamiques.",
    position2_phrase3: "Acquis une vision pour la création de sites web réactifs et attrayants.",
    position2_phrase4: "Compétences requises : Typescript, TailwindCSS, ReactJS.",
    position3_phrase1: "Créé des sites web statiques pour les petites et moyennes entreprises.",
    position3_phrase2: "Passé à des technologies avancées pour répondre aux demandes des clients.",
    position3_phrase3: "Développé ma compréhension des besoins spécifiques des clients.",
    position3_phrase4: "Compétences requises : HTML, CSS, Bootstrap, JavaScript, Laravel.",
    education2_header: "Université Cadi Ayyad",
    education2_title: "Faculté des sciences et technologies",
    education2_description: "Pendant mes études à la Faculté des sciences et de la technologie, j'ai appris une compréhension fondamentale des principes généraux de programmation ainsi que des bases du langage C, préparant ainsi le terrain pour mon parcours en informatique et en développement logiciel.",
  education1_title: "Programme Développeur",
  education1_description: "Reconnaissant la valeur de l'apprentissage continu et malgré mon expérience professionnelle antérieure, je me suis inscrit au programme structuréde pour perfectionner mes compétences et échanger avec des mentors seniors, renforçant ainsi ma base en ingénierie logicielle.",
  english: "Englais: IELTS C1",
  french: "Français: Courant",
  german: "Allemand: TELC C1",
  arabic: "Arabe: Natale",
  recommendation1: "Développeur Fullstack & Formateur Référent",
  recommendation2: "YouCode UM6P",
  recommendation3: "Yassir est un développeur exceptionnel, et c'était un plaisir de l'avoir comme étudiant dans ma classe. J'ai eu l'opportunité d'observer sa progression remarquable. Yassir maîtrise TypeScript et PHP avec efficacité, des compétences clés en développement moderne. Son enthousiasme et sa capacité proactive à résoudre les problèmes le distinguent. Je suis sûr que Yassir continuera à exceller et apportera beaucoup à chaque équipe.",
  recommendation4: "Plus de références disponibles sur demande.",
  project_title1: "Développé une agence de développement web open-source",
  project_title2: "Créé un Framework PHP et ORM pour des webapps plus optimisées",
  project_title3: "Développement d'une plateforme Wiki moderne et collaborative",
  project_title4: "Développement d'une plateforme robuste de gestion de secrets adaptée aux développeurs",
  project1_skills: "Compétences: TailwindCSS, Typescript, ReactJS, NextJS, Prisma, SQL",
  project2_skills: "Compétences: PHP, SQL, motifs de conception/architecturaux, conception ORM",
  project3_skills: "Compétences: TailwindCSS, Typescript, ReactJS, PHP, SimpleKit, UML, SQL",
  project4_skills: "Compétences: Laravel, React, Typescript, Inertia.js, TailwindCSS",
  position4_title: "Développeur Logiciel",
  position4_phrase1: "Réalisé les tâches et contribué à l'amélioration du framework interne.",
  position4_phrase2: "Collaboré avec les collègues pour atteindre les objectifs du projet.",
  position4_phrase3: "Amélioré l'expérience utilisateur et l'efficacité de la solution principale.",
  position4_phrase4: "Compétences requises: JavaScript avancé, PHP, SQL, Framework interne.",
  position4_date: "Aug 2024 - Présent",
  project5_skills: "Statut : Continuement mis à jour / En développement",
  project6_skills: "Source Code: Privé / Propriatary"
  },
  DE: {
    job_title: "Full Stack Entwickler",
    about_me: "Full Stack Entwickler mit guten kenntnissen in TypeScript und PHP. Erfahrung in der Gestaltung skalierbarer und hochwertiger Lösungen. Teamplayer, stets auf dem neuesten Stand in aufkommenden Technologien. Bereit, komplexe Herausforderungen tatkräftig anzugehen und nachhaltige Ergebnisse zu erzielen.",
    experience: "Erfahrung",
    education: "Ausbildung",
    languages: "Sprachen",
    skills: "Fähigkeiten",
    interests: "Interessen",
    references: "Referenzen",
    projects: "Projekte",
    position1_title: "Full Stack Entwickler",
    position2_title: "Front End Entwickler",
    position3_title: "Entwickler Praktikant",
    position1_phrase1: "Entwickelte Funktionen für Websites wie smiyli.com und partnercorner.com.",
    position1_phrase2: "Optimiert die digitalen Abläufe und den Workflow des Unternehmens.",
    position1_phrase3: "Wartete und aktualisierte Webanwendungen gemäß den Marktentwicklungen.",
    position1_phrase4: "Kollaborierte mit dem Team, um neue Funktionen umzusetzen.",
    position1_phrase5: "Optimierte die Nutzererfahrung und Effizienz der ausgewählten Websites.",
    position1_phrase6: "Erforderliche Fähigkeiten: PHP, Laravel, UML, SQL, Javascript.",
    position2_phrase1: "Erstellte dynamische Websites für verschiedene Kunden wie skipcash.com.",
    position2_phrase2: "Zeigte Kompetenz in der Gestaltung effizienter Web-Erlebnisse.",
    position2_phrase3: "Erhielt Einblicke in die Entwicklung ansprechender und responsiver Websites.",
    position2_phrase4: "Erforderliche Fähigkeiten: Typescript, TailwindCSS, ReactJS.",
    position3_phrase1: "Erstellte statische Websites für kleine und mittelständische Unternehmen.",
    position3_phrase2: "Erlernte moderne Technologien zur Erfüllung spezifischer Kundenbedürfnisse.",
    position3_phrase3: "Vertiefte mein Kundenverständnis um passende Lösungen zu entwickeln.",
    position3_phrase4: "Erforderliche Fähigkeiten: HTML, CSS, Bootstrap, JavaScript, Laravel.",
    education1_title: "Entwickler Programm",
    education1_description: "Wegen meiner Wertschätzung für kontinuierliches Lernen und trotz meiner vorherigen Berufserfahrung habe ich mich für das Programm eingeschrieben. Ziel: Fähigkeiten schärfen, strukturierten Lehrplan nutzen und von erfahrenen Mentoren lernen. Eine Erfahrung, die meine Grundlagen in der Softwareentwicklung gestärkt hat.",
    education2_header: "Universität Cadi Ayyad.",
    education2_title: "Fakultät für Naturwissenschaften und Technologien",
    education2_description: "Während meines Studiums an der Fakultät für Naturwissenschaften und Technologie habe ich ein grundlegendes Verständnis der Programmierung und die C-Programmierung erlernt, was meinen Weg in die Informatik und Anwendungsentwicklung geebnet hat.",
    english: "Englisch: IELTS C1",
    french: "Französisch: Fließend",
    german: "Deutsch: TELC C1",
    arabic: "Arabisch: Muttersprache",
    recommendation1: "Aymane Benhima, Fullstack-Entwickler & Referententrainer",
    recommendation2: "YouCode UM6P",
    recommendation3: "Yassir ist ein hervorragender Entwickler, und es war eine Freude, ihn in meinem Unterricht zu haben. Ich habe seine bemerkenswerte Wachstum und Entwicklung beobachtet. Yassir zeichnet sich durch sauberen und effektiven TypeScript- und PHP-Code aus. Seine Begeisterung und proaktive Problemlösungsfähigkeit heben ihn hervor. Ich bin sicher, dass Yassir weiterhin jedem Team herausragende Leistungen erbringen wird.",
    recommendation4: "Weitere Referenzen auf Anfrage verfügbar.",
    project_title1: "Entwickelt eine Open-Source Webentwicklungsagentur",
    project_title2: "Erstellt ein PHP-Framework und ORM zum Entwicklung optimierter webapps",
    project_title3: "Entwickelte eine moderne und kollaborative Wiki-Plattform",
    project_title4: "Entwickelte einer Geheimnisverwaltung-Plattform, die auf Entwickler zugeschnitten ist",
    project1_skills: "Fähigkeiten: TailwindCSS, Typescript, ReactJS, NextJS, Prisma, SQL",
    project2_skills: "Fähigkeiten: PHP, SQL, Design/Architektur-Muster, ORM-Design",
    project3_skills: "Fähigkeiten: TailwindCSS, Typescript, ReactJS, PHP, SimpleKit, UML, SQL",
    project4_skills: "Fähigkeiten: Laravel, React, Typescript, Inertia.js, TailwindCSS",
    position4_title: "Softwareentwickler",
    position4_phrase1: "Erledigte Aufgaben und trug zur Verbesserung des internen Frameworks bei.",
    position4_phrase2: "Zusammengearbeitet mit Kollegen, um Projektziele zu erreichen.",
    position4_phrase3: "Verbesserte die Benutzererfahrung und Effizienz der Hauptlösung",
    position4_phrase4: "Erforderliche Fähigkeiten: Solides JavaScript, PHP, SQL, internes Framework.",
    position4_date: "Aug 2024 - Jetzt",
    project5_skills: "Status: Kontinuierlich aktualisiert / In Entwicklung",
    project6_skills: "Source Code: Privat / Propriatary"
  }
};

const languagesArray: Array<Language> = ["EN", "DE", "FR"];

let languageIndex: number = 1;

const handleTranslation = (language: Language): void => {
  const toTranslate = document.querySelectorAll("[data-translate]") as NodeListOf<HTMLElement>;
  toTranslate.forEach((translate: HTMLElement) => {
    const key = translate.getAttribute("data-translate") as keyof Translations;
    const translation = translations[language] && translations[language][key];
    translation !== undefined ? translate.innerText = translation : console.warn(`Translation not found for key '${key}' in language '${language}'`);
  });
  languageIndex = languageIndex === 2 ? 0 : ++languageIndex;
};

document.addEventListener("DOMContentLoaded", () => {
    const languageToggler = document.querySelector(".languageToggler") as HTMLDivElement;
    languageToggler && languageToggler.addEventListener("click", () => handleTranslation(languagesArray[languageIndex]))
}
);
