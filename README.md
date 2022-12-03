# meranda-server

## Features

- Node.js
- Express
- PostgreSQL

## Installation

1. Clone the repo:

```sh
git clone https://github.com/kjearno/meranda-server.git
```

2. Go to the project folder:

```sh
cd meranda-server
```

3. Install NPM packages:

```sh
npm install
```

## Usage

- Development server:

```sh
npm run dev
```

- Production server:

```sh
npm start
```

## API

- auth

`POST /auth/register`<br>
`POST /auth/login`<br>
`GET /auth/logout`

- categories

`GET /categories`<br>
`POST /categories`<br>
`DELETE /categories`<br>
`GET /categories/:id`<br>
`PATCH /categories/:id`<br>
`DELETE /categories/:id`

- comments

`GET /comments`<br>
`POST /comments`<br>
`DELETE /comments`<br>
`GET /comments/:id`<br>
`PATCH /comments/:id`<br>
`DELETE /comments/:id`<br>
`POST /comments/me`

- posts

`GET /posts`<br>
`POST /posts`<br>
`DELETE /posts`<br>
`GET /posts/:id`<br>
`PATCH /posts/:id`<br>
`DELETE /posts/:id`

- roles

`GET /roles`<br>
`GET /roles/:id`

- subscribers

`GET /subscribers`<br>
`POST /subscribers`<br>
`DELETE /subscribers`<br>
`GET /subscribers/:id`<br>
`PATCH /subscribers/:id`<br>
`DELETE /subscribers/:id`

- users

`GET /users`<br>
`POST /users`<br>
`DELETE /users`<br>
`GET /users/:id`<br>
`PATCH /users/:id`<br>
`DELETE /users/:id`<br>
`PATCH /users/me/photo`<br>
`PATCH /users/me/password`
