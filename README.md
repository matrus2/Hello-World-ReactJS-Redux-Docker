# Hello World (ReactJS, Redux, Docker)
####ReactJS with Redux - Hello world example on Docker. Initial development environment configuration.

###How to install
This repository is an excellent point for starting development ReactJS with Redux app. To start you have to [install Docker](https://docs.docker.com/engine/installation/) and then type in terminal:

 ```source run.sh```
 
You can see web application working on following adress in your browser:
 
 ```http://{your docker-machine ip}:3000/app/```
 
###Configuration
 
#####./app/webpack.config.js
 
Webpack with webpack-dev-server manages all assets dependencies. Babel transpiler allows to write ES6 based javascript. SCSS with [Susy](http://susydocs.oddbird.net/en/latest/) framework is used for handling grids and styles. 

#####./app/client.js

Main javascript file.

