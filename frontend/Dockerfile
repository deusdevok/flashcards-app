# Dockerfile for React frontend
FROM node:14

# Set work directory
WORKDIR /usr/src/app/frontend

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Build the app
RUN npm run build

# Run the application
CMD ["npm", "start"]
