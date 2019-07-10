# Exercise I - Setup

Goals: Setup docker to run on local computer

## Install Homebrew

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Install jq

```sh
brew install jq
```

## Setup Docker

### Requirements

Requires Apple Mac OS Sierra 10.12 or above.

### Create Docker ID

Get yourself a docker id by visiting the [subscription page](https://hub.docker.com/signup) and completing the sign up form.

![docker-subscription-page](https://github.com/ekowcharles/docker-workshop/raw/master/images/signup.png "Docker Subscription Page")

### Install Docker with homebrew

To install with homebrew execute:

```sh
brew install docker
```

To install docker by downloading binary, follow the following stpes:

1. Click [here](https://hub.docker.com/editions/community/docker-ce-desktop-mac) to download Docker Desktop.
2. Double-click on the downloaded .dmg image and following installation steps.

When the installation completes and Docker starts, the whale in the top status bar shows that Docker is running, and accessible from a terminal.

![docker-macos-tray](https://github.com/ekowcharles/docker-workshop/raw/master/images/tray.png "Docker Tray Icon")

### Upgrade Docker version

If you installed Docker with homebrew run:

```sh
brew upgrade docker
```

If you installed Docker using the Docker binary follow the steps below:

![docker-macos-tray](https://github.com/ekowcharles/docker-workshop/raw/master/images/update.png "Docker Update")

### Verify Docker installation

1. Run `docker version` to check that you have the latest release installed.

   ```
   $ docker version
   Client: Docker Engine - Community
   Version:           18.09.2
   API version:       1.39
   Go version:        go1.10.8
   Git commit:        6247962
   Built:             Sun Feb 10 04:12:39 2019
   OS/Arch:           darwin/amd64
   Experimental:      false

   Server: Docker Engine - Community
   Engine:
   Version:          18.09.2
   API version:      1.39 (minimum version 1.12)
   Go version:       go1.10.6
   Git commit:       6247962
   Built:            Sun Feb 10 04:13:06 2019
   OS/Arch:          linux/amd64
   Experimental:     false
   ```

2. Run `docker run hello-world` to verify that Docker is pulling images and running as expected.

   ```
   $ docker run hello-world
   Unable to find image 'hello-world:latest' locally
   latest: Pulling from library/hello-world
   1b930d010525: Pull complete
   Digest: sha256:41a65640635299bab090f783209c1e3a3f11934cf7756b09cb2f1e02147c6ed8
   Status: Downloaded newer image for hello-world:latest

   Hello from Docker!
   This message shows that your installation appears to be working correctly.

   To generate this message, Docker took the following steps:
   1. The Docker client contacted the Docker daemon.
   2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
       (amd64)
   3. The Docker daemon created a new container from that image which runs the
       executable that produces the output you are currently reading.
   4. The Docker daemon streamed that output to the Docker client, which sent it
       to your terminal.

   To try something more ambitious, you can run an Ubuntu container with:
   $ docker run -it ubuntu bash

   Share images, automate workflows, and more with a free Docker ID:
   https://hub.docker.com/

   For more examples and ideas, visit:
   https://docs.docker.com/get-started/
   ```
