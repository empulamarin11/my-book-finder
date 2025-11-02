FROM node:20
WORKDIR /srv/app
COPY package*.json ./
RUN npm install && npm install pg --save
COPY . ./
RUN npm run build
EXPOSE 1337
CMD ["npm", "start"]