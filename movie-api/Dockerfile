FROM maven

WORKDIR /app

COPY /movie-api/. /app

RUN mvn clean install -Dmaven.test.skip=true

ENTRYPOINT [ "java", "-jar", "target/movie-api-1.0.jar" ]