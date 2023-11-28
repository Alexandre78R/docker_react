# FROM node:lts-alpine

# RUN mkdir /app
# WORKDIR /app
# COPY package*.json ./
# RUN npm i
# # COPY public public
# # COPY src src
# COPY . .
# # COPY ./src/* ./src/*
# # COPY ./public/* ./public/*
# # COPY ./public/index.html ./public/index.html
# # COPY src/*.js src/*.js
# # COPY ./app/src/index.js ./app/src/index.js
# # COPY ./ ./
# # COPY ../client ../client

# CMD npm start

# FROM node:lts-alpine

# RUN mkdir /app
# WORKDIR /app
# COPY package*.json ./
# RUN npm i
# COPY . .

# CMD ["npm", "run", "dev"]

FROM node:lts-alpine
RUN mkdir /app
WORKDIR /app
COPY package.json ./
RUN npm i
COPY ./ ./
# COPY src/main.jsx src/main.jsx
# EXPOSE 5173
CMD npm run dev
