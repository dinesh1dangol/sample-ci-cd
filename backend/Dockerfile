# Use official Node LTS image
FROM node:lts

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Default command
CMD ["npm", "test"]

CMD ["node", "index.js"]

