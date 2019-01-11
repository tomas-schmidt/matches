#docker build --tag react-app .
#docker run --name matches-front -p 3000:3000 react-app
FROM node:10
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install react-scripts@1.1.1 -g
EXPOSE 3000
CMD ["npm", "start"]
