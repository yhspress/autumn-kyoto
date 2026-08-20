const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const open = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const selectedPlan = new URLSearchParams(window.location.search).get("plan");
const validPlans = new Set(["day", "1n2d", "2n3d", "3n4d"]);
if (document.documentElement.lang === "en" && validPlans.has(selectedPlan)) {
  document.querySelectorAll('a[href^="index-en.html"]').forEach(link => {
    link.href = `index-en.html?plan=${encodeURIComponent(selectedPlan)}#book`;
  });
}
