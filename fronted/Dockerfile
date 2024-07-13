# Use the official Node.js image.
FROM node:20-alpine as build

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install app dependencies.
COPY package*.json ./
RUN npm install

# Copy app files and build.
COPY . .
RUN npm run build

# Use a web server to serve the build.
FROM nginx:alpine

# Copy the build artifacts from the previous stage.
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the port the app runs on.
EXPOSE 80

# Run the web server.
CMD ["nginx", "-g", "daemon off;"]
