# Etapa 1: build Angular
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --configuration=production

# Etapa 2: Apache para servir Angular
FROM httpd:2.4
COPY --from=build /app/dist/practica-s/browser /usr/local/apache2/htdocs/

