# haydenho08.github.io

Personal portfolio for Hayden Ho, Software Engineering at York University.
Plain HTML, CSS and JavaScript. No build step, no frameworks.

## Files

| File | What it is |
| --- | --- |
| `data.js` | **All the content.** Edit this to update the site. |
| `index.html` | Page structure. Rarely needs changes. |
| `styles.css` | Design: colours, fonts, layout, light and dark themes. |
| `script.js` | Turns `data.js` into the page and runs the light/dark toggle. |
| `assets/icons/` | Skill logos (SVG). |
| `assets/projects/` | Put project screenshots here. |
| `favicon.svg` | Browser tab icon. |

## Common edits

**Add or update a project:** open `data.js`, copy one `{ ... }` block inside `projects`, paste it, and change the text. Add a screenshot to `assets/projects/` and set `image` to its path. Set `github` to the repo link. When the project has a real number, put it in `result`.

**Add your resume:** put the PDF in this folder as `resume.pdf`, then set `resume: "resume.pdf"` in `data.js`. The Resume links appear automatically.

**Add a skill:** add a line to `skills`. The `icon` is a file name in `assets/icons/` (without `.svg`), so add the logo's SVG file there too. Logos come from [Devicon](https://devicon.dev) and [Simple Icons](https://simpleicons.org).

**Hide anything:** set the field to `""`.

## Preview on your computer

Open `index.html` in a browser. That's it.

## Deploy (GitHub Pages)

1. Create a public repo named exactly `haydenho08.github.io`.
2. Upload every file and folder here to the repo's main branch. Keep the folder structure: the logos must stay in `assets/icons/`.
3. In the repo, go to **Settings → Pages** and make sure the source is **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. The site goes live at https://haydenho08.github.io within a minute or two. Every later commit redeploys it automatically.
