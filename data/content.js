// Single source of truth for site content. Edit this file to update the site.
// Placeholders marked "REPLACE" or "TODO" must be filled in before publishing.

export const content = {
  // Display name — she goes by "Ani" (official name Ana Khidasheli).
  name: "ANIKO",
  role: "2D Animator",

  socials: {
    // One row is rendered per entry below. Two accounts => the modal shows the
    // two-row chooser from the sketch. Remove one to collapse back to a single row.
    instagram: [
      // avatar: a square profile image under assets/img/. If the file is missing the
      // row falls back to the account's initial, so the site never shows a broken image.
      { label: "Main Account", handle: "@bridgeli__", url: "https://www.instagram.com/bridgeli__", avatar: "assets/img/ig-bridgeli.png" },
      { label: "Art Account",  handle: "@anik__o",    url: "https://www.instagram.com/anik__o",    avatar: "assets/img/ig-anykk.png" }
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
    description: "Ani Khidasheli - 2D Animator / Multidisciplinary Artist.",
    canonical: "https://aniko.space",
    ogImage: "assets/img/og-cover.png?v=3",
    themeColor: "#E3A3BD",
    locale: "en"
  }
};
