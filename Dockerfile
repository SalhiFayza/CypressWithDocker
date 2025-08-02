# Use the official Cypress image with Node.js 🌲
FROM cypress/browsers:node-20.11.0-chrome-124-ff-126

# Set the working directory 📁
WORKDIR /app

# Copy package.json and package-lock.json 🧾
COPY package*.json ./

# Install dependencies 🖥️
RUN npm install

# Copy the rest of your code 🥇
COPY . .

# Set environment variable for Cypress (optional) 🥈
ENV CYPRESS_BASE_URL=http://localhost:3000

# Default command (headless run) 🥉
CMD ["npx", "cypress", "run"]
