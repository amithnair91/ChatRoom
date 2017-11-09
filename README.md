### Installation

docker build -t node-chat-app .


docker run -p 49160:8282 -d node-chat-app


app should be up on localhost:49160

# Enter the container
$ docker exec -it <container id> /bin/bash
