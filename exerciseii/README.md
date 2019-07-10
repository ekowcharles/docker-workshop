# Exercise III

Goals: Familiarize team with writing Dockerfile by hand

## Write Dockerfile by hand

Team should perform the following exercise in pairs.

Using a node image, create a Dockerfile containing the following instructions:

1. Add metadata `version` with value `0.0.1` to the image
1. Create a directory `/app` and make it the working directory.
1. Add all files ending with `.js` to the `/app` directory.
1. Exclude the `node_modules` folder, `package-lock.json` and `README.md` files from being copied over into the resulting image.
1. Move the favicon [here](https://docs.docker.com/favicons/docs@2x.ico) into the `/app/public/images` folder as `favicon.ico`.
1. Install all npm packages.
1. Map port 8000 in the container to 8999 on the host.
1. Execute the command `node index.js`.

Each Docker intruction or set of Docker instructions for each of the numbered steps above should be preceeded by a blank line.

Each team should present their solution.
