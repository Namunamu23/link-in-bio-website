// Single source of truth for site content. Edit this file to update the site.
// Placeholders marked "REPLACE" or "TODO" must be filled in before publishing.

export const content = {
  // Display name — she goes by "Ani" (official name Ana Khidasheli).
  name: "Ani Khidasheli",
  role: "2D Animator",

  socials: {
    // One row is rendered per entry below. Two accounts => the modal shows the
    // two-row chooser from the sketch. Remove one to collapse back to a single row.
    instagram: [
      { label: "Main Account", handle: "@bridgeli__", url: "https://www.instagram.com/bridgeli__" },
      { label: "Art Account",  handle: "@anykk_o",    url: "https://www.instagram.com/anykk_o" }
    ],
    linkedin: "https://www.linkedin.com/in/ana-khidasheli-0a2a7337a/"
  },

  portfolio: {
    label: "Portfolio",
    // The real PDF now lives in /portfolio. Change this if you rename it or
    // move the portfolio to an external site (ArtStation, Behance, etc.).
    href: "portfolio/Portfolio_Ana.pdf"
  },

  contact: {
    label: "Contact",
    // Split into parts so the raw address is never rendered in HTML.
    // JS assembles the mailto: link at click time.
    email: {
      user: "khidasheliani80",
      domain: "gmail.com"
    }
  },

  // Optional subtle status line under the buttons. Set to true to show.
  commissionsOpen: false,

  meta: {
    description: "Ani Khidasheli — 2D animator and illustrator.",
    // TODO set to the real deployed URL once the domain is connected (Stage 10).
    canonical: "https://REPLACE.example.com/",
    ogImage: "assets/img/og-cover.png",
    themeColor: "#C99BCB",
    locale: "en"
  }
};
