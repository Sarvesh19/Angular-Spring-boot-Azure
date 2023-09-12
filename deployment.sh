#!/bin/bash

# Build and push Docker images using Docker Compose
docker-compose -f docker-compose.yml build
docker-compose -f docker-compose.yml push

# Apply Kubernetes manifests
kubectl apply -f k8s/

# Trigger a rollout restart for the spring-boot-app deployment
kubectl rollout restart deployment spring-boot-app-1
kubectl rollout restart deployment web-app-deployment
