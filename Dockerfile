FROM node:latest

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

RUN ls -l

RUN cd ~/frontend && npm install

RUN cd ~/backend && npm install
 
COPY . .

ENV PORT=5173

EXPOSE 5173

CMD ["npm", "run", "dev"]