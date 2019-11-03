FROM node:10.16

COPY . .

RUN npm install

CMD npm run start