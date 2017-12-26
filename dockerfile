FROM node:9.3.0

WORKDIR /app
ADD . /app

RUN yarn install

EXPOSE 9123

CMD ["npm", "start"]