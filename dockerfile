FROM node:latest
EXPOSE 80 443
WORKDIR /app
COPY package.json .
RUN npm install -g npm@latest
RUN npm install
COPY . .
CMD node index.js