# Dockerfile for React frontend
FROM node:22-alpine

# Set work directory to match the volume mount in docker-compose
WORKDIR /usr/src/app/frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application in development mode
#CMD ["sh", "-c", "npm run start"]
CMD ["npm", "start"]
