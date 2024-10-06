
# HCU Test Project
## Description
This project is a React application that includes various components, utilities, and services. It uses Storybook for component development and testing.
## Project Structure
hcu-test/
├── .env
├── .env.sample
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── package.json
├── pnpm-lock.yaml
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src/
│   ├── apis/
│   │   ├── domains/
│   │   │   ├── base/
│   │   │   └── todos/
│   │   └── mocks/
│   ├── App.tsx
│   ├── components/
│   │   ├── buttons/
│   │   ├── dialogs/
│   │   └── form-fields/
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── services/
│   ├── setupTests.ts
│   ├── utils/
│   │   ├── AxiosClient.ts
│   │   ├── error.ts
│   │   ├── errors.ts
│   │   ├── httpClient.ts
│   │   ├── useFetchQuery.ts
│   │   └── useLazyQuery.ts
│   └── views/
│       └── todo-list/
├── tsconfig.json
└── webpack.config.js

## Prerequisites

- Node.js (>= 14.0.0)
- pnpm (>= 6.0.0)

## Setup

 - Clone the repository:

   ```sh
   git@github.com:iambenn-dztn/hcu-test.git
   ```
 - Install packages
    ```sh
	cd hcu-test
	pnpm  install
	cp  .env.sample  .env
 - Run Mock API Server
	```sh
	pnpm mock
	```
 -  Run project
	```sh
	pnpm start
	```
 - Lint Code
	```sh
	pnpm  lint
	pnpm  lint:fix
	```
 - Storybook
	```sh
	pnpm  storybook
	```
## Done Feature:
 - Todo list (Creat, Update, Filter)
 - Mock API using json-server
 - Add validation using react-hook-form
 - Setup prettier for project
 - Setup eslint for project
 - Add sample storybook 
