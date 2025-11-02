FROM node:20-alpine
WORKDIR /srv/app
COPY package*.json ./
RUN npm ci --only=production && npm install pg
COPY . ./
RUN npm run build
EXPOSE 1337
CMD ["npm", "start"]