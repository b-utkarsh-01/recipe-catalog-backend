FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
