FROM node:14

WORKDIR /planning-poker-client
COPY package.json /planning-poker-client
RUN npm install
COPY . /planning-poker-client
RUN npm run build

CMD ["npx", "serve", "-s", "build", "-l", "3000"]
