FROM node:4.4.2

MAINTAINER Bogusz Przybyslawski <biuro@matrus.pl>

EXPOSE 3000

COPY ./ /var/www/blog

WORKDIR /var/www/blog

RUN npm install
CMD npm run dev