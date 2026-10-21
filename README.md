# Naveen Rajapaksha · Portfolio

A one-page portfolio site. It's plain HTML, CSS and JavaScript, so there's no build step
and nothing to install. It's ready to host free on **GitHub Pages** at
**https://shashi26-alt.github.io**.

```
index.html             all the page content (this is the file you edit most)
assets/css/style.css   colours, fonts, layout
assets/js/main.js      mobile menu, typing effect, counters, contact form, CV buttons
assets/favicon.svg     browser-tab icon (orange shield)
assets/img/profile.jpg your photo
assets/resume.pdf      your public CV (see below)
.nojekyll              tells GitHub Pages to serve the files as they are (leave it in)
```

To preview, double-click `index.html` and it opens in your browser.

## Page layout

The site uses a dark theme with an orange accent.

1. **Hero:** your name, a typing line that cycles through your focus areas, your photo and a
   "6 months as Cyber Security Intern" badge
2. **About:** summary, signature and a quick-facts grid
3. **What I do:** four areas of expertise
4. **Skills:** tech logos plus grouped skill tags (Networking, Security & SOC, Cloud & Programming)
5. **Projects:** six network and security projects, each with its own diagram
6. **Stats strip:** 6 months internship · 6 projects · 3.48 GPA · 1,000 students represented
7. **Creative:** video editing, social media design and the Travixa website
8. **Experience:** CDRD, NeuraTech and freelance work, plus Education, Certifications and Leadership
9. **Contact:** contact details and a message form. The form opens the visitor's email app with
   the message filled in, so no server is needed.

---

## Your CV (read this first)

`assets/resume.pdf` is a **public copy** of your CV. It has the same content as
`Naveen_Rajapaksha_CV.pdf`, but without your NIC number, date of birth, civil status, home
address, phone number and referees' contact details. It also adds your portfolio link.
The **Download CV** buttons only appear when this file exists.

⚠️ **Never upload your full CV here.** Anything on GitHub Pages is public and gets indexed
by Google.

To update the public CV:

1. Edit `Desktop\CV\Naveen_Rajapaksha_CV_public.html` in any text editor.
2. Open it in Edge, press **Ctrl+P**, choose **Save as PDF**, leave *Margins* on **Default** and
   turn off *Headers and footers* (under *More settings*). The page sets its own A4 margins.
3. Save it as `assets\resume.pdf` in this folder, replacing the old one, and upload it to GitHub.

## Adding your creative work

The video, design and Travixa cards each have a link hidden inside a comment
(`<!-- ... -->`). To show one, paste your link (YouTube, Google Drive, Behance, Instagram, or the
live Travixa URL) in place of `https://...` and delete the `<!--` and `-->` lines around it.

There's also an optional **image gallery** for your post designs. In `index.html`, search for
`OPTIONAL WORK GALLERY` and follow the three steps written there.

## Changing your photo

The hero uses `assets/img/profile-cutout.webp`, your photo with the background removed, cropped
from head to just below the hands. `assets/img/profile.jpg` is the original, used for link
previews on LinkedIn and WhatsApp.

To use a different photo, remove its background (free tools: remove.bg, Canva, or *Remove
background* in Windows Paint), crop it from head to waist, and save it as a PNG or WebP with a
transparent background. Replace `profile-cutout.webp` with it, keeping the same name or updating
`src` in `index.html`. Also update the `width` and `height` on the `<img>` to the new image's size.

## Adding a project

In `index.html`, copy a whole `<article class="proj-card">` block in the Projects section and
change the text. To use a screenshot instead of a diagram, replace everything inside
`<div class="proj-media">` with `<img src="assets/img/your-image.jpg" alt="...">`.

## Adding a tech logo

In the Skills section, copy a `<li>` in the logo grid and change the name at the end of the
URL (for example `cisco.svg` → `wireshark.svg`). Logo names come from
<https://simpleicons.org>. Tools without a logo there (like Wazuh or Suricata) belong in the
orange-highlighted skill tags.

## Changing the colour

In `assets/css/style.css`, change `--accent` (and the lighter `--accent-2`) near the top.

---

## Publish it free on GitHub Pages

You don't need the command line. Everything below happens on github.com.

1. Sign in to <https://github.com> as **shashi26-alt**.
2. Click **+** (top right) → **New repository**.
3. Name it **exactly** `shashi26-alt.github.io`. Set it to **Public**, then click
   **Create repository**.
4. On the empty repo page, click **uploading an existing file**.
5. Open this `portfolio` folder, select **everything inside it** (`index.html`, `assets`,
   `.nojekyll`, `README.md`) and drag it onto the page. Upload the contents, not the
   `portfolio` folder itself.
6. Click **Commit changes**.
7. Go to **Settings → Pages**. Under *Build and deployment*, set Source to
   **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then **Save**.
8. Wait 1–2 minutes, then open **https://shashi26-alt.github.io**. 🎉

### Updating it later

- **Small text change:** open `index.html` on github.com, click the ✏️ pencil, edit, then
  **Commit changes**. The site updates in about a minute.
- **New files (CV, photos, samples):** in the repo, go to **Add file → Upload files**.
  Uploading a file with the same name replaces the old one.
- **Lots of changes:** install [GitHub Desktop](https://desktop.github.com) (free). Edit the
  files on your computer, then click *Commit* and *Push*.

### After it's live

- Add the link to your **LinkedIn** (Contact info → Website, and the *Featured* section).
- Put it in your CV header next to your GitHub link.
- Pin the repo on your GitHub profile.
