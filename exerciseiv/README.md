# Exercise II - Base Images

Goals:

- Understand various parts of the Dockerhub search page
- Understand how to peruse images

When choosing a base image for your docker image ask yourself the following questions:

1. Is it Docker certified?
2. Is the publisher verified?
3. Is it an official image?
4. How many times has the image been downloaded?
5. When was the last time the image was updated?

This helps to establish how much trust you have for the image you are importing.

Visit the [dockerhub search page](https://hub.docker.com/search?q=&type=image).

## Some popular base images

- [PostgreSQL](https://hub.docker.com/search?q=postgres&type=image)
- [Node](https://hub.docker.com/search?q=node&type=image)
- [Java](https://hub.docker.com/search?q=java&type=image)
- [MySQL](https://hub.docker.com/search?q=mysql&type=image)

NOTE: Not all repositories are publicly available. There are some official images you need to pay for.

## Game

Trace the base images for the following images:

- [nginx-modsecurity](https://hub.docker.com/r/nodeintegration/nginx-modsecurity)
- [jetty](https://hub.docker.com/_/jetty) for Java 11
- [nodecg](https://hub.docker.com/r/nodecg/nodecg)
