FROM openjdk

WORKDIR /app

COPY /movie-api/target/movie-api-1.0.jar /app/movie-api.jar

ENTRYPOINT [ "java", "-jar", "movie-api.jar" ]