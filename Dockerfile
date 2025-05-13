# Etapa 1: build Angular
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --configuration=production

# Etapa 2: Apache para servir Angular
FROM httpd:2.4
COPY --from=build /app/dist/practica-s/browser /usr/local/apache2/htdocs/

# Copiar archivo de configuración proxy
COPY proxy.conf /usr/local/apache2/conf/proxy.conf

# Incluir proxy.conf en configuración global
RUN echo "Include /usr/local/apache2/conf/proxy.conf" >> /usr/local/apache2/conf/httpd.conf


