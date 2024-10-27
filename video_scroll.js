const section = document.querySelector(".section__video");
const vid = section.querySelector("video");

vid.pause();

const scroll = () => {
  const distance = window.scrollY - section.offsetTop;
  const total = section.clientHeight - window.innerHeight;
  // const total = section.clientHeight;

  let percentage = distance / total;
  percentage = Math.max(0, percentage);
  percentage = Math.min(percentage, 1);

  if (vid.duration > 0) {
    vid.currentTime = vid.duration * percentage;
  }
};

scroll();
window.addEventListener("scroll", scroll);
