# Exercise II

Goals: Familiarize team with writing Dockerfile by hand

## Write Dockerfile by hand

Team should perform the following exercise in pairs.

Using a node image, create a Dockerfile containing the following instructions:

1. Add metadata `author` with value `<yourname>` to the image.
1. Create a directory `/app` and make it the working directory.
1. Add all files into to the `/app` directory.
1. Move the favicon [here](https://docs.docker.com/favicons/docs@2x.ico) into the `/app/public/images` folder as `favicon.ico`.
1. Install all npm packages.
1. Expose port 8000.
1. Execute the command `node index.js`.

Each Docker intruction or set of Docker instructions for each of the numbered steps above should be preceeded by a blank line.

Each team should present their solution.

Favicon must show on webpage and the webpage must display the text _Hello Docker!_.

NOTE: Do not discard the Dockerfile, we shall build on it in subsequent excercises.
