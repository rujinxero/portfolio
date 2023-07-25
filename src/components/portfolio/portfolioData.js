import Image1 from "../../assets/img/portfolio/onevaPublic.jpg";
import Image2 from "../../assets/img/portfolio/onevameonevapro.jpg";
import Image3 from "../../assets/img/portfolio/goldengaming.jpg";
import Image4 from "../../assets/img/portfolio/guitarplayer.jpg";
import Image5 from "../../assets/img/portfolio/bestwestern.jpg";
import Image6 from "../../assets/img/portfolio/gohawaii.jpg";
// import Image7 from "../../assets/img/portfolio/project-7.jpg";
// import Image8 from "../../assets/img/portfolio/project-8.jpg";
// import Image9 from "../../assets/img/portfolio/project-9.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "oneva website",
    image: Image1,
    tag: ["oneva", "website"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Oneva Inc",
        language: "HTML, CSS, SASS, Javascript, Angular, Bootstrap",
        preview: "www.oneva.com",
        link: "https://www.oneva.com/",
      },
    ],
  },
  {
    id: 2,
    type: "onevame / onevapro apps",
    image: Image2,
    tag: ["oneva", "app"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "App",
        client: "Oneva Inc",
        language: "HTML, CSS, SASS, Javascript, ES6, Typescript, PHP, Drupal, Ionic, Angular",
        preview: "www.oneva.com",
        link: "https://www.oneva.com",
      },
    ],
  },
  {
    id: 3,
    type: "golden gaming website",
    image: Image3,
    tag: ["golden gaming", "website", "decision counsel"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Decision Counsel",
        language: "HTML, CSS, Javascript, PHP, Drupal",
        preview: "www.goldenent.com",
        link: "https://www.goldenent.com",
      },
    ],
  },
  {
    id: 4,
    type: "guitar player website",
    image: Image4,
    tag: ["guitar player", "website", "decision counsel", "template"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website Template",
        client: "Decision Counsel",
        language: "HTML, CSS, Javascript",
        preview: "www.guitarplayer.com",
        link: "https://www.guitarplayer.com",
      },
    ],
  },
  {
    id: 5,
    type: "best western website",
    image: Image5,
    tag: ["best western", "website", "education", "travel agent", "decision counsel"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Travel Agent Education Website",
        client: "Decision Counsel",
        language: "HTML, CSS, PHP, Drupal",
        preview: "www.bestwestern.com",
        link: "https://www.bestwestern.com",
      },
    ],
  },
  {
    id: 6,
    type: "gohawaii website",
    image: Image6,
    tag: ["gohawaii", "website", "decision counsel", "education", "travel agent"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Travel Agent Education Website",
        client: "Decision Counsel",
        language: "HTML, CSS, PHP, Drupal",
        preview: "www.gohawaii.com",
        link: "https://www.gohawaii.com",
      },
    ],
  },
  // {
  //   id: 7,
  //   type: "facebook project",
  //   image: Image7,
  //   tag: ["logo"],
  //   delayAnimation: "0",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Facebook",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.facebook.com",
  //       link: "https://www.facebook.com/ibthemes",
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   type: "dribble project",
  //   image: Image8,
  //   tag: ["graphic design"],
  //   delayAnimation: "100",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Dribbble",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.dribbble.com",
  //       link: "https://dribbble.com/ib-themes",
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   type: "behence project",
  //   image: Image9,
  //   tag: ["graphic design", "mockup"],
  //   delayAnimation: "200",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Behance",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.behance.com",
  //       link: "https://www.behance.net/ib-themes",
  //     },
  //   ],
  // },
];

export default PortfolioData;
