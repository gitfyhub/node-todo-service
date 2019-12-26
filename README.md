### To start docker

```
docker build -t webapp .
docker run -p 7070:7070 webapp
```

### To start docker compose and then build 2 steps commands

```
docker-compose build
docker-compose up
```

### To start docker compose and build 1 step command

```
docker-compose up --build
```