# ./email-api/Dockerfile
FROM node:22.13.1-alpine AS builder

# Install pnpm globally
RUN npm install -g pnpm

# Create app directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json pnpm-lock.yaml ./

# Install dependencies (including dev dependencies for building)
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY ./ ./

# Expose the port the application will run on
EXPOSE ${API_PORT}

# Start the application Using the production command from the package.json
RUN pnpm build

# Start the application Using the production command from the package.json
CMD ["pnpm", "start"]