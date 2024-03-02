# Stage 1: Build the Angular application
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:1.19
COPY --from=build /app/dist/album-viewer /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
