FROM node:12.10.0

WORKDIR /usr/app

COPY package*.json ./

RUN npm install
# RUN npm ci -qy

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
