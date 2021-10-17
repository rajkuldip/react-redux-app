FROM node:12.14.0
WORKDIR /app
ADD package.json /app
ADD yarn.lock /app
ADD src /app/src
ADD public /app/public
ADD tsconfig.json /app
EXPOSE 3000
RUN yarn