FROM node:16

WORKDIR /user/src/app

COPY package*.json ./
RUN npm ci --include=dev
COPY . .

RUN npm run build

COPY . .

EXPOSE 8080

CMD npm run startApi