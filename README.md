# TBD-Later

## Development

### Prerequisites

- [Deta Space account](https://deta.space/signup)
- [Space CLI](https://deta.space/docs/en/build/fundamentals/space-cli)
- [Node.js v16](https://nodejs.org/en/)

### Installation

Assuming you already clone this repository, you can install the dependencies by running:

```bash
npm install
```

### Starting The Development Server

Since we are using [deta space](https://deta.space/) to host the application, we are using space cli to run the application locally. You can start the development server by running:

```bash
space dev
```

By doing this we can achieve similar environment to the production environment.

### Adding New Pages

We are using [NextJS 13](https://nextjs.org/) as our framework of choice. NextJS is a React framework that have built in routing. To add new pages, you can create a new folder and add `page.js` in the `app` directory. The folder name will be the route name. For example, if you create a folder named `about` and add `page.js` inside it, the route will be `/about`. Inside the `page.js` file you will need a `default export` function that returns a `JSX` element. See the already created pages for reference.

### Styling The pages

We are using [Pico CSS](https://picocss.com/) for styling the pages. Pico CSS is a minimal class based css framework. You can also add some css class for styling the pages. You can add the css class in the `app/globals.css` file. Be mindful before adding any css class, since We adhere more to the semantic HTML. An example of possible css class to be adding is `danger` for a red colored text or button.

### Adding New Components

To add new components, you can create a new file inside the `components` folder. Each component should have same name as the file name. For example, if you create a file named `button.js` inside the `components` folder, the component name will be `Button`. Inside the component file you should use `named export` for the component.

### Data Fetching

We are using [Deta Base and Deta Storage](https://deta.space/docs/en/build/fundamentals/data-storage) to store the data. Even though we are using Deta have a [Javascript SDK](https://deta.space/docs/en/build/reference/sdk), we are not using it because Next JS, our framework of choice, prefer to use [Javascript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to fetch data and have better caching options. So instead of using the SDK, we are using the [Deta HTTP API](https://deta.space/docs/en/build/reference/http-api) to fetch the data.

The code for data fetching is stored in the `repository` directory. Each file is responsible for one entity in the database. For example, `repository/shop.js` is responsible for fetching the shop data. In this files we add our own implementation using JS Fetch API to fetch the data for each HTTP API method available at Deta.

### Types

We are using Javascript as our language of choice. Since Javascript is a dynamically typed language, we are [JSDoc](https://jsdoc.app/) to add type information to our code. If you are using VSCode, this will help you figure out what type of data you are dealing with. Each function created should be type using JSDoc. If you have reusable types, you can add it in the `types` directory.
