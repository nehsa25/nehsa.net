FROM node:21.6.1-slim
EXPOSE 4200
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
