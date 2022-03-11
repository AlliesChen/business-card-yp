# Using React without CRA

At the beginning, I initiated the project with create-react-app(CRA), and then removed the files to run the project by installing webpack, loaders and babel manually.

This webpage is a sample business card as a project for React lesson on Srimba.

From this practice, I found it's painful to use React without CRA, because the images and svg image need specific loaders to work. For example:

- SVGR for .svg files
- file-loader for png, jpg, and jpeg pictures.

The reference I find in this practice is:

- For SVGR: [Webpack - SVGR](https://react-svgr.com/docs/webpack/)
- For using file-loader: [Create React App without create-react-app ! - DEV Community](https://dev.to/riddhiagrawal001/create-react-app-without-create-react-app-2lgd)

Normally, I can use these methods to import images with CRA helps

- [在 React Create-React-App 引入圖片檔案的方法 (不包括 SVG 圖檔) | by 何妍德 Angel | Its Ok to Make Mistakes | Medium](https://medium.com/itsoktomakemistakes/react-create-react-app-import-images-with-webpack-372e6ea19e2a)
- [在 React Create-React-App 引入 SVG 圖檔的方法，並使用 Styled-Components 來調整 SVG Icon 在不同狀態下的色彩改變 | by 何妍德 Angel | Its Ok to Make Mistakes | Medium](https://medium.com/itsoktomakemistakes/react-create-react-app-svg-icons-styled-component-570b4e9f07b)
