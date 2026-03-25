// ========================= MOBILE BURGER MENU =========================
// ========================= DOM READY =========================
document.addEventListener("DOMContentLoaded", () => {
  // ========================= BURGER MENU =========================
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener("click", () => {
      burgerBtn.classList.toggle("active");
      mobileMenu.classList.toggle("open");

      const isExpanded = burgerBtn.classList.contains("active");
      burgerBtn.setAttribute("aria-expanded", isExpanded);
    });
  }

  // ========================= ACTIVE NAV LINK =========================
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const allNavLinks = document.querySelectorAll(".desktop-nav a, .mobile-menu a.mobile-link");

  allNavLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
});

// ========================= CEnT OVERVIEW PREMIUM TABS =========================
document.addEventListener("DOMContentLoaded", () => {
  const centTabs = document.querySelectorAll(".cent-tab-btn");
  const centPanels = document.querySelectorAll(".cent-panel-card");

  if (!centTabs.length || !centPanels.length) return;

  centTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-cent-tab");

      centTabs.forEach((item) => item.classList.remove("active"));
      centPanels.forEach((panel) => panel.classList.remove("active"));

      tab.classList.add("active");

      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });
});

// ========================= EXAM STRUCTURE TABS =========================
document.addEventListener("DOMContentLoaded", () => {
  const examTabs = document.querySelectorAll(".exam-topic-card");
  const examPanels = document.querySelectorAll(".exam-detail-card");

  if (!examTabs.length || !examPanels.length) return;

  examTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-exam-tab");

      examTabs.forEach((item) => item.classList.remove("active"));
      examPanels.forEach((panel) => panel.classList.remove("active"));

      tab.classList.add("active");

      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });
});