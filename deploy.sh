#!/bin/bash

# Stop and remove existing container if running
existing_container_id=$(docker ps -q --filter "name=blog-nextjs")
if [ ! -z "$existing_container_id" ]; then
  docker stop $existing_container_id
fi

# Remove any existing image to avoid conflicts
existing_image_id=$(docker images -q blog-nextjs)
if [ ! -z "$existing_image_id" ]; then
  docker rmi -f blog-nextjs:latest
fi

# Build and run new Docker container
docker build -t blog-nextjs .
docker run -d -p 3000:3000 --name blog-nextjs blog-nextjs
