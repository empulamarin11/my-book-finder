FROM node:20
WORKDIR /srv/app

# Copy package.json
COPY package*.json ./

# Verify that package.json was copied and check its contents
RUN ls -la package.json
RUN cat package.json | grep -A 20 "scripts"

# Install dependencies
RUN npm install && npm install pg --save

# Copy everything
COPY . ./

# Check again after copying everything
RUN ls -la package.json
RUN npm run

# Now build
RUN npm run build

EXPOSE 1337
CMD ["npm", "start"]