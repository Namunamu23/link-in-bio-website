import { content } from "../data/content.js";

/* -----------------------------------------------------------------------------
   Small helper: grab an element or throw. Keeps failures loud during editing.
   ----------------------------------------------------------------------------- */
const $ = (selector, root = document) => {
  const el = root.querySelector(selector);
  if (!el) throw new Error(`Missing element: ${selector}`);
  return el;
};

/* -----------------------------------------------------------------------------
   Hydrate the page from data/content.js
   ----------------------------------------------------------------------------- */
document.title = `${content.name} — ${content.role}`;
document.documentElement.lang = content.meta.locale || "en";

$("[data-name]").textContent = content.name;
$("[data-role]").textContent = content.role;

const linkedin = $("[data-linkedin]");
linkedin.href = content.socials.linkedin;

const portfolioBtn = $("[data-portfolio]");
portfolioBtn.href = content.portfolio.href;
$(".big-btn__label", portfolioBtn).textContent = content.portfolio.label;

const contactBtn = $("[data-contact]");
$(".big-btn__label", contactBtn).textContent = content.contact.label;

/* Assemble the mailto only at click time so the raw address is not in the DOM. */
contactBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const { user, domain } = content.contact.email;
  window.location.href = `mailto:${user}@${domain}`;
});

/* Populate the Instagram list inside the modal. */
const igList = $("[data-ig-list]");
for (const account of content.socials.instagram) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.className = "modal__row";
  a.href = account.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  const avatar = document.createElement("span");
  avatar.className = "modal__avatar";
  avatar.setAttribute("aria-hidden", "true");
  // Account initial is the fallback; the profile image (if set) loads over it.
  const initial =
    (account.handle || account.label || "").replace(/[^a-z0-9]/gi, "").charAt(0).toUpperCase() || "IG";
  if (account.avatar) {
    const img = document.createElement("img");
    img.src = account.avatar;
    img.alt = "";
    img.width = 44;
    img.height = 44;
    img.loading = "lazy";
    img.decoding = "async";
    // Missing file -> keep the initial instead of a broken image.
    img.addEventListener("error", () => { avatar.textContent = initial; });
    avatar.append(img);
  } else {
    avatar.textContent = initial;
  }

  const label = document.createElement("span");
  label.className = "modal__label";
  const name = document.createElement("span");
  name.textContent = account.label;
  const handle = document.createElement("span");
  handle.className = "modal__handle";
  handle.textContent = account.handle || "";
  label.append(name, handle);

  a.append(avatar, label);
  li.append(a);
  igList.append(li);
}

/* Optional commissions status. */
if (content.commissionsOpen) {
  const el = $("[data-commissions]");
  el.hidden = false;
}

/* -----------------------------------------------------------------------------
   Modal — open / close, focus trap, ESC and backdrop dismiss
   ----------------------------------------------------------------------------- */
const modal = $("[data-modal]");
const openIgBtn = $("[data-open-ig]");
const closeBtn = $("[data-close-modal]");
let lastFocused = null;

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const getFocusable = () => Array.from(modal.querySelectorAll(focusableSelector));

const openModal = () => {
  lastFocused = document.activeElement;
  modal.hidden = false;
  // Two RAFs so the transition kicks in reliably after the hidden -> visible flip.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      modal.dataset.open = "true";
      const [first] = getFocusable();
      if (first) first.focus();
    });
  });
  document.addEventListener("keydown", onKeydown);
};

const closeModal = () => {
  if (modal.dataset.open !== "true") return;
  modal.dataset.open = "false";
  document.removeEventListener("keydown", onKeydown);
  const done = () => {
    modal.hidden = true;
    modal.removeEventListener("transitionend", done);
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  };
  modal.addEventListener("transitionend", done, { once: true });
  // Fallback in case transitionend never fires (e.g. reduced motion collapses it).
  setTimeout(done, 260);
};

function onKeydown(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    closeModal();
    return;
  }
  if (event.key !== "Tab") return;
  const focusable = getFocusable();
  if (focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

openIgBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
