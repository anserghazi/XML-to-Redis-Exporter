# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /XML-to-Redis-Exporter

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Define the command to run your application
ENTRYPOINT ["node", "index.js"]
