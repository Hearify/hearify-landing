#!/bin/bash

docker ps -q --filter "ancestor=blog-nextjs"
# Stop and remove existing container if running
existing_container_id=$(docker ps -q --filter "ancestor=blog-nextjs")
if [ ! -z "$existing_container_id" ]; then
  echo "Stopping and removing existing container: $existing_container_id"
  docker stop $existing_container_id
  docker rm $existing_container_id
fi

# Remove any existing image to avoid conflicts
existing_image_id=$(docker images -q blog-nextjs)
if [ ! -z "$existing_image_id" ]; then
  echo "Removing existing image: $existing_image_id"
  docker rmi -f blog-nextjs:latest
fi

# Build and run new Docker container
echo "Building new Docker image"
docker build -t blog-nextjs .
echo "Running new Docker container"
docker run -d -p 3000:3000 blog-nextjs
