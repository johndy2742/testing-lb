FROM node:16-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY server.js ./

EXPOSE 8080

CMD ["npm", "start"]
