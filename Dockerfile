# syntax=docker/dockerfile:1
FROM node:18-alpine

WORKDIR /app

# COPY package.json package.json
# RUN npm install 
CMD ["npm","install","vite"]
COPY . .
CMD ["npm","run","dev"]

EXPOSE 80:80