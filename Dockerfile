FROM openjdk:10

WORKDIR /

ADD iprincipnufinance.jar iprincipnufinance.jar

EXPOSE 8080

CMD java -jar iprincipnufinance.jar
