FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

ENV PORT=5173

CMD ["npm", "run", "dev"]
