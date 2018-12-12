#docker build --tag matchesapp .
#docker run --name matches-react -p 3000:3000 nodeapp
FROM node:10
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install react-scripts@1.1.1 -g --silent
EXPOSE 3000
CMD ["npm", "start"]
