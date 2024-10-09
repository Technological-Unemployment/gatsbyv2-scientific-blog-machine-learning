# Gatsby V5 Scientific Starter Blog

A Gatsby v5 scientific starter blog designed for writing, testing, and sharing content related to science, mathematics, and machine learning.


## Description

A ready-to-use scientific blog for writing research and showcasing machine learning demos. It's highly customizable and integrates with modern web technologies.

## Features:

- **Easy Markdown Editing**: Easily manage your content (posts, pages, and parts) in Markdown files, with data queried via **GraphQL**.
- **TensorFlow.js Integration**: Seamlessly integrate machine learning models into your posts using **TensorFlow.js**. The project uses a modified version of [**tfjx**](https://github.com/ModelDepot/tfjsx) to work with Gatsby.
- **Chart.js Integration**: Use **react-chartjs** to render visualizations like loss and accuracy charts, replacing Plotly for better compatibility in deployment.
- **Math Expressions**: Support for **KaTeX** to display mathematical formulas in your posts.
- **CSV Data Support**: Easily integrate CSV file data into your blog with the **gatsby-transformer-csv** plugin.
- **Graph Visualization**: Create interactive graphs in Markdown using **Mermaid** with **gatsby-remark-graph**.
- **Customizable Styles**: Easily change the look and feel with base styles.
- **Code Quality Tools**: Integrated **ESLint** and **Prettier** for consistent code styling and linting.

## Prerequisites

Before you begin, ensure you have the **Gatsby CLI** installed:

```bash
npm install --global gatsby-cli
```

More information on installation and usage can be found at [GatsbyJS.org](https://www.gatsbyjs.com/docs/quick-start/).

## Contributing

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/fooBar`).
3. Commit your changes (`git commit -am 'Add some fooBar'`).
4. Push to the branch (`git push origin feature/fooBar`).
5. Create a Pull Request.

## License

MIT License  
Feel free to use and modify this project however you'd like!
