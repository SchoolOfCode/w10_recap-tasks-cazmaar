FROM node:13-alpine

RUN mkdir -p /w10_recap-tasks-cazmaar

COPY ./ w10_recap-tasks-cazmaar

# set default dir so that next commands executes in /home/app dir
WORKDIR /w10_recap-tasks-cazmaar

# will execute npm install in /home/app because of WORKDIR
RUN npm install

# no need for /home/app/server.js because of WORKDIR
CMD ["npm", "start"]

# w10_recap-tasks-cazmaar