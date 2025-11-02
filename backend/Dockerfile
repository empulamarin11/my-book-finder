FROM node:20
WORKDIR /srv/app

# Copiar package.json
COPY package*.json ./

# Verificar que package.json se copió y ver su contenido
RUN ls -la package.json
RUN cat package.json | grep -A 20 "scripts"

# Instalar dependencias
RUN npm install && npm install pg --save

# Copiar todo
COPY . ./

# Verificar nuevamente después de copiar todo
RUN ls -la package.json
RUN npm run

# Ahora hacer el build
RUN npm run build

EXPOSE 1337
CMD ["npm", "start"]