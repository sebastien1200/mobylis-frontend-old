FROM node:9.2-alpine
RUN npm install -g @angular/cli@1.5.5
RUN npm install -g firebase-tools
RUN apk --update add git openssh

