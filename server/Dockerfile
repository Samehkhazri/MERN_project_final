# Use the official Node.js image as the base image
FROM node:16-alpine

# Install build tools required for native modules
RUN apk add --no-cache python3 make g++

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Copy the .env file
COPY .env .env

# Rebuild native modules for the current platform
RUN npm rebuild bcrypt --build-from-source

# Expose the port that the app runs on
EXPOSE 8000

# Command to run the application
CMD ["node", "server.js"]
