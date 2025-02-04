# ./email-api/Dockerfile
FROM node:22.13.1-alpine as builder

# Install pnpm globally
RUN npm install -g pnpm

# Create app directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies (including dev dependencies for building)
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm run build

# Expose the port the application will run on
EXPOSE 3001

# Start the application Using the production command from the package.json
CMD ["pnpm", "start"]