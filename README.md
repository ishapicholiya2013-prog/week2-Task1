# Responsive company website

**Isha | WeIntern Week 2**

Northstar Studio is a four-page website for a fictional design studio. The contact form checks the details you enter and gives feedback on the page.

## Run

1. Install Node.js 24 LTS or newer. Confirm with `node --version`.
2. Open a terminal in this folder.
3. Run `node server.cjs` (or double-click START_WINDOWS.cmd on Windows).
4. Open http://localhost:3001. Stop with Ctrl+C.

No dependency installation is needed. All frontend assets are local and the project works offline. If the port is busy, set PORT to another port before starting. Windows PowerShell example: `$env:PORT=3100`, then `node server.cjs`.

## Files

- public/: HTML, CSS and browser JavaScript
- server.cjs: local HTTP server and API where applicable
- docs/: design, endpoint or security notes
- evidence/: screenshots and recorded browser demonstration
- WALKTHROUGH.md: explanation for the review session

## Validation

See evidence/TEST_RESULTS.md for the checks actually performed. Demonstrations use sample data only.

## Publish

Upload the contents of public/ to a static host. For GitHub Pages: create a repository, put the public files at its root, then choose Settings → Pages → Deploy from a branch → main / root. The files use relative links and work under a repository path. Copy the actual Pages address here after deployment. A public live demo has not been published in this archive.

## Repository

Create a repository and upload this folder. A GitHub account and a real repository URL are required; none is invented here.
