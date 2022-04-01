# Electron - React - Typescript - Tailwind

This is a ready-to-use template for coding `React` applications within
`Electron`, with full `Typescript` support.

The styling system is based on `TailwindCSS`.

It uses `Yarn` as a package manager.

## Structure

- the `src/reactIndex.tsx` file replicates the `index.js` file found in the
  typical `React` project
	- it is referenced in `src/renderer.ts`, to pass it to the `Electron`
	  renderer process
- `src/App.tsx` contains the main application functional component, as usual
- `src/index.css` contains the `Tailwind` rules
- more `Tailwind properties can be found in:
	- `tailwind.config.js`
	- `postcss.config.js`
		- `PostCSS` is also referenced in the `webpack.renderer.config.js`
		   includes

You can edit the title of the application in `src/index.html`.
