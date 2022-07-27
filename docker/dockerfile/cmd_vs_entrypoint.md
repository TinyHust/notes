## cmd vs entrypoint

### CMD instruction has three forms
- CMD ["only_executable","parameter_1","parameter_1"] (executable form)
- CMD ["parameter_1","parameter_2"] (used to provide default parameters to the ENTRYPOINT instruction)
- CMD command param1 param2 (It is the shell form)

ex:
```bash
CMD echo "Command in Shell Form"
CMD ["/bin/bash", "-c", "echo Command in Exec Form"]
```

### The forms of the ENTRYPOINT Instruction are
- ENTRYPOINT ["only_executable", "parameter_1", "parameter_2"] (executable form)
- ENTRYPOINT command parameter_1 parameter_2 (Shell form)

### When both an ENTRYPOINT and CMD are specified, the CMD string(s) will be appended to the ENTRYPOINT in order to generate the container's command string.
**note**: When using ENTRYPOINT and CMD together it's important that you always use the exec form of both instructions  
```Dockerfile
FROM ubuntu:trusty
ENTRYPOINT ["/bin/ping","-c","3"]
CMD ["localhost"]
```
usage
```bash
docker build -t ping .
docker run ping
docker ps -l
```
result
```bash
CONTAINER ID IMAGE COMMAND CREATED
82df66a2a9f1 ping:latest "/bin/ping -c 3 localhost" 6 seconds ago
```

#### The CMD value can be easily overridden by supplying one or more arguments to `docker run` after the name of the image

```bash
docker run ping docker.io
docker ps -l --no-trunc
```
result
```bash
CONTAINER ID IMAGE COMMAND CREATED
0d739d5ea4e5 ping:latest "/bin/ping -c 3 docker.io" 51 seconds ago
```
