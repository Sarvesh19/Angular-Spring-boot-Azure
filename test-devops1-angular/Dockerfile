# Use an official Node.js runtime as the base image
FROM node:16 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Build the Angular app for production
RUN ng build --configuration=production

# Use the Apache HTTP Server image as the base image
FROM httpd:2.4

# Copy your custom configuration file (if needed)
# COPY ./custom-httpd.conf /usr/local/apache2/conf/httpd.conf

# Copy the built app from the builder stage to the Apache web server directory
COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/

# Expose port 80 for the Apache web server (optional)
# EXPOSE 80

# Start Apache HTTP Server in the foreground
CMD ["httpd", "-D", "FOREGROUND"]