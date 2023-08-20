
# Movie App

This is a webapp which shows movies and their details using the open api  https://api.themoviedb.org/3.




## Demo
Deployed in Netlify.

Link : https://papaya-dango-f68973.netlify.app/


## Tech Stack

**Client:** React, Redux, Vite, ReactQuery, Bootstarp, Vitest


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_AUTH_TOKEN = 'add your api access token'`

`REACT_APP_BASE_URL = 'https://api.themoviedb.org/3'`


## Run Locally

Clone the project

```bash
  git clone https://github.com/SubhasishSarkar/GSIV23_subhasish_sarkar.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Unit Testing

```bash
  npm run test 
```


## Features

- Responsive web designe
- PWA enabled
- Autopopulate Search
- Shareable links for details page
- Infinite scrolling in home page




## Challenges/ What I have done well?

- Search feature has been implemented using debouncing to reduce the number of network calls. This is a standard way of handling search from database via api. Here I have used 500ms as the threshold time.
- Used React Query to handle api call, which reduces the number of state variables and makes code cleaner. Also it provides cashing and many more feratures which can be useful for a production ready project.
- Used react-infinite-scroll-component to handle infinite scrolling, which a very popular packange https://www.npmjs.com/package/react-infinite-scroll-component.
- Responsive web desingne with loadder animation and.
- PWA enabled.
- Used environment variables for sensitive informations.
- Prettier and eslint configured.
- Used vite to build the app which is much faster than creat-react-app and reduces development time.
- Used vitest for unit testing.
- Used Redux for global state management.

## Improvements

- Code coverage needs to be increased in unit testing.
- Lazyloding of images need to implemented to reduce first paint time.
- Nextjs can be used to have SSR and better SEO.
- Ui could have be more Responsive.
- Redux could have been avoided in this case but its good to have a global state in case its a entriprise level project.
- Error handling could have been better.



