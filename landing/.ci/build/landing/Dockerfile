#######################################################
# Global accesible arguments
#######################################################
ARG NODE_VERSION

#######################################################
# Build application as distributable - build-stage
#######################################################
FROM node:${NODE_VERSION}-alpine as build-stage

WORKDIR /app

COPY package.json package-lock.json ./
COPY .ci/build/landing/config ./build
RUN mv build/.env.dist build/.env

RUN npm install

COPY . .
RUN npm run build

#######################################################
# Build deployable image - production-stage
#######################################################
FROM nginx:stable-alpine as production-stage

# Working directory app
WORKDIR /app

# Add bash shell to be able to run the entrypoint
RUN apk update && apk add --no-cache bash

# Copy transpiled and distributable app content
COPY --from=build-stage /app/dist dist
COPY --from=build-stage /app/build build

# Setup entrypoint, nginx and environment config given a file arrangement
RUN mv build/.env .env && \
    mv build/entrypoint.sh entrypoint.sh && \
    mv build/nginx.conf /etc/nginx/nginx.conf && \
    chmod +x entrypoint.sh && \
    rm -rf build

# Expose default nginx port
EXPOSE 80

# Launch application from entrypoint script
CMD ["/app/entrypoint.sh", "/app/dist/assets", "/app/.env"]