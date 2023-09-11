# Use an official OpenJDK runtime as a parent image
FROM openjdk:11-jre-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file into the container at /app
COPY target/test-devops1-0.0.1-SNAPSHOT.jar /app/dev-spring-boot-app.jar

# Expose port 8080
EXPOSE 8080

# Specify the command to run your application
CMD ["java", "-jar", "dev-spring-boot-app.jar"]


#docker build -t devopsspring.azurecr.io/devopsspring/dev-spring-boot-app:latest .
#docker login devopsspring.azurecr.io -u devopsspring -p geMPaqlXL/fE0VZYR+cirKsYVjLZeThXGu9rwl9m8B+ACRCCwe0g
#docker login loginServer -u geMPaqlXL/fE0VZYR+cirKsYVjLZeThXGu9rwl9m8B+ACRCCwe0g -p accessToken
#docker push devopsspring.azurecr.io/devopsspring/dev-spring-boot-app:latest

# docker build -t devopsspring.azurecr.io/devopsspring/dev-spring-boot-app:latest we need to change the version like v2
# docker build -t devopsspring.azurecr.io/devopsspring/dev-spring-boot-app:v2 .
#docker push devopsspring.azurecr.io/devopsspring/dev-spring-boot-app:v2


#docker login devopsspring.azurecr.io -u devopsspring --password-stdin <<< geMPaqlXL/fE0VZYR+cirKsYVjLZeThXGu9rwl9m8B+ACRCCwe0g
#az acr repository create --name <acr-name> --repository <repository-name>


#az acr login --name 

#kubectl create secret docker-registry acr-secret \
  #  --docker-server=devopsspring.azurecr.io \
  #  --docker-username=devopsspring \
   # --docker-password=geMPaqlXL/fE0VZYR+cirKsYVjLZeThXGu9rwl9m8B+ACRCCwe0g \
   # --docker-email=sarvesh.y305@gmail.com
    
#az aks get-credentials --resource-group test_group --name test
#kubectl apply -f your-deployment-file.yaml
#az aks list --output table
#kubectl get deployment spring-boot-app
#kubectl get pods -l app=spring-boot-app

#kubectl get deployments
#kubectl rollout restart deployment spring-boot-app



# docker run -d -p 8080:8080 dev-spring-boot-app:v2




############# Docker compose push ####################
#docker-compose -f docker-compose.yml build

#docker-compose -f docker-compose.yml push
