# live-streaming-rtmp-server

Live Streaming Server using [nginx-rtmp-module](https://github.com/arut/nginx-rtmp-module#nginx-rtmp-module) and implementing express based AuthServer for authorization

### Prerequisite
1. Download [OBS](https://obsproject.com/) A open-source cross-platform streaming and recording program
2. Download [Docker](https://www.docker.com/)

### How to Run
---
1. Install Docker
2. docker-compose build
3. docker-compose up
4. Open settings in OBS and set the server to `rtmp://localhost:1935/live` and the stream key to `neeraj?key=supersecret`
5. Now you can watch your RTMP feed wherever you like by pointing to following URL `rtmp://localhost:1935/live/neeraj`