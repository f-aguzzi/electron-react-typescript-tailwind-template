# Electron - React - Typescript

This is a ready-to-use template for coding `React` applications within
`Electron`, with full `Typescript` support.

It uses `Yarn` as a package manager.

## Structure

- the `src/reactIndex.tsx` file replicates the `index.js` file found in the
  typical `React` project
	- it is referenced in `src/renderer.ts`, to pass it to the `Electron`
	  renderer process
- `src/App.tsx` contains the main application functional component, as usual

You can edit the title of the application in `src/index.html`.
