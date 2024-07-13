# Use the official Node.js image.
FROM node:19.7.0

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install app dependencies.
COPY package*.json ./
RUN npm install

# Copy app files.
COPY . .
ENV NODE_ENV=production
# Expose the port the app runs on.
EXPOSE 3000
# Run the application.
CMD [ "npm", "run","dev" ]
