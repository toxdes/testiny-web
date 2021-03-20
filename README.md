# Introduction

Mock test interface, that is used by default for many govt. and private institutes.
More information will be added soon.

This project is in very early stages of development, so hold your horses.

#### Note

Since it's not only a skeleton-frontend anymore, you won't be able to completely browse the development preview. I can't pay for the backend server right now, so you can try running the [backend](https://github.com/toxdes/testiny-backend) locally. There are helper scripts in [`scripts`](./scripts) as well for ease of development.

**In production, make sure to redirect everything to `build/index.html` for whatever server you use. Otherwise [`react-router` doesn't work.](https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing)**

#### Development Preview: [Visit](https://testiny.vercel.app)

![Screenshot](./images/scr1.png)

# Quickstart

```sh
$ npm install -g yarn # installs yarn
$ yarn # downloads project dependencies
$ # make sure the backend is running
$ yarn start
```

# Environment Variables (for production)

| Environment variable name | value                                    |
| ------------------------- | ---------------------------------------- |
| `ENV`                     | "production"                             |
| `BACKEND_URL`             | "https://your-backend-app.herokuapp.com" |

# Stack

| Library                               | Use                                                                    |
| ------------------------------------- | ---------------------------------------------------------------------- |
| `typescript`                          | for maintainability :(                                                 |
| `react-router`, `react-router-dom`    | client side routing, using v6, it's in beta, but that's okay I guess   |
| `redux`, `react-redux`, `redux-thunk` | state management, async actions                                        |
| `@chakra-ui`, `framer-motion`         | for making life _allegedly_ easier with `styled-system`, and css in js |
| `react-simple-keyboard`               | for on-screen keyboard (planning to implement our own)                 |
| `axios`                               | for HTTP requests                                                      |

# Contributing

See [contributing](./contributing.md) guidlines for more information about the project structure.

# References / Links

1. https://themera.vercel.app/ - For generating color shades.
