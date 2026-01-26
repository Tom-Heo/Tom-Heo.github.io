const initNavigation = () => {
  const path = window.location.pathname;
  const current = path.split("/").pop() || "index.html";

  document.querySelectorAll(".site-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });
};

const initCompareSliders = () => {
  document.querySelectorAll("[data-compare]").forEach((component) => {
    const range = component.querySelector("[data-compare-range]");
    const before = component.querySelector(".compare-before");
    if (!range || !before) {
      return;
    }

    const update = () => {
      before.style.width = `${range.value}%`;
    };

    range.addEventListener("input", update);
    range.addEventListener("change", update);
    update();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  if (window.BakeI18n && typeof window.BakeI18n.initI18n === "function") {
    window.BakeI18n.initI18n();
  }
  initNavigation();
  initCompareSliders();
});
