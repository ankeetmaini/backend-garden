# lsof

- command to find which process is running on a given port

```bash
$ lsof -i:7474
COMMAND     PID         USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
com.apple 35034 ankeet.maini   30u  IPv4 0xc5429cae0ecf98f1      0t0  TCP localhost:62393->localhost:7474 (ESTABLISHED)
java      92494 ankeet.maini  882u  IPv6 0xc5429cae2bcf32c9      0t0  TCP *:7474 (LISTEN)
java      92494 ankeet.maini  905u  IPv6 0xc5429cae164a8a89      0t0  TCP localhost:7474->localhost:62393 (ESTABLISHED)
```

- first is the browser that's connected
- second is the server that's listening to the incoming connections and needs to be killed if you want to stop the process

```bash
kill -9 92494
```
