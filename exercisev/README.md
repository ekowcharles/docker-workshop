# Exercise V

Goals: Try out most used docker commands.

## Docker commands

Change into the `exerciseii` folder and perform the following actions.

### docker login

Log in to a Docker registry.

```
$ docker login
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
Username: <dockerhub-username>
Password: <dockerhub-password>
Login Succeeded
```

Guess command required to log out of registry.

### docker ps

Lists all currently running containers

```
$ docker ps
CONTAINER ID        IMAGE        COMMAND        CREATED        STATUS        PORTS        NAMES
```

### docker build, docker images

`docker build` is how you create an image from your Dockerfile.

```
$ docker build .
```

List all images

```
$ docker images
```

Notice your image is indistiguishable from the lot.

Now run the follow:

```
$ docker build -t workshop:one .
$ docker images
```

Notice how your image now appears in the list.

What happens when the Dockerfile is renamed to something else? How does that affect the build command.

### docker run

Runs a command in a new container.

```
$ docker run -p 8999 workshop:one
```

Now click [here](http://localhost:8999) to launch app in your browser. :tada:

Complete the following tasks:

1. Modify the codebase to extract web port from an environment variable `PORT`
1. Modify the Dockerfile to accept and `PORT` environment variable.

#### docker run with `--build-args`

Run the following:

```
$ docker build --build-args PORT=9898 -t workshop:two .
$ docker run -p 9898 workshop:two
```

Now click [here](http://localhost:9898) to launch app in your browser.

#### docker run with `--env`

Run the following to override the `PORT` variable when the container is running.

```
$ docker run --env PORT=4567 -p 4567 workshop:two
```

Now click [here](http://localhost:4567) to launch app in your browser.

### docker push

This is how you push images to docker repositories which in our case is Dockerhub.

Lets push our newly created image to Dockerhub and make it accessible to others.

```
$ docker push workshop:two
```

### docker stop

To stop running `workshop:two` container, run the following:

```
$ docker ps
```

Extract the value in the `CONTAINER ID` column and use it in the following command:

```
$ docker stop <container-id>
```

Run the `docker ps` command to confirm that the container is indeed stopped. The container should not be shown in the list of running containers.

### docker rmi, docker rm

`docker rmi` removes an image.

Execute the following:

```
$ docker rmi workshop:two
```

This should fail with an error that looks likes so:

```
Error response from daemon: conflict: unable to remove repository reference "workshop:two" (must force) - container <container-id> is using its referenced image <image-id>
```

We see that while `docker stop` stops the container, it does not necessarily mean the container does not exist. To show that the container still exists even though it is stop run the following command:

```
$ docker ps -a
```

:tada:

Run

```
$ docker rm <container-id>
```

to remove the container completely.

Now that the container has been completely removed, we can go ahead and delete the `workshop:two` image:

```
$ docker rmi workshop:two
```

Check the list of images to confirm it is indeed gone!

### docker pull

Exchange Dockerhub IDs amongst yourselves and run the following:

```
$ docker pull <dockerhub-id>/workshop:two
$ docker run --env PORT=4567 -p 4567 workshop:two
```

Click [here](http://localhost:4567) to launch app in your browser.

### docker inspect

You want to get all the info on a docker image? You run the following for that:

```
$ docker inspect <repository>
```

Inspect the image you just downloaded. Who is the author?

## Exhaustive list of commands and what they do

```
attach      Attach local standard input, output, and error streams to a running container
build       Build an image from a Dockerfile
commit      Create a new image from a container's changes
cp          Copy files/folders between a container and the local filesystem
create      Create a new container
diff        Inspect changes to files or directories on a container's filesystem
events      Get real time events from the server
exec        Run a command in a running container
export      Export a container's filesystem as a tar archive
history     Show the history of an image
images      List images
import      Import the contents from a tarball to create a filesystem image
info        Display system-wide information
inspect     Return low-level information on Docker objects
kill        Kill one or more running containers
load        Load an image from a tar archive or STDIN
login       Log in to a Docker registry
logout      Log out from a Docker registry
logs        Fetch the logs of a container
pause       Pause all processes within one or more containers
port        List port mappings or a specific mapping for the container
ps          List containers
pull        Pull an image or a repository from a registry
push        Push an image or a repository to a registry
rename      Rename a container
restart     Restart one or more containers
rm          Remove one or more containers
rmi         Remove one or more images
run         Run a command in a new container
save        Save one or more images to a tar archive (streamed to STDOUT by default)
search      Search the Docker Hub for images
start       Start one or more stopped containers
stats       Display a live stream of container(s) resource usage statistics
stop        Stop one or more running containers
tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
top         Display the running processes of a container
unpause     Unpause all processes within one or more containers
update      Update configuration of one or more containers
version     Show the Docker version information
wait        Block until one or more containers stop, then print their exit codes
```
