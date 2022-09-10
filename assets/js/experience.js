AOS.init();


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "M.C Jarvis",
    cardImage: "assets/images/experience-page/1.jpeg",
    description:
      "An AI Assistant inspired by Tony Stark's Jarvis using machine learning and AI",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project M.C Jarvis",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Cataclysm: Dark Days Ahead",
    cardImage: "assets/images/experience-page/game.jpeg",
    description:
      "Cataclysm: Dark Days Ahead is a turn-based survival game set in a post-apocalyptic world.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "GMTK Game Jam",
    subtitle: "Participant",
    image: "assets/images/experience-page/gamemakerjam.jpeg",
    desp: "The GMTK Game Jam is an annual game making marathon, where individuals and teams try to make a game that fits a theme, in just 48 hours.",
  },
  {
    title: "Brackeys Game Jam",
    subtitle: "Participant",
    image: "assets/images/experience-page/brakeys.png",
    desp: "The Brackeys Game Jam is an event wherendividuals and teams try to make a game that fits a theme, in just a week.",
  },
  {
    title: "Game Off 2021",
    subtitle: "Participant",
    image: "assets/images/experience-page/wafflehacks.jpeg",
    desp: "Game Off is an annual game jam, where participants spend the month of November creating games based on a secret theme.",
  },
  {
    title: "Community Game Jam",
    subtitle: "Participant",
    image: "assets/images/experience-page/elevate.png",
    desp: "The Brackeys Game Jam is an event wherendividuals and teams try to make a game that fits a theme, in just a week.",
  },
  {
    title: "Wowie Jam 3.0",
    subtitle: "Participant",
    image: "assets/images/experience-page/pitchteen.jpeg",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  },
  {
    title: "Blackthornprod GAME JAM #3",
    subtitle: "Participant",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  },
  {
    title: "Mix and Game Jam (2020)",
    subtitle: "Participant",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  },
  {
    title: "2022 Epic MegaJam",
    subtitle: "Participant",
    image: "assets/images/experience-page/atlas.png",
    desp: "Work alone or with a team (up to 5 members total) to make the most incredible project in Unreal Engine based on the given theme and submit before the deadline!",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
