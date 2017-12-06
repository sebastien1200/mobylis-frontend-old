ARG  NODE_VERSION=8.9.1
ARG  ANGULAR_CLI_VERSION=1.5.5
FROM node:$NODE_VERSION-alpine
WORKDIR /home
RUN npm install -g @angular/cli@$ANGULAR_CLI_VERSION firebase-tools
COPY . .
RUN npm install
RUN ng build --prod
RUN
