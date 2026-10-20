# Airframe Academy

An English-language, interactive aeromodelling learning website covering model-aircraft fundamentals, design, construction, radio systems, flight practice, safety and project work. It is a static site made with HTML, CSS and vanilla JavaScript; no build tool, framework, account or server-side service is required.

## Learning features

- 14 sequenced course modules, with detailed lesson sections and chapter-end knowledge checks.
- A cross-course quiz centre with chapter filtering, randomized 20- and 50-question runs, a full-bank option, score breakdowns and answer explanations.
- A practical workshop module with safe ground-based experiments, geometry and balance exercises, simulator practice and test-card planning.
- Original inline diagrams for the workshop, wing planform, control surfaces, radio/power paths and field briefing.
- A design lab with calculators and unit references, plus a field guide, source library and searchable glossary.
- Lesson completion, bookmarks, checklists, quiz best scores and five color themes stored in the current browser.
- Responsive layouts, keyboard navigation and reduced-motion support.

Course material is an educational aid. It is not a certified aircraft design, flight authorization, operating checklist or replacement for the exact aircraft/component manuals, current local rules, an approved flying site or in-person instruction. Remove the propeller for powered-system setup and follow component manufacturers' safety instructions.

## Preview locally

1. Download or clone this project.
2. Open a terminal in the project folder.
3. Start a local static web server:

   ```powershell
   py -m http.server 8000
   ```

   If the Python launcher is unavailable, use another static web server or open `index.html` directly in a modern browser.
4. Visit [http://localhost:8000](http://localhost:8000).
5. Press `Ctrl+C` in the terminal to stop the server.

The local server is recommended because browser security settings can restrict local-file loading. There are no package-install or build steps.

## Publish with GitHub Pages

1. Create a GitHub repository and add the project files to its root.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch containing the site (commonly `main`) and the `/(root)` folder, then save.
5. Wait for the Pages deployment to finish. GitHub will show the published site URL in the Pages settings.

All site resources use relative paths, so the static site can be served from a repository subpath. If you already have a local Git repository, keep using its existing remote and branch. For a new local repository, the usual initial setup is:

```powershell
git init
git add .
git commit -m "Add Airframe Academy website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your repository's URL. Do not run `git init` inside an existing repository.

## Project structure

```text
.
├── index.html                 # Site shell, navigation and script loading
├── styles.css                 # Layout, responsive rules and theme palettes
├── app.js                     # Routing, rendering, interactions and local progress
├── data/
│   ├── curriculum.js          # Course modules and core lesson content
│   ├── deep-dives.js          # Expanded lesson sections
│   ├── quiz-bank.js           # Additional chapter question bank
│   └── glossary.js            # Searchable glossary
├── s1223.png                  # Airfoil reference image used by the course
└── *.pdf                      # Source/reference documents, if retained locally
```

## Editing course content

- Add or revise a module in `data/curriculum.js`. Give it a unique `id`, descriptive `title`, `shortTitle`, outcomes, sections and a quiz.
- Put longer supplementary material in `data/deep-dives.js`, keyed by the module ID.
- Add further chapter questions in `data/quiz-bank.js`, keyed by the same module ID.
- Keep each module's combined quiz at the intended question count so lesson checks and the cross-course bank remain consistent.
- Lesson visuals use named keys handled by `renderVisual()` in `app.js`; content should reference an existing visual key rather than embedding raw SVG.
- Use relative file paths for images and other resources so the site works on GitHub Pages.

## Source and redistribution note

The course was developed from the original aeromodelling learning material and reference documents available with this project. Review the accuracy, attribution and redistribution rights for every third-party image, manual and PDF before publishing it in a public repository. In particular, do not commit or redistribute a manual or handbook unless you have permission; link to an authorized source or omit the document when rights are uncertain. The full-size Cessna handbook is used only as an example of manual organization, not as RC aircraft operating data.

## Browser storage

The site stores progress, bookmarks, checklists, theme selection and best quiz scores in `localStorage` on the visitor's device. It does not provide account-based syncing. Clearing the browser's site data removes this saved state.
