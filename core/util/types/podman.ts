export interface paths {
    "/auth": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Check auth configuration */
        post: operations["SystemAuth"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/build": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create image
         * @description Build an image from the given Dockerfile(s)
         */
        post: operations["ImageBuild"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/commit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * New Image
         * @description Create a new image from a container
         */
        post: operations["ImageCommit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Remove a container */
        delete: operations["ContainerDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get files from a container
         * @description Get a tar archive of files from a container
         */
        get: operations["ContainerArchive"];
        /**
         * Put files into a container
         * @description Put a tar archive of files into a container
         */
        put: operations["PutContainerArchive"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/attach": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Attach to a container
         * @description Attach to a container to read its output or send it input. You can attach
         *     to the same container multiple times and you can reattach to containers
         *     that have been detached.
         *
         *     It uses the same stream format as docker, see the libpod attach endpoint for a description of the format.
         *
         */
        post: operations["ContainerAttach"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/exec": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create an exec instance
         * @description Create an exec session to run a command inside a running container. Exec sessions will be automatically removed 5 minutes after they exit.
         */
        post: operations["ContainerExec"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Export a container
         * @description Export the contents of a container as a tarball.
         */
        get: operations["ContainerExport"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Inspect container
         * @description Return low-level information about a container.
         */
        get: operations["ContainerInspect"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/kill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Kill container
         * @description Signal to send to the container as an integer or string (e.g. SIGINT)
         */
        post: operations["ContainerKill"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/logs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get container logs
         * @description Get stdout and stderr logs from a container.
         */
        get: operations["ContainerLogs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/pause": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Pause container
         * @description Use the cgroups freezer to suspend all processes in a container.
         */
        post: operations["ContainerPause"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/rename": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Rename an existing container
         * @description Change the name of an existing container.
         */
        post: operations["ContainerRename"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/resize": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Resize a container's TTY
         * @description Resize the terminal attached to a container (for use with Attach).
         */
        post: operations["ContainerResize"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/restart": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Restart container */
        post: operations["ContainerRestart"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Start a container */
        post: operations["ContainerStart"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/stats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get stats for a container
         * @description This returns a live stream of a container’s resource usage statistics.
         */
        get: operations["ContainerStats"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/stop": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Stop a container
         * @description Stop a container
         */
        post: operations["ContainerStop"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/top": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List processes running inside a container */
        get: operations["ContainerTop"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/unpause": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Unpause container
         * @description Resume a paused container
         */
        post: operations["ContainerUnpause"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update configuration of an existing container
         * @description Change configuration settings for an existing container without requiring recreation.
         */
        post: operations["ContainerUpdate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/{name}/wait": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Wait on a container
         * @description Block until a container stops or given condition is met.
         */
        post: operations["ContainerWait"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a container */
        post: operations["ContainerCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List containers
         * @description Returns a list of containers
         */
        get: operations["ContainerList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/containers/prune": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Delete stopped containers
         * @description Remove containers not in use
         */
        post: operations["ContainerPrune"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get events
         * @description Returns events filtered on query parameters
         */
        get: operations["SystemEvents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/exec/{id}/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Inspect an exec instance
         * @description Return low-level information about an exec instance.
         */
        get: operations["ExecInspect"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/exec/{id}/resize": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Resize an exec instance
         * @description Resize the TTY session used by an exec instance. This endpoint only works if tty was specified as part of creating and starting the exec instance.
         *
         */
        post: operations["ExecResize"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/exec/{id}/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start an exec instance
         * @description Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command.
         */
        post: operations["ExecStart"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/images/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Remove Image
         * @description Delete an image from local storage
         */
        delete: operations["ImageDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/images/{name}/get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Export an image
         * @description Export an image in tarball format
         */
        get: operations["ImageGet"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/images/{name}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * History of an image
         * @description Return parent layers of an image.
         */
        get: operations["ImageHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/images/{name}/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Inspect an image
         * @description Return low-level information about an image.
         */
        get: operations["ImageInspect"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/images/{name}/push": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Push Image
         * @description Push an image to a container registry
         */
        post: operations["ImagePush"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/images/{name}/tag": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Tag an image
         * @description Tag an image so that it becomes part of a repository.
         */
        post: operations["ImageTag"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/images/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create an image
         * @description Create an image by either pulling it from a registry or importing it.
         */
        post: operations["ImageCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/images/get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Export several images
         * @description Get a tarball containing all images and metadata for several image repositories
         */
        get: operations["ImageGetAll"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/images/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Images
         * @description Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.
         */
        get: operations["ImageList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/images/load": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Import image
         * @description Load a set of images and tags into a repository.
         */
        post: operations["ImageLoad"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/images/prune": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Prune unused images
         * @description Remove images from local storage that are not being used by a container
         */
        post: operations["ImagePrune"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/images/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search images
         * @description Search registries for an image
         */
        get: operations["ImageSearch"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get info
         * @description Returns information on the system and libpod configuration
         */
        get: operations["SystemInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/_ping": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ping service
         * @description Return protocol information in response headers.
         *     `HEAD /libpod/_ping` is also supported.
         *     `/_ping` is available for compatibility with other engines.
         *     The '_ping' endpoints are not versioned.
         *
         */
        get: operations["SystemPing"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/build": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create image
         * @description Build an image from the given Dockerfile(s)
         */
        post: operations["ImageBuildLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/commit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Commit
         * @description Create a new image from a container
         */
        post: operations["ImageCommitLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete container
         * @description Delete container
         */
        delete: operations["ContainerDeleteLibpod"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Copy files from a container
         * @description Copy a tar archive of files from a container
         */
        get: operations["ContainerArchiveLibpod"];
        /**
         * Copy files into a container
         * @description Copy a tar archive of files into a container
         */
        put: operations["PutContainerArchiveLibpod"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/attach": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Attach to a container
         * @description Attach to a container to read its output or send it input. You can attach
         *     to the same container multiple times and you can reattach to containers
         *     that have been detached.
         *
         *     ### Hijacking
         *
         *     This endpoint hijacks the HTTP connection to transport `stdin`, `stdout`,
         *     and `stderr` on the same socket.
         *
         *     This is the response from the service for an attach request:
         *
         *     ```
         *     HTTP/1.1 200 OK
         *     Content-Type: application/vnd.docker.raw-stream
         *
         *     [STREAM]
         *     ```
         *
         *     After the headers and two new lines, the TCP connection can now be used
         *     for raw, bidirectional communication between the client and server.
         *
         *     To inform potential proxies about connection hijacking, the client
         *     can also optionally send connection upgrade headers.
         *
         *     For example, the client sends this request to upgrade the connection:
         *
         *     ```
         *     POST /v4.6.0/libpod/containers/16253994b7c4/attach?stream=1&stdout=1 HTTP/1.1
         *     Upgrade: tcp
         *     Connection: Upgrade
         *     ```
         *
         *     The service will respond with a `101 UPGRADED` response, and will
         *     similarly follow with the raw stream:
         *
         *     ```
         *     HTTP/1.1 101 UPGRADED
         *     Content-Type: application/vnd.docker.raw-stream
         *     Connection: Upgrade
         *     Upgrade: tcp
         *
         *     [STREAM]
         *     ```
         *
         *     ### Stream format
         *
         *     When the TTY setting is disabled for the container,
         *     the HTTP Content-Type header is set to application/vnd.docker.multiplexed-stream
         *     (starting with v4.7.0, previously application/vnd.docker.raw-stream was always used)
         *     and the stream over the hijacked connected is multiplexed to separate out
         *     `stdout` and `stderr`. The stream consists of a series of frames, each
         *     containing a header and a payload.
         *
         *     The header contains the information about the output stream type and the size of
         *     the payload.
         *     It is encoded on the first eight bytes like this:
         *
         *     ```go
         *     header := [8]byte{STREAM_TYPE, 0, 0, 0, SIZE1, SIZE2, SIZE3, SIZE4}
         *     ```
         *
         *     `STREAM_TYPE` can be:
         *
         *     - 0: `stdin` (is written on `stdout`)
         *     - 1: `stdout`
         *     - 2: `stderr`
         *
         *     `SIZE1, SIZE2, SIZE3, SIZE4` are the four bytes of the `uint32` size
         *     encoded as big endian.
         *
         *     Following the header is the payload, which contains the specified number of
         *     bytes as written in the size.
         *
         *     The simplest way to implement this protocol is the following:
         *
         *     1. Read 8 bytes.
         *     2. Choose `stdout` or `stderr` depending on the first byte.
         *     3. Extract the frame size from the last four bytes.
         *     4. Read the extracted size and output it on the correct output.
         *     5. Goto 1.
         *
         *     ### Stream format when using a TTY
         *
         *     When the TTY setting is enabled for the container,
         *     the stream is not multiplexed. The data exchanged over the hijacked
         *     connection is simply the raw data from the process PTY and client's
         *     `stdin`.
         *
         */
        post: operations["ContainerAttachLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/changes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Report on changes to container's filesystem; adds, deletes or modifications.
         * @description Returns which files in a container's filesystem have been added, deleted, or modified. The Kind of modification can be one of:
         *
         *     0: Modified
         *     1: Added
         *     2: Deleted
         *
         */
        get: operations["ContainerChangesLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/checkpoint": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Checkpoint a container */
        post: operations["ContainerCheckpointLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/exec": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create an exec instance
         * @description Create an exec session to run a command inside a running container. Exec sessions will be automatically removed 5 minutes after they exit.
         */
        post: operations["ContainerExecLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/exists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check if container exists
         * @description Quick way to determine if a container exists by name or ID
         */
        get: operations["ContainerExistsLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Export a container
         * @description Export the contents of a container as a tarball.
         */
        get: operations["ContainerExportLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/healthcheck": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Run a container's healthcheck
         * @description Execute the defined healthcheck and return information about the results
         */
        get: operations["ContainerHealthcheckLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/init": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Initialize a container
         * @description Performs all tasks necessary for initializing the container but does not start the container.
         */
        post: operations["ContainerInitLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Inspect container
         * @description Return low-level information about a container.
         */
        get: operations["ContainerInspectLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/kill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Kill container
         * @description send a signal to a container, defaults to killing the container
         */
        post: operations["ContainerKillLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/logs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get container logs
         * @description Get stdout and stderr logs from a container.
         *
         *     The stream format is the same as described in the attach endpoint.
         *
         */
        get: operations["ContainerLogsLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/mount": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Mount a container
         * @description Mount a container to the filesystem
         */
        post: operations["ContainerMountLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/pause": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Pause a container
         * @description Use the cgroups freezer to suspend all processes in a container.
         */
        post: operations["ContainerPauseLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/rename": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Rename an existing container
         * @description Change the name of an existing container.
         */
        post: operations["ContainerRenameLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/resize": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Resize a container's TTY
         * @description Resize the terminal attached to a container (for use with Attach).
         */
        post: operations["ContainerResizeLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/restart": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Restart a container */
        post: operations["ContainerRestartLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/restore": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Restore a container
         * @description Restore a container from a checkpoint.
         */
        post: operations["ContainerRestoreLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Start a container */
        post: operations["ContainerStartLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/stats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get stats for a container
         * @description DEPRECATED. This endpoint will be removed with the next major release. Please use /libpod/containers/stats instead.
         */
        get: operations["ContainerStatsLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/stop": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Stop a container */
        post: operations["ContainerStopLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/top": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List processes
         * @description List processes running inside a container
         */
        get: operations["ContainerTopLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/unmount": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Unmount a container
         * @description Unmount a container from the filesystem
         */
        post: operations["ContainerUnmountLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/unpause": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Unpause Container */
        post: operations["ContainerUnpauseLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Updates the configuration of an existing container, allowing changes to resource limits and healthchecks
         * @description Updates the configuration of an existing container, allowing changes to resource limits and healthchecks.
         */
        post: operations["ContainerUpdateLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/{name}/wait": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Wait on a container
         * @description Wait on a container to meet a given condition
         */
        post: operations["ContainerWaitLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a container */
        post: operations["ContainerCreateLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List containers
         * @description Returns a list of containers
         */
        get: operations["ContainerListLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/prune": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Delete stopped containers
         * @description Remove containers not in use
         */
        post: operations["ContainerPruneLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/showmounted": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Show mounted containers
         * @description Lists all mounted containers mount points
         */
        get: operations["ContainerShowMountedLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/containers/stats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get stats for one or more containers
         * @description Return a live stream of resource usage statistics of one or more container. If no container is specified, the statistics of all containers are returned.
         */
        get: operations["ContainersStatsAllLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get events
         * @description Returns events filtered on query parameters
         */
        get: operations["SystemEventsLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/exec/{id}/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Inspect an exec instance
         * @description Return low-level information about an exec instance.
         */
        get: operations["ExecInspectLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/exec/{id}/resize": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Resize an exec instance
         * @description Resize the TTY session used by an exec instance. This endpoint only works if tty was specified as part of creating and starting the exec instance.
         *
         */
        post: operations["ExecResizeLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/exec/{id}/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start an exec instance
         * @description Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command.
         *     Otherwise, it sets up an interactive session with the command. The stream format is the same as the attach endpoint.
         *
         */
        post: operations["ExecStartLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/generate/{name}/systemd": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Generate Systemd Units
         * @description Generate Systemd Units based on a pod or container.
         */
        get: operations["GenerateSystemdLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/generate/kube": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Generate a Kubernetes YAML file.
         * @description Generate Kubernetes YAML based on a pod or container.
         */
        get: operations["GenerateKubeLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Remove an image from the local storage.
         * @description Remove an image from the local storage.
         */
        delete: operations["ImageDeleteLibpod"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/{name}/changes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Report on changes to images's filesystem; adds, deletes or modifications.
         * @description Returns which files in an image's filesystem have been added, deleted, or modified. The Kind of modification can be one of:
         *
         *     0: Modified
         *     1: Added
         *     2: Deleted
         *
         */
        get: operations["ImageChangesLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/{name}/exists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Image exists
         * @description Check if image exists in local store
         */
        get: operations["ImageExistsLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/{name}/get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Export an image
         * @description Export an image
         */
        get: operations["ImageGetLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/{name}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * History of an image
         * @description Return parent layers of an image.
         */
        get: operations["ImageHistoryLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/{name}/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Inspect an image
         * @description Obtain low-level information about an image
         */
        get: operations["ImageInspectLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/{name}/push": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Push Image
         * @description Push an image to a container registry
         */
        post: operations["ImagePushLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/{name}/resolve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Resolve an image (short) name
         * @description Resolve the passed image name to a list of fully-qualified images referring to container registries.
         */
        get: operations["ImageResolveLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/{name}/tag": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Tag an image
         * @description Tag an image so that it becomes part of a repository.
         */
        post: operations["ImageTagLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/{name}/tree": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Image tree
         * @description Retrieve the image tree for the provided image name or ID
         */
        get: operations["ImageTreeLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/{name}/untag": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Untag an image
         * @description Untag an image. If not repo and tag are specified, all tags are removed from the image.
         */
        post: operations["ImageUntagLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Export multiple images
         * @description Export multiple images into a single object. Only `docker-archive` is currently supported.
         */
        get: operations["ImageExportLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/import": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Import image
         * @description Import a previously exported tarball as an image.
         */
        post: operations["ImageImportLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Images
         * @description Returns a list of images on the server
         */
        get: operations["ImageListLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/load": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Load image
         * @description Load an image (oci-archive or docker-archive) stream.
         */
        post: operations["ImageLoadLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/prune": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Prune unused images
         * @description Remove images that are not being used by a container
         */
        post: operations["ImagePruneLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/pull": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Pull images
         * @description Pull one or more images from a container registry.
         */
        post: operations["ImagePullLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/remove": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Remove one or more images from the storage.
         * @description Remove one or more images from the storage.
         */
        delete: operations["ImageDeleteAllLibpod"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/scp/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Copy an image from one host to another
         * @description Copy an image from one host to another
         */
        post: operations["ImageScpLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/images/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search images
         * @description Search registries for images
         */
        get: operations["ImageSearchLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get info
         * @description Returns information on the system and libpod configuration
         */
        get: operations["SystemInfoLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/kube/apply": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Apply a podman workload or Kubernetes YAML file.
         * @description Deploy a podman container, pod, volume, or Kubernetes yaml to a Kubernetes cluster.
         */
        post: operations["KubeApplyLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/manifests/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Modify manifest list
         * @description Add/Remove an image(s) to a manifest list
         *
         *     Note: operations are not atomic when multiple Images are provided.
         *
         *     As of v4.0.0
         *
         */
        put: operations["ManifestModifyLibpod"];
        /**
         * Create
         * @description Create a manifest list
         */
        post: operations["ManifestCreateLibpod"];
        /**
         * Delete manifest list
         * @description Delete named manifest list
         *
         *     As of v4.0.0
         *
         */
        delete: operations["ManifestDeleteLibpod"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/manifests/{name}/add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add image
         * @description Add an image to a manifest list
         *
         *     Deprecated: As of 4.0.0 use ManifestModifyLibpod instead
         *
         */
        post: operations["ManifestAddLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/manifests/{name}/exists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Exists
         * @description Check if manifest list exists
         *
         *     Note: There is no contract that the manifest list will exist for a follow-on operation
         *
         */
        get: operations["ManifestExistsLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/manifests/{name}/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Inspect
         * @description Display attributes of given manifest list
         */
        get: operations["ManifestInspectLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/manifests/{name}/push": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Push manifest to registry
         * @description Push a manifest list or image index to a registry
         *
         *     Deprecated: As of 4.0.0 use ManifestPushLibpod instead
         *
         */
        post: operations["ManifestPushV3Libpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/manifests/{name}/registry/{destination}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Push manifest list to registry
         * @description Push a manifest list or image index to the named registry
         *
         *     As of v4.0.0
         *
         */
        post: operations["ManifestPushLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/networks/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Remove a network
         * @description Remove a configured network
         */
        delete: operations["NetworkDeleteLibpod"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/networks/{name}/connect": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Connect container to network
         * @description Connect a container to a network.
         */
        post: operations["NetworkConnectLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/networks/{name}/disconnect": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Disconnect container from network
         * @description Disconnect a container from a network.
         */
        post: operations["NetworkDisconnectLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/networks/{name}/exists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Network exists
         * @description Check if network exists
         */
        get: operations["NetworkExistsLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/networks/{name}/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Inspect a network
         * @description Display configuration for a network.
         *
         */
        get: operations["NetworkInspectLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/networks/{name}/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update existing podman network
         * @description Update existing podman network
         */
        post: operations["NetworkUpdateLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/networks/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create network
         * @description Create a new network configuration
         */
        post: operations["NetworkCreateLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/networks/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List networks
         * @description Display summary of network configurations.
         *       - In a 200 response, all of the fields named Bytes are returned as a Base64 encoded string.
         *
         */
        get: operations["NetworkListLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/networks/prune": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Delete unused networks
         * @description Remove networks that do not have containers
         */
        post: operations["NetworkPruneLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/play/kube": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Play a Kubernetes YAML file.
         * @description Create and run pods based on a Kubernetes YAML file.
         *
         *     ### Content-Type
         *
         *     Then endpoint support two Content-Type
         *      - `plain/text` for yaml format
         *      - `application/x-tar` for sending context(s) required for building images
         *
         *     #### Tar format
         *
         *     The tar format must contain a `play.yaml` file at the root that will be used.
         *     If the file format requires context to build an image, it uses the image name and
         *     check for corresponding folder.
         *
         *     For example, the client sends a tar file with the following structure:
         *
         *     ```
         *     └── content.tar
         *      ├── play.yaml
         *      └── foobar/
         *          └── Containerfile
         *     ```
         *
         *     The `play.yaml` is the following, the `foobar` image means we are looking for a context with this name.
         *     ```
         *     apiVersion: v1
         *     kind: Pod
         *     metadata:
         *     name: demo-build-remote
         *     spec:
         *     containers:
         *      - name: container
         *        image: foobar
         *     ```
         *
         */
        post: operations["PlayKubeLibpod"];
        /**
         * Remove resources created from kube play
         * @description Tears down pods, secrets, and volumes defined in a YAML file
         */
        delete: operations["PlayKubeDownLibpod"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/pods/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Remove pod */
        delete: operations["PodDeleteLibpod"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/pods/{name}/exists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pod exists
         * @description Check if a pod exists by name or ID
         */
        get: operations["PodExistsLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/pods/{name}/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Inspect pod */
        get: operations["PodInspectLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/pods/{name}/kill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Kill a pod */
        post: operations["PodKillLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/pods/{name}/pause": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Pause a pod
         * @description Pause a pod
         */
        post: operations["PodPauseLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/pods/{name}/restart": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Restart a pod */
        post: operations["PodRestartLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/pods/{name}/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Start a pod */
        post: operations["PodStartLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/pods/{name}/stop": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Stop a pod */
        post: operations["PodStopLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/pods/{name}/top": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List processes
         * @description List processes running inside a pod
         */
        get: operations["PodTopLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/pods/{name}/unpause": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Unpause a pod */
        post: operations["PodUnpauseLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/pods/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a pod */
        post: operations["PodCreateLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/pods/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List pods */
        get: operations["PodListLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/pods/prune": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Prune unused pods */
        post: operations["PodPruneLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/pods/stats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Statistics for one or more pods
         * @description Display a live stream of resource usage statistics for the containers in one or more pods
         */
        get: operations["PodStatsAllLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/secrets/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Remove secret */
        delete: operations["SecretDeleteLibpod"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/secrets/{name}/exists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Secret exists */
        get: operations["SecretExistsLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/secrets/{name}/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Inspect secret */
        get: operations["SecretInspectLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/secrets/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a secret */
        post: operations["SecretCreateLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/secrets/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List secrets
         * @description Returns a list of secrets
         */
        get: operations["SecretListLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/system/check": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Performs consistency checks on storage, optionally removing items which fail checks */
        post: operations["SystemCheckLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/system/df": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Show disk usage
         * @description Return information about disk usage for containers, images, and volumes
         */
        get: operations["SystemDataUsageLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/system/prune": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Prune unused data */
        post: operations["SystemPruneLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/version": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Component Version information */
        get: operations["SystemVersionLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/volumes/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Remove volume */
        delete: operations["VolumeDeleteLibpod"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/volumes/{name}/exists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Volume exists
         * @description Check if a volume exists
         */
        get: operations["VolumeExistsLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/volumes/{name}/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Inspect volume */
        get: operations["VolumeInspectLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/volumes/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a volume */
        post: operations["VolumeCreateLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/volumes/json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List volumes
         * @description Returns a list of volumes
         */
        get: operations["VolumeListLibpod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/libpod/volumes/prune": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Prune volumes */
        post: operations["VolumePruneLibpod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/networks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List networks
         * @description Display summary of network configurations
         */
        get: operations["NetworkList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/networks/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Inspect a network
         * @description Display low level configuration network
         */
        get: operations["NetworkInspect"];
        put?: never;
        post?: never;
        /**
         * Remove a network
         * @description Remove a network
         */
        delete: operations["NetworkDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/networks/{name}/connect": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Connect container to network
         * @description Connect a container to a network
         */
        post: operations["NetworkConnect"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/networks/{name}/disconnect": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Disconnect container from network
         * @description Disconnect a container from a network
         */
        post: operations["NetworkDisconnect"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/networks/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create network
         * @description Create a network configuration
         */
        post: operations["NetworkCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/networks/prune": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Delete unused networks
         * @description Remove networks that do not have containers
         */
        post: operations["NetworkPrune"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/secrets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List secrets
         * @description Returns a list of secrets
         */
        get: operations["SecretList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/secrets/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Inspect secret */
        get: operations["SecretInspect"];
        put?: never;
        post?: never;
        /** Remove secret */
        delete: operations["SecretDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/secrets/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a secret */
        post: operations["SecretCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/system/df": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Show disk usage
         * @description Return information about disk usage for containers, images, and volumes
         */
        get: operations["SystemDataUsage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/version": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Component Version information */
        get: operations["SystemVersion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/volumes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List volumes
         * @description Returns a list of volume
         */
        get: operations["VolumeList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/volumes/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Inspect volume */
        get: operations["VolumeInspect"];
        put?: never;
        post?: never;
        /** Remove volume */
        delete: operations["VolumeDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/volumes/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a volume */
        post: operations["VolumeCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/volumes/prune": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Prune volumes */
        post: operations["VolumePrune"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** AccessMode defines the access mode of a volume. */
        AccessMode: {
            BlockVolume?: components["schemas"]["TypeBlock"];
            MountVolume?: components["schemas"]["TypeMount"];
            Scope?: components["schemas"]["Scope"];
            Sharing?: components["schemas"]["SharingMode"];
        };
        /** Address represents an IP address. */
        Address: {
            Addr?: string;
            /** Format: int64 */
            PrefixLength?: number;
        };
        AttestationProperties: {
            For?: components["schemas"]["Digest"];
        };
        /** @description AuthConfig contains authorization information for connecting to a Registry */
        AuthConfig: {
            auth?: string;
            /** @description Email is an optional value associated with the username.
             *     This field is deprecated and will be removed in a later
             *     version of docker. */
            email?: string;
            /** @description IdentityToken is used to authenticate the user and get
             *     an access token for the registry. */
            identitytoken?: string;
            password?: string;
            /** @description RegistryToken is a bearer token to be sent to a registry */
            registrytoken?: string;
            serveraddress?: string;
            username?: string;
        };
        /** @description AuthReport describes the response for authentication check */
        AuthReport: {
            IdentityToken?: string;
            Status?: string;
        };
        /** @description AuthenticateOKBody authenticate o k body */
        AuthenticateOKBody: {
            /** @description An opaque token used to authenticate a user after a successful login */
            IdentityToken: string;
            /** @description The status of the authentication */
            Status: string;
        };
        /** AutoUserNsOptions defines how to automatically create a user namespace. */
        AutoUserNsOptions: {
            /** @description AdditionalGIDMappings specified additional GID mappings to include in
             *     the generated user namespace. */
            AdditionalGIDMappings?: components["schemas"]["IDMap"][];
            /** @description AdditionalUIDMappings specified additional UID mappings to include in
             *     the generated user namespace. */
            AdditionalUIDMappings?: components["schemas"]["IDMap"][];
            /** @description GroupFile to use if the container uses a volume. */
            GroupFile?: string;
            /**
             * Format: uint32
             * @description InitialSize defines the minimum size for the user namespace.
             *     The created user namespace will have at least this size.
             */
            InitialSize?: number;
            /** @description PasswdFile to use if the container uses a volume. */
            PasswdFile?: string;
            /**
             * Format: uint32
             * @description Size defines the size for the user namespace.  If it is set to a
             *     value bigger than 0, the user namespace will have exactly this size.
             *     If it is not set, some heuristics will be used to find its size.
             */
            Size?: number;
        };
        /** Availability specifies the availability of the volume. */
        Availability: string;
        /** BindOptions defines options specific to mounts of type "bind". */
        BindOptions: {
            CreateMountpoint?: boolean;
            NonRecursive?: boolean;
            Propagation?: components["schemas"]["Propagation"];
            /** @description ReadOnlyForceRecursive raises an error if the mount cannot be made recursively read-only. */
            ReadOnlyForceRecursive?: boolean;
            /** @description ReadOnlyNonRecursive makes the mount non-recursively read-only, but still leaves the mount recursive
             *     (unless NonRecursive is set to true in conjunction). */
            ReadOnlyNonRecursive?: boolean;
        };
        CPUUsage: {
            /** Format: double */
            idlePercent?: number;
            /** Format: double */
            systemPercent?: number;
            /** Format: double */
            userPercent?: number;
        };
        /** @description CapacityRange describes the minimum and maximum capacity a volume should be
         *     created with */
        CapacityRange: {
            /**
             * Format: int64
             * @description LimitBytes specifies that a volume must not be bigger than this. The
             *     value of 0 indicates an unspecified maximum
             */
            LimitBytes?: number;
            /**
             * Format: int64
             * @description RequiredBytes specifies that a volume must be at least this big. The
             *     value of 0 indicates an unspecified minimum.
             */
            RequiredBytes?: number;
        };
        /** CgroupSpec represents the cgroup to use for the container. */
        CgroupSpec: string;
        /** @description CgroupnsMode represents the cgroup namespace mode of the container */
        CgroupnsMode: string;
        /**
         * ChangeType Kind of change
         * Format: uint8
         * @description Can be one of:
         *
         *     `0`: Modified ("C")
         *     `1`: Added ("A")
         *     `2`: Deleted ("D")
         */
        ChangeType: number;
        /** ClusterOptions specifies options for a Cluster volume. */
        ClusterOptions: Record<string, never>;
        /** @description ClusterVolume contains options and information specific to, and only present
         *     on, Swarm CSI cluster volumes. */
        ClusterVolume: {
            /** Format: date-time */
            CreatedAt?: string;
            /** @description ID is the Swarm ID of the volume. Because cluster volumes are Swarm
             *     objects, they have an ID, unlike non-cluster volumes, which only have a
             *     Name. This ID can be used to refer to the cluster volume. */
            ID?: string;
            Info?: components["schemas"]["Info"];
            /** @description PublishStatus contains the status of the volume as it pertains to its
             *     publishing on Nodes. */
            PublishStatus?: components["schemas"]["PublishStatus"][];
            Spec?: components["schemas"]["ClusterVolumeSpec"];
            /** Format: date-time */
            UpdatedAt?: string;
            Version?: components["schemas"]["Version"];
        };
        /** ClusterVolumeSpec contains the spec used to create this volume. */
        ClusterVolumeSpec: {
            AccessMode?: components["schemas"]["AccessMode"];
            AccessibilityRequirements?: components["schemas"]["TopologyRequirement"];
            Availability?: components["schemas"]["Availability"];
            CapacityRange?: components["schemas"]["CapacityRange"];
            /** @description Group defines the volume group of this volume. Volumes belonging to the
             *     same group can be referred to by group name when creating Services.
             *     Referring to a volume by group instructs swarm to treat volumes in that
             *     group interchangeably for the purpose of scheduling. Volumes with an
             *     empty string for a group technically all belong to the same, emptystring
             *     group. */
            Group?: string;
            /** @description Secrets defines Swarm Secrets that are passed to the CSI storage plugin
             *     when operating on this volume. */
            Secrets?: components["schemas"]["Secret"][];
        };
        /** ComponentVersion describes the version information for a specific component. */
        ComponentVersion: {
            Details?: {
                [key: string]: string;
            };
            Name?: string;
            Version?: string;
        };
        /**
         * Config contains the configuration data about a container.
         * @description It should hold only portable information about the container.
         *     Here, "portable" means "independent from the host we are running on".
         *     Non-portable information *should* appear in HostConfig.
         *     All fields added to this struct must be marked `omitempty` to keep getting
         *     predictable hashes from the old `v1Compatibility` configuration.
         */
        Config: {
            ArgsEscaped?: boolean;
            AttachStderr?: boolean;
            AttachStdin?: boolean;
            AttachStdout?: boolean;
            Cmd?: components["schemas"]["StrSlice"];
            Domainname?: string;
            Entrypoint?: components["schemas"]["StrSlice"];
            Env?: string[];
            ExposedPorts?: components["schemas"]["PortSet"];
            Healthcheck?: components["schemas"]["HealthcheckConfig"];
            Hostname?: string;
            Image?: string;
            Labels?: {
                [key: string]: string;
            };
            /** @description Mac Address of the container.
             *
             *     Deprecated: this field is deprecated since API v1.44. Use EndpointSettings.MacAddress instead. */
            MacAddress?: string;
            NetworkDisabled?: boolean;
            OnBuild?: string[];
            OpenStdin?: boolean;
            Shell?: components["schemas"]["StrSlice"];
            StdinOnce?: boolean;
            StopSignal?: string;
            /** Format: int64 */
            StopTimeout?: number;
            Tty?: boolean;
            User?: string;
            Volumes?: {
                [key: string]: Record<string, never>;
            };
            WorkingDir?: string;
        };
        /** @description ConfigReference specifies the source which provides a network's configuration */
        ConfigReference: {
            Network?: string;
        };
        /** @description ConmonInfo describes the conmon executable being used */
        ConmonInfo: {
            package?: string;
            path?: string;
            version?: string;
        };
        /** @description ConnectOptions represents the data to be used to connect a container to the
         *     network. */
        ConnectOptions: {
            Container?: string;
            EndpointConfig?: components["schemas"]["EndpointSettings"];
        };
        /** Consistency represents the consistency requirements of a mount. */
        Consistency: string;
        Container: {
            Command?: string;
            Config?: components["schemas"]["Config"];
            /** Format: int64 */
            Created?: number;
            DefaultReadOnlyNonRecursive?: boolean;
            HostConfig?: components["schemas"]["HostConfig"];
            Id?: string;
            Image?: string;
            ImageID?: string;
            Labels?: {
                [key: string]: string;
            };
            Mounts?: components["schemas"]["MountPoint"][];
            Name?: string;
            Names?: string[];
            NetworkSettings?: components["schemas"]["SummaryNetworkSettings"];
            NetworkingConfig?: components["schemas"]["NetworkingConfig"];
            Platform?: components["schemas"]["Platform"];
            Ports?: components["schemas"]["Port"][];
            /** Format: int64 */
            SizeRootFs?: number;
            /** Format: int64 */
            SizeRw?: number;
            State?: string;
            Status?: string;
        };
        /** ContainerBasicConfig contains the basic parts of a container. */
        ContainerBasicConfig: {
            /** @description Annotations are key-value options passed into the container runtime
             *     that can be used to trigger special behavior.
             *     Optional. */
            annotations?: {
                [key: string]: string;
            };
            /** @description Command is the container's command.
             *     If not given and Image is specified, this will be populated by the
             *     image's configuration.
             *     Optional. */
            command?: string[];
            /** @description ConmonPidFile is a path at which a PID file for Conmon will be
             *     placed.
             *     If not given, a default location will be used.
             *     Optional. */
            conmon_pid_file?: string;
            /** @description ContainerCreateCommand is the command that was used to create this
             *     container.
             *     This will be shown in the output of Inspect() on the container, and
             *     may also be used by some tools that wish to recreate the container
             *     (e.g. `podman generate systemd --new`).
             *     Optional. */
            containerCreateCommand?: string[];
            /** @description DependencyContainers is an array of containers this container
             *     depends on. Dependency containers must be started before this
             *     container. Dependencies can be specified by name or full/partial ID.
             *     Optional. */
            dependencyContainers?: string[];
            /** @description Entrypoint is the container's entrypoint.
             *     If not given and Image is specified, this will be populated by the
             *     image's configuration.
             *     Optional. */
            entrypoint?: string[];
            /** @description Env is a set of environment variables that will be set in the
             *     container.
             *     Optional. */
            env?: {
                [key: string]: string;
            };
            /** @description EnvHost indicates that the host environment should be added to container
             *     Optional. */
            env_host?: boolean;
            /** @description EnvMerge takes the specified environment variables from image and preprocess them before injecting them into the
             *     container.
             *     Optional. */
            envmerge?: string[];
            /** @description GroupEntry specifies an arbitrary string to append to the container's /etc/group file.
             *     Optional. */
            group_entry?: string;
            /** @description Hostname is the container's hostname. If not set, the hostname will
             *     not be modified (if UtsNS is not private) or will be set to the
             *     container ID (if UtsNS is private).
             *     Conflicts with UtsNS if UtsNS is not set to private.
             *     Optional. */
            hostname?: string;
            /** @description HostUsers is a list of host usernames or UIDs to add to the container
             *     etc/passwd file */
            hostusers?: string[];
            /** @description EnvHTTPProxy indicates that the http host proxy environment variables
             *     should be added to container
             *     Optional. */
            httpproxy?: boolean;
            /** @description InitContainerType describes if this container is an init container
             *     and if so, what type: always or once.
             *     Optional. */
            init_container_type?: string;
            /** @description Labels are key-value pairs that are used to add metadata to
             *     containers.
             *     Optional. */
            labels?: {
                [key: string]: string;
            };
            log_configuration?: components["schemas"]["LogConfigLibpod"];
            /** @description Passwd is a container run option that determines if we are validating users/groups before running the container */
            manage_password?: boolean;
            /** @description Name is the name the container will be given.
             *     If no name is provided, one will be randomly generated.
             *     Optional. */
            name?: string;
            /** @description OCIRuntime is the name of the OCI runtime that will be used to create
             *     the container.
             *     If not specified, the default will be used.
             *     Optional. */
            oci_runtime?: string;
            /** @description PasswdEntry specifies an arbitrary string to append to the container's /etc/passwd file.
             *     Optional. */
            passwd_entry?: string;
            personality?: components["schemas"]["LinuxPersonality"];
            pidns?: components["schemas"]["Namespace"];
            /** @description Pod is the ID of the pod the container will join.
             *     Optional. */
            pod?: string;
            /** @description Remove indicates if the container should be removed once it has been started
             *     and exits.
             *     Optional. */
            remove?: boolean;
            /** @description RemoveImage indicates that the container should remove the image it
             *     was created from after it exits.
             *     Only allowed if Remove is set to true and Image, not Rootfs, is in
             *     use.
             *     Optional. */
            removeImage?: boolean;
            /** @description RestartPolicy is the container's restart policy - an action which
             *     will be taken when the container exits.
             *     If not given, the default policy, which does nothing, will be used.
             *     Optional. */
            restart_policy?: string;
            /**
             * Format: uint64
             * @description RestartRetries is the number of attempts that will be made to restart
             *     the container.
             *     Only available when RestartPolicy is set to "on-failure".
             *     Optional.
             */
            restart_tries?: number;
            /** @description Determine how to handle the NOTIFY_SOCKET - do we participate or pass it through
             *     "container" - let the OCI runtime deal with it, advertise conmon's MAINPID
             *     "conmon-only" - advertise conmon's MAINPID, send READY when started, don't pass to OCI
             *     "ignore" - unset NOTIFY_SOCKET
             *     Optional. */
            sdnotifyMode?: string;
            /** @description EnvSecrets are secrets that will be set as environment variables
             *     Optional. */
            secret_env?: {
                [key: string]: string;
            };
            /** @description Stdin is whether the container will keep its STDIN open.
             *     Optional. */
            stdin?: boolean;
            stop_signal?: components["schemas"]["Signal"];
            /**
             * Format: uint64
             * @description StopTimeout is a timeout between the container's stop signal being
             *     sent and SIGKILL being sent.
             *     If not provided, the default will be used.
             *     If 0 is used, stop signal will not be sent, and SIGKILL will be sent
             *     instead.
             *     Optional.
             */
            stop_timeout?: number;
            /** @description Sysctl sets kernel parameters for the container */
            sysctl?: {
                [key: string]: string;
            };
            /** @description Systemd is whether the container will be started in systemd mode.
             *     Valid options are "true", "false", and "always".
             *     "true" enables this mode only if the binary run in the container is
             *     sbin/init or systemd. "always" unconditionally enables systemd mode.
             *     "false" unconditionally disables systemd mode.
             *     If enabled, mounts and stop signal will be modified.
             *     If set to "always" or set to "true" and conditionally triggered,
             *     conflicts with StopSignal.
             *     If not specified, "false" will be assumed.
             *     Optional. */
            systemd?: string;
            /** @description Terminal is whether the container will create a PTY.
             *     Optional. */
            terminal?: boolean;
            /**
             * Format: uint64
             * @description Timeout is a maximum time in seconds the container will run before
             *     main process is sent SIGKILL.
             *     If 0 is used, signal will not be sent. Container can run indefinitely
             *     if they do not stop after the default termination signal.
             *     Optional.
             */
            timeout?: number;
            /** @description Timezone is the timezone inside the container.
             *     Local means it has the same timezone as the host machine
             *     Optional. */
            timezone?: string;
            /** @description UnsetEnv unsets the specified default environment variables from the image or from built-in or containers.conf
             *     Optional. */
            unsetenv?: string[];
            /** @description UnsetEnvAll unsetall default environment variables from the image or from built-in or containers.conf
             *     UnsetEnvAll unsets all default environment variables from the image or from built-in
             *     Optional. */
            unsetenvall?: boolean;
            utsns?: components["schemas"]["Namespace"];
        };
        /** @description ContainerCgroupConfig contains configuration information about a container's
         *     cgroups. */
        ContainerCgroupConfig: {
            /** @description CgroupParent is the container's Cgroup parent.
             *     If not set, the default for the current cgroup driver will be used.
             *     Optional. */
            cgroup_parent?: string;
            cgroupns?: components["schemas"]["Namespace"];
            /** @description CgroupsMode sets a policy for how cgroups will be created for the
             *     container, including the ability to disable creation entirely.
             *     Optional. */
            cgroups_mode?: string;
        };
        /** @description ContainerCreateResponse is the response struct for creating a container */
        ContainerCreateResponse: {
            /** @description ID of the container created */
            Id: string;
            /** @description Warnings during container creation */
            Warnings: string[];
        };
        /** @description ContainerHealthCheckConfig describes a container healthcheck with attributes
         *     like command, retries, interval, start period, and timeout. */
        ContainerHealthCheckConfig: {
            health_check_on_failure_action?: components["schemas"]["HealthCheckOnFailureAction"];
            /** @description HealthLogDestination defines the destination where the log is stored */
            healthLogDestination?: string;
            /**
             * Format: uint64
             * @description HealthMaxLogCount is maximum number of attempts in the HealthCheck log file.
             *     ('0' value means an infinite number of attempts in the log file)
             */
            healthMaxLogCount?: number;
            /**
             * Format: uint64
             * @description HealthMaxLogSize is the maximum length in characters of stored HealthCheck log
             *     ("0" value means an infinite log length)
             */
            healthMaxLogSize?: number;
            healthconfig?: components["schemas"]["Schema2HealthConfig"];
            startupHealthConfig?: components["schemas"]["StartupHealthCheck"];
        };
        /** @description ContainerJSON is newly used struct along with MountPoint */
        ContainerJSON: {
            AppArmorProfile?: string;
            Args?: string[];
            Config?: components["schemas"]["Config"];
            Created?: string;
            Driver?: string;
            ExecIDs?: string[];
            GraphDriver?: components["schemas"]["GraphDriverData"];
            HostConfig?: components["schemas"]["HostConfig"];
            HostnamePath?: string;
            HostsPath?: string;
            Id?: string;
            Image?: string;
            LogPath?: string;
            MountLabel?: string;
            Mounts?: components["schemas"]["MountPoint"][];
            Name?: string;
            NetworkSettings?: components["schemas"]["NetworkSettings"];
            Node?: components["schemas"]["ContainerNode"];
            Path?: string;
            Platform?: string;
            ProcessLabel?: string;
            ResolvConfPath?: string;
            /** Format: int64 */
            RestartCount?: number;
            /** Format: int64 */
            SizeRootFs?: number;
            /** Format: int64 */
            SizeRw?: number;
            State?: components["schemas"]["ContainerState"];
        };
        /** @description ContainerNetworkConfig contains information on a container's network
         *     configuration. */
        ContainerNetworkConfig: {
            /** @description Map of networks names or ids that the container should join.
             *     You can request additional settings for each network, you can
             *     set network aliases, static ips, static mac address  and the
             *     network interface name for this container on the specific network.
             *     If the map is empty and the bridge network mode is set the container
             *     will be joined to the default network.
             *     Optional. */
            Networks?: {
                [key: string]: components["schemas"]["PerNetworkOptions"];
            };
            /** @description BaseHostsFile is the base file to create the `/etc/hosts` file inside the container.
             *     This must either be an absolute path to a file on the host system, or one of the
             *     special flags `image` or `none`.
             *     If it is empty it defaults to the base_hosts_file configuration in containers.conf.
             *     Optional. */
            base_hosts_file?: string;
            /** @description CNINetworks is a list of CNI networks to join the container to.
             *     If this list is empty, the default CNI network will be joined
             *     instead. If at least one entry is present, we will not join the
             *     default network (unless it is part of this list).
             *     Only available if NetNS is set to bridge.
             *     Optional.
             *     Deprecated: as of podman 4.0 use "Networks" instead. */
            cni_networks?: string[];
            /** @description DNSOptions is a set of DNS options that will be used in the
             *     container's resolv.conf, replacing the host's DNS options which are
             *     used by default.
             *     Conflicts with UseImageResolvConf.
             *     Optional. */
            dns_option?: string[];
            /** @description DNSSearch is a set of DNS search domains that will be used in the
             *     container's resolv.conf, replacing the host's DNS search domains
             *     which are used by default.
             *     Conflicts with UseImageResolvConf.
             *     Optional. */
            dns_search?: string[];
            /** @description DNSServers is a set of DNS servers that will be used in the
             *     container's resolv.conf, replacing the host's DNS Servers which are
             *     used by default.
             *     Conflicts with UseImageResolvConf.
             *     Optional. */
            dns_server?: string[];
            /** @description Expose is a number of ports that will be forwarded to the container
             *     if PublishExposedPorts is set.
             *     Expose is a map of uint16 (port number) to a string representing
             *     protocol i.e map[uint16]string. Allowed protocols are "tcp", "udp", and "sctp", or some
             *     combination of the three separated by commas.
             *     If protocol is set to "" we will assume TCP.
             *     Only available if NetNS is set to Bridge or Slirp, and
             *     PublishExposedPorts is set.
             *     Optional. */
            expose?: unknown;
            /** @description HostAdd is a set of hosts which will be added to the container's
             *     etc/hosts file.
             *     Conflicts with UseImageHosts.
             *     Optional. */
            hostadd?: string[];
            netns?: components["schemas"]["Namespace"];
            /** @description NetworkOptions are additional options for each network
             *     Optional. */
            network_options?: {
                [key: string]: string[];
            };
            /** @description PortBindings is a set of ports to map into the container.
             *     Only available if NetNS is set to bridge, slirp, or pasta.
             *     Optional. */
            portmappings?: components["schemas"]["PortMapping"][];
            /** @description PublishExposedPorts will publish ports specified in the image to
             *     random unused ports (guaranteed to be above 1024) on the host.
             *     This is based on ports set in Expose below, and any ports specified
             *     by the Image (if one is given).
             *     Only available if NetNS is set to Bridge or Slirp.
             *     Optional. */
            publish_image_ports?: boolean;
            /** @description UseImageHostname indicates that /etc/hostname should not be managed by
             *     Podman, and instead sourced from the image.
             *     Optional. */
            use_image_hostname?: boolean;
            /** @description UseImageHosts indicates that /etc/hosts should not be managed by
             *     Podman, and instead sourced from the image.
             *     Conflicts with HostAdd.
             *     Optional. */
            use_image_hosts?: boolean;
            /** @description UseImageResolvConf indicates that resolv.conf should not be managed
             *     by Podman, but instead sourced from the image.
             *     Conflicts with DNSServer, DNSSearch, DNSOption.
             *     Optional. */
            use_image_resolve_conf?: boolean;
        };
        /** @description Statistics for an individual container network interface */
        ContainerNetworkStats: {
            /** Format: uint64 */
            RxBytes?: number;
            /** Format: uint64 */
            RxDropped?: number;
            /** Format: uint64 */
            RxErrors?: number;
            /** Format: uint64 */
            RxPackets?: number;
            /** Format: uint64 */
            TxBytes?: number;
            /** Format: uint64 */
            TxDropped?: number;
            /** Format: uint64 */
            TxErrors?: number;
            /** Format: uint64 */
            TxPackets?: number;
        };
        /**
         * ContainerNode stores information about the node that a container
         *     is running on.  It's only used by the Docker Swarm standalone API.
         * @description Deprecated: ContainerNode was used for the classic Docker Swarm standalone API. It will be removed in the next release.
         */
        ContainerNode: {
            Addr?: string;
            /** Format: int64 */
            Cpus?: number;
            ID?: string;
            IP?: string;
            Labels?: {
                [key: string]: string;
            };
            /** Format: int64 */
            Memory?: number;
            Name?: string;
        };
        /** ContainerResourceConfig contains information on container resource limits. */
        ContainerResourceConfig: {
            intelRdt?: components["schemas"]["LinuxIntelRdt"];
            /**
             * Format: int64
             * @description OOMScoreAdj adjusts the score used by the OOM killer to determine
             *     processes to kill for the container's process.
             *     Optional.
             */
            oom_score_adj?: number;
            /** @description Rlimits are POSIX rlimits to apply to the container.
             *     Optional. */
            r_limits?: components["schemas"]["POSIXRlimit"][];
            resource_limits?: components["schemas"]["LinuxResources"];
            /** @description IO read rate limit per cgroup per device, bytes per second */
            throttleReadBpsDevice?: {
                [key: string]: components["schemas"]["LinuxThrottleDevice"];
            };
            /** @description IO read rate limit per cgroup per device, IO per second */
            throttleReadIOPSDevice?: {
                [key: string]: components["schemas"]["LinuxThrottleDevice"];
            };
            /** @description IO write rate limit per cgroup per device, bytes per second */
            throttleWriteBpsDevice?: {
                [key: string]: components["schemas"]["LinuxThrottleDevice"];
            };
            /** @description IO write rate limit per cgroup per device, IO per second */
            throttleWriteIOPSDevice?: {
                [key: string]: components["schemas"]["LinuxThrottleDevice"];
            };
            /** @description CgroupConf are key-value options passed into the container runtime
             *     that are used to configure cgroup v2.
             *     Optional. */
            unified?: {
                [key: string]: string;
            };
            /** @description Weight per cgroup per device, can override BlkioWeight */
            weightDevice?: {
                [key: string]: components["schemas"]["LinuxWeightDevice"];
            };
        };
        /** @description ContainerSecurityConfig is a container's security features, including
         *     SELinux, Apparmor, and Seccomp. */
        ContainerSecurityConfig: {
            /** @description ApparmorProfile is the name of the Apparmor profile the container
             *     will use.
             *     Optional. */
            apparmor_profile?: string;
            /** @description CapAdd are capabilities which will be added to the container.
             *     Conflicts with Privileged.
             *     Optional. */
            cap_add?: string[];
            /** @description CapDrop are capabilities which will be removed from the container.
             *     Conflicts with Privileged.
             *     Optional. */
            cap_drop?: string[];
            /** @description Groups are a list of supplemental groups the container's user will
             *     be granted access to.
             *     Optional. */
            groups?: string[];
            idmappings?: components["schemas"]["IDMappingOptions"];
            /** @description LabelNested indicates whether or not the container is allowed to
             *     run fully nested containers including SELinux labelling.
             *     Optional. */
            label_nested?: boolean;
            /** @description Mask is the path we want to mask in the container. This masks the paths
             *     given in addition to the default list.
             *     Optional */
            mask?: string[];
            /** @description NoNewPrivileges is whether the container will set the no new
             *     privileges flag on create, which disables gaining additional
             *     privileges (e.g. via setuid) in the container.
             *     Optional. */
            no_new_privileges?: boolean;
            /** @description Privileged is whether the container is privileged.
             *     Privileged does the following:
             *     Adds all devices on the system to the container.
             *     Adds all capabilities to the container.
             *     Disables Seccomp, SELinux, and Apparmor confinement.
             *     (Though SELinux can be manually re-enabled).
             *     TODO: this conflicts with things.
             *     TODO: this does more.
             *     Optional. */
            privileged?: boolean;
            /** @description ProcOpts are the options used for the proc mount. */
            procfs_opts?: string[];
            /** @description ReadOnlyFilesystem indicates that everything will be mounted
             *     as read-only.
             *     Optional. */
            read_only_filesystem?: boolean;
            /** @description ReadWriteTmpfs indicates that when running with a ReadOnlyFilesystem
             *     mount temporary file systems.
             *     Optional. */
            read_write_tmpfs?: boolean;
            /** @description SeccompPolicy determines which seccomp profile gets applied
             *     the container. valid values: empty,default,image */
            seccomp_policy?: string;
            /** @description SeccompProfilePath is the path to a JSON file containing the
             *     container's Seccomp profile.
             *     If not specified, no Seccomp profile will be used.
             *     Optional. */
            seccomp_profile_path?: string;
            /** @description SelinuxProcessLabel is the process label the container will use.
             *     If SELinux is enabled and this is not specified, a label will be
             *     automatically generated if not specified.
             *     Optional. */
            selinux_opts?: string[];
            /** @description Umask is the umask the init process of the container will be run with. */
            umask?: string;
            /** @description Unmask a path in the container. Some paths are masked by default,
             *     preventing them from being accessed within the container; this undoes
             *     that masking. If ALL is passed, all paths will be unmasked.
             *     Optional. */
            unmask?: string[];
            /** @description User is the user the container will be run as.
             *     Can be given as a UID or a username; if a username, it will be
             *     resolved within the container, using the container's /etc/passwd.
             *     If unset, the container will be run as root.
             *     Optional. */
            user?: string;
            userns?: components["schemas"]["Namespace"];
        };
        /** @description ContainerSize holds the size of the container's root filesystem and top
         *     read-write layer. */
        ContainerSize: {
            /** Format: int64 */
            rootFsSize?: number;
            /** Format: int64 */
            rwSize?: number;
        };
        /** @description ContainerState stores container's running state
         *     it's part of ContainerJSONBase and will return by "inspect" command */
        ContainerState: {
            Dead?: boolean;
            Error?: string;
            /** Format: int64 */
            ExitCode?: number;
            FinishedAt?: string;
            Health?: components["schemas"]["Health"];
            OOMKilled?: boolean;
            Paused?: boolean;
            /** Format: int64 */
            Pid?: number;
            Restarting?: boolean;
            Running?: boolean;
            StartedAt?: string;
            Status?: string;
        };
        /** @description ContainerStats contains the statistics information for a running container */
        ContainerStats: {
            /** Format: double */
            AvgCPU?: number;
            /** Format: uint64 */
            BlockInput?: number;
            /** Format: uint64 */
            BlockOutput?: number;
            /** Format: double */
            CPU?: number;
            /** Format: uint64 */
            CPUNano?: number;
            /** Format: uint64 */
            CPUSystemNano?: number;
            ContainerID?: string;
            /** Format: uint64 */
            Duration?: number;
            /** Format: uint64 */
            MemLimit?: number;
            /** Format: double */
            MemPerc?: number;
            /** Format: uint64 */
            MemUsage?: number;
            Name?: string;
            /** @description Map of interface name to network statistics for that interface. */
            Network?: {
                [key: string]: components["schemas"]["ContainerNetworkStats"];
            };
            /** Format: uint64 */
            PIDs?: number;
            PerCPU?: number[];
            /** Format: uint64 */
            SystemNano?: number;
            UpTime?: components["schemas"]["Duration"];
        };
        /** @description ContainerStorageConfig contains information on the storage configuration of a
         *     container. */
        ContainerStorageConfig: {
            /** @description ChrootDirs is an additional set of directories that need to be
             *     treated as root directories. Standard bind mounts will be mounted
             *     into paths relative to these directories.
             *     Optional. */
            chroot_directories?: string[];
            /** @description Create the working directory if it doesn't exist.
             *     If unset, it doesn't create it.
             *     Optional. */
            create_working_dir?: boolean;
            /** @description DeviceCgroupRule are device cgroup rules that allow containers
             *     to use additional types of devices. */
            device_cgroup_rule?: components["schemas"]["LinuxDeviceCgroup"][];
            /** @description Devices are devices that will be added to the container.
             *     Optional. */
            devices?: components["schemas"]["LinuxDevice"][];
            /** @description DevicesFrom specifies that this container will mount the device(s) from other container(s).
             *     Optional. */
            devices_from?: string[];
            /** @description HostDeviceList is used to recreate the mounted device on inherited containers */
            host_device_list?: components["schemas"]["LinuxDevice"][];
            /** @description Image is the image the container will be based on. The image will be
             *     used as the container's root filesystem, and its environment vars,
             *     volumes, and other configuration will be applied to the container.
             *     Conflicts with Rootfs.
             *     At least one of Image or Rootfs must be specified. */
            image?: string;
            /** @description ImageArch is the user-specified image architecture.
             *     Used to select a different variant from a manifest list.
             *     Optional. */
            image_arch?: string;
            /** @description ImageOS is the user-specified OS of the image.
             *     Used to select a different variant from a manifest list.
             *     Optional. */
            image_os?: string;
            /** @description ImageVariant is the user-specified image variant.
             *     Used to select a different variant from a manifest list.
             *     Optional. */
            image_variant?: string;
            /** @description ImageVolumeMode indicates how image volumes will be created.
             *     Supported modes are "ignore" (do not create), "tmpfs" (create as
             *     tmpfs), and "anonymous" (create as anonymous volumes).
             *     The default if unset is anonymous.
             *     Optional. */
            image_volume_mode?: string;
            /** @description Image volumes bind-mount a container-image mount into the container.
             *     Optional. */
            image_volumes?: components["schemas"]["ImageVolume"][];
            /** @description Init specifies that an init binary will be mounted into the
             *     container, and will be used as PID1.
             *     Optional. */
            init?: boolean;
            /** @description InitPath specifies the path to the init binary that will be added if
             *     Init is specified above. If not specified, the default set in the
             *     Libpod config will be used. Ignored if Init above is not set.
             *     Optional. */
            init_path?: string;
            ipcns?: components["schemas"]["Namespace"];
            /** @description Mounts are mounts that will be added to the container.
             *     These will supersede Image Volumes and VolumesFrom volumes where
             *     there are conflicts.
             *     Optional. */
            mounts?: components["schemas"]["Mount"][];
            /** @description Overlay volumes are named volumes that will be added to the container.
             *     Optional. */
            overlay_volumes?: components["schemas"]["OverlayVolume"][];
            /** @description RawImageName is the user-specified and unprocessed input referring
             *     to a local or a remote image.
             *     Optional, but strongly encouraged to be set if Image is set. */
            raw_image_name?: string;
            /** @description Rootfs is the path to a directory that will be used as the
             *     container's root filesystem. No modification will be made to the
             *     directory, it will be directly mounted into the container as root.
             *     Conflicts with Image.
             *     At least one of Image or Rootfs must be specified. */
            rootfs?: string;
            /** @description RootfsMapping specifies if there are UID/GID mappings to apply to the rootfs.
             *     Optional. */
            rootfs_mapping?: string;
            /** @description RootfsOverlay tells if rootfs is actually an overlay on top of base path.
             *     Optional. */
            rootfs_overlay?: boolean;
            /** @description RootfsPropagation is the rootfs propagation mode for the container.
             *     If not set, the default of rslave will be used.
             *     Optional. */
            rootfs_propagation?: string;
            /** @description Secrets are the secrets that will be added to the container
             *     Optional. */
            secrets?: components["schemas"]["Secret"][];
            /**
             * Format: int64
             * @description ShmSize is the size of the tmpfs to mount in at /dev/shm, in bytes.
             *     Conflicts with ShmSize if IpcNS is not private.
             *     Optional.
             */
            shm_size?: number;
            /**
             * Format: int64
             * @description ShmSizeSystemd is the size of systemd-specific tmpfs mounts
             *     specifically /run, /run/lock, /var/log/journal and /tmp.
             *     Optional
             */
            shm_size_systemd?: number;
            /** @description StorageOpts is the container's storage options
             *     Optional. */
            storage_opts?: {
                [key: string]: string;
            };
            /** @description Volatile specifies whether the container storage can be optimized
             *     at the cost of not syncing all the dirty files in memory.
             *     Optional. */
            volatile?: boolean;
            /** @description Volumes are named volumes that will be added to the container.
             *     These will supersede Image Volumes and VolumesFrom volumes where
             *     there are conflicts.
             *     Optional. */
            volumes?: components["schemas"]["NamedVolume"][];
            /** @description VolumesFrom is a set of containers whose volumes will be added to
             *     this container. The name or ID of the container must be provided, and
             *     may optionally be followed by a : and then one or more
             *     comma-separated options. Valid options are 'ro', 'rw', and 'z'.
             *     Options will be used for all volumes sourced from the container.
             *     Optional. */
            volumes_from?: string[];
            /** @description WorkDir is the container's working directory.
             *     If unset, the default, /, will be used.
             *     Optional. */
            work_dir?: string;
        };
        /** @description ContainerStore describes the quantity of containers in the
         *     store by status */
        ContainerStore: {
            /** Format: int64 */
            number?: number;
            /** Format: int64 */
            paused?: number;
            /** Format: int64 */
            running?: number;
            /** Format: int64 */
            stopped?: number;
        };
        /** @description ContainerTopOKBody OK response to ContainerTop operation */
        ContainerTopOKBody: {
            /** @description Each process running in the container, where each is process
             *     is an array of values corresponding to the titles. */
            Processes: string[][];
            /** @description The ps column titles */
            Titles: string[];
        };
        /** @description ContainerUpdateOKBody OK response to ContainerUpdate operation */
        ContainerUpdateOKBody: {
            /** @description warnings */
            Warnings: string[];
        };
        ContainersPruneReport: {
            ContainersDeleted?: string[];
            /** Format: uint64 */
            SpaceReclaimed?: number;
        };
        ContainersPruneReportLibpod: {
            /** @description Error which occurred during prune operation (if any).
             *     This field is optional and may be omitted if no error occurred. */
            Err?: string | null;
            Id?: string;
            /** Format: int64 */
            Size?: number;
        };
        /** @description CreateContainerConfig used when compatible endpoint creates a container */
        CreateContainerConfig: {
            ArgsEscaped?: boolean;
            AttachStderr?: boolean;
            AttachStdin?: boolean;
            AttachStdout?: boolean;
            Cmd?: components["schemas"]["StrSlice"];
            Domainname?: string;
            Entrypoint?: components["schemas"]["StrSlice"];
            Env?: string[];
            EnvMerge?: string[];
            ExposedPorts?: components["schemas"]["PortSet"];
            Healthcheck?: components["schemas"]["HealthcheckConfig"];
            HostConfig?: components["schemas"]["HostConfig"];
            Hostname?: string;
            Image?: string;
            Labels?: {
                [key: string]: string;
            };
            /** @description Mac Address of the container.
             *
             *     Deprecated: this field is deprecated since API v1.44. Use EndpointSettings.MacAddress instead. */
            MacAddress?: string;
            Name?: string;
            NetworkDisabled?: boolean;
            NetworkingConfig?: components["schemas"]["NetworkingConfig"];
            OnBuild?: string[];
            OpenStdin?: boolean;
            Shell?: components["schemas"]["StrSlice"];
            StdinOnce?: boolean;
            StopSignal?: string;
            /** Format: int64 */
            StopTimeout?: number;
            Tty?: boolean;
            UnsetEnv?: string[];
            UnsetEnvAll?: boolean;
            User?: string;
            Volumes?: {
                [key: string]: Record<string, never>;
            };
            WorkingDir?: string;
        };
        /** CreateOptions holds options to create a network. */
        CreateOptions: {
            Attachable?: boolean;
            ConfigFrom?: components["schemas"]["ConfigReference"];
            ConfigOnly?: boolean;
            /** @description Name of the volume driver to use. */
            Driver?: string;
            EnableIPv6?: boolean;
            IPAM?: components["schemas"]["IPAM"];
            Ingress?: boolean;
            Internal?: boolean;
            /** @description User-defined key/value metadata. */
            Labels?: {
                [key: string]: string;
            };
            Options?: {
                [key: string]: string;
            };
            Scope?: string;
        };
        /** CreateRequest is the request message sent to the server for network create call. */
        CreateRequest: {
            Attachable?: boolean;
            /** @description Deprecated: CheckDuplicate is deprecated since API v1.44, but it defaults to true when sent by the client
             *     package to older daemons. */
            CheckDuplicate?: boolean;
            ConfigFrom?: components["schemas"]["ConfigReference"];
            ConfigOnly?: boolean;
            Driver?: string;
            EnableIPv6?: boolean;
            IPAM?: components["schemas"]["IPAM"];
            Ingress?: boolean;
            Internal?: boolean;
            Labels?: {
                [key: string]: string;
            };
            Name?: string;
            Options?: {
                [key: string]: string;
            };
            Scope?: string;
        };
        /**
         * CreateResponse ContainerCreateResponse
         * @description OK response to ContainerCreate operation
         */
        CreateResponse: {
            /** @description The ID of the created container */
            Id: string;
            /** @description Warnings encountered when creating the container */
            Warnings: string[];
        };
        /** NetworkInfo contains the DNS information. */
        DNSNetworkInfo: {
            package?: string;
            path?: string;
            version?: string;
        };
        /** @description DeleteResponse delete response */
        DeleteResponse: {
            /** @description The image ID of an image that was deleted */
            Deleted?: string;
            /** @description The image ID of an image that was untagged */
            Untagged?: string;
        };
        /**
         * Descriptor describes the disposition of targeted content.
         * @description This structure provides `application/vnd.oci.descriptor.v1+json` mediatype
         *     when marshalled to JSON.
         */
        Descriptor: {
            /** @description Annotations contains arbitrary metadata relating to the targeted content. */
            annotations?: {
                [key: string]: string;
            };
            /** @description ArtifactType is the IANA media type of this artifact. */
            artifactType?: string;
            /** @description Data is an embedding of the targeted content. This is encoded as a base64
             *     string when marshalled to JSON (automatically, by encoding/json). If
             *     present, Data can be used directly to avoid fetching the targeted content. */
            data?: number[];
            digest?: components["schemas"]["Digest"];
            /** @description MediaType is the media type of the object this schema refers to. */
            mediaType?: string;
            platform?: components["schemas"]["Platform"];
            /**
             * Format: int64
             * @description Size specifies the size in bytes of the blob.
             */
            size?: number;
            /** @description URLs specifies a list of URLs from which this object MAY be downloaded */
            urls?: string[];
        };
        /** DeviceMapping represents the device mapping between the host and the container. */
        DeviceMapping: {
            CgroupPermissions?: string;
            PathInContainer?: string;
            PathOnHost?: string;
        };
        /**
         * DeviceRequest represents a request for devices from a device driver.
         * @description Used by GPU device drivers.
         */
        DeviceRequest: {
            Capabilities?: string[][];
            /** Format: int64 */
            Count?: number;
            DeviceIDs?: string[];
            Driver?: string;
            Options?: {
                [key: string]: string;
            };
        };
        /**
         * Digest allows simple protection of hex formatted digest strings, prefixed
         *     by their algorithm. Strings of type Digest have some guarantee of being in
         *     the correct format and it provides quick access to the components of a
         *     digest string.
         * @description The following is an example of the contents of Digest types:
         *
         *     sha256:7173b809ca12ec5dee4506cd86be934c4596dd234ee82c0662eac04a8c2c71dc
         *
         *     This allows to abstract the digest behind this type and work only in those
         *     terms.
         */
        Digest: string;
        /** @description DisconnectOptions represents the data to be used to disconnect a container
         *     from the network. */
        DisconnectOptions: {
            Container?: string;
            Force?: boolean;
        };
        /** @description DistributionInfo describes the host distribution for libpod */
        DistributionInfo: {
            codename?: string;
            distribution?: string;
            variant?: string;
            version?: string;
        };
        /** Driver represents a volume driver. */
        Driver: {
            Name?: string;
            Options?: {
                [key: string]: string;
            };
        };
        /** @description DriverData handles the data for a storage driver */
        DriverData: {
            Data?: {
                [key: string]: string;
            };
            Name?: string;
        };
        /**
         * Format: int64
         * @description A Duration represents the elapsed time between two instants
         *     as an int64 nanosecond count. The representation limits the
         *     largest representable duration to approximately 290 years.
         */
        Duration: number;
        /** @description EndpointIPAMConfig represents IPAM configurations for the endpoint */
        EndpointIPAMConfig: {
            IPv4Address?: string;
            IPv6Address?: string;
            LinkLocalIPs?: string[];
        };
        /** @description EndpointResource contains network resources allocated and used for a
         *     container in a network. */
        EndpointResource: {
            EndpointID?: string;
            IPv4Address?: string;
            IPv6Address?: string;
            MacAddress?: string;
            Name?: string;
        };
        /** @description EndpointSettings stores the network endpoint details */
        EndpointSettings: {
            Aliases?: string[];
            /** @description DNSNames holds all the (non fully qualified) DNS names associated to this endpoint. First entry is used to
             *     generate PTR records. */
            DNSNames?: string[];
            DriverOpts?: {
                [key: string]: string;
            };
            EndpointID?: string;
            Gateway?: string;
            GlobalIPv6Address?: string;
            /** Format: int64 */
            GlobalIPv6PrefixLen?: number;
            IPAMConfig?: components["schemas"]["EndpointIPAMConfig"];
            IPAddress?: string;
            /** Format: int64 */
            IPPrefixLen?: number;
            IPv6Gateway?: string;
            Links?: string[];
            /** @description MacAddress may be used to specify a MAC address when the container is created.
             *     Once the container is running, it becomes operational data (it may contain a
             *     generated address). */
            MacAddress?: string;
            /** @description Operational data */
            NetworkID?: string;
        };
        /** @description ErrorModel is used in remote connections with podman */
        ErrorModel: {
            /**
             * @description API root cause formatted for automated parsing
             * @example API root cause
             */
            cause?: string;
            /**
             * @description human error message, formatted for a human to read
             * @example human error message
             */
            message?: string;
            /**
             * Format: int64
             * @description HTTP response code
             */
            response?: number;
        };
        /** ErrorResponse Represents an error. */
        ErrorResponse: {
            /** @description The error message. */
            message: string;
        };
        /**
         * A FileMode represents a file's mode and permission bits.
         * Format: uint32
         * @description The bits have the same definition on all systems, so that
         *     information about files can be moved from one system
         *     to another portably. Not all bits apply to all systems.
         *     The only required bit is [ModeDir] for directories.
         */
        FileMode: number;
        /** FilesystemChange Change in the container's filesystem. */
        FilesystemChange: {
            Kind: components["schemas"]["ChangeType"];
            /** @description Path to file or directory that has changed. */
            Path: string;
        };
        /** @description GraphDriverData Information about the storage driver used to store the container's and
         *     image's filesystem. */
        GraphDriverData: {
            /** @description Low-level storage metadata, provided as key/value pairs.
             *
             *     This information is driver-specific, and depends on the storage-driver
             *     in use, and should be used for informational purposes only. */
            Data: {
                [key: string]: string;
            };
            /** @description Name of the storage driver. */
            Name: string;
        };
        /** A HardwareAddr represents a physical hardware address. */
        HardwareAddr: number[];
        /** @description Health stores information about the container's healthcheck results */
        Health: {
            /** Format: int64 */
            FailingStreak?: number;
            Log?: components["schemas"]["HealthcheckResult"][];
            Status?: string;
        };
        /** @description HealthCheckLog describes the results of a single healthcheck */
        HealthCheckLog: {
            /** @description End time as a string */
            End?: string;
            /**
             * Format: int64
             * @description Exitcode is 0 or 1
             */
            ExitCode?: number;
            /** @description Output is the stdout/stderr from the healthcheck command */
            Output?: string;
            /** @description Start time as string */
            Start?: string;
        };
        /**
         * Format: int64
         * @description HealthCheckOnFailureAction defines how Podman reacts when a container's health
         *     status turns unhealthy.
         */
        HealthCheckOnFailureAction: number;
        /** @description HealthCheckResults describes the results/logs from a healthcheck */
        HealthCheckResults: {
            /**
             * Format: int64
             * @description FailingStreak is the number of consecutive failed healthchecks
             */
            FailingStreak?: number;
            /** @description Log describes healthcheck attempts and results */
            Log?: components["schemas"]["HealthCheckLog"][];
            /** @description Status starting, healthy or unhealthy */
            Status?: string;
        };
        /** HealthcheckConfig holds configuration settings for the HEALTHCHECK feature. */
        HealthcheckConfig: {
            Interval?: components["schemas"]["Duration"];
            /**
             * Format: int64
             * @description Retries is the number of consecutive failures needed to consider a container as unhealthy.
             *     Zero means inherit.
             */
            Retries?: number;
            StartInterval?: components["schemas"]["Duration"];
            StartPeriod?: components["schemas"]["Duration"];
            /** @description Test is the test to perform to check that the container is healthy.
             *     An empty slice means to inherit the default.
             *     The options are:
             *     {} : inherit healthcheck
             *     {"NONE"} : disable healthcheck
             *     {"CMD", args...} : exec arguments directly
             *     {"CMD-SHELL", command} : run command with system's default shell */
            Test?: string[];
            Timeout?: components["schemas"]["Duration"];
        };
        /** @description HealthcheckResult stores information about a single run of a healthcheck probe */
        HealthcheckResult: {
            /** Format: date-time */
            End?: string;
            /** Format: int64 */
            ExitCode?: number;
            Output?: string;
            /** Format: date-time */
            Start?: string;
        };
        /** History describes the history of a layer. */
        History: {
            /** @description Author is the author of the build point. */
            author?: string;
            /** @description Comment is a custom message set when creating the layer. */
            comment?: string;
            /**
             * Format: date-time
             * @description Created is the combined date and time at which the layer was created, formatted as defined by RFC 3339, section 5.6.
             */
            created?: string;
            /** @description CreatedBy is the command which created the layer. */
            created_by?: string;
            /** @description EmptyLayer is used to mark if the history item created a filesystem diff. */
            empty_layer?: boolean;
        };
        /** @description HistoryResponse provides details on image layers */
        HistoryResponse: {
            Comment?: string;
            /** Format: int64 */
            Created?: number;
            CreatedBy?: string;
            Id?: string;
            /** Format: int64 */
            Size?: number;
            Tags?: string[];
        };
        /** @description HistoryResponseItem individual image layer information in response to ImageHistory operation */
        HistoryResponseItem: {
            /** @description comment */
            Comment: string;
            /**
             * Format: int64
             * @description created
             */
            Created: number;
            /** @description created by */
            CreatedBy: string;
            /** @description Id */
            Id: string;
            /**
             * Format: int64
             * @description size
             */
            Size: number;
            /** @description tags */
            Tags: string[];
        };
        /**
         * HostConfig the non-portable Config structure of a container.
         * @description Here, "non-portable" means "dependent of the host we are running on".
         *     Portable information *should* appear in Config.
         */
        HostConfig: {
            Annotations?: {
                [key: string]: string;
            };
            AutoRemove?: boolean;
            /** @description Applicable to all platforms */
            Binds?: string[];
            BlkioDeviceReadBps?: components["schemas"]["ThrottleDevice"][];
            BlkioDeviceReadIOps?: components["schemas"]["ThrottleDevice"][];
            BlkioDeviceWriteBps?: components["schemas"]["ThrottleDevice"][];
            BlkioDeviceWriteIOps?: components["schemas"]["ThrottleDevice"][];
            /** Format: uint16 */
            BlkioWeight?: number;
            BlkioWeightDevice?: components["schemas"]["WeightDevice"][];
            CapAdd?: components["schemas"]["StrSlice"];
            CapDrop?: components["schemas"]["StrSlice"];
            Cgroup?: components["schemas"]["CgroupSpec"];
            /** @description Applicable to UNIX platforms */
            CgroupParent?: string;
            CgroupnsMode?: components["schemas"]["CgroupnsMode"];
            ConsoleSize?: number[];
            ContainerIDFile?: string;
            /**
             * Format: int64
             * @description Applicable to Windows
             */
            CpuCount?: number;
            /** Format: int64 */
            CpuPercent?: number;
            /** Format: int64 */
            CpuPeriod?: number;
            /** Format: int64 */
            CpuQuota?: number;
            /** Format: int64 */
            CpuRealtimePeriod?: number;
            /** Format: int64 */
            CpuRealtimeRuntime?: number;
            /**
             * Format: int64
             * @description Applicable to all platforms
             */
            CpuShares?: number;
            CpusetCpus?: string;
            CpusetMems?: string;
            DeviceCgroupRules?: string[];
            DeviceRequests?: components["schemas"]["DeviceRequest"][];
            Devices?: components["schemas"]["DeviceMapping"][];
            Dns?: string[];
            DnsOptions?: string[];
            DnsSearch?: string[];
            ExtraHosts?: string[];
            GroupAdd?: string[];
            /** Format: uint64 */
            IOMaximumBandwidth?: number;
            /** Format: uint64 */
            IOMaximumIOps?: number;
            /** @description Run a custom init inside the container, if null, use the daemon's configured settings */
            Init?: boolean;
            IpcMode?: components["schemas"]["IpcMode"];
            Isolation?: components["schemas"]["Isolation"];
            /**
             * Format: int64
             * @description KernelMemory specifies the kernel memory limit (in bytes) for the container.
             *     Deprecated: kernel 5.4 deprecated kmem.limit_in_bytes.
             */
            KernelMemory?: number;
            /** Format: int64 */
            KernelMemoryTCP?: number;
            Links?: string[];
            LogConfig?: components["schemas"]["LogConfig"];
            /** @description MaskedPaths is the list of paths to be masked inside the container (this overrides the default set of paths) */
            MaskedPaths?: string[];
            /** Format: int64 */
            Memory?: number;
            /** Format: int64 */
            MemoryReservation?: number;
            /** Format: int64 */
            MemorySwap?: number;
            /** Format: int64 */
            MemorySwappiness?: number;
            /** @description Mounts specs used by the container */
            Mounts?: components["schemas"]["Mount"][];
            /** Format: int64 */
            NanoCpus?: number;
            NetworkMode?: components["schemas"]["NetworkMode"];
            OomKillDisable?: boolean;
            /** Format: int64 */
            OomScoreAdj?: number;
            PidMode?: components["schemas"]["PidMode"];
            /** Format: int64 */
            PidsLimit?: number;
            PortBindings?: components["schemas"]["PortMap"];
            Privileged?: boolean;
            PublishAllPorts?: boolean;
            /** @description ReadonlyPaths is the list of paths to be set as read-only inside the container (this overrides the default set of paths) */
            ReadonlyPaths?: string[];
            ReadonlyRootfs?: boolean;
            RestartPolicy?: components["schemas"]["RestartPolicy"];
            Runtime?: string;
            SecurityOpt?: string[];
            /** Format: int64 */
            ShmSize?: number;
            StorageOpt?: {
                [key: string]: string;
            };
            Sysctls?: {
                [key: string]: string;
            };
            Tmpfs?: {
                [key: string]: string;
            };
            UTSMode?: components["schemas"]["UTSMode"];
            Ulimits?: components["schemas"]["Ulimit"][];
            UsernsMode?: components["schemas"]["UsernsMode"];
            VolumeDriver?: string;
            VolumesFrom?: string[];
        };
        /** @description HostInfo describes the libpod host */
        HostInfo: {
            arch?: string;
            buildahVersion?: string;
            cgroupControllers?: string[];
            cgroupManager?: string;
            cgroupVersion?: string;
            conmon?: components["schemas"]["ConmonInfo"];
            cpuUtilization?: components["schemas"]["CPUUsage"];
            /** Format: int64 */
            cpus?: number;
            databaseBackend?: string;
            distribution?: components["schemas"]["DistributionInfo"];
            eventLogger?: string;
            /** Format: uint32 */
            freeLocks?: number;
            hostname?: string;
            idMappings?: components["schemas"]["IDMappings"];
            kernel?: string;
            linkmode?: string;
            logDriver?: string;
            /** Format: int64 */
            memFree?: number;
            /** Format: int64 */
            memTotal?: number;
            networkBackend?: string;
            networkBackendInfo?: components["schemas"]["NetworkInfo"];
            ociRuntime?: components["schemas"]["OCIRuntimeInfo"];
            os?: string;
            pasta?: components["schemas"]["PastaInfo"];
            remoteSocket?: components["schemas"]["RemoteSocket"];
            /** @description RootlessNetworkCmd returns the default rootless network command (slirp4netns or pasta) */
            rootlessNetworkCmd?: string;
            runtimeInfo?: {
                [key: string]: unknown;
            };
            security?: components["schemas"]["SecurityInfo"];
            /** @description ServiceIsRemote is true when the podman/libpod service is remote to the client */
            serviceIsRemote?: boolean;
            slirp4netns?: components["schemas"]["SlirpInfo"];
            /** Format: int64 */
            swapFree?: number;
            /** Format: int64 */
            swapTotal?: number;
            uptime?: string;
            variant?: string;
        };
        /** @description IDMap contains a single entry for user namespace range remapping. An array
         *     of IDMap entries represents the structure that will be provided to the Linux
         *     kernel for creating a user namespace. */
        IDMap: {
            /** Format: int64 */
            container_id?: number;
            /** Format: int64 */
            host_id?: number;
            /** Format: int64 */
            size?: number;
        };
        /** @description IDMappingOptions are used for specifying how ID mapping should be set up for
         *     a layer or container. */
        IDMappingOptions: {
            AutoUserNs?: boolean;
            AutoUserNsOpts?: components["schemas"]["AutoUserNsOptions"];
            GIDMap?: components["schemas"]["IDMap"][];
            HostGIDMapping?: boolean;
            /** @description UIDMap and GIDMap are used for setting up a layer's root filesystem
             *     for use inside of a user namespace where ID mapping is being used.
             *     If HostUIDMapping/HostGIDMapping is true, no mapping of the
             *     respective type will be used.  Otherwise, if UIDMap and/or GIDMap
             *     contain at least one mapping, one or both will be used.  By default,
             *     if neither of those conditions apply, if the layer has a parent
             *     layer, the parent layer's mapping will be used, and if it does not
             *     have a parent layer, the mapping which was passed to the Store
             *     object when it was initialized will be used. */
            HostUIDMapping?: boolean;
            UIDMap?: components["schemas"]["IDMap"][];
        };
        /** @description IDMappings describe the GID and UID mappings */
        IDMappings: {
            gidmap?: components["schemas"]["IDMap"][];
            uidmap?: components["schemas"]["IDMap"][];
        };
        IDResponse: components["schemas"]["IdResponse"];
        /** @description IPAM represents IP Address Management */
        IPAM: {
            Config?: components["schemas"]["IPAMConfig"][];
            Driver?: string;
            Options?: {
                [key: string]: string;
            };
        };
        /** @description IPAMConfig represents IPAM configurations */
        IPAMConfig: {
            AuxiliaryAddresses?: {
                [key: string]: string;
            };
            Gateway?: string;
            IPRange?: string;
            Subnet?: string;
        };
        /**
         * An IPMask is a bitmask that can be used to manipulate
         *     IP addresses for IP addressing and routing.
         * @description See type [IPNet] and func [ParseCIDR] for details.
         */
        IPMask: number[];
        /** An IPNet represents an IP network. */
        IPNet: {
            IP?: string;
            Mask?: components["schemas"]["IPMask"];
        };
        /** @description IDResponse Response to an API call that returns just an Id */
        IdResponse: {
            /** @description The id of the newly created object. */
            Id: string;
        };
        /** ImageConfig defines the execution parameters which should be used as a base when running a container using an image. */
        ImageConfig: {
            /** @description ArgsEscaped
             *
             *     Deprecated: This field is present only for legacy compatibility with
             *     Docker and should not be used by new image builders.  It is used by Docker
             *     for Windows images to indicate that the `Entrypoint` or `Cmd` or both,
             *     contains only a single element array, that is a pre-escaped, and combined
             *     into a single string `CommandLine`. If `true` the value in `Entrypoint` or
             *     `Cmd` should be used as-is to avoid double escaping.
             *     https://github.com/opencontainers/image-spec/pull/892 */
            ArgsEscaped?: boolean;
            /** @description Cmd defines the default arguments to the entrypoint of the container. */
            Cmd?: string[];
            /** @description Entrypoint defines a list of arguments to use as the command to execute when the container starts. */
            Entrypoint?: string[];
            /** @description Env is a list of environment variables to be used in a container. */
            Env?: string[];
            /** @description ExposedPorts a set of ports to expose from a container running this image. */
            ExposedPorts?: {
                [key: string]: Record<string, never>;
            };
            /** @description Labels contains arbitrary metadata for the container. */
            Labels?: {
                [key: string]: string;
            };
            /** @description StopSignal contains the system call signal that will be sent to the container to exit. */
            StopSignal?: string;
            /** @description User defines the username or UID which the process in the container should run as. */
            User?: string;
            /** @description Volumes is a set of directories describing where the process is likely write data specific to a container instance. */
            Volumes?: {
                [key: string]: Record<string, never>;
            };
            /** @description WorkingDir sets the current working directory of the entrypoint process in the container. */
            WorkingDir?: string;
        };
        /** ImageData holds the inspect information of an image. */
        ImageData: {
            Annotations?: {
                [key: string]: string;
            };
            Architecture?: string;
            Author?: string;
            Comment?: string;
            Config?: components["schemas"]["ImageConfig"];
            /** Format: date-time */
            Created?: string;
            Digest?: components["schemas"]["Digest"];
            GraphDriver?: components["schemas"]["DriverData"];
            Healthcheck?: components["schemas"]["Schema2HealthConfig"];
            History?: components["schemas"]["History"][];
            Id?: string;
            Labels?: {
                [key: string]: string;
            };
            ManifestType?: string;
            NamesHistory?: string[];
            Os?: string;
            Parent?: string;
            RepoDigests?: string[];
            RepoTags?: string[];
            RootFS?: components["schemas"]["RootFS"];
            /** Format: int64 */
            Size?: number;
            User?: string;
            Version?: string;
            /** Format: int64 */
            VirtualSize?: number;
        };
        ImageImportReport: {
            Id?: string;
        };
        ImageInspect: {
            /** @description Architecture is the hardware CPU architecture that the image runs on. */
            Architecture?: string;
            /** @description Author is the name of the author that was specified when committing the
             *     image, or as specified through MAINTAINER (deprecated) in the Dockerfile. */
            Author?: string;
            /** @description Comment is an optional message that can be set when committing or
             *     importing the image. */
            Comment?: string;
            Config?: components["schemas"]["Config"];
            /** @description Container is for backwards compat but is basically unused */
            Container?: string;
            ContainerConfig?: components["schemas"]["Config"];
            /** @description Created is the date and time at which the image was created, formatted in
             *     RFC 3339 nano-seconds (time.RFC3339Nano).
             *
             *     This information is only available if present in the image,
             *     and omitted otherwise. */
            Created?: string;
            /** @description DockerVersion is the version of Docker that was used to build the image.
             *
             *     Depending on how the image was created, this field may be empty. */
            DockerVersion?: string;
            GraphDriver?: components["schemas"]["GraphDriverData"];
            /** @description ID is the content-addressable ID of an image.
             *
             *     This identifier is a content-addressable digest calculated from the
             *     image's configuration (which includes the digests of layers used by
             *     the image).
             *
             *     Note that this digest differs from the `RepoDigests` below, which
             *     holds digests of image manifests that reference the image. */
            Id?: string;
            Metadata?: components["schemas"]["Metadata"];
            /** @description OS is the Operating System the image is built to run on. */
            Os?: string;
            /** @description OsVersion is the version of the Operating System the image is built to
             *     run on (especially for Windows). */
            OsVersion?: string;
            /** @description Parent is the ID of the parent image.
             *
             *     Depending on how the image was created, this field may be empty and
             *     is only set for images that were built/created locally. This field
             *     is empty if the image was pulled from an image registry. */
            Parent?: string;
            /** @description RepoDigests is a list of content-addressable digests of locally available
             *     image manifests that the image is referenced from. Multiple manifests can
             *     refer to the same image.
             *
             *     These digests are usually only available if the image was either pulled
             *     from a registry, or if the image was pushed to a registry, which is when
             *     the manifest is generated and its digest calculated. */
            RepoDigests?: string[];
            /** @description RepoTags is a list of image names/tags in the local image cache that
             *     reference this image.
             *
             *     Multiple image tags can refer to the same image, and this list may be
             *     empty if no tags reference the image, in which case the image is
             *     "untagged", in which case it can still be referenced by its ID. */
            RepoTags?: string[];
            RootFS?: components["schemas"]["RootFS"];
            /**
             * Format: int64
             * @description Size is the total size of the image including all layers it is composed of.
             */
            Size?: number;
            /** @description Variant is the CPU architecture variant (presently ARM-only). */
            Variant?: string;
            /**
             * Format: int64
             * @description VirtualSize is the total size of the image including all layers it is
             *     composed of.
             *
             *     Deprecated: this field is omitted in API v1.44, but kept for backward compatibility. Use Size instead.
             */
            VirtualSize?: number;
        };
        ImageLoadReport: {
            Names?: string[];
        };
        ImageProperties: {
            /** @description Containers is an array containing the IDs of the containers that are
             *     using this image. */
            Containers: string[];
            Platform: components["schemas"]["Platform"];
            Size?: {
                /**
                 * Format: int64
                 * @description Unpacked is the size (in bytes) of the locally unpacked
                 *     (uncompressed) image content that's directly usable by the containers
                 *     running this image.
                 *     It's independent of the distributable content - e.g.
                 *     the image might still have an unpacked data that's still used by
                 *     some container even when the distributable/compressed content is
                 *     already gone.
                 */
                Unpacked: number;
            };
        };
        /** @description ImageStore describes the image store.  Right now only the number
         *     of images present */
        ImageStore: {
            /** Format: int64 */
            number?: number;
        };
        ImageTreeReport: {
            Tree?: string;
        };
        /** @description ImageVolume is a volume based on a container image.  The container image is
         *     first mounted on the host and is then bind-mounted into the container.  An
         *     ImageVolume is always mounted read-only. */
        ImageVolume: {
            /** @description Destination is the absolute path of the mount in the container. */
            Destination?: string;
            /** @description ReadWrite sets the volume writable. */
            ReadWrite?: boolean;
            /** @description Source is the source of the image volume.  The image can be referred
             *     to by name and by ID. */
            Source?: string;
            /** @description SubPath mounts a particular path within the image.
             *     If empty, the whole image is mounted. */
            subPath?: string;
        };
        /** @description Info contains information about the Volume as a whole as provided by
         *     the CSI storage plugin. */
        Info: {
            /** @description AccessibleTopology is the topology this volume is actually accessible
             *     from. */
            AccessibleTopology?: components["schemas"]["Topology"][];
            /**
             * Format: int64
             * @description CapacityBytes is the capacity of the volume in bytes. A value of 0
             *     indicates that the capacity is unknown.
             */
            CapacityBytes?: number;
            /** @description VolumeContext is the context originating from the CSI storage plugin
             *     when the Volume is created. */
            VolumeContext?: {
                [key: string]: string;
            };
            /** @description VolumeID is the ID of the Volume as seen by the CSI storage plugin. This
             *     is distinct from the Volume's Swarm ID, which is the ID used by all of
             *     the Docker Engine to refer to the Volume. If this field is blank, then
             *     the Volume has not been successfully created yet. */
            VolumeID?: string;
        };
        /** Inspect is the body of the "get network" http response message. */
        Inspect: {
            Attachable?: boolean;
            ConfigFrom?: components["schemas"]["ConfigReference"];
            ConfigOnly?: boolean;
            Containers?: {
                [key: string]: components["schemas"]["EndpointResource"];
            };
            /** Format: date-time */
            Created?: string;
            Driver?: string;
            EnableIPv6?: boolean;
            IPAM?: components["schemas"]["IPAM"];
            Id?: string;
            Ingress?: boolean;
            Internal?: boolean;
            Labels?: {
                [key: string]: string;
            };
            Name?: string;
            Options?: {
                [key: string]: string;
            };
            Peers?: components["schemas"]["PeerInfo"][];
            Scope?: string;
            Services?: {
                [key: string]: components["schemas"]["ServiceInfo"];
            };
        };
        /** @description InspectAdditionalNetwork holds information about non-default networks the
         *     container has been connected to.
         *     As with InspectNetworkSettings, many fields are unused and maintained only
         *     for compatibility with Docker. */
        InspectAdditionalNetwork: {
            /** @description AdditionalMacAddresses is a set of additional MAC Addresses beyond
             *     the first. CNI may configure more than one interface for a single
             *     network, which can cause this. */
            AdditionalMACAddresses?: string[];
            /** @description Aliases are any network aliases the container has in this network. */
            Aliases?: string[];
            /** @description DriverOpts is presently unused and maintained exclusively for
             *     compatibility. */
            DriverOpts?: {
                [key: string]: string;
            };
            /** @description EndpointID is unused, maintained exclusively for compatibility. */
            EndpointID?: string;
            /** @description Gateway is the IP address of the gateway this network will use. */
            Gateway?: string;
            /** @description GlobalIPv6Address is the global-scope IPv6 Address for this network. */
            GlobalIPv6Address?: string;
            /**
             * Format: int64
             * @description GlobalIPv6PrefixLen is the length of the subnet mask of this network.
             */
            GlobalIPv6PrefixLen?: number;
            /** @description IPAMConfig is presently unused and maintained exclusively for
             *     compatibility. */
            IPAMConfig?: {
                [key: string]: string;
            };
            /** @description IPAddress is the IP address for this network. */
            IPAddress?: string;
            /**
             * Format: int64
             * @description IPPrefixLen is the length of the subnet mask of this network.
             */
            IPPrefixLen?: number;
            /** @description IPv6Gateway is the IPv6 gateway this network will use. */
            IPv6Gateway?: string;
            /** @description Links is presently unused and maintained exclusively for
             *     compatibility. */
            Links?: string[];
            /** @description MacAddress is the MAC address for the interface in this network. */
            MacAddress?: string;
            /** @description Name of the network we're connecting to. */
            NetworkID?: string;
            /** @description SecondaryIPAddresses is a list of extra IP Addresses that the
             *     container has been assigned in this network. */
            SecondaryIPAddresses?: components["schemas"]["Address"][];
            /** @description SecondaryIPv6Addresses is a list of extra IPv6 Addresses that the
             *     container has been assigned in this network. */
            SecondaryIPv6Addresses?: components["schemas"]["Address"][];
        };
        /** @description InspectBlkioThrottleDevice holds information about a speed cap for a device
         *     node. This cap applies to a specific operation (read, write, etc) on the given
         *     node. */
        InspectBlkioThrottleDevice: {
            /** @description Path is the path to the device this applies to. */
            Path?: string;
            /**
             * Format: uint64
             * @description Rate is the maximum rate. It is in either bytes per second or iops
             *     per second, determined by where it is used - documentation will
             *     indicate which is appropriate.
             */
            Rate?: number;
        };
        /** @description InspectBlkioWeightDevice holds information about the relative weight
         *     of an individual device node. Weights are used in the I/O scheduler to give
         *     relative priority to some accesses. */
        InspectBlkioWeightDevice: {
            /** @description Path is the path to the device this applies to. */
            Path?: string;
            /**
             * Format: uint16
             * @description Weight is the relative weight the scheduler will use when scheduling
             *     I/O.
             */
            Weight?: number;
        };
        /** @description InspectContainerConfig holds further data about how a container was initially
         *     configured. */
        InspectContainerConfig: {
            /** @description Container annotations */
            Annotations?: {
                [key: string]: string;
            };
            /** @description Unused, at present */
            AttachStderr?: boolean;
            /** @description Unused, at present */
            AttachStdin?: boolean;
            /** @description Unused, at present */
            AttachStdout?: boolean;
            /** @description ChrootDirs is an additional set of directories that need to be
             *     treated as root directories. Standard bind mounts will be mounted
             *     into paths relative to these directories. */
            ChrootDirs?: string[];
            /** @description Container command */
            Cmd?: string[];
            /** @description CreateCommand is the full command plus arguments of the process the
             *     container has been created with. */
            CreateCommand?: string[];
            /** @description Container domain name - unused at present */
            Domainname?: string;
            /** @description Container entrypoint */
            Entrypoint?: string[];
            /** @description Container environment variables */
            Env?: string[];
            /** @description ExposedPorts includes ports the container has exposed. */
            ExposedPorts?: {
                [key: string]: Record<string, never>;
            };
            /** @description HealthLogDestination defines the destination where the log is stored */
            HealthLogDestination?: string;
            Healthcheck?: components["schemas"]["Schema2HealthConfig"];
            /**
             * Format: uint64
             * @description HealthMaxLogCount is maximum number of attempts in the HealthCheck log file.
             *     ('0' value means an infinite number of attempts in the log file)
             */
            HealthcheckMaxLogCount?: number;
            /**
             * Format: uint64
             * @description HealthMaxLogSize is the maximum length in characters of stored HealthCheck log
             *     ("0" value means an infinite log length)
             */
            HealthcheckMaxLogSize?: number;
            /** @description HealthcheckOnFailureAction defines an action to take once the container turns unhealthy. */
            HealthcheckOnFailureAction?: string;
            /** @description Container hostname */
            Hostname?: string;
            /** @description Container image */
            Image?: string;
            /** @description Container labels */
            Labels?: {
                [key: string]: string;
            };
            /** @description On-build arguments - presently unused. More of Buildah's domain. */
            OnBuild?: string;
            /** @description Whether the container leaves STDIN open */
            OpenStdin?: boolean;
            /** @description Passwd determines whether or not podman can add entries to /etc/passwd and /etc/group */
            Passwd?: boolean;
            /** @description Secrets are the secrets mounted in the container */
            Secrets?: components["schemas"]["InspectSecret"][];
            StartupHealthCheck?: components["schemas"]["StartupHealthCheck"];
            /** @description Whether STDIN is only left open once.
             *     Presently not supported by Podman, unused. */
            StdinOnce?: boolean;
            /** @description Container stop signal */
            StopSignal?: string;
            /**
             * Format: uint64
             * @description StopTimeout is time before container is stopped when calling stop
             */
            StopTimeout?: number;
            /** @description SystemdMode is whether the container is running in systemd mode. In
             *     systemd mode, the container configuration is customized to optimize
             *     running systemd in the container. */
            SystemdMode?: boolean;
            /**
             * Format: uint64
             * @description Timeout is time before container is killed by conmon
             */
            Timeout?: number;
            /** @description Timezone is the timezone inside the container.
             *     Local means it has the same timezone as the host machine */
            Timezone?: string;
            /** @description Whether the container creates a TTY */
            Tty?: boolean;
            /** @description Umask is the umask inside the container. */
            Umask?: string;
            /** @description User the container was launched with */
            User?: string;
            /** @description Unused, at present. I've never seen this field populated. */
            Volumes?: {
                [key: string]: Record<string, never>;
            };
            /** @description Container working directory */
            WorkingDir?: string;
            /** @description SdNotifyMode is the sd-notify mode of the container. */
            sdNotifyMode?: string;
            /** @description SdNotifySocket is the NOTIFY_SOCKET in use by/configured for the container. */
            sdNotifySocket?: string;
        };
        /** @description InspectContainerData provides a detailed record of a container's configuration
         *     and state as viewed by Libpod.
         *     Large portions of this structure are defined such that the output is
         *     compatible with `docker inspect` JSON, but additional fields have been added
         *     as required to share information not in the original output. */
        InspectContainerData: {
            AppArmorProfile?: string;
            Args?: string[];
            BoundingCaps?: string[];
            Config?: components["schemas"]["InspectContainerConfig"];
            ConmonPidFile?: string;
            /** Format: date-time */
            Created?: string;
            Dependencies?: string[];
            Driver?: string;
            EffectiveCaps?: string[];
            ExecIDs?: string[];
            GraphDriver?: components["schemas"]["DriverData"];
            HostConfig?: components["schemas"]["InspectContainerHostConfig"];
            HostnamePath?: string;
            HostsPath?: string;
            Id?: string;
            Image?: string;
            ImageDigest?: string;
            ImageName?: string;
            IsInfra?: boolean;
            IsService?: boolean;
            KubeExitCodePropagation?: string;
            MountLabel?: string;
            Mounts?: components["schemas"]["InspectMount"][];
            Name?: string;
            Namespace?: string;
            NetworkSettings?: components["schemas"]["InspectNetworkSettings"];
            OCIConfigPath?: string;
            OCIRuntime?: string;
            Path?: string;
            PidFile?: string;
            Pod?: string;
            ProcessLabel?: string;
            ResolvConfPath?: string;
            /** Format: int32 */
            RestartCount?: number;
            Rootfs?: string;
            /** Format: int64 */
            SizeRootFs?: number;
            /** Format: int64 */
            SizeRw?: number;
            State?: components["schemas"]["InspectContainerState"];
            StaticDir?: string;
            UseImageHostname?: boolean;
            UseImageHosts?: boolean;
            /** Format: uint32 */
            lockNumber?: number;
        };
        /**
         * InspectContainerHostConfig holds information used when the container was
         *     created.
         *     It's very much a Docker-specific struct, retained (mostly) as-is for
         *     compatibility. We fill individual fields as best as we can, inferring as much
         *     as possible from the spec and container config.
         *     Some things cannot be inferred. These will be populated by spec annotations
         *     (if available).
         * @description nolint:revive,stylecheck // Field names are fixed for compatibility and cannot be changed.
         */
        InspectContainerHostConfig: {
            /** @description Annotations are provided to the runtime when the container is
             *     started. */
            Annotations?: {
                [key: string]: string;
            };
            /** @description AutoRemove is whether the container will be automatically removed on
             *     exiting.
             *     It is not handled directly within libpod and is stored in an
             *     annotation. */
            AutoRemove?: boolean;
            /** @description AutoRemoveImage is whether the container's image will be
             *     automatically removed on exiting.
             *     It is not handled directly within libpod and is stored in an
             *     annotation. */
            AutoRemoveImage?: boolean;
            /** @description Binds contains an array of user-added mounts.
             *     Both volume mounts and named volumes are included.
             *     Tmpfs mounts are NOT included.
             *     In 'docker inspect' this is separated into 'Binds' and 'Mounts' based
             *     on how a mount was added. We do not make this distinction and do not
             *     include a Mounts field in inspect.
             *     Format: <src>:<destination>[:<comma-separated options>] */
            Binds?: string[];
            /** @description BlkioDeviceReadBps is an array of I/O throttle parameters for
             *     individual device nodes.
             *     This specifically sets read rate cap in bytes per second for device
             *     nodes.
             *     As with BlkioWeightDevice, we pull the path from /sys/dev, and we
             *     don't guarantee the path will be identical to the original (though
             *     the node will be). */
            BlkioDeviceReadBps?: components["schemas"]["InspectBlkioThrottleDevice"][];
            /** @description BlkioDeviceReadIOps is an array of I/O throttle parameters for
             *     individual device nodes.
             *     This specifically sets the read rate cap in iops per second for
             *     device nodes.
             *     As with BlkioWeightDevice, we pull the path from /sys/dev, and we
             *     don't guarantee the path will be identical to the original (though
             *     the node will be). */
            BlkioDeviceReadIOps?: components["schemas"]["InspectBlkioThrottleDevice"][];
            /** @description BlkioDeviceWriteBps is an array of I/O throttle parameters for
             *     individual device nodes.
             *     this specifically sets write rate cap in bytes per second for device
             *     nodes.
             *     as with BlkioWeightDevice, we pull the path from /sys/dev, and we
             *     don't guarantee the path will be identical to the original (though
             *     the node will be). */
            BlkioDeviceWriteBps?: components["schemas"]["InspectBlkioThrottleDevice"][];
            /** @description BlkioDeviceWriteIOps is an array of I/O throttle parameters for
             *     individual device nodes.
             *     This specifically sets the write rate cap in iops per second for
             *     device nodes.
             *     As with BlkioWeightDevice, we pull the path from /sys/dev, and we
             *     don't guarantee the path will be identical to the original (though
             *     the node will be). */
            BlkioDeviceWriteIOps?: components["schemas"]["InspectBlkioThrottleDevice"][];
            /**
             * Format: uint16
             * @description BlkioWeight indicates the I/O resources allocated to the container.
             *     It is a relative weight in the scheduler for assigning I/O time
             *     versus other Cgroups.
             */
            BlkioWeight?: number;
            /** @description BlkioWeightDevice is an array of I/O resource priorities for
             *     individual device nodes.
             *     Unfortunately, the spec only stores the device's Major/Minor numbers
             *     and not the path, which is used here.
             *     Fortunately, the kernel provides an interface for retrieving the path
             *     of a given node by major:minor at /sys/dev/. However, the exact path
             *     in use may not be what was used in the original CLI invocation -
             *     though it is guaranteed that the device node will be the same, and
             *     using the given path will be functionally identical. */
            BlkioWeightDevice?: components["schemas"]["InspectBlkioWeightDevice"][];
            /** @description CapAdd is a list of capabilities added to the container.
             *     It is not directly stored by Libpod, and instead computed from the
             *     capabilities listed in the container's spec, compared against a set
             *     of default capabilities. */
            CapAdd?: string[];
            /** @description CapDrop is a list of capabilities removed from the container.
             *     It is not directly stored by libpod, and instead computed from the
             *     capabilities listed in the container's spec, compared against a set
             *     of default capabilities. */
            CapDrop?: string[];
            /** @description Cgroup contains the container's cgroup. It is presently not
             *     populated.
             *     TODO. */
            Cgroup?: string;
            /** @description CgroupConf is the configuration for cgroup v2. */
            CgroupConf?: {
                [key: string]: string;
            };
            /** @description CgroupManager is the cgroup manager used by the container.
             *     At present, allowed values are either "cgroupfs" or "systemd". */
            CgroupManager?: string;
            /** @description CgroupMode is the configuration of the container's cgroup namespace.
             *     Populated as follows:
             *     private - a cgroup namespace has been created
             *     host - No cgroup namespace created
             *     container:<id> - Using another container's cgroup namespace
             *     ns:<path> - A path to a cgroup namespace has been specified */
            CgroupMode?: string;
            /** @description CgroupParent is the Cgroup parent of the container.
             *     Only set if not default. */
            CgroupParent?: string;
            /** @description Cgroups contains the container's Cgroup mode.
             *     Allowed values are "default" (container is creating Cgroups) and
             *     "disabled" (container is not creating Cgroups).
             *     This is Libpod-specific and not included in `docker inspect`. */
            Cgroups?: string;
            /** @description ConsoleSize is an array of 2 integers showing the size of the
             *     container's console.
             *     It is only set if the container is creating a terminal.
             *     TODO. */
            ConsoleSize?: number[];
            /** @description ContainerIDFile is a file created during container creation to hold
             *     the ID of the created container.
             *     This is not handled within libpod and is stored in an annotation. */
            ContainerIDFile?: string;
            /**
             * Format: uint64
             * @description CpuCount is Windows-only and not presently implemented.
             */
            CpuCount?: number;
            /**
             * Format: uint64
             * @description CpuPercent is Windows-only and not presently implemented.
             */
            CpuPercent?: number;
            /**
             * Format: uint64
             * @description CpuPeriod is the length of a CPU period in microseconds.
             *     It relates directly to CpuQuota.
             */
            CpuPeriod?: number;
            /**
             * Format: int64
             * @description CpuPeriod is the amount of time (in microseconds) that a container
             *     can use the CPU in every CpuPeriod.
             */
            CpuQuota?: number;
            /**
             * Format: uint64
             * @description CpuRealtimePeriod is the length of time (in microseconds) of the CPU
             *     realtime period. If set to 0, no time will be allocated to realtime
             *     tasks.
             */
            CpuRealtimePeriod?: number;
            /**
             * Format: int64
             * @description CpuRealtimeRuntime is the length of time (in microseconds) allocated
             *     for realtime tasks within every CpuRealtimePeriod.
             */
            CpuRealtimeRuntime?: number;
            /**
             * Format: uint64
             * @description CpuShares indicates the CPU resources allocated to the container.
             *     It is a relative weight in the scheduler for assigning CPU time
             *     versus other Cgroups.
             */
            CpuShares?: number;
            /** @description CpusetCpus is the set of CPUs that the container will execute on.
             *     Formatted as `0-3` or `0,2`. Default (if unset) is all CPUs. */
            CpusetCpus?: string;
            /** @description CpusetMems is the set of memory nodes the container will use.
             *     Formatted as `0-3` or `0,2`. Default (if unset) is all memory nodes. */
            CpusetMems?: string;
            /** @description Devices is a list of device nodes that will be added to the
             *     container.
             *     These are stored in the OCI spec only as type, major, minor while we
             *     display the host path. We convert this with /sys/dev, but we cannot
             *     guarantee that the host path will be identical - only that the actual
             *     device will be. */
            Devices?: components["schemas"]["InspectDevice"][];
            /**
             * Format: uint64
             * @description DiskQuota is the maximum amount of disk space the container may use
             *     (in bytes).
             *     Presently not populated.
             *     TODO.
             */
            DiskQuota?: number;
            /** @description Dns is a list of DNS nameservers that will be added to the
             *     container's resolv.conf */
            Dns?: string[];
            /** @description DnsOptions is a list of DNS options that will be set in the
             *     container's resolv.conf */
            DnsOptions?: string[];
            /** @description DnsSearch is a list of DNS search domains that will be set in the
             *     container's resolv.conf */
            DnsSearch?: string[];
            /** @description ExtraHosts contains hosts that will be added to the container's
             *     etc/hosts. */
            ExtraHosts?: string[];
            /** @description GroupAdd contains groups that the user inside the container will be
             *     added to. */
            GroupAdd?: string[];
            /** @description HostsFile is the base file to create the `/etc/hosts` file inside the container. */
            HostsFile?: string;
            IDMappings?: components["schemas"]["InspectIDMappings"];
            /**
             * Format: uint64
             * @description IOMaximumBandwidth is Windows-only and not presently implemented.
             */
            IOMaximumBandwidth?: number;
            /**
             * Format: uint64
             * @description IOMaximumIOps is Windows-only and not presently implemented.
             */
            IOMaximumIOps?: number;
            /** @description Init indicates whether the container has an init mounted into it. */
            Init?: boolean;
            /** @description IntelRdtClosID defines the Intel RDT CAT Class Of Service (COS) that
             *     all processes of the container should run in. */
            IntelRdtClosID?: string;
            /** @description IpcMode represents the configuration of the container's IPC
             *     namespace.
             *     Populated as follows:
             *     "" (empty string) - Default, an IPC namespace will be created
             *     host - No IPC namespace created
             *     container:<id> - Using another container's IPC namespace
             *     ns:<path> - A path to an IPC namespace has been specified */
            IpcMode?: string;
            /** @description Isolation is presently unused and provided solely for Docker
             *     compatibility. */
            Isolation?: string;
            /**
             * Format: int64
             * @description KernelMemory is the maximum amount of memory the kernel will devote
             *     to the container.
             */
            KernelMemory?: number;
            /** @description Links is unused, and provided purely for Docker compatibility. */
            Links?: string[];
            LogConfig?: components["schemas"]["InspectLogConfig"];
            /**
             * Format: int64
             * @description Memory indicates the memory resources allocated to the container.
             *     This is the limit (in bytes) of RAM the container may use.
             */
            Memory?: number;
            /**
             * Format: int64
             * @description MemoryReservation is the reservation (soft limit) of memory available
             *     to the container. Soft limits are warnings only and can be exceeded.
             */
            MemoryReservation?: number;
            /**
             * Format: int64
             * @description MemorySwap is the total limit for all memory available to the
             *     container, including swap. 0 indicates that there is no limit to the
             *     amount of memory available.
             */
            MemorySwap?: number;
            /**
             * Format: int64
             * @description MemorySwappiness is the willingness of the kernel to page container
             *     memory to swap. It is an integer from 0 to 100, with low numbers
             *     being more likely to be put into swap.
             *     1, the default, will not set swappiness and use the system defaults.
             */
            MemorySwappiness?: number;
            /**
             * Format: int64
             * @description NanoCpus indicates number of CPUs allocated to the container.
             *     It is an integer where one full CPU is indicated by 1000000000 (one
             *     billion).
             *     Thus, 2.5 CPUs (fractional portions of CPUs are allowed) would be
             *     2500000000 (2.5 billion).
             *     In 'docker inspect' this is set exclusively of two further options in
             *     the output (CpuPeriod and CpuQuota) which are both used to implement
             *     this functionality.
             *     We can't distinguish here, so if CpuQuota is set to the default of
             *     100000, we will set both CpuQuota, CpuPeriod, and NanoCpus. If
             *     CpuQuota is not the default, we will not set NanoCpus.
             */
            NanoCpus?: number;
            /** @description NetworkMode is the configuration of the container's network
             *     namespace.
             *     Populated as follows:
             *     default - A network namespace is being created and configured via CNI
             *     none - A network namespace is being created, not configured via CNI
             *     host - No network namespace created
             *     container:<id> - Using another container's network namespace
             *     ns:<path> - A path to a network namespace has been specified */
            NetworkMode?: string;
            /** @description OomKillDisable indicates whether the kernel OOM killer is disabled
             *     for the container. */
            OomKillDisable?: boolean;
            /**
             * Format: int64
             * @description OOMScoreAdj is an adjustment that will be made to the container's OOM
             *     score.
             */
            OomScoreAdj?: number;
            /** @description PidMode represents the configuration of the container's PID
             *     namespace.
             *     Populated as follows:
             *     "" (empty string) - Default, a PID namespace will be created
             *     host - No PID namespace created
             *     container:<id> - Using another container's PID namespace
             *     ns:<path> - A path to a PID namespace has been specified */
            PidMode?: string;
            /**
             * Format: int64
             * @description PidsLimit is the maximum number of PIDs that may be created within
             *     the container. 0, the default, indicates no limit.
             */
            PidsLimit?: number;
            /** @description PortBindings contains the container's port bindings.
             *     It is formatted as map[string][]InspectHostPort.
             *     The string key here is formatted as <integer port number>/<protocol>
             *     and represents the container port. A single container port may be
             *     bound to multiple host ports (on different IPs). */
            PortBindings?: {
                [key: string]: components["schemas"]["InspectHostPort"][];
            };
            /** @description Privileged indicates whether the container is running with elevated
             *     privileges.
             *     This has a very specific meaning in the Docker sense, so it's very
             *     difficult to decode from the spec and config, and so is stored as an
             *     annotation. */
            Privileged?: boolean;
            /** @description PublishAllPorts indicates whether image ports are being published.
             *     This is not directly stored in libpod and is saved as an annotation. */
            PublishAllPorts?: boolean;
            /** @description ReadonlyRootfs is whether the container will be mounted read-only. */
            ReadonlyRootfs?: boolean;
            RestartPolicy?: components["schemas"]["InspectRestartPolicy"];
            /** @description Runtime is provided purely for Docker compatibility.
             *     It is set unconditionally to "oci" as Podman does not presently
             *     support non-OCI runtimes. */
            Runtime?: string;
            /** @description SecurityOpt is a list of security-related options that are set in the
             *     container. */
            SecurityOpt?: string[];
            /** Format: int64 */
            ShmSize?: number;
            /** @description Tmpfs is a list of tmpfs filesystems that will be mounted into the
             *     container.
             *     It is a map of destination path to options for the mount. */
            Tmpfs?: {
                [key: string]: string;
            };
            /** @description UTSMode represents the configuration of the container's UID
             *     namespace.
             *     Populated as follows:
             *     "" (empty string) - Default, a UTS namespace will be created
             *     host - no UTS namespace created
             *     container:<id> - Using another container's UTS namespace
             *     ns:<path> - A path to a UTS namespace has been specified */
            UTSMode?: string;
            /** @description Ulimits is a set of ulimits that will be set within the container. */
            Ulimits?: components["schemas"]["InspectUlimit"][];
            /** @description UsernsMode represents the configuration of the container's user
             *     namespace.
             *     When running rootless, a user namespace is created outside of libpod
             *     to allow some privileged operations. This will not be reflected here.
             *     Populated as follows:
             *     "" (empty string) - No user namespace will be created
             *     private - The container will be run in a user namespace
             *     container:<id> - Using another container's user namespace
             *     ns:<path> - A path to a user namespace has been specified
             *     TODO Rootless has an additional 'keep-id' option, presently not
             *     reflected here. */
            UsernsMode?: string;
            /** @description VolumeDriver is presently unused and is retained for Docker
             *     compatibility. */
            VolumeDriver?: string;
            /** @description VolumesFrom is a list of containers which this container uses volumes
             *     from. This is not handled directly within libpod and is stored in an
             *     annotation.
             *     It is formatted as an array of container names and IDs. */
            VolumesFrom?: string[];
        };
        /** @description InspectContainerState provides a detailed record of a container's current
         *     state. It is returned as part of InspectContainerData.
         *     As with InspectContainerData, many portions of this struct are matched to
         *     Docker, but here we see more fields that are unused (nonsensical in the
         *     context of Libpod). */
        InspectContainerState: {
            CgroupPath?: string;
            CheckpointLog?: string;
            CheckpointPath?: string;
            Checkpointed?: boolean;
            /** Format: date-time */
            CheckpointedAt?: string;
            /** Format: int64 */
            ConmonPid?: number;
            Dead?: boolean;
            Error?: string;
            /** Format: int32 */
            ExitCode?: number;
            /** Format: date-time */
            FinishedAt?: string;
            Health?: components["schemas"]["HealthCheckResults"];
            OOMKilled?: boolean;
            OciVersion?: string;
            Paused?: boolean;
            /** Format: int64 */
            Pid?: number;
            Restarting?: boolean;
            RestoreLog?: string;
            Restored?: boolean;
            /** Format: date-time */
            RestoredAt?: string;
            Running?: boolean;
            /** Format: date-time */
            StartedAt?: string;
            Status?: string;
            StoppedByUser?: boolean;
        };
        /** InspectDevice is a single device that will be mounted into the container. */
        InspectDevice: {
            /** @description CgroupPermissions is the permissions of the mounted device.
             *     Presently not populated.
             *     TODO. */
            CgroupPermissions?: string;
            /** @description PathInContainer is the path of the device within the container. */
            PathInContainer?: string;
            /** @description PathOnHost is the path of the device on the host. */
            PathOnHost?: string;
        };
        /** @description InspectExecProcess contains information about the process in a given exec
         *     session. */
        InspectExecProcess: {
            /** @description Arguments are the arguments to the entrypoint command of the exec
             *     session. */
            arguments?: string[];
            /** @description Entrypoint is the entrypoint for the exec session (the command that
             *     will be executed in the container). */
            entrypoint?: string;
            /** @description Privileged is whether the exec session will be started with elevated
             *     privileges. */
            privileged?: boolean;
            /** @description Tty is whether the exec session created a terminal. */
            tty?: boolean;
            /** @description User is the user the exec session was started as. */
            user?: string;
        };
        /** InspectExecSession contains information about a given exec session. */
        InspectExecSession: {
            /** @description CanRemove is legacy and used purely for compatibility reasons.
             *     Will always be set to true, unless the exec session is running. */
            CanRemove?: boolean;
            /** @description ContainerID is the ID of the container this exec session is attached
             *     to. */
            ContainerID?: string;
            /** @description DetachKeys are the detach keys used by the exec session.
             *     If set to "" the default keys are being used.
             *     Will show "<none>" if no detach keys are set. */
            DetachKeys?: string;
            /**
             * Format: int64
             * @description ExitCode is the exit code of the exec session. Will be set to 0 if
             *     the exec session has not yet exited.
             */
            ExitCode?: number;
            /** @description ID is the ID of the exec session. */
            ID?: string;
            /** @description OpenStderr is whether the container's STDERR stream will be attached.
             *     Always set to true if the exec session created a TTY. */
            OpenStderr?: boolean;
            /** @description OpenStdin is whether the container's STDIN stream will be attached
             *     to. */
            OpenStdin?: boolean;
            /** @description OpenStdout is whether the container's STDOUT stream will be attached.
             *     Always set to true if the exec session created a TTY. */
            OpenStdout?: boolean;
            /**
             * Format: int64
             * @description Pid is the PID of the exec session's process.
             *     Will be set to 0 if the exec session is not running.
             */
            Pid?: number;
            ProcessConfig?: components["schemas"]["InspectExecProcess"];
            /** @description Running is whether the exec session is running. */
            Running?: boolean;
        };
        /** @description InspectHostPort provides information on a port on the host that a container's
         *     port is bound to. */
        InspectHostPort: {
            /** @description IP on the host we are bound to. "" if not specified (binding to all
             *     IPs). */
            HostIp?: string;
            /** @description Port on the host we are bound to. No special formatting - just an
             *     integer stuffed into a string. */
            HostPort?: string;
        };
        InspectIDMappings: {
            GidMap?: string[];
            UidMap?: string[];
        };
        /** @description InspectLogConfig holds information about a container's configured log driver */
        InspectLogConfig: {
            Config?: {
                [key: string]: string;
            };
            /** @description Path specifies a path to the log file */
            Path?: string;
            /** @description Size specifies a maximum size of the container log */
            Size?: string;
            /** @description Tag specifies a custom log tag for the container */
            Tag?: string;
            Type?: string;
        };
        /** @description InspectMount provides a record of a single mount in a container. It contains
         *     fields for both named and normal volumes. Only user-specified volumes will be
         *     included, and tmpfs volumes are not included even if the user specified them. */
        InspectMount: {
            /** @description The destination directory for the volume. Specified as a path within
             *     the container, as it would be passed into the OCI runtime. */
            Destination?: string;
            /** @description The driver used for the named volume. Empty for bind mounts. */
            Driver?: string;
            /** @description Contains SELinux :z/:Z mount options. Unclear what, if anything, else
             *     goes in here. */
            Mode?: string;
            /** @description The name of the volume. Empty for bind mounts. */
            Name?: string;
            /** @description All remaining mount options. Additional data, not present in the
             *     original output. */
            Options?: string[];
            /** @description Mount propagation for the mount. Can be empty if not specified, but
             *     is always printed - no omitempty. */
            Propagation?: string;
            /** @description Whether the volume is read-write */
            RW?: boolean;
            /** @description The source directory for the volume. */
            Source?: string;
            /** @description SubPath object from the volume. Specified as a path within
             *     the source volume to be mounted at the Destination. */
            SubPath?: string;
            /** @description Whether the mount is a volume or bind mount. Allowed values are
             *     "volume" and "bind". */
            Type?: string;
        };
        /** @description InspectNetworkSettings holds information about the network settings of the
         *     container.
         *     Many fields are maintained only for compatibility with `docker inspect` and
         *     are unused within Libpod. */
        InspectNetworkSettings: {
            /** @description AdditionalMacAddresses is a set of additional MAC Addresses beyond
             *     the first. CNI may configure more than one interface for a single
             *     network, which can cause this. */
            AdditionalMACAddresses?: string[];
            Bridge?: string;
            /** @description EndpointID is unused, maintained exclusively for compatibility. */
            EndpointID?: string;
            /** @description Gateway is the IP address of the gateway this network will use. */
            Gateway?: string;
            /** @description GlobalIPv6Address is the global-scope IPv6 Address for this network. */
            GlobalIPv6Address?: string;
            /**
             * Format: int64
             * @description GlobalIPv6PrefixLen is the length of the subnet mask of this network.
             */
            GlobalIPv6PrefixLen?: number;
            HairpinMode?: boolean;
            /** @description IPAddress is the IP address for this network. */
            IPAddress?: string;
            /**
             * Format: int64
             * @description IPPrefixLen is the length of the subnet mask of this network.
             */
            IPPrefixLen?: number;
            /** @description IPv6Gateway is the IPv6 gateway this network will use. */
            IPv6Gateway?: string;
            LinkLocalIPv6Address?: string;
            /** Format: int64 */
            LinkLocalIPv6PrefixLen?: number;
            /** @description MacAddress is the MAC address for the interface in this network. */
            MacAddress?: string;
            /** @description Networks contains information on non-default networks this
             *     container has joined.
             *     It is a map of network name to network information. */
            Networks?: {
                [key: string]: components["schemas"]["InspectAdditionalNetwork"];
            };
            Ports?: {
                [key: string]: components["schemas"]["InspectHostPort"][];
            };
            SandboxID?: string;
            SandboxKey?: string;
            /** @description SecondaryIPAddresses is a list of extra IP Addresses that the
             *     container has been assigned in this network. */
            SecondaryIPAddresses?: components["schemas"]["Address"][];
            /** @description SecondaryIPv6Addresses is a list of extra IPv6 Addresses that the
             *     container has been assigned in this network. */
            SecondaryIPv6Addresses?: components["schemas"]["Address"][];
        };
        /** InspectPodContainerInfo contains information on a container in a pod. */
        InspectPodContainerInfo: {
            /** @description ID is the ID of the container. */
            Id?: string;
            /** @description Name is the name of the container. */
            Name?: string;
            /** @description State is the current status of the container. */
            State?: string;
        };
        /** @description InspectPodData contains detailed information on a pod's configuration and
         *     state. It is used as the output of Inspect on pods. */
        InspectPodData: {
            /** @description CgroupParent is the parent of the pod's Cgroup. */
            CgroupParent?: string;
            /** @description CgroupPath is the path to the pod's Cgroup. */
            CgroupPath?: string;
            /** @description Containers gives a brief summary of all containers in the pod and
             *     their current status. */
            Containers?: components["schemas"]["InspectPodContainerInfo"][];
            /** @description CreateCgroup is whether this pod will create its own Cgroup to group
             *     containers under. */
            CreateCgroup?: boolean;
            /** @description CreateCommand is the full command plus arguments of the process the
             *     container has been created with. */
            CreateCommand?: string[];
            /** @description CreateInfra is whether this pod will create an infra container to
             *     share namespaces. */
            CreateInfra?: boolean;
            /**
             * Format: date-time
             * @description Created is the time when the pod was created.
             */
            Created?: string;
            /** @description ExitPolicy of the pod. */
            ExitPolicy?: string;
            /** @description Hostname is the hostname that the pod will set. */
            Hostname?: string;
            /** @description ID is the ID of the pod. */
            Id?: string;
            InfraConfig?: components["schemas"]["InspectPodInfraConfig"];
            /** @description InfraContainerID is the ID of the pod's infra container, if one is
             *     present. */
            InfraContainerID?: string;
            /** @description Labels is a set of key-value labels that have been applied to the
             *     pod. */
            Labels?: {
                [key: string]: string;
            };
            /**
             * Format: uint32
             * @description Number of the pod's Libpod lock.
             */
            LockNumber?: number;
            /** @description Name is the name of the pod. */
            Name?: string;
            /** @description Namespace is the Libpod namespace the pod is placed in. */
            Namespace?: string;
            /**
             * Format: uint64
             * @description NumContainers is the number of containers in the pod, including the
             *     infra container.
             */
            NumContainers?: number;
            /** @description RestartPolicy of the pod. */
            RestartPolicy?: string;
            /** @description SharedNamespaces contains a list of namespaces that will be shared by
             *     containers within the pod. Can only be set if CreateInfra is true. */
            SharedNamespaces?: string[];
            /** @description State represents the current state of the pod. */
            State?: string;
            /**
             * Format: uint64
             * @description BlkioWeight contains the blkio weight limit for the pod
             */
            blkio_weight?: number;
            /** @description BlkioWeightDevice contains the blkio weight device limits for the pod */
            blkio_weight_device?: components["schemas"]["InspectBlkioWeightDevice"][];
            /**
             * Format: uint64
             * @description CPUPeriod contains the CPU period of the pod
             */
            cpu_period?: number;
            /**
             * Format: int64
             * @description CPUQuota contains the CPU quota of the pod
             */
            cpu_quota?: number;
            /**
             * Format: uint64
             * @description CPUShares contains the cpu shares for the pod
             */
            cpu_shares?: number;
            /** @description CPUSetCPUs contains linux specific CPU data for the pod */
            cpuset_cpus?: string;
            /** @description CPUSetMems contains linux specific CPU data for the pod */
            cpuset_mems?: string;
            /** @description BlkioDeviceReadBps contains the Read/Access limit for the pod's devices */
            device_read_bps?: components["schemas"]["InspectBlkioThrottleDevice"][];
            /** @description BlkioDeviceReadBps contains the Read/Access limit for the pod's devices */
            device_write_bps?: components["schemas"]["InspectBlkioThrottleDevice"][];
            /** @description Devices contains the specified host devices */
            devices?: components["schemas"]["InspectDevice"][];
            /**
             * Format: uint64
             * @description MemoryLimit contains the specified cgroup memory limit for the pod
             */
            memory_limit?: number;
            /**
             * Format: uint64
             * @description MemorySwap contains the specified memory swap limit for the pod
             */
            memory_swap?: number;
            /** @description Mounts contains volume related information for the pod */
            mounts?: components["schemas"]["InspectMount"][];
            /** @description SecurityOpt contains the specified security labels and related SELinux information */
            security_opt?: string[];
            /** @description VolumesFrom contains the containers that the pod inherits mounts from */
            volumes_from?: string[];
        };
        /** @description InspectPodInfraConfig contains the configuration of the pod's infra
         *     container. */
        InspectPodInfraConfig: {
            /** @description DNSOption is a set of DNS options that will be used by the infra
             *     container's resolv.conf and shared with the remainder of the pod. */
            DNSOption?: string[];
            /** @description DNSSearch is a set of DNS search domains that will be used by the
             *     infra container's resolv.conf and shared with the remainder of the
             *     pod. */
            DNSSearch?: string[];
            /** @description DNSServer is a set of DNS Servers that will be used by the infra
             *     container's resolv.conf and shared with the remainder of the pod. */
            DNSServer?: string[];
            /** @description HostAdd adds a number of hosts to the infra container's resolv.conf
             *     which will be shared with the rest of the pod. */
            HostAdd?: string[];
            /** @description HostNetwork is whether the infra container (and thus the whole pod)
             *     will use the host's network and not create a network namespace. */
            HostNetwork?: boolean;
            /** @description HostsFile is the base file to create the `/etc/hosts` file inside the infra container
             *     which will be shared with the rest of the pod. */
            HostsFile?: string;
            /** @description NetworkOptions are additional options for each network */
            NetworkOptions?: {
                [key: string]: string[];
            };
            /** @description Networks is a list of networks the pod will join. */
            Networks?: string[];
            /** @description NoManageHostname indicates that the pod will not manage /etc/hostname
             *     and instead each container will handle their own. */
            NoManageHostname?: boolean;
            /** @description NoManageHosts indicates that the pod will not manage /etc/hosts and
             *     instead each container will handle their own. */
            NoManageHosts?: boolean;
            /** @description NoManageResolvConf indicates that the pod will not manage resolv.conf
             *     and instead each container will handle their own. */
            NoManageResolvConf?: boolean;
            /** @description PortBindings are ports that will be forwarded to the infra container
             *     and then shared with the pod. */
            PortBindings?: {
                [key: string]: components["schemas"]["InspectHostPort"][];
            };
            /**
             * Format: ipv4
             * @description StaticIP is a static IPv4 that will be assigned to the infra
             *     container and then used by the pod.
             */
            StaticIP?: string;
            /** @description StaticMAC is a static MAC address that will be assigned to the infra
             *     container and then used by the pod. */
            StaticMAC?: string;
            /**
             * Format: uint64
             * @description CPUPeriod contains the CPU period of the pod
             */
            cpu_period?: number;
            /**
             * Format: int64
             * @description CPUQuota contains the CPU quota of the pod
             */
            cpu_quota?: number;
            /** @description CPUSetCPUs contains linux specific CPU data for the container */
            cpuset_cpus?: string;
            /** @description Pid is the PID namespace mode of the pod's infra container */
            pid_ns?: string;
            /** @description UserNS is the usernamespace that all the containers in the pod will join. */
            userns?: string;
            /** @description UtsNS is the uts namespace that all containers in the pod will join */
            uts_ns?: string;
        };
        /** InspectRestartPolicy holds information about the container's restart policy. */
        InspectRestartPolicy: {
            /**
             * Format: uint64
             * @description MaximumRetryCount is the maximum number of retries allowed if the
             *     "on-failure" restart policy is in use. Not used if "on-failure" is
             *     not set.
             */
            MaximumRetryCount?: number;
            /** @description Name contains the container's restart policy.
             *     Allowable values are "no" or "" (take no action),
             *     "on-failure" (restart on non-zero exit code, with an optional max
             *     retry count), and "always" (always restart on container stop, unless
             *     explicitly requested by API).
             *     Note that this is NOT actually a name of any sort - the poor naming
             *     is for Docker compatibility. */
            Name?: string;
        };
        /** @description InspectSecret contains information on secrets mounted inside the container */
        InspectSecret: {
            /**
             * Format: uint32
             * @description ID is the GID of the mounted secret file
             */
            GID?: number;
            /** @description ID is the ID of the secret */
            ID?: string;
            /**
             * Format: uint32
             * @description ID is the ID of the mode of the mounted secret file
             */
            Mode?: number;
            /** @description Name is the name of the secret */
            Name?: string;
            /**
             * Format: uint32
             * @description ID is the UID of the mounted secret file
             */
            UID?: number;
        };
        /** InspectUlimit is a ulimit that will be applied to the container. */
        InspectUlimit: {
            /**
             * Format: int64
             * @description Hard is the hard limit that will be applied.
             */
            Hard?: number;
            /** @description Name is the name (type) of the ulimit. */
            Name?: string;
            /**
             * Format: int64
             * @description Soft is the soft limit that will be applied.
             */
            Soft?: number;
        };
        /** IpcMode represents the container ipc stack. */
        IpcMode: string;
        /** @description Isolation represents the isolation technology of a container. The supported
         *     values are platform specific */
        Isolation: string;
        /** LeaseRange contains the range where IP are leased. */
        LeaseRange: {
            /**
             * Format: string
             * @description EndIP last IP in the subnet which should be used to assign ips.
             */
            end_ip?: string;
            /**
             * Format: string
             * @description StartIP first IP in the subnet which should be used to assign ips.
             */
            start_ip?: string;
        };
        LibpodContainersRmReport: {
            /** @description Error which occurred during Rm operation (if any).
             *     This field is optional and may be omitted if no error occurred. */
            Err?: string | null;
            Id?: string;
        };
        LibpodImageSummary: {
            /** @description Podman extensions */
            Arch?: string;
            /** Format: int64 */
            Containers?: number;
            /** Format: int64 */
            Created?: number;
            Dangling?: boolean;
            Digest?: string;
            History?: string[];
            Id?: string;
            /** @description IsManifestList is a ptr so we can distinguish between a true
             *     json empty response and false.  the docker compat side needs to return
             *     empty; where as the libpod side needs a value of true or false */
            IsManifestList?: boolean;
            Labels?: {
                [key: string]: string;
            };
            Names?: string[];
            Os?: string;
            ParentId?: string;
            ReadOnly?: boolean;
            RepoDigests?: string[];
            RepoTags?: string[];
            /** Format: int64 */
            SharedSize?: number;
            /** Format: int64 */
            Size?: number;
            /** Format: int64 */
            VirtualSize?: number;
        };
        LibpodImagesPullReport: {
            /** @description Error contains text of errors from c/image */
            error?: string;
            /** @description ID contains image id (retained for backwards compatibility) */
            id?: string;
            /** @description Images contains the ID's of the images pulled */
            images?: string[];
            /** @description Stream used to provide output from c/image */
            stream?: string;
        };
        /** @description LibpodImagesRemoveReport is the return type for image removal via the rest
         *     api. */
        LibpodImagesRemoveReport: {
            /** @description Deleted images. */
            Deleted?: string[];
            /** @description Image removal requires is to return data and an error. */
            Errors?: string[];
            /**
             * Format: int64
             * @description ExitCode describes the exit codes as described in the `podman rmi`
             *     man page.
             */
            ExitCode?: number;
            /** @description Untagged images. Can be longer than Deleted. */
            Untagged?: string[];
        };
        /** @description Info is the overall struct that describes the host system
         *     running libpod/podman */
        LibpodInfo: {
            host?: components["schemas"]["HostInfo"];
            plugins?: components["schemas"]["Plugins"];
            registries?: {
                [key: string]: unknown;
            };
            store?: components["schemas"]["StoreInfo"];
            version?: components["schemas"]["Version"];
        };
        /** @description LinuxBlockIO for Linux cgroup 'blkio' resource management */
        LinuxBlockIO: {
            /**
             * Format: uint16
             * @description Specifies tasks' weight in the given cgroup while competing with the cgroup's child cgroups, CFQ scheduler only
             */
            leafWeight?: number;
            /** @description IO read rate limit per cgroup per device, bytes per second */
            throttleReadBpsDevice?: components["schemas"]["LinuxThrottleDevice"][];
            /** @description IO read rate limit per cgroup per device, IO per second */
            throttleReadIOPSDevice?: components["schemas"]["LinuxThrottleDevice"][];
            /** @description IO write rate limit per cgroup per device, bytes per second */
            throttleWriteBpsDevice?: components["schemas"]["LinuxThrottleDevice"][];
            /** @description IO write rate limit per cgroup per device, IO per second */
            throttleWriteIOPSDevice?: components["schemas"]["LinuxThrottleDevice"][];
            /**
             * Format: uint16
             * @description Specifies per cgroup weight
             */
            weight?: number;
            /** @description Weight per cgroup per device, can override BlkioWeight */
            weightDevice?: components["schemas"]["LinuxWeightDevice"][];
        };
        /** @description LinuxBlockIODevice holds major:minor format supported in blkio cgroup */
        LinuxBlockIODevice: {
            /**
             * Format: int64
             * @description Major is the device's major number.
             */
            major?: number;
            /**
             * Format: int64
             * @description Minor is the device's minor number.
             */
            minor?: number;
        };
        /** @description LinuxCPU for Linux cgroup 'cpu' resource management */
        LinuxCPU: {
            /**
             * Format: uint64
             * @description CPU hardcap burst limit (in usecs). Allowed accumulated cpu time additionally for burst in a
             *     given period.
             */
            burst?: number;
            /** @description CPUs to use within the cpuset. Default is to use any CPU available. */
            cpus?: string;
            /**
             * Format: int64
             * @description cgroups are configured with minimum weight, 0: default behavior, 1: SCHED_IDLE.
             */
            idle?: number;
            /** @description List of memory nodes in the cpuset. Default is to use any available memory node. */
            mems?: string;
            /**
             * Format: uint64
             * @description CPU period to be used for hardcapping (in usecs).
             */
            period?: number;
            /**
             * Format: int64
             * @description CPU hardcap limit (in usecs). Allowed cpu time in a given period.
             */
            quota?: number;
            /**
             * Format: uint64
             * @description CPU period to be used for realtime scheduling (in usecs).
             */
            realtimePeriod?: number;
            /**
             * Format: int64
             * @description How much time realtime scheduling may use (in usecs).
             */
            realtimeRuntime?: number;
            /**
             * Format: uint64
             * @description CPU shares (relative weight (ratio) vs. other cgroups with cpu shares).
             */
            shares?: number;
        };
        /** @description LinuxDevice represents the mknod information for a Linux special device file */
        LinuxDevice: {
            fileMode?: components["schemas"]["FileMode"];
            /**
             * Format: uint32
             * @description Gid of the device.
             */
            gid?: number;
            /**
             * Format: int64
             * @description Major is the device's major number.
             */
            major?: number;
            /**
             * Format: int64
             * @description Minor is the device's minor number.
             */
            minor?: number;
            /** @description Path to the device. */
            path?: string;
            /** @description Device type, block, char, etc. */
            type?: string;
            /**
             * Format: uint32
             * @description UID of the device.
             */
            uid?: number;
        };
        /** @description LinuxDeviceCgroup represents a device rule for the devices specified to
         *     the device controller */
        LinuxDeviceCgroup: {
            /** @description Cgroup access permissions format, rwm. */
            access?: string;
            /** @description Allow or deny */
            allow?: boolean;
            /**
             * Format: int64
             * @description Major is the device's major number.
             */
            major?: number;
            /**
             * Format: int64
             * @description Minor is the device's minor number.
             */
            minor?: number;
            /** @description Device type, block, char, etc. */
            type?: string;
        };
        /**
         * LinuxHugepageLimit structure corresponds to limiting kernel hugepages.
         * @description Default to reservation limits if supported. Otherwise fallback to page fault limits.
         */
        LinuxHugepageLimit: {
            /**
             * Format: uint64
             * @description Limit is the limit of "hugepagesize" hugetlb reservations (if supported) or usage.
             */
            limit?: number;
            /** @description Pagesize is the hugepage size.
             *     Format: "<size><unit-prefix>B' (e.g. 64KB, 2MB, 1GB, etc.). */
            pageSize?: string;
        };
        /** @description LinuxIDMapping specifies UID/GID mappings */
        LinuxIDMapping: {
            /**
             * Format: uint32
             * @description ContainerID is the starting UID/GID in the container
             */
            containerID?: number;
            /**
             * Format: uint32
             * @description HostID is the starting UID/GID on the host to be mapped to 'ContainerID'
             */
            hostID?: number;
            /**
             * Format: uint32
             * @description Size is the number of IDs to be mapped
             */
            size?: number;
        };
        /** @description LinuxIntelRdt has container runtime resource constraints for Intel RDT CAT and MBA
         *     features and flags enabling Intel RDT CMT and MBM features.
         *     Intel RDT features are available in Linux 4.14 and newer kernel versions. */
        LinuxIntelRdt: {
            /** @description The identity for RDT Class of Service */
            closID?: string;
            /** @description EnableCMT is the flag to indicate if the Intel RDT CMT is enabled. CMT (Cache Monitoring Technology) supports monitoring of
             *     the last-level cache (LLC) occupancy for the container. */
            enableCMT?: boolean;
            /** @description EnableMBM is the flag to indicate if the Intel RDT MBM is enabled. MBM (Memory Bandwidth Monitoring) supports monitoring of
             *     total and local memory bandwidth for the container. */
            enableMBM?: boolean;
            /** @description The schema for L3 cache id and capacity bitmask (CBM)
             *     Format: "L3:<cache_id0>=<cbm0>;<cache_id1>=<cbm1>;..." */
            l3CacheSchema?: string;
            /** @description The schema of memory bandwidth per L3 cache id
             *     Format: "MB:<cache_id0>=bandwidth0;<cache_id1>=bandwidth1;..."
             *     The unit of memory bandwidth is specified in "percentages" by
             *     default, and in "MBps" if MBA Software Controller is enabled. */
            memBwSchema?: string;
        };
        /** @description LinuxInterfacePriority for network interfaces */
        LinuxInterfacePriority: {
            /** @description Name is the name of the network interface */
            name?: string;
            /**
             * Format: uint32
             * @description Priority for the interface
             */
            priority?: number;
        };
        /** @description LinuxMemory for Linux cgroup 'memory' resource management */
        LinuxMemory: {
            /** @description CheckBeforeUpdate enables checking if a new memory limit is lower
             *     than the current usage during update, and if so, rejecting the new
             *     limit. */
            checkBeforeUpdate?: boolean;
            /** @description DisableOOMKiller disables the OOM killer for out of memory conditions */
            disableOOMKiller?: boolean;
            /**
             * Format: int64
             * @description Kernel memory limit (in bytes).
             *
             *     Deprecated: kernel-memory limits are not supported in cgroups v2, and
             *     were obsoleted in [kernel v5.4]. This field should no longer be used,
             *     as it may be ignored by runtimes.
             *
             *     [kernel v5.4]: https://github.com/torvalds/linux/commit/0158115f702b0ba208ab0
             */
            kernel?: number;
            /**
             * Format: int64
             * @description Kernel memory limit for tcp (in bytes)
             */
            kernelTCP?: number;
            /**
             * Format: int64
             * @description Memory limit (in bytes).
             */
            limit?: number;
            /**
             * Format: int64
             * @description Memory reservation or soft_limit (in bytes).
             */
            reservation?: number;
            /**
             * Format: int64
             * @description Total memory limit (memory + swap).
             */
            swap?: number;
            /**
             * Format: uint64
             * @description How aggressive the kernel will swap memory pages.
             */
            swappiness?: number;
            /** @description Enables hierarchical memory accounting */
            useHierarchy?: boolean;
        };
        /** @description LinuxNetwork identification and priority configuration */
        LinuxNetwork: {
            /**
             * Format: uint32
             * @description Set class identifier for container's network packets
             */
            classID?: number;
            /** @description Set priority of network traffic for container */
            priorities?: components["schemas"]["LinuxInterfacePriority"][];
        };
        /** @description LinuxPersonality represents the Linux personality syscall input */
        LinuxPersonality: {
            domain?: components["schemas"]["LinuxPersonalityDomain"];
            /** @description Additional flags */
            flags?: components["schemas"]["LinuxPersonalityFlag"][];
        };
        /** LinuxPersonalityDomain refers to a personality domain. */
        LinuxPersonalityDomain: string;
        /** LinuxPersonalityFlag refers to an additional personality flag. None are currently defined. */
        LinuxPersonalityFlag: string;
        /** @description LinuxPids for Linux cgroup 'pids' resource management (Linux 4.3) */
        LinuxPids: {
            /**
             * Format: int64
             * @description Maximum number of PIDs. Default is "no limit".
             */
            limit?: number;
        };
        /** @description LinuxRdma for Linux cgroup 'rdma' resource management (Linux 4.11) */
        LinuxRdma: {
            /**
             * Format: uint32
             * @description Maximum number of HCA handles that can be opened. Default is "no limit".
             */
            hcaHandles?: number;
            /**
             * Format: uint32
             * @description Maximum number of HCA objects that can be created. Default is "no limit".
             */
            hcaObjects?: number;
        };
        /** @description LinuxResources has container runtime resource constraints */
        LinuxResources: {
            blockIO?: components["schemas"]["LinuxBlockIO"];
            cpu?: components["schemas"]["LinuxCPU"];
            /** @description Devices configures the device allowlist. */
            devices?: components["schemas"]["LinuxDeviceCgroup"][];
            /** @description Hugetlb limits (in bytes). Default to reservation limits if supported. */
            hugepageLimits?: components["schemas"]["LinuxHugepageLimit"][];
            memory?: components["schemas"]["LinuxMemory"];
            network?: components["schemas"]["LinuxNetwork"];
            pids?: components["schemas"]["LinuxPids"];
            /** @description Rdma resource restriction configuration.
             *     Limits are a set of key value pairs that define RDMA resource limits,
             *     where the key is device name and value is resource limits. */
            rdma?: {
                [key: string]: components["schemas"]["LinuxRdma"];
            };
            /** @description Unified resources. */
            unified?: {
                [key: string]: string;
            };
        };
        /** @description LinuxThrottleDevice struct holds a `major:minor rate_per_second` pair */
        LinuxThrottleDevice: {
            /**
             * Format: int64
             * @description Major is the device's major number.
             */
            major?: number;
            /**
             * Format: int64
             * @description Minor is the device's minor number.
             */
            minor?: number;
            /**
             * Format: uint64
             * @description Rate is the IO rate limit per cgroup per device
             */
            rate?: number;
        };
        /** @description LinuxWeightDevice struct holds a `major:minor weight` pair for weightDevice */
        LinuxWeightDevice: {
            /**
             * Format: uint16
             * @description LeafWeight is the bandwidth rate for the device while competing with the cgroup's child cgroups, CFQ scheduler only
             */
            leafWeight?: number;
            /**
             * Format: int64
             * @description Major is the device's major number.
             */
            major?: number;
            /**
             * Format: int64
             * @description Minor is the device's minor number.
             */
            minor?: number;
            /**
             * Format: uint16
             * @description Weight is the bandwidth rate for the device.
             */
            weight?: number;
        };
        /** @description ListContainer describes a container suitable for listing */
        ListContainer: {
            /** @description AutoRemove */
            AutoRemove?: boolean;
            /** @description CIDFile specified at creation time. */
            CIDFile?: string;
            /** @description Container command */
            Command?: string[];
            /**
             * Format: date-time
             * @description Container creation time
             */
            Created?: string;
            /** @description Human-readable container creation time. */
            CreatedAt?: string;
            /**
             * Format: int32
             * @description If container has exited, the return code from the command
             */
            ExitCode?: number;
            /** @description If container has exited/stopped */
            Exited?: boolean;
            /**
             * Format: int64
             * @description Time container exited
             */
            ExitedAt?: number;
            /** @description ExposedPorts contains the ports that are exposed but not forwarded,
             *     see Ports for forwarded ports.
             *     The key is the port number and the string slice contains the protocols,
             *     i.e. "tcp", "udp" and "sctp". */
            ExposedPorts?: unknown;
            /** @description The unique identifier for the container */
            Id?: string;
            /** @description Container image */
            Image?: string;
            /** @description Container image ID */
            ImageID?: string;
            /** @description If this container is a Pod infra container */
            IsInfra?: boolean;
            /** @description Labels for container */
            Labels?: {
                [key: string]: string;
            };
            /** @description User volume mounts */
            Mounts?: string[];
            /** @description The names assigned to the container */
            Names?: string[];
            Namespaces?: components["schemas"]["ListContainerNamespaces"];
            /** @description The network names assigned to the container */
            Networks?: string[];
            /**
             * Format: int64
             * @description The process id of the container
             */
            Pid?: number;
            /** @description If the container is part of Pod, the Pod ID. Requires the pod
             *     boolean to be set */
            Pod?: string;
            /** @description If the container is part of Pod, the Pod name. Requires the pod
             *     boolean to be set */
            PodName?: string;
            /** @description Port mappings */
            Ports?: components["schemas"]["PortMapping"][];
            /**
             * Format: uint64
             * @description Restarts is how many times the container was restarted by its
             *     restart policy. This is NOT incremented by normal container restarts
             *     (only by restart policy).
             */
            Restarts?: number;
            Size?: components["schemas"]["ContainerSize"];
            /**
             * Format: int64
             * @description Time when container started
             */
            StartedAt?: number;
            /** @description State of container */
            State?: string;
            /** @description Status is a human-readable approximation of a duration for json output */
            Status?: string;
        };
        /** @description ListContainerNamespaces contains the identifiers of the container's Linux namespaces */
        ListContainerNamespaces: {
            /** @description Cgroup namespace */
            Cgroup?: string;
            /** @description IPC namespace */
            Ipc?: string;
            /** @description Mount namespace */
            Mnt?: string;
            /** @description Network namespace */
            Net?: string;
            /** @description PID namespace */
            Pidns?: string;
            /** @description User namespace */
            User?: string;
            /** @description UTS namespace */
            Uts?: string;
        };
        ListPodContainer: {
            Id?: string;
            Names?: string;
            /** Format: uint64 */
            RestartCount?: number;
            Status?: string;
        };
        ListPodsReport: {
            Cgroup?: string;
            Containers?: components["schemas"]["ListPodContainer"][];
            /** Format: date-time */
            Created?: string;
            Id?: string;
            InfraId?: string;
            Labels?: {
                [key: string]: string;
            };
            Name?: string;
            Namespace?: string;
            /** @description Network names connected to infra container */
            Networks?: string[];
            Status?: string;
        };
        /**
         * ListResponse VolumeListResponse
         * @description Volume list response
         */
        ListResponse: {
            /** @description List of volumes */
            Volumes?: components["schemas"]["Volume"][];
            /** @description Warnings that occurred when fetching the list of volumes. */
            Warnings?: string[];
        };
        /** LogConfig represents the logging configuration of the container. */
        LogConfig: {
            Config?: {
                [key: string]: string;
            };
            Type?: string;
        };
        /** @description LogConfig describes the logging characteristics for a container */
        LogConfigLibpod: {
            /** @description LogDriver is the container's log driver.
             *     Optional. */
            driver?: string;
            /** @description A set of options to accompany the log driver.
             *     Optional. */
            options?: {
                [key: string]: string;
            };
            /** @description LogPath is the path the container's logs will be stored at.
             *     Only available if LogDriver is set to "json-file" or "k8s-file".
             *     Optional. */
            path?: string;
            /**
             * Format: int64
             * @description Size is the maximum size of the log file
             *     Optional.
             */
            size?: number;
        };
        MacAddress: components["schemas"]["HardwareAddr"];
        /** @description ManifestAddArtifactOptions provides the model for creating artifact manifests
         *     for files and adding those manifests to a manifest list */
        ManifestAddArtifactOptions: {
            /** @description Annotation to add to the item in the manifest list */
            annotation?: string[];
            /** @description Annotations to add to the item in the manifest list by a map which is preferred over Annotation */
            annotations?: {
                [key: string]: string;
            };
            /** @description Arch overrides the architecture for the item in the manifest list */
            arch?: string;
            artifact_annotations?: {
                [key: string]: string;
            };
            artifact_config?: string;
            artifact_config_type?: string;
            artifact_exclude_titles?: boolean;
            artifact_files?: string[];
            artifact_layer_type?: string;
            artifact_subject?: string;
            /** @description Note to future maintainers: keep these fields synchronized with ManifestModifyOptions! */
            artifact_type?: string;
            /** @description Feature list for the item in the manifest list */
            features?: string[];
            /** @description IndexAnnotation is a slice of key=value annotations to add to the manifest list itself */
            index_annotation?: string[];
            /** @description IndexAnnotations is a map of key:value annotations to add to the manifest list itself, by a map which is preferred over IndexAnnotation */
            index_annotations?: {
                [key: string]: string;
            };
            /** @description OS overrides the operating system for the item in the manifest list */
            os?: string;
            /** @description OS features for the item in the manifest list */
            os_features?: string[];
            /** @description OSVersion overrides the operating system for the item in the manifest list */
            os_version?: string;
            /** @description IndexSubject is a subject value to set in the manifest list itself */
            subject?: string;
            /** @description Variant for the item in the manifest list */
            variant?: string;
        };
        /** @description ManifestAddOptions provides model for adding digests to manifest list */
        ManifestAddOptions: {
            /** @description True when operating on a list to include all images */
            all?: boolean;
            /** @description Annotation to add to the item in the manifest list */
            annotation?: string[];
            /** @description Annotations to add to the item in the manifest list by a map which is preferred over Annotation */
            annotations?: {
                [key: string]: string;
            };
            /** @description Arch overrides the architecture for the item in the manifest list */
            arch?: string;
            /** @description Feature list for the item in the manifest list */
            features?: string[];
            /** @description Images is an optional list of image references to add to manifest list */
            images?: string[];
            /** @description IndexAnnotation is a slice of key=value annotations to add to the manifest list itself */
            index_annotation?: string[];
            /** @description IndexAnnotations is a map of key:value annotations to add to the manifest list itself, by a map which is preferred over IndexAnnotation */
            index_annotations?: {
                [key: string]: string;
            };
            /** @description OS overrides the operating system for the item in the manifest list */
            os?: string;
            /** @description OS features for the item in the manifest list */
            os_features?: string[];
            /** @description OSVersion overrides the operating system for the item in the manifest list */
            os_version?: string;
            /** @description IndexSubject is a subject value to set in the manifest list itself */
            subject?: string;
            /** @description Variant for the item in the manifest list */
            variant?: string;
        };
        /** @description ManifestAnnotateOptions provides model for annotating manifest list */
        ManifestAnnotateOptions: {
            /** @description Annotation to add to the item in the manifest list */
            annotation?: string[];
            /** @description Annotations to add to the item in the manifest list by a map which is preferred over Annotation */
            annotations?: {
                [key: string]: string;
            };
            /** @description Arch overrides the architecture for the item in the manifest list */
            arch?: string;
            /** @description Feature list for the item in the manifest list */
            features?: string[];
            /** @description IndexAnnotation is a slice of key=value annotations to add to the manifest list itself */
            index_annotation?: string[];
            /** @description IndexAnnotations is a map of key:value annotations to add to the manifest list itself, by a map which is preferred over IndexAnnotation */
            index_annotations?: {
                [key: string]: string;
            };
            /** @description OS overrides the operating system for the item in the manifest list */
            os?: string;
            /** @description OS features for the item in the manifest list */
            os_features?: string[];
            /** @description OSVersion overrides the operating system for the item in the manifest list */
            os_version?: string;
            /** @description IndexSubject is a subject value to set in the manifest list itself */
            subject?: string;
            /** @description Variant for the item in the manifest list */
            variant?: string;
        };
        ManifestKind: string;
        /**
         * ManifestModifyOptions provides the model for mutating a manifest
         * @description swagger 2.0 does not support oneOf for schema validation.
         *
         *     Operation "update" uses all fields.
         *     Operation "remove" uses fields: Operation and Images
         *     Operation "annotate" uses fields: Operation and Annotations
         */
        ManifestModifyOptions: {
            /** @description True when operating on a list to include all images */
            all?: boolean;
            /** @description Annotation to add to the item in the manifest list */
            annotation?: string[];
            /** @description Annotations to add to the item in the manifest list by a map which is preferred over Annotation */
            annotations?: {
                [key: string]: string;
            };
            /** @description Arch overrides the architecture for the item in the manifest list */
            arch?: string;
            artifact_annotations?: {
                [key: string]: string;
            };
            artifact_config?: string;
            artifact_config_type?: string;
            artifact_exclude_titles?: boolean;
            artifact_files?: string[];
            artifact_layer_type?: string;
            artifact_subject?: string;
            /** @description The following are all of the fields from ManifestAddArtifactOptions.
             *     We can't just embed the whole structure because it embeds a
             *     ManifestAnnotateOptions, which would conflict with the one that
             *     ManifestAddOptions embeds. */
            artifact_type?: string;
            /** @description Feature list for the item in the manifest list */
            features?: string[];
            /** @description Images is an optional list of image references to add to manifest list */
            images?: string[];
            /** @description IndexAnnotation is a slice of key=value annotations to add to the manifest list itself */
            index_annotation?: string[];
            /** @description IndexAnnotations is a map of key:value annotations to add to the manifest list itself, by a map which is preferred over IndexAnnotation */
            index_annotations?: {
                [key: string]: string;
            };
            operation?: string;
            /** @description OS overrides the operating system for the item in the manifest list */
            os?: string;
            /** @description OS features for the item in the manifest list */
            os_features?: string[];
            /** @description OSVersion overrides the operating system for the item in the manifest list */
            os_version?: string;
            /** @description IndexSubject is a subject value to set in the manifest list itself */
            subject?: string;
            /** @description Variant for the item in the manifest list */
            variant?: string;
        };
        ManifestModifyReport: {
            /** @description Manifest List ID */
            Id?: string;
            /** @description Errors associated with operation */
            errors?: string[];
            /** @description Files added to manifest list, otherwise not provided. */
            files?: string[];
            /** @description Images added to or removed from manifest list, otherwise not provided. */
            images?: string[];
        };
        ManifestPushReport: {
            /** @description ID of the pushed manifest */
            Id?: string;
            /** @description Error contains text of errors from pushing */
            error?: string;
            /** @description Stream used to provide push progress */
            stream?: string;
        };
        /** @description ManifestRemoveOptions provides the model for removing digests from a manifest */
        ManifestRemoveOptions: Record<string, never>;
        ManifestRemoveReport: {
            /** @description Deleted manifest list. */
            Deleted?: string[];
            /** @description Errors associated with operation */
            Errors?: string[];
            /**
             * Format: int64
             * @description ExitCode describes the exit codes as described in the `podman rmi`
             *     man page.
             */
            ExitCode?: number;
            /** @description Untagged images. Can be longer than Deleted. */
            Untagged?: string[];
        };
        ManifestSummary: {
            AttestationData?: components["schemas"]["AttestationProperties"];
            /** @description Indicates whether all the child content (image config, layers) is
             *     fully available locally */
            Available: boolean;
            Descriptor: components["schemas"]["Descriptor"];
            /** @description ID is the content-addressable ID of an image and is the same as the
             *     digest of the image manifest. */
            ID: string;
            ImageData?: components["schemas"]["ImageProperties"];
            Kind: components["schemas"]["ManifestKind"];
            /** @description Size is the size information of the content related to this manifest.
             *     Note: These sizes only take the locally available content into account. */
            Size: {
                /**
                 * Format: int64
                 * @description Content is the size (in bytes) of all the locally present
                 *     content in the content store (e.g. image config, layers)
                 *     referenced by this manifest and its children.
                 *     This only includes blobs in the content store.
                 */
                Content?: number;
                /**
                 * Format: int64
                 * @description Total is the total size (in bytes) of all the locally present
                 *     data (both distributable and non-distributable) that's related to
                 *     this manifest and its children.
                 *     This equal to the sum of [Content] size AND all the sizes in the
                 *     [Size] struct present in the Kind-specific data struct.
                 *     For example, for an image kind (Kind == ManifestKindImage),
                 *     this would include the size of the image content and unpacked
                 *     image snapshots ([Size.Content] + [ImageData.Size.Unpacked]).
                 */
                Total?: number;
            };
        };
        /** Meta is a base object inherited by most of the other once. */
        Meta: {
            /** Format: date-time */
            CreatedAt?: string;
            /** Format: date-time */
            UpdatedAt?: string;
            Version?: components["schemas"]["Version"];
        };
        /** Metadata contains engine-local data about the image. */
        Metadata: {
            /**
             * Format: date-time
             * @description LastTagTime is the date and time at which the image was last tagged.
             */
            LastTagTime?: string;
        };
        /** Mount represents a mount (volume). */
        Mount: {
            BindOptions?: components["schemas"]["BindOptions"];
            ClusterOptions?: components["schemas"]["ClusterOptions"];
            Consistency?: components["schemas"]["Consistency"];
            ReadOnly?: boolean;
            /** @description Source specifies the name of the mount. Depending on mount type, this
             *     may be a volume name or a host path, or even ignored.
             *     Source is not supported for tmpfs (must be an empty value) */
            Source?: string;
            Target?: string;
            TmpfsOptions?: components["schemas"]["TmpfsOptions"];
            Type?: components["schemas"]["Type"];
            VolumeOptions?: components["schemas"]["VolumeOptions"];
        };
        /**
         * MountPoint represents a mount point configuration inside the container.
         * @description This is used for reporting the mountpoints in use by a container.
         */
        MountPoint: {
            /** @description Destination is the path relative to the container root (`/`) where the
             *     Source is mounted inside the container. */
            Destination?: string;
            /** @description Driver is the volume driver used to create the volume (if it is a volume). */
            Driver?: string;
            /** @description Mode is a comma separated list of options supplied by the user when
             *     creating the bind/volume mount.
             *
             *     The default is platform-specific (`"z"` on Linux, empty on Windows). */
            Mode?: string;
            /** @description Name is the name reference to the underlying data defined by `Source`
             *     e.g., the volume name. */
            Name?: string;
            Propagation?: components["schemas"]["Propagation"];
            /** @description RW indicates whether the mount is mounted writable (read-write). */
            RW?: boolean;
            /** @description Source is the source location of the mount.
             *
             *     For volumes, this contains the storage location of the volume (within
             *     `/var/lib/docker/volumes/`). For bind-mounts, and `npipe`, this contains
             *     the source (host) part of the bind-mount. For `tmpfs` mount points, this
             *     field is empty. */
            Source?: string;
            Type?: components["schemas"]["Type"];
        };
        /** @description NamedVolume holds information about a named volume that will be mounted into
         *     the container. */
        NamedVolume: {
            /** @description Destination to mount the named volume within the container. Must be
             *     an absolute path. Path will be created if it does not exist. */
            Dest?: string;
            /** @description IsAnonymous sets the named volume as anonymous even if it has a name
             *     This is used for emptyDir volumes from a kube yaml */
            IsAnonymous?: boolean;
            /** @description Name is the name of the named volume to be mounted. May be empty.
             *     If empty, a new named volume with a pseudorandomly generated name
             *     will be mounted at the given destination. */
            Name?: string;
            /** @description Options are options that the named volume will be mounted with. */
            Options?: string[];
            /** @description SubPath stores the sub directory of the named volume to be mounted in the container */
            SubPath?: string;
        };
        /** @description Namespace describes the namespace */
        Namespace: {
            nsmode?: components["schemas"]["NamespaceMode"];
            value?: string;
        };
        NamespaceMode: string;
        /** NetAddress contains the ip address, subnet and gateway. */
        NetAddress: {
            /** @description Gateway for the network. This can be empty if there is no gateway, e.g. internal network. */
            gateway?: string;
            ipnet?: components["schemas"]["IPNet"];
        };
        /** NetInterface contains the settings for a given network interface. */
        NetInterface: {
            /** @description MacAddress for this Interface. */
            mac_address?: string;
            /** @description Subnets list of assigned subnets with their gateway. */
            subnets?: components["schemas"]["NetAddress"][];
        };
        /** @description NetOptions reflect the shared network options between
         *     pods and containers */
        NetOptions: {
            dns_option?: string[];
            dns_search?: string[];
            dns_server?: string[];
            hostadd?: string[];
            hosts_file?: string;
            netns?: components["schemas"]["Namespace"];
            network_alias?: string[];
            /** @description NetworkOptions are additional options for each network */
            network_options?: {
                [key: string]: string[];
            };
            networks?: {
                [key: string]: components["schemas"]["PerNetworkOptions"];
            };
            no_manage_hostname?: boolean;
            no_manage_hosts?: boolean;
            no_manage_resolv_conf?: boolean;
            portmappings?: components["schemas"]["PortMapping"][];
        };
        /** Network describes the Network attributes. */
        Network: {
            /**
             * Format: date-time
             * @description Created contains the timestamp when this network was created.
             */
            created?: string;
            /** @description DNSEnabled is whether name resolution is active for container on
             *     this Network. Only supported with the bridge driver. */
            dns_enabled?: boolean;
            /** @description Driver for this Network, e.g. bridge, macvlan... */
            driver?: string;
            /** @description ID of the Network. */
            id?: string;
            /** @description Internal is whether the Network should not have external routes
             *     to public or other Networks. */
            internal?: boolean;
            /** @description IPAMOptions contains options used for the ip assignment. */
            ipam_options?: {
                [key: string]: string;
            };
            /** @description IPv6Enabled if set to true an ipv6 subnet should be created for this net. */
            ipv6_enabled?: boolean;
            /** @description Labels is a set of key-value labels that have been applied to the
             *     Network. */
            labels?: {
                [key: string]: string;
            };
            /** @description Name of the Network. */
            name?: string;
            /** @description List of custom DNS server for podman's DNS resolver at network level,
             *     all the containers attached to this network will consider resolvers
             *     configured at network level. */
            network_dns_servers?: string[];
            /** @description NetworkInterface is the network interface name on the host. */
            network_interface?: string;
            /** @description Options is a set of key-value options that have been applied to
             *     the Network. */
            options?: {
                [key: string]: string;
            };
            /** @description Routes to use for this network. */
            routes?: components["schemas"]["Route"][];
            /** @description Subnets to use for this network. */
            subnets?: components["schemas"]["Subnet"][];
        };
        NetworkBackend: string;
        /** @description NetworkConnectOptions describes options for connecting
         *     a container to a network */
        NetworkConnectOptions: {
            /** @description Aliases contains a list of names which the dns server should resolve
             *     to this container. Should only be set when DNSEnabled is true on the Network.
             *     If aliases are set but there is no dns support for this network the
             *     network interface implementation should ignore this and NOT error.
             *     Optional. */
            aliases?: string[];
            container?: string;
            /** @description InterfaceName for this container. Required in the backend.
             *     Optional in the frontend. Will be filled with ethX (where X is a integer) when empty. */
            interface_name?: string;
            /** @description Driver-specific options for this container. */
            options?: {
                [key: string]: string;
            };
            /** @description StaticIPs for this container. Optional. */
            static_ips?: string[];
            /**
             * Format: string
             * @description StaticMac for this container. Optional.
             */
            static_mac?: string;
        };
        NetworkContainerInfo: {
            /** @description Interfaces configured for this container with their addresses */
            interfaces?: {
                [key: string]: components["schemas"]["NetInterface"];
            };
            /** @description Name of the container */
            name?: string;
        };
        /** NetworkInfo contains the network information. */
        NetworkInfo: {
            backend?: components["schemas"]["NetworkBackend"];
            dns?: components["schemas"]["DNSNetworkInfo"];
            package?: string;
            path?: string;
            version?: string;
        };
        NetworkInspectReport: {
            containers?: {
                [key: string]: components["schemas"]["NetworkContainerInfo"];
            };
            /**
             * Format: date-time
             * @description Created contains the timestamp when this network was created.
             */
            created?: string;
            /** @description DNSEnabled is whether name resolution is active for container on
             *     this Network. Only supported with the bridge driver. */
            dns_enabled?: boolean;
            /** @description Driver for this Network, e.g. bridge, macvlan... */
            driver?: string;
            /** @description ID of the Network. */
            id?: string;
            /** @description Internal is whether the Network should not have external routes
             *     to public or other Networks. */
            internal?: boolean;
            /** @description IPAMOptions contains options used for the ip assignment. */
            ipam_options?: {
                [key: string]: string;
            };
            /** @description IPv6Enabled if set to true an ipv6 subnet should be created for this net. */
            ipv6_enabled?: boolean;
            /** @description Labels is a set of key-value labels that have been applied to the
             *     Network. */
            labels?: {
                [key: string]: string;
            };
            /** @description Name of the Network. */
            name?: string;
            /** @description List of custom DNS server for podman's DNS resolver at network level,
             *     all the containers attached to this network will consider resolvers
             *     configured at network level. */
            network_dns_servers?: string[];
            /** @description NetworkInterface is the network interface name on the host. */
            network_interface?: string;
            /** @description Options is a set of key-value options that have been applied to
             *     the Network. */
            options?: {
                [key: string]: string;
            };
            /** @description Routes to use for this network. */
            routes?: components["schemas"]["Route"][];
            /** @description Subnets to use for this network. */
            subnets?: components["schemas"]["Subnet"][];
        };
        /** NetworkMode represents the container network stack. */
        NetworkMode: string;
        /** @description NetworkPruneReport containers the name of network and an error
         *     associated in its pruning (removal) */
        NetworkPruneReport: {
            Error?: string;
            Name?: string;
        };
        /** @description NetworkRmReport describes the results of network removal */
        NetworkRmReport: {
            Err?: string;
            Name?: string;
        };
        /** @description NetworkSettings exposes the network settings in the api */
        NetworkSettings: {
            Bridge?: string;
            EndpointID?: string;
            Gateway?: string;
            GlobalIPv6Address?: string;
            /** Format: int64 */
            GlobalIPv6PrefixLen?: number;
            /** @description HairpinMode specifies if hairpin NAT should be enabled on the virtual interface
             *
             *     Deprecated: This field is never set and will be removed in a future release. */
            HairpinMode?: boolean;
            IPAddress?: string;
            /** Format: int64 */
            IPPrefixLen?: number;
            IPv6Gateway?: string;
            /** @description LinkLocalIPv6Address is an IPv6 unicast address using the link-local prefix
             *
             *     Deprecated: This field is never set and will be removed in a future release. */
            LinkLocalIPv6Address?: string;
            /**
             * Format: int64
             * @description LinkLocalIPv6PrefixLen is the prefix length of an IPv6 unicast address
             *
             *     Deprecated: This field is never set and will be removed in a future release.
             */
            LinkLocalIPv6PrefixLen?: number;
            MacAddress?: string;
            Networks?: {
                [key: string]: components["schemas"]["EndpointSettings"];
            };
            Ports?: components["schemas"]["PortMap"];
            SandboxID?: string;
            SandboxKey?: string;
            SecondaryIPAddresses?: components["schemas"]["Address"][];
            SecondaryIPv6Addresses?: components["schemas"]["Address"][];
        };
        /** @description NetworkUpdateOptions describes options to update a network */
        NetworkUpdateOptions: {
            adddnsservers?: string[];
            removednsservers?: string[];
        };
        /** @description NetworkingConfig represents the container's networking configuration for each of its interfaces
         *     Carries the networking configs specified in the `docker run` and `docker network connect` commands */
        NetworkingConfig: {
            EndpointsConfig?: {
                [key: string]: components["schemas"]["EndpointSettings"];
            };
        };
        /** @description OCIRuntimeInfo describes the runtime (crun or runc) being
         *     used with podman */
        OCIRuntimeInfo: {
            name?: string;
            package?: string;
            path?: string;
            version?: string;
        };
        /** @description OverlayVolume holds information about an overlay volume that will be mounted into
         *     the container. */
        OverlayVolume: {
            /** @description Destination is the absolute path where the mount will be placed in the container. */
            destination?: string;
            /** @description Options holds overlay volume options. */
            options?: string[];
            /** @description Source specifies the source path of the mount. */
            source?: string;
        };
        /** @description POSIXRlimit type and restrictions */
        POSIXRlimit: {
            /**
             * Format: uint64
             * @description Hard is the hard limit for the specified type
             */
            hard?: number;
            /**
             * Format: uint64
             * @description Soft is the soft limit for the specified type
             */
            soft?: number;
            /** @description Type of the rlimit to set */
            type?: string;
        };
        /** @description PastaInfo describes the pasta executable that is being used */
        PastaInfo: {
            executable?: string;
            package?: string;
            version?: string;
        };
        /** @description PeerInfo represents one peer of an overlay network */
        PeerInfo: {
            IP?: string;
            Name?: string;
        };
        /** PerNetworkOptions are options which should be set on a per network basis. */
        PerNetworkOptions: {
            /** @description Aliases contains a list of names which the dns server should resolve
             *     to this container. Should only be set when DNSEnabled is true on the Network.
             *     If aliases are set but there is no dns support for this network the
             *     network interface implementation should ignore this and NOT error.
             *     Optional. */
            aliases?: string[];
            /** @description InterfaceName for this container. Required in the backend.
             *     Optional in the frontend. Will be filled with ethX (where X is a integer) when empty. */
            interface_name?: string;
            /** @description Driver-specific options for this container. */
            options?: {
                [key: string]: string;
            };
            /** @description StaticIPs for this container. Optional. */
            static_ips?: string[];
            /**
             * Format: string
             * @description StaticMac for this container. Optional.
             */
            static_mac?: string;
        };
        /** PidMode represents the pid namespace of the container. */
        PidMode: string;
        /** Platform describes the platform which the image in the manifest runs on. */
        Platform: {
            /** @description Architecture field specifies the CPU architecture, for example
             *     `amd64` or `ppc64le`. */
            architecture?: string;
            /** @description OS specifies the operating system, for example `linux` or `windows`. */
            os?: string;
            /** @description OSFeatures is an optional field specifying an array of strings,
             *     each listing a required OS feature (for example on Windows `win32k`). */
            "os.features"?: string[];
            /** @description OSVersion is an optional field specifying the operating system
             *     version, for example on Windows `10.0.14393.1066`. */
            "os.version"?: string;
            /** @description Variant is an optional field specifying a variant of the CPU, for
             *     example `v7` to specify ARMv7 when architecture is `arm`. */
            variant?: string;
        };
        PlayKubePod: {
            /** @description ContainerErrors - any errors that occurred while starting containers
             *     in the pod. */
            ContainerErrors?: string[];
            /** @description Containers - the IDs of the containers running in the created pod. */
            Containers?: string[];
            /** @description ID - ID of the pod created as a result of play kube. */
            ID?: string;
            /** @description InitContainers - the IDs of the init containers to be run in the created pod. */
            InitContainers?: string[];
            /** @description Logs - non-fatal errors and log messages while processing. */
            Logs?: string[];
        };
        PlayKubeReport: {
            /**
             * Format: int32
             * @description If set, exit with the specified exit code.
             */
            ExitCode?: number;
            /** @description Pods - pods created by play kube. */
            Pods?: components["schemas"]["PlayKubePod"][];
            RmReport?: components["schemas"]["PodRmReport"][];
            SecretRmReport?: components["schemas"]["SecretRmReport"][];
            /** @description Secrets - secrets created by play kube */
            Secrets?: components["schemas"]["PlaySecret"][];
            /** @description ServiceContainerID - ID of the service container if one is created */
            ServiceContainerID?: string;
            StopReport?: components["schemas"]["PodStopReport"][];
            VolumeRmReport?: components["schemas"]["VolumeRmReport"][];
            /** @description Volumes - volumes created by play kube. */
            Volumes?: components["schemas"]["PlayKubeVolume"][];
        };
        PlayKubeVolume: {
            /** @description Name - Name of the volume created by play kube. */
            Name?: string;
        };
        PlaySecret: {
            CreateReport?: components["schemas"]["SecretCreateReport"];
        };
        /** @description Plugin A plugin for the Engine API */
        Plugin: {
            Config: components["schemas"]["PluginConfig"];
            /** @description True if the plugin is running. False if the plugin is not running, only installed. */
            Enabled: boolean;
            /** @description Id */
            Id?: string;
            /** @description name */
            Name: string;
            /** @description plugin remote reference used to push/pull the plugin */
            PluginReference?: string;
            Settings: components["schemas"]["PluginSettings"];
        };
        /** PluginConfig The config of a plugin. */
        PluginConfig: {
            Args: components["schemas"]["PluginConfigArgs"];
            /** @description description */
            Description: string;
            /** @description Docker Version used to create the plugin */
            DockerVersion?: string;
            /** @description documentation */
            Documentation: string;
            /** @description entrypoint */
            Entrypoint: string[];
            /** @description env */
            Env: components["schemas"]["PluginEnv"][];
            Interface: components["schemas"]["PluginConfigInterface"];
            /** @description ipc host */
            IpcHost: boolean;
            Linux: components["schemas"]["PluginConfigLinux"];
            /** @description mounts */
            Mounts: components["schemas"]["PluginMount"][];
            Network: components["schemas"]["PluginConfigNetwork"];
            /** @description pid host */
            PidHost: boolean;
            /** @description propagated mount */
            PropagatedMount: string;
            User?: components["schemas"]["PluginConfigUser"];
            /** @description work dir */
            WorkDir: string;
            rootfs?: components["schemas"]["PluginConfigRootfs"];
        };
        /** @description PluginConfigArgs plugin config args */
        PluginConfigArgs: {
            /** @description description */
            Description: string;
            /** @description name */
            Name: string;
            /** @description settable */
            Settable: string[];
            /** @description value */
            Value: string[];
        };
        /** @description PluginConfigInterface The interface between Docker and the plugin */
        PluginConfigInterface: {
            /** @description Protocol to use for clients connecting to the plugin. */
            ProtocolScheme?: string;
            /** @description socket */
            Socket: string;
            /** @description types */
            Types: components["schemas"]["PluginInterfaceType"][];
        };
        /** @description PluginConfigLinux plugin config linux */
        PluginConfigLinux: {
            /** @description allow all devices */
            AllowAllDevices: boolean;
            /** @description capabilities */
            Capabilities: string[];
            /** @description devices */
            Devices: components["schemas"]["PluginDevice"][];
        };
        /** @description PluginConfigNetwork plugin config network */
        PluginConfigNetwork: {
            /** @description type */
            Type: string;
        };
        /** @description PluginConfigRootfs plugin config rootfs */
        PluginConfigRootfs: {
            /** @description diff ids */
            diff_ids?: string[];
            /** @description type */
            type?: string;
        };
        /** @description PluginConfigUser plugin config user */
        PluginConfigUser: {
            /**
             * Format: uint32
             * @description g ID
             */
            GID?: number;
            /**
             * Format: uint32
             * @description UID
             */
            UID?: number;
        };
        /** @description PluginDevice plugin device */
        PluginDevice: {
            /** @description description */
            Description: string;
            /** @description name */
            Name: string;
            /** @description path */
            Path: string;
            /** @description settable */
            Settable: string[];
        };
        /** @description PluginEnv plugin env */
        PluginEnv: {
            /** @description description */
            Description: string;
            /** @description name */
            Name: string;
            /** @description settable */
            Settable: string[];
            /** @description value */
            Value: string;
        };
        /** @description PluginInterfaceType plugin interface type */
        PluginInterfaceType: {
            /** @description capability */
            Capability: string;
            /** @description prefix */
            Prefix: string;
            /** @description version */
            Version: string;
        };
        /** @description PluginMount plugin mount */
        PluginMount: {
            /** @description description */
            Description: string;
            /** @description destination */
            Destination: string;
            /** @description name */
            Name: string;
            /** @description options */
            Options: string[];
            /** @description settable */
            Settable: string[];
            /** @description source */
            Source: string;
            /** @description type */
            Type: string;
        };
        /** PluginSettings Settings that can be modified by users. */
        PluginSettings: {
            /** @description args */
            Args: string[];
            /** @description devices */
            Devices: components["schemas"]["PluginDevice"][];
            /** @description env */
            Env: string[];
            /** @description mounts */
            Mounts: components["schemas"]["PluginMount"][];
        };
        Plugins: {
            /** @description Authorization is provided for compatibility, will always be nil as Podman has no daemon */
            authorization?: string[];
            log?: string[];
            network?: string[];
            volume?: string[];
        };
        /** PodBasicConfig contains basic configuration options for pods. */
        PodBasicConfig: {
            /** @description ExitPolicy determines the pod's exit and stop behaviour. */
            exit_policy?: string;
            /** @description Hostname is the pod's hostname. If not set, the name of the pod will
             *     be used (if a name was not provided here, the name auto-generated for
             *     the pod will be used). This will be used by the infra container and
             *     all containers in the pod as long as the UTS namespace is shared.
             *     Optional. */
            hostname?: string;
            /** @description InfraCommand sets the command that will be used to start the infra
             *     container.
             *     If not set, the default set in the Libpod configuration file will be
             *     used.
             *     Conflicts with NoInfra=true.
             *     Optional. */
            infra_command?: string[];
            /** @description InfraConmonPidFile is a custom path to store the infra container's
             *     conmon PID. */
            infra_conmon_pid_file?: string;
            /** @description InfraImage is the image that will be used for the infra container.
             *     If not set, the default set in the Libpod configuration file will be
             *     used.
             *     Conflicts with NoInfra=true.
             *     Optional. */
            infra_image?: string;
            /** @description InfraName is the name that will be used for the infra container.
             *     If not set, the default set in the Libpod configuration file will be
             *     used.
             *     Conflicts with NoInfra=true.
             *     Optional. */
            infra_name?: string;
            ipcns?: components["schemas"]["Namespace"];
            /** @description Labels are key-value pairs that are used to add metadata to pods.
             *     Optional. */
            labels?: {
                [key: string]: string;
            };
            /** @description Name is the name of the pod.
             *     If not provided, a name will be generated when the pod is created.
             *     Optional. */
            name?: string;
            /** @description NoInfra tells the pod not to create an infra container. If this is
             *     done, many networking-related options will become unavailable.
             *     Conflicts with setting any options in PodNetworkConfig, and the
             *     InfraCommand and InfraImages in this struct.
             *     Optional. */
            no_infra?: boolean;
            pidns?: components["schemas"]["Namespace"];
            pod_create_command?: string[];
            /** @description Devices contains user specified Devices to be added to the Pod */
            pod_devices?: string[];
            /** @description RestartPolicy is the pod's restart policy - an action which
             *     will be taken when one or all the containers in the pod exits.
             *     If not given, the default policy will be set to Always, which
             *     restarts the containers in the pod when they exit indefinitely.
             *     Optional. */
            restart_policy?: string;
            /**
             * Format: uint64
             * @description RestartRetries is the number of attempts that will be made to restart
             *     the container.
             *     Only available when RestartPolicy is set to "on-failure".
             *     Optional.
             */
            restart_tries?: number;
            /** @description PodCreateCommand is the command used to create this pod.
             *     This will be shown in the output of Inspect() on the pod, and may
             *     also be used by some tools that wish to recreate the pod
             *     (e.g. `podman generate systemd --new`).
             *     Optional.
             *     ShareParent determines if all containers in the pod will share the pod's cgroup as the cgroup parent */
            share_parent?: boolean;
            /** @description SharedNamespaces instructs the pod to share a set of namespaces.
             *     Shared namespaces will be joined (by default) by every container
             *     which joins the pod.
             *     If not set and NoInfra is false, the pod will set a default set of
             *     namespaces to share.
             *     Conflicts with NoInfra=true.
             *     Optional. */
            shared_namespaces?: string[];
            /** @description Sysctl sets kernel parameters for the pod */
            sysctl?: {
                [key: string]: string;
            };
            userns?: components["schemas"]["Namespace"];
            utsns?: components["schemas"]["Namespace"];
        };
        /**
         * PodCgroupConfig contains configuration options about a pod's cgroups.
         * @description This will be expanded in future updates to pods.
         */
        PodCgroupConfig: {
            /** @description CgroupParent is the parent for the Cgroup that the pod will create.
             *     This pod cgroup will, in turn, be the default cgroup parent for all
             *     containers in the pod.
             *     Optional. */
            cgroup_parent?: string;
        };
        /**
         * PodCreateOptions provides all possible options for creating a pod and its infra container.
         * @description The JSON tags below are made to match the respective field in ContainerCreateOptions for the purpose of mapping.
         */
        PodCreateOptions: {
            cgroup_parent?: string;
            container_command?: string;
            container_conmon_pidfile?: string;
            container_name?: string;
            /** Format: double */
            cpus?: number;
            cpuset_cpus?: string;
            create_command?: string[];
            device_read_bps?: string[];
            devices?: string[];
            exit_policy?: string;
            hostname?: string;
            infra?: boolean;
            infra_image?: string;
            ipc?: string;
            labels?: {
                [key: string]: string;
            };
            name?: string;
            net?: components["schemas"]["NetOptions"];
            pid?: string;
            restart?: string;
            security_opt?: string[];
            share?: string[];
            share_parent?: boolean;
            sysctl?: string[];
            uts?: string;
            volume?: string[];
            volumes_from?: string[];
        };
        PodKillReport: {
            Errs?: string[];
            Id?: string;
        };
        /** PodNetworkConfig contains networking configuration for a pod. */
        PodNetworkConfig: {
            /** @description Map of networks names to ids the container should join to.
             *     You can request additional settings for each network, you can
             *     set network aliases, static ips, static mac address  and the
             *     network interface name for this container on the specific network.
             *     If the map is empty and the bridge network mode is set the container
             *     will be joined to the default network. */
            Networks?: {
                [key: string]: components["schemas"]["PerNetworkOptions"];
            };
            /** @description CNINetworks is a list of CNI networks to join the container to.
             *     If this list is empty, the default CNI network will be joined
             *     instead. If at least one entry is present, we will not join the
             *     default network (unless it is part of this list).
             *     Only available if NetNS is set to bridge.
             *     Optional.
             *     Deprecated: as of podman 4.0 use "Networks" instead. */
            cni_networks?: string[];
            /** @description DNSOption is a set of DNS options that will be used in the infra
             *     container's resolv.conf, which will, by default, be shared with all
             *     containers in the pod.
             *     Conflicts with NoInfra=true.
             *     Optional. */
            dns_option?: string[];
            /** @description DNSSearch is a set of DNS search domains that will be used in the
             *     infra container's resolv.conf, which will, by default, be shared with
             *     all containers in the pod.
             *     If not provided, DNS search domains from the host's resolv.conf will
             *     be used.
             *     Conflicts with NoInfra=true.
             *     Optional. */
            dns_search?: string[];
            /** @description DNSServer is a set of DNS servers that will be used in the infra
             *     container's resolv.conf, which will, by default, be shared with all
             *     containers in the pod.
             *     If not provided, the host's DNS servers will be used, unless the only
             *     server set is a localhost address. As the container cannot connect to
             *     the host's localhost, a default server will instead be set.
             *     Conflicts with NoInfra=true.
             *     Optional. */
            dns_server?: string[];
            /** @description HostAdd is a set of hosts that will be added to the infra container's
             *     etc/hosts that will, by default, be shared with all containers in
             *     the pod.
             *     Conflicts with NoInfra=true and NoManageHosts.
             *     Optional. */
            hostadd?: string[];
            /** @description HostsFile is the base file to create the `/etc/hosts` file inside the infra container.
             *     This must either be an absolute path to a file on the host system, or one of the
             *     special flags `image` or `none`.
             *     If it is empty it defaults to the base_hosts_file configuration in containers.conf.
             *     Conflicts with NoInfra=true and NoManageHosts.
             *     Optional. */
            hostsFile?: string;
            netns?: components["schemas"]["Namespace"];
            /** @description NetworkOptions are additional options for each network
             *     Optional. */
            network_options?: {
                [key: string]: string[];
            };
            /** @description NoManageHostname indicates that /etc/hostname should not be managed
             *     by the pod. Instead, each container will create a separate
             *     etc/hostname as they would if not in a pod. */
            no_manage_hostname?: boolean;
            /** @description NoManageHosts indicates that /etc/hosts should not be managed by the
             *     pod. Instead, each container will create a separate /etc/hosts as
             *     they would if not in a pod.
             *     Conflicts with HostAdd. */
            no_manage_hosts?: boolean;
            /** @description NoManageResolvConf indicates that /etc/resolv.conf should not be
             *     managed by the pod. Instead, each container will create and manage a
             *     separate resolv.conf as if they had not joined a pod.
             *     Conflicts with NoInfra=true and DNSServer, DNSSearch, DNSOption.
             *     Optional. */
            no_manage_resolv_conf?: boolean;
            /** @description PortMappings is a set of ports to map into the infra container.
             *     As, by default, containers share their network with the infra
             *     container, this will forward the ports to the entire pod.
             *     Only available if NetNS is set to Bridge, Slirp, or Pasta.
             *     Optional. */
            portmappings?: components["schemas"]["PortMapping"][];
        };
        PodPauseReport: {
            Errs?: string[];
            Id?: string;
        };
        PodPruneReport: {
            Err?: string;
            Id?: string;
        };
        PodResourceConfig: {
            /**
             * Format: uint64
             * @description CPU period of the cpuset, determined by --cpus
             */
            cpu_period?: number;
            /**
             * Format: int64
             * @description CPU quota of the cpuset, determined by --cpus
             */
            cpu_quota?: number;
            resource_limits?: components["schemas"]["LinuxResources"];
            /** @description ThrottleReadBpsDevice contains the rate at which the devices in the pod can be read from/accessed */
            throttleReadBpsDevice?: {
                [key: string]: components["schemas"]["LinuxThrottleDevice"];
            };
        };
        PodRestartReport: {
            Errs?: string[];
            Id?: string;
        };
        PodRmReport: {
            Err?: string;
            Id?: string;
            RemovedCtrs?: {
                [key: string]: string;
            };
        };
        PodSecurityConfig: {
            idmappings?: components["schemas"]["IDMappingOptions"];
            security_opt?: string[];
        };
        /** @description PodSpecGenerator describes options to create a pod */
        PodSpecGenerator: {
            /** @description Map of networks names to ids the container should join to.
             *     You can request additional settings for each network, you can
             *     set network aliases, static ips, static mac address  and the
             *     network interface name for this container on the specific network.
             *     If the map is empty and the bridge network mode is set the container
             *     will be joined to the default network. */
            Networks?: {
                [key: string]: components["schemas"]["PerNetworkOptions"];
            };
            /** @description CgroupParent is the parent for the Cgroup that the pod will create.
             *     This pod cgroup will, in turn, be the default cgroup parent for all
             *     containers in the pod.
             *     Optional. */
            cgroup_parent?: string;
            /** @description CNINetworks is a list of CNI networks to join the container to.
             *     If this list is empty, the default CNI network will be joined
             *     instead. If at least one entry is present, we will not join the
             *     default network (unless it is part of this list).
             *     Only available if NetNS is set to bridge.
             *     Optional.
             *     Deprecated: as of podman 4.0 use "Networks" instead. */
            cni_networks?: string[];
            /**
             * Format: uint64
             * @description CPU period of the cpuset, determined by --cpus
             */
            cpu_period?: number;
            /**
             * Format: int64
             * @description CPU quota of the cpuset, determined by --cpus
             */
            cpu_quota?: number;
            /** @description DNSOption is a set of DNS options that will be used in the infra
             *     container's resolv.conf, which will, by default, be shared with all
             *     containers in the pod.
             *     Conflicts with NoInfra=true.
             *     Optional. */
            dns_option?: string[];
            /** @description DNSSearch is a set of DNS search domains that will be used in the
             *     infra container's resolv.conf, which will, by default, be shared with
             *     all containers in the pod.
             *     If not provided, DNS search domains from the host's resolv.conf will
             *     be used.
             *     Conflicts with NoInfra=true.
             *     Optional. */
            dns_search?: string[];
            /** @description DNSServer is a set of DNS servers that will be used in the infra
             *     container's resolv.conf, which will, by default, be shared with all
             *     containers in the pod.
             *     If not provided, the host's DNS servers will be used, unless the only
             *     server set is a localhost address. As the container cannot connect to
             *     the host's localhost, a default server will instead be set.
             *     Conflicts with NoInfra=true.
             *     Optional. */
            dns_server?: string[];
            /** @description ExitPolicy determines the pod's exit and stop behaviour. */
            exit_policy?: string;
            /** @description HostAdd is a set of hosts that will be added to the infra container's
             *     etc/hosts that will, by default, be shared with all containers in
             *     the pod.
             *     Conflicts with NoInfra=true and NoManageHosts.
             *     Optional. */
            hostadd?: string[];
            /** @description Hostname is the pod's hostname. If not set, the name of the pod will
             *     be used (if a name was not provided here, the name auto-generated for
             *     the pod will be used). This will be used by the infra container and
             *     all containers in the pod as long as the UTS namespace is shared.
             *     Optional. */
            hostname?: string;
            /** @description HostsFile is the base file to create the `/etc/hosts` file inside the infra container.
             *     This must either be an absolute path to a file on the host system, or one of the
             *     special flags `image` or `none`.
             *     If it is empty it defaults to the base_hosts_file configuration in containers.conf.
             *     Conflicts with NoInfra=true and NoManageHosts.
             *     Optional. */
            hostsFile?: string;
            idmappings?: components["schemas"]["IDMappingOptions"];
            /** @description Image volumes bind-mount a container-image mount into the pod's infra container.
             *     Optional. */
            image_volumes?: components["schemas"]["ImageVolume"][];
            /** @description InfraCommand sets the command that will be used to start the infra
             *     container.
             *     If not set, the default set in the Libpod configuration file will be
             *     used.
             *     Conflicts with NoInfra=true.
             *     Optional. */
            infra_command?: string[];
            /** @description InfraConmonPidFile is a custom path to store the infra container's
             *     conmon PID. */
            infra_conmon_pid_file?: string;
            /** @description InfraImage is the image that will be used for the infra container.
             *     If not set, the default set in the Libpod configuration file will be
             *     used.
             *     Conflicts with NoInfra=true.
             *     Optional. */
            infra_image?: string;
            /** @description InfraName is the name that will be used for the infra container.
             *     If not set, the default set in the Libpod configuration file will be
             *     used.
             *     Conflicts with NoInfra=true.
             *     Optional. */
            infra_name?: string;
            ipcns?: components["schemas"]["Namespace"];
            /** @description Labels are key-value pairs that are used to add metadata to pods.
             *     Optional. */
            labels?: {
                [key: string]: string;
            };
            /** @description Mounts are mounts that will be added to the pod.
             *     These will supersede Image Volumes and VolumesFrom volumes where
             *     there are conflicts.
             *     Optional. */
            mounts?: components["schemas"]["Mount"][];
            /** @description Name is the name of the pod.
             *     If not provided, a name will be generated when the pod is created.
             *     Optional. */
            name?: string;
            netns?: components["schemas"]["Namespace"];
            /** @description NetworkOptions are additional options for each network
             *     Optional. */
            network_options?: {
                [key: string]: string[];
            };
            /** @description NoInfra tells the pod not to create an infra container. If this is
             *     done, many networking-related options will become unavailable.
             *     Conflicts with setting any options in PodNetworkConfig, and the
             *     InfraCommand and InfraImages in this struct.
             *     Optional. */
            no_infra?: boolean;
            /** @description NoManageHostname indicates that /etc/hostname should not be managed
             *     by the pod. Instead, each container will create a separate
             *     etc/hostname as they would if not in a pod. */
            no_manage_hostname?: boolean;
            /** @description NoManageHosts indicates that /etc/hosts should not be managed by the
             *     pod. Instead, each container will create a separate /etc/hosts as
             *     they would if not in a pod.
             *     Conflicts with HostAdd. */
            no_manage_hosts?: boolean;
            /** @description NoManageResolvConf indicates that /etc/resolv.conf should not be
             *     managed by the pod. Instead, each container will create and manage a
             *     separate resolv.conf as if they had not joined a pod.
             *     Conflicts with NoInfra=true and DNSServer, DNSSearch, DNSOption.
             *     Optional. */
            no_manage_resolv_conf?: boolean;
            /** @description Overlay volumes are named volumes that will be added to the pod.
             *     Optional. */
            overlay_volumes?: components["schemas"]["OverlayVolume"][];
            pidns?: components["schemas"]["Namespace"];
            pod_create_command?: string[];
            /** @description Devices contains user specified Devices to be added to the Pod */
            pod_devices?: string[];
            /** @description PortMappings is a set of ports to map into the infra container.
             *     As, by default, containers share their network with the infra
             *     container, this will forward the ports to the entire pod.
             *     Only available if NetNS is set to Bridge, Slirp, or Pasta.
             *     Optional. */
            portmappings?: components["schemas"]["PortMapping"][];
            resource_limits?: components["schemas"]["LinuxResources"];
            /** @description RestartPolicy is the pod's restart policy - an action which
             *     will be taken when one or all the containers in the pod exits.
             *     If not given, the default policy will be set to Always, which
             *     restarts the containers in the pod when they exit indefinitely.
             *     Optional. */
            restart_policy?: string;
            /**
             * Format: uint64
             * @description RestartRetries is the number of attempts that will be made to restart
             *     the container.
             *     Only available when RestartPolicy is set to "on-failure".
             *     Optional.
             */
            restart_tries?: number;
            security_opt?: string[];
            /** @description The ID of the pod's service container. */
            serviceContainerID?: string;
            /** @description PodCreateCommand is the command used to create this pod.
             *     This will be shown in the output of Inspect() on the pod, and may
             *     also be used by some tools that wish to recreate the pod
             *     (e.g. `podman generate systemd --new`).
             *     Optional.
             *     ShareParent determines if all containers in the pod will share the pod's cgroup as the cgroup parent */
            share_parent?: boolean;
            /** @description SharedNamespaces instructs the pod to share a set of namespaces.
             *     Shared namespaces will be joined (by default) by every container
             *     which joins the pod.
             *     If not set and NoInfra is false, the pod will set a default set of
             *     namespaces to share.
             *     Conflicts with NoInfra=true.
             *     Optional. */
            shared_namespaces?: string[];
            /**
             * Format: int64
             * @description ShmSize is the size of the tmpfs to mount in at /dev/shm, in bytes.
             *     Conflicts with ShmSize if IpcNS is not private.
             *     Optional.
             */
            shm_size?: number;
            /**
             * Format: int64
             * @description ShmSizeSystemd is the size of systemd-specific tmpfs mounts
             *     specifically /run, /run/lock, /var/log/journal and /tmp.
             *     Optional
             */
            shm_size_systemd?: number;
            /** @description Sysctl sets kernel parameters for the pod */
            sysctl?: {
                [key: string]: string;
            };
            /** @description ThrottleReadBpsDevice contains the rate at which the devices in the pod can be read from/accessed */
            throttleReadBpsDevice?: {
                [key: string]: components["schemas"]["LinuxThrottleDevice"];
            };
            userns?: components["schemas"]["Namespace"];
            utsns?: components["schemas"]["Namespace"];
            /** @description Volumes are named volumes that will be added to the pod.
             *     These will supersede Image Volumes and VolumesFrom  volumes where
             *     there are conflicts.
             *     Optional. */
            volumes?: components["schemas"]["NamedVolume"][];
            /** @description VolumesFrom is a set of containers whose volumes will be added to
             *     this pod. The name or ID of the container must be provided, and
             *     may optionally be followed by a : and then one or more
             *     comma-separated options. Valid options are 'ro', 'rw', and 'z'.
             *     Options will be used for all volumes sourced from the container. */
            volumes_from?: string[];
        };
        PodStartReport: {
            Errs?: string[];
            Id?: string;
            RawInput?: string;
        };
        /** PodStatsReport includes pod-resource statistics data. */
        PodStatsReport: {
            /** @description Humanized disk usage read + write */
            BlockIO?: string;
            /**
             * @description Container ID
             * @example e43534f89a7d
             */
            CID?: string;
            /**
             * @description Percentage of CPU utilized by pod
             * @example 75.5%
             */
            CPU?: string;
            /**
             * @description Percentage of Memory utilized by pod
             * @example 50.5%
             */
            Mem?: string;
            /**
             * @description Humanized Memory usage and maximum
             * @example 12mb / 24mb
             */
            MemUsage?: string;
            /**
             * @description Memory usage and maximum in bytes
             * @example 1,000,000 / 4,000,000
             */
            MemUsageBytes?: string;
            /**
             * @description Pod Name
             * @example elastic_pascal
             */
            Name?: string;
            /** @description Network usage inbound + outbound */
            NetIO?: string;
            /** @description Container PID */
            PIDS?: string;
            /**
             * @description Pod ID
             * @example 62310217a19e
             */
            Pod?: string;
        };
        PodStopReport: {
            Errs?: string[];
            Id?: string;
            RawInput?: string;
        };
        /** PodStorageConfig contains all of the storage related options for the pod and its infra container. */
        PodStorageConfig: {
            /** @description Image volumes bind-mount a container-image mount into the pod's infra container.
             *     Optional. */
            image_volumes?: components["schemas"]["ImageVolume"][];
            /** @description Mounts are mounts that will be added to the pod.
             *     These will supersede Image Volumes and VolumesFrom volumes where
             *     there are conflicts.
             *     Optional. */
            mounts?: components["schemas"]["Mount"][];
            /** @description Overlay volumes are named volumes that will be added to the pod.
             *     Optional. */
            overlay_volumes?: components["schemas"]["OverlayVolume"][];
            /**
             * Format: int64
             * @description ShmSize is the size of the tmpfs to mount in at /dev/shm, in bytes.
             *     Conflicts with ShmSize if IpcNS is not private.
             *     Optional.
             */
            shm_size?: number;
            /**
             * Format: int64
             * @description ShmSizeSystemd is the size of systemd-specific tmpfs mounts
             *     specifically /run, /run/lock, /var/log/journal and /tmp.
             *     Optional
             */
            shm_size_systemd?: number;
            /** @description Volumes are named volumes that will be added to the pod.
             *     These will supersede Image Volumes and VolumesFrom  volumes where
             *     there are conflicts.
             *     Optional. */
            volumes?: components["schemas"]["NamedVolume"][];
            /** @description VolumesFrom is a set of containers whose volumes will be added to
             *     this pod. The name or ID of the container must be provided, and
             *     may optionally be followed by a : and then one or more
             *     comma-separated options. Valid options are 'ro', 'rw', and 'z'.
             *     Options will be used for all volumes sourced from the container. */
            volumes_from?: string[];
        };
        PodTopOKBody: {
            /** @description Each process running in the container, where each is process
             *     is an array of values corresponding to the titles. */
            Processes: string[][];
            /** @description The ps column titles */
            Titles: string[];
        };
        PodUnpauseReport: {
            Errs?: string[];
            Id?: string;
        };
        /** @description Port An open port on a container */
        Port: {
            /** @description Host IP address that the container's port is mapped to */
            IP?: string;
            /**
             * Format: uint16
             * @description Port on the container
             */
            PrivatePort: number;
            /**
             * Format: uint16
             * @description Port exposed on the host
             */
            PublicPort?: number;
            /** @description type */
            Type: string;
        };
        /** @description PortBinding represents a binding between a Host IP address and a Host Port */
        PortBinding: {
            /** @description HostIP is the host IP Address */
            HostIp?: string;
            /** @description HostPort is the host port number */
            HostPort?: string;
        };
        /** @description PortMap is a collection of PortBinding indexed by Port */
        PortMap: {
            [key: string]: components["schemas"]["PortBinding"][];
        };
        /** PortMapping is one or more ports that will be mapped into the container. */
        PortMapping: {
            /**
             * Format: uint16
             * @description ContainerPort is the port number that will be exposed from the
             *     container.
             *     Mandatory.
             */
            container_port?: number;
            /** @description HostIP is the IP that we will bind to on the host.
             *     If unset, assumed to be 0.0.0.0 (all interfaces). */
            host_ip?: string;
            /**
             * Format: uint16
             * @description HostPort is the port number that will be forwarded from the host into
             *     the container.
             *     If omitted, a random port on the host (guaranteed to be over 1024)
             *     will be assigned.
             */
            host_port?: number;
            /** @description Protocol is the protocol forward.
             *     Must be either "tcp", "udp", and "sctp", or some combination of these
             *     separated by commas.
             *     If unset, assumed to be TCP. */
            protocol?: string;
            /**
             * Format: uint16
             * @description Range is the number of ports that will be forwarded, starting at
             *     HostPort and ContainerPort and counting up.
             *     This is 1-indexed, so 1 is assumed to be a single port (only the
             *     Hostport:Containerport mapping will be added), 2 is two ports (both
             *     Hostport:Containerport and Hostport+1:Containerport+1), etc.
             *     If unset, assumed to be 1 (a single port).
             *     Both hostport + range and containerport + range must be less than
             *     65536.
             */
            range?: number;
        };
        /** @description PortSet is a collection of structs indexed by Port */
        PortSet: {
            [key: string]: Record<string, never>;
        };
        /** Propagation represents the propagation of a mount. */
        Propagation: string;
        /**
         * PruneReport contains the response for Engine API:
         * @description POST "/volumes/prune"
         */
        PruneReport: {
            Err?: string;
            Id?: string;
            /** Format: uint64 */
            Size?: number;
        };
        /** @description PublishState represents the state of a Volume as it pertains to its
         *     use on a particular Node. */
        PublishState: string;
        /** @description PublishStatus represents the status of the volume as published to an
         *     individual node */
        PublishStatus: {
            /** @description NodeID is the ID of the swarm node this Volume is published to. */
            NodeID?: string;
            /** @description PublishContext is the PublishContext returned by the CSI plugin when
             *     a volume is published. */
            PublishContext?: {
                [key: string]: string;
            };
            State?: components["schemas"]["PublishState"];
        };
        /** @description RemoteSocket describes information about the API socket */
        RemoteSocket: {
            exists?: boolean;
            path?: string;
        };
        /** @description Resources contains container's resources (cgroups config, ulimits...) */
        Resources: {
            BlkioDeviceReadBps?: components["schemas"]["ThrottleDevice"][];
            BlkioDeviceReadIOps?: components["schemas"]["ThrottleDevice"][];
            BlkioDeviceWriteBps?: components["schemas"]["ThrottleDevice"][];
            BlkioDeviceWriteIOps?: components["schemas"]["ThrottleDevice"][];
            /** Format: uint16 */
            BlkioWeight?: number;
            BlkioWeightDevice?: components["schemas"]["WeightDevice"][];
            /** @description Applicable to UNIX platforms */
            CgroupParent?: string;
            /**
             * Format: int64
             * @description Applicable to Windows
             */
            CpuCount?: number;
            /** Format: int64 */
            CpuPercent?: number;
            /** Format: int64 */
            CpuPeriod?: number;
            /** Format: int64 */
            CpuQuota?: number;
            /** Format: int64 */
            CpuRealtimePeriod?: number;
            /** Format: int64 */
            CpuRealtimeRuntime?: number;
            /**
             * Format: int64
             * @description Applicable to all platforms
             */
            CpuShares?: number;
            CpusetCpus?: string;
            CpusetMems?: string;
            DeviceCgroupRules?: string[];
            DeviceRequests?: components["schemas"]["DeviceRequest"][];
            Devices?: components["schemas"]["DeviceMapping"][];
            /** Format: uint64 */
            IOMaximumBandwidth?: number;
            /** Format: uint64 */
            IOMaximumIOps?: number;
            /**
             * Format: int64
             * @description KernelMemory specifies the kernel memory limit (in bytes) for the container.
             *     Deprecated: kernel 5.4 deprecated kmem.limit_in_bytes.
             */
            KernelMemory?: number;
            /** Format: int64 */
            KernelMemoryTCP?: number;
            /** Format: int64 */
            Memory?: number;
            /** Format: int64 */
            MemoryReservation?: number;
            /** Format: int64 */
            MemorySwap?: number;
            /** Format: int64 */
            MemorySwappiness?: number;
            /** Format: int64 */
            NanoCpus?: number;
            OomKillDisable?: boolean;
            /** Format: int64 */
            PidsLimit?: number;
            Ulimits?: components["schemas"]["Ulimit"][];
        };
        /** RestartPolicy represents the restart policies of the container. */
        RestartPolicy: {
            /** Format: int64 */
            MaximumRetryCount?: number;
            Name?: components["schemas"]["RestartPolicyMode"];
        };
        RestartPolicyMode: string;
        /** RootFS holds the root fs information of an image. */
        RootFS: {
            Layers?: components["schemas"]["Digest"][];
            Type?: string;
        };
        Route: {
            /**
             * Format: string
             * @description Destination for this route in CIDR form.
             */
            destination?: string;
            /**
             * Format: string
             * @description Gateway IP for this route.
             */
            gateway?: string;
            /**
             * Format: uint32
             * @description Metric for this route. Optional.
             */
            metric?: number;
        };
        /** @description Schema2HealthConfig is a HealthConfig, which holds configuration settings
         *     for the HEALTHCHECK feature, from docker/docker/api/types/container. */
        Schema2HealthConfig: {
            Interval?: components["schemas"]["Duration"];
            /**
             * Format: int64
             * @description Retries is the number of consecutive failures needed to consider a container as unhealthy.
             *     Zero means inherit.
             */
            Retries?: number;
            StartInterval?: components["schemas"]["Duration"];
            StartPeriod?: components["schemas"]["Duration"];
            /** @description Test is the test to perform to check that the container is healthy.
             *     An empty slice means to inherit the default.
             *     The options are:
             *     {} : inherit healthcheck
             *     {"NONE"} : disable healthcheck
             *     {"CMD", args...} : exec arguments directly
             *     {"CMD-SHELL", command} : run command with system's default shell */
            Test?: string[];
            Timeout?: components["schemas"]["Duration"];
        };
        /**
         * Schema2ListPublic is a list of platform-specific manifests.
         * @description This is publicly visible as c/image/manifest.Schema2List.
         *     Internal users should usually use Schema2List instead.
         */
        Schema2ListPublic: {
            manifests?: components["schemas"]["Schema2ManifestDescriptor"][];
            mediaType?: string;
            /** Format: int64 */
            schemaVersion?: number;
        };
        /**
         * Schema2ManifestDescriptor references a platform-specific manifest.
         * @description This is publicly visible as c/image/manifest.Schema2ManifestDescriptor.
         */
        Schema2ManifestDescriptor: {
            digest?: components["schemas"]["Digest"];
            mediaType?: string;
            platform?: components["schemas"]["Schema2PlatformSpec"];
            /** Format: int64 */
            size?: number;
            urls?: string[];
        };
        /** @description Schema2PlatformSpec describes the platform which a particular manifest is
         *     specialized for.
         *     This is publicly visible as c/image/manifest.Schema2PlatformSpec. */
        Schema2PlatformSpec: {
            architecture?: string;
            features?: string[];
            os?: string;
            "os.features"?: string[];
            "os.version"?: string;
            variant?: string;
        };
        /** @description Scope defines the Scope of a Cluster Volume. This is how many nodes a
         *     Volume can be accessed simultaneously on. */
        Scope: string;
        ScpReport: {
            Id?: string;
        };
        /** @description Secret represents a Swarm Secret value that must be passed to the CSI
         *     storage plugin when operating on this Volume. It represents one key-value
         *     pair of possibly many. */
        Secret: {
            /** @description Key is the name of the key of the key-value pair passed to the plugin. */
            Key?: string;
            /** @description Secret is the swarm Secret object from which to read data. This can be a
             *     Secret name or ID. The Secret data is retrieved by Swarm and used as the
             *     value of the key-value pair passed to the plugin. */
            Secret?: string;
        };
        SecretCreate: {
            /** @description Base64-url-safe-encoded (RFC 4648) data to store as secret. */
            Data?: string;
            Driver?: components["schemas"]["SecretDriverSpec"];
            /** @description Labels are labels on the secret */
            Labels?: {
                [key: string]: string;
            };
            /** @description User-defined name of the secret. */
            Name?: string;
        };
        SecretCreateReport: {
            ID?: string;
        };
        SecretDriverSpec: {
            Name?: string;
            Options?: {
                [key: string]: string;
            };
        };
        SecretInfoReport: {
            /** Format: date-time */
            CreatedAt?: string;
            ID?: string;
            SecretData?: string;
            Spec?: components["schemas"]["SecretSpec"];
            /** Format: date-time */
            UpdatedAt?: string;
        };
        SecretInfoReportCompat: {
            /** Format: date-time */
            CreatedAt?: string;
            ID?: string;
            SecretData?: string;
            Spec?: components["schemas"]["SecretSpec"];
            /** Format: date-time */
            UpdatedAt?: string;
            Version?: components["schemas"]["SecretVersion"];
        };
        SecretRmReport: {
            Err?: string;
            ID?: string;
        };
        SecretSpec: {
            Driver?: components["schemas"]["SecretDriverSpec"];
            Labels?: {
                [key: string]: string;
            };
            Name?: string;
        };
        SecretVersion: {
            /** Format: int64 */
            Index?: number;
        };
        /** @description SecurityInfo describes the libpod host */
        SecurityInfo: {
            apparmorEnabled?: boolean;
            capabilities?: string;
            rootless?: boolean;
            seccompEnabled?: boolean;
            seccompProfilePath?: string;
            selinuxEnabled?: boolean;
        };
        /** @description ServiceCreateResponse contains the information returned to a client on the
         *     creation of a new service. */
        ServiceCreateResponse: {
            /** @description The ID of the created service. */
            ID?: string;
            /** @description Optional warning message.
             *
             *     FIXME(thaJeztah): this should have "omitempty" in the generated type. */
            Warnings?: string[];
        };
        /** @description ServiceInfo represents service parameters with the list of service's tasks */
        ServiceInfo: {
            /** Format: int64 */
            LocalLBIndex?: number;
            Ports?: string[];
            Tasks?: components["schemas"]["Task"][];
            VIP?: string;
        };
        /** @description ServiceUpdateResponse service update response */
        ServiceUpdateResponse: {
            /** @description Optional warning messages */
            Warnings?: string[];
        };
        /** @description SharingMode defines the Sharing of a Cluster Volume. This is how Tasks using a
         *     Volume at the same time can use it. */
        SharingMode: string;
        /**
         * A Signal is a number describing a process signal.
         * Format: int64
         * @description It implements the [os.Signal] interface.
         */
        Signal: number;
        /** @description SlirpInfo describes the slirp executable that is being used */
        SlirpInfo: {
            executable?: string;
            package?: string;
            version?: string;
        };
        /** @description SpecGenerator creates an OCI spec and Libpod configuration options to create
         *     a container based on the given configuration. */
        SpecGenerator: {
            /** @description Map of networks names or ids that the container should join.
             *     You can request additional settings for each network, you can
             *     set network aliases, static ips, static mac address  and the
             *     network interface name for this container on the specific network.
             *     If the map is empty and the bridge network mode is set the container
             *     will be joined to the default network.
             *     Optional. */
            Networks?: {
                [key: string]: components["schemas"]["PerNetworkOptions"];
            };
            /** @description Annotations are key-value options passed into the container runtime
             *     that can be used to trigger special behavior.
             *     Optional. */
            annotations?: {
                [key: string]: string;
            };
            /** @description ApparmorProfile is the name of the Apparmor profile the container
             *     will use.
             *     Optional. */
            apparmor_profile?: string;
            /** @description BaseHostsFile is the base file to create the `/etc/hosts` file inside the container.
             *     This must either be an absolute path to a file on the host system, or one of the
             *     special flags `image` or `none`.
             *     If it is empty it defaults to the base_hosts_file configuration in containers.conf.
             *     Optional. */
            base_hosts_file?: string;
            /** @description CapAdd are capabilities which will be added to the container.
             *     Conflicts with Privileged.
             *     Optional. */
            cap_add?: string[];
            /** @description CapDrop are capabilities which will be removed from the container.
             *     Conflicts with Privileged.
             *     Optional. */
            cap_drop?: string[];
            /** @description CgroupParent is the container's Cgroup parent.
             *     If not set, the default for the current cgroup driver will be used.
             *     Optional. */
            cgroup_parent?: string;
            cgroupns?: components["schemas"]["Namespace"];
            /** @description CgroupsMode sets a policy for how cgroups will be created for the
             *     container, including the ability to disable creation entirely.
             *     Optional. */
            cgroups_mode?: string;
            /** @description ChrootDirs is an additional set of directories that need to be
             *     treated as root directories. Standard bind mounts will be mounted
             *     into paths relative to these directories.
             *     Optional. */
            chroot_directories?: string[];
            /** @description CNINetworks is a list of CNI networks to join the container to.
             *     If this list is empty, the default CNI network will be joined
             *     instead. If at least one entry is present, we will not join the
             *     default network (unless it is part of this list).
             *     Only available if NetNS is set to bridge.
             *     Optional.
             *     Deprecated: as of podman 4.0 use "Networks" instead. */
            cni_networks?: string[];
            /** @description Command is the container's command.
             *     If not given and Image is specified, this will be populated by the
             *     image's configuration.
             *     Optional. */
            command?: string[];
            /** @description ConmonPidFile is a path at which a PID file for Conmon will be
             *     placed.
             *     If not given, a default location will be used.
             *     Optional. */
            conmon_pid_file?: string;
            /** @description ContainerCreateCommand is the command that was used to create this
             *     container.
             *     This will be shown in the output of Inspect() on the container, and
             *     may also be used by some tools that wish to recreate the container
             *     (e.g. `podman generate systemd --new`).
             *     Optional. */
            containerCreateCommand?: string[];
            /** @description Create the working directory if it doesn't exist.
             *     If unset, it doesn't create it.
             *     Optional. */
            create_working_dir?: boolean;
            /** @description DependencyContainers is an array of containers this container
             *     depends on. Dependency containers must be started before this
             *     container. Dependencies can be specified by name or full/partial ID.
             *     Optional. */
            dependencyContainers?: string[];
            /** @description DeviceCgroupRule are device cgroup rules that allow containers
             *     to use additional types of devices. */
            device_cgroup_rule?: components["schemas"]["LinuxDeviceCgroup"][];
            /** @description Devices are devices that will be added to the container.
             *     Optional. */
            devices?: components["schemas"]["LinuxDevice"][];
            /** @description DevicesFrom specifies that this container will mount the device(s) from other container(s).
             *     Optional. */
            devices_from?: string[];
            /** @description DNSOptions is a set of DNS options that will be used in the
             *     container's resolv.conf, replacing the host's DNS options which are
             *     used by default.
             *     Conflicts with UseImageResolvConf.
             *     Optional. */
            dns_option?: string[];
            /** @description DNSSearch is a set of DNS search domains that will be used in the
             *     container's resolv.conf, replacing the host's DNS search domains
             *     which are used by default.
             *     Conflicts with UseImageResolvConf.
             *     Optional. */
            dns_search?: string[];
            /** @description DNSServers is a set of DNS servers that will be used in the
             *     container's resolv.conf, replacing the host's DNS Servers which are
             *     used by default.
             *     Conflicts with UseImageResolvConf.
             *     Optional. */
            dns_server?: string[];
            /** @description Entrypoint is the container's entrypoint.
             *     If not given and Image is specified, this will be populated by the
             *     image's configuration.
             *     Optional. */
            entrypoint?: string[];
            /** @description Env is a set of environment variables that will be set in the
             *     container.
             *     Optional. */
            env?: {
                [key: string]: string;
            };
            /** @description EnvHost indicates that the host environment should be added to container
             *     Optional. */
            env_host?: boolean;
            /** @description EnvMerge takes the specified environment variables from image and preprocess them before injecting them into the
             *     container.
             *     Optional. */
            envmerge?: string[];
            /** @description Expose is a number of ports that will be forwarded to the container
             *     if PublishExposedPorts is set.
             *     Expose is a map of uint16 (port number) to a string representing
             *     protocol i.e map[uint16]string. Allowed protocols are "tcp", "udp", and "sctp", or some
             *     combination of the three separated by commas.
             *     If protocol is set to "" we will assume TCP.
             *     Only available if NetNS is set to Bridge or Slirp, and
             *     PublishExposedPorts is set.
             *     Optional. */
            expose?: unknown;
            /** @description GroupEntry specifies an arbitrary string to append to the container's /etc/group file.
             *     Optional. */
            group_entry?: string;
            /** @description Groups are a list of supplemental groups the container's user will
             *     be granted access to.
             *     Optional. */
            groups?: string[];
            health_check_on_failure_action?: components["schemas"]["HealthCheckOnFailureAction"];
            /** @description HealthLogDestination defines the destination where the log is stored */
            healthLogDestination?: string;
            /**
             * Format: uint64
             * @description HealthMaxLogCount is maximum number of attempts in the HealthCheck log file.
             *     ('0' value means an infinite number of attempts in the log file)
             */
            healthMaxLogCount?: number;
            /**
             * Format: uint64
             * @description HealthMaxLogSize is the maximum length in characters of stored HealthCheck log
             *     ("0" value means an infinite log length)
             */
            healthMaxLogSize?: number;
            healthconfig?: components["schemas"]["Schema2HealthConfig"];
            /** @description HostDeviceList is used to recreate the mounted device on inherited containers */
            host_device_list?: components["schemas"]["LinuxDevice"][];
            /** @description HostAdd is a set of hosts which will be added to the container's
             *     etc/hosts file.
             *     Conflicts with UseImageHosts.
             *     Optional. */
            hostadd?: string[];
            /** @description Hostname is the container's hostname. If not set, the hostname will
             *     not be modified (if UtsNS is not private) or will be set to the
             *     container ID (if UtsNS is private).
             *     Conflicts with UtsNS if UtsNS is not set to private.
             *     Optional. */
            hostname?: string;
            /** @description HostUsers is a list of host usernames or UIDs to add to the container
             *     etc/passwd file */
            hostusers?: string[];
            /** @description EnvHTTPProxy indicates that the http host proxy environment variables
             *     should be added to container
             *     Optional. */
            httpproxy?: boolean;
            idmappings?: components["schemas"]["IDMappingOptions"];
            /** @description Image is the image the container will be based on. The image will be
             *     used as the container's root filesystem, and its environment vars,
             *     volumes, and other configuration will be applied to the container.
             *     Conflicts with Rootfs.
             *     At least one of Image or Rootfs must be specified. */
            image?: string;
            /** @description ImageArch is the user-specified image architecture.
             *     Used to select a different variant from a manifest list.
             *     Optional. */
            image_arch?: string;
            /** @description ImageOS is the user-specified OS of the image.
             *     Used to select a different variant from a manifest list.
             *     Optional. */
            image_os?: string;
            /** @description ImageVariant is the user-specified image variant.
             *     Used to select a different variant from a manifest list.
             *     Optional. */
            image_variant?: string;
            /** @description ImageVolumeMode indicates how image volumes will be created.
             *     Supported modes are "ignore" (do not create), "tmpfs" (create as
             *     tmpfs), and "anonymous" (create as anonymous volumes).
             *     The default if unset is anonymous.
             *     Optional. */
            image_volume_mode?: string;
            /** @description Image volumes bind-mount a container-image mount into the container.
             *     Optional. */
            image_volumes?: components["schemas"]["ImageVolume"][];
            /** @description Init specifies that an init binary will be mounted into the
             *     container, and will be used as PID1.
             *     Optional. */
            init?: boolean;
            /** @description InitContainerType describes if this container is an init container
             *     and if so, what type: always or once.
             *     Optional. */
            init_container_type?: string;
            /** @description InitPath specifies the path to the init binary that will be added if
             *     Init is specified above. If not specified, the default set in the
             *     Libpod config will be used. Ignored if Init above is not set.
             *     Optional. */
            init_path?: string;
            intelRdt?: components["schemas"]["LinuxIntelRdt"];
            ipcns?: components["schemas"]["Namespace"];
            /** @description LabelNested indicates whether or not the container is allowed to
             *     run fully nested containers including SELinux labelling.
             *     Optional. */
            label_nested?: boolean;
            /** @description Labels are key-value pairs that are used to add metadata to
             *     containers.
             *     Optional. */
            labels?: {
                [key: string]: string;
            };
            log_configuration?: components["schemas"]["LogConfigLibpod"];
            /** @description Passwd is a container run option that determines if we are validating users/groups before running the container */
            manage_password?: boolean;
            /** @description Mask is the path we want to mask in the container. This masks the paths
             *     given in addition to the default list.
             *     Optional */
            mask?: string[];
            /** @description Mounts are mounts that will be added to the container.
             *     These will supersede Image Volumes and VolumesFrom volumes where
             *     there are conflicts.
             *     Optional. */
            mounts?: components["schemas"]["Mount"][];
            /** @description Name is the name the container will be given.
             *     If no name is provided, one will be randomly generated.
             *     Optional. */
            name?: string;
            netns?: components["schemas"]["Namespace"];
            /** @description NetworkOptions are additional options for each network
             *     Optional. */
            network_options?: {
                [key: string]: string[];
            };
            /** @description NoNewPrivileges is whether the container will set the no new
             *     privileges flag on create, which disables gaining additional
             *     privileges (e.g. via setuid) in the container.
             *     Optional. */
            no_new_privileges?: boolean;
            /** @description OCIRuntime is the name of the OCI runtime that will be used to create
             *     the container.
             *     If not specified, the default will be used.
             *     Optional. */
            oci_runtime?: string;
            /**
             * Format: int64
             * @description OOMScoreAdj adjusts the score used by the OOM killer to determine
             *     processes to kill for the container's process.
             *     Optional.
             */
            oom_score_adj?: number;
            /** @description Overlay volumes are named volumes that will be added to the container.
             *     Optional. */
            overlay_volumes?: components["schemas"]["OverlayVolume"][];
            /** @description PasswdEntry specifies an arbitrary string to append to the container's /etc/passwd file.
             *     Optional. */
            passwd_entry?: string;
            personality?: components["schemas"]["LinuxPersonality"];
            pidns?: components["schemas"]["Namespace"];
            /** @description Pod is the ID of the pod the container will join.
             *     Optional. */
            pod?: string;
            /** @description PortBindings is a set of ports to map into the container.
             *     Only available if NetNS is set to bridge, slirp, or pasta.
             *     Optional. */
            portmappings?: components["schemas"]["PortMapping"][];
            /** @description Privileged is whether the container is privileged.
             *     Privileged does the following:
             *     Adds all devices on the system to the container.
             *     Adds all capabilities to the container.
             *     Disables Seccomp, SELinux, and Apparmor confinement.
             *     (Though SELinux can be manually re-enabled).
             *     TODO: this conflicts with things.
             *     TODO: this does more.
             *     Optional. */
            privileged?: boolean;
            /** @description ProcOpts are the options used for the proc mount. */
            procfs_opts?: string[];
            /** @description PublishExposedPorts will publish ports specified in the image to
             *     random unused ports (guaranteed to be above 1024) on the host.
             *     This is based on ports set in Expose below, and any ports specified
             *     by the Image (if one is given).
             *     Only available if NetNS is set to Bridge or Slirp.
             *     Optional. */
            publish_image_ports?: boolean;
            /** @description Rlimits are POSIX rlimits to apply to the container.
             *     Optional. */
            r_limits?: components["schemas"]["POSIXRlimit"][];
            /** @description RawImageName is the user-specified and unprocessed input referring
             *     to a local or a remote image.
             *     Optional, but strongly encouraged to be set if Image is set. */
            raw_image_name?: string;
            /** @description ReadOnlyFilesystem indicates that everything will be mounted
             *     as read-only.
             *     Optional. */
            read_only_filesystem?: boolean;
            /** @description ReadWriteTmpfs indicates that when running with a ReadOnlyFilesystem
             *     mount temporary file systems.
             *     Optional. */
            read_write_tmpfs?: boolean;
            /** @description Remove indicates if the container should be removed once it has been started
             *     and exits.
             *     Optional. */
            remove?: boolean;
            /** @description RemoveImage indicates that the container should remove the image it
             *     was created from after it exits.
             *     Only allowed if Remove is set to true and Image, not Rootfs, is in
             *     use.
             *     Optional. */
            removeImage?: boolean;
            resource_limits?: components["schemas"]["LinuxResources"];
            /** @description RestartPolicy is the container's restart policy - an action which
             *     will be taken when the container exits.
             *     If not given, the default policy, which does nothing, will be used.
             *     Optional. */
            restart_policy?: string;
            /**
             * Format: uint64
             * @description RestartRetries is the number of attempts that will be made to restart
             *     the container.
             *     Only available when RestartPolicy is set to "on-failure".
             *     Optional.
             */
            restart_tries?: number;
            /** @description Rootfs is the path to a directory that will be used as the
             *     container's root filesystem. No modification will be made to the
             *     directory, it will be directly mounted into the container as root.
             *     Conflicts with Image.
             *     At least one of Image or Rootfs must be specified. */
            rootfs?: string;
            /** @description RootfsMapping specifies if there are UID/GID mappings to apply to the rootfs.
             *     Optional. */
            rootfs_mapping?: string;
            /** @description RootfsOverlay tells if rootfs is actually an overlay on top of base path.
             *     Optional. */
            rootfs_overlay?: boolean;
            /** @description RootfsPropagation is the rootfs propagation mode for the container.
             *     If not set, the default of rslave will be used.
             *     Optional. */
            rootfs_propagation?: string;
            /** @description Determine how to handle the NOTIFY_SOCKET - do we participate or pass it through
             *     "container" - let the OCI runtime deal with it, advertise conmon's MAINPID
             *     "conmon-only" - advertise conmon's MAINPID, send READY when started, don't pass to OCI
             *     "ignore" - unset NOTIFY_SOCKET
             *     Optional. */
            sdnotifyMode?: string;
            /** @description SeccompPolicy determines which seccomp profile gets applied
             *     the container. valid values: empty,default,image */
            seccomp_policy?: string;
            /** @description SeccompProfilePath is the path to a JSON file containing the
             *     container's Seccomp profile.
             *     If not specified, no Seccomp profile will be used.
             *     Optional. */
            seccomp_profile_path?: string;
            /** @description EnvSecrets are secrets that will be set as environment variables
             *     Optional. */
            secret_env?: {
                [key: string]: string;
            };
            /** @description Secrets are the secrets that will be added to the container
             *     Optional. */
            secrets?: components["schemas"]["Secret"][];
            /** @description SelinuxProcessLabel is the process label the container will use.
             *     If SELinux is enabled and this is not specified, a label will be
             *     automatically generated if not specified.
             *     Optional. */
            selinux_opts?: string[];
            /**
             * Format: int64
             * @description ShmSize is the size of the tmpfs to mount in at /dev/shm, in bytes.
             *     Conflicts with ShmSize if IpcNS is not private.
             *     Optional.
             */
            shm_size?: number;
            /**
             * Format: int64
             * @description ShmSizeSystemd is the size of systemd-specific tmpfs mounts
             *     specifically /run, /run/lock, /var/log/journal and /tmp.
             *     Optional
             */
            shm_size_systemd?: number;
            startupHealthConfig?: components["schemas"]["StartupHealthCheck"];
            /** @description Stdin is whether the container will keep its STDIN open.
             *     Optional. */
            stdin?: boolean;
            stop_signal?: components["schemas"]["Signal"];
            /**
             * Format: uint64
             * @description StopTimeout is a timeout between the container's stop signal being
             *     sent and SIGKILL being sent.
             *     If not provided, the default will be used.
             *     If 0 is used, stop signal will not be sent, and SIGKILL will be sent
             *     instead.
             *     Optional.
             */
            stop_timeout?: number;
            /** @description StorageOpts is the container's storage options
             *     Optional. */
            storage_opts?: {
                [key: string]: string;
            };
            /** @description Sysctl sets kernel parameters for the container */
            sysctl?: {
                [key: string]: string;
            };
            /** @description Systemd is whether the container will be started in systemd mode.
             *     Valid options are "true", "false", and "always".
             *     "true" enables this mode only if the binary run in the container is
             *     sbin/init or systemd. "always" unconditionally enables systemd mode.
             *     "false" unconditionally disables systemd mode.
             *     If enabled, mounts and stop signal will be modified.
             *     If set to "always" or set to "true" and conditionally triggered,
             *     conflicts with StopSignal.
             *     If not specified, "false" will be assumed.
             *     Optional. */
            systemd?: string;
            /** @description Terminal is whether the container will create a PTY.
             *     Optional. */
            terminal?: boolean;
            /** @description IO read rate limit per cgroup per device, bytes per second */
            throttleReadBpsDevice?: {
                [key: string]: components["schemas"]["LinuxThrottleDevice"];
            };
            /** @description IO read rate limit per cgroup per device, IO per second */
            throttleReadIOPSDevice?: {
                [key: string]: components["schemas"]["LinuxThrottleDevice"];
            };
            /** @description IO write rate limit per cgroup per device, bytes per second */
            throttleWriteBpsDevice?: {
                [key: string]: components["schemas"]["LinuxThrottleDevice"];
            };
            /** @description IO write rate limit per cgroup per device, IO per second */
            throttleWriteIOPSDevice?: {
                [key: string]: components["schemas"]["LinuxThrottleDevice"];
            };
            /**
             * Format: uint64
             * @description Timeout is a maximum time in seconds the container will run before
             *     main process is sent SIGKILL.
             *     If 0 is used, signal will not be sent. Container can run indefinitely
             *     if they do not stop after the default termination signal.
             *     Optional.
             */
            timeout?: number;
            /** @description Timezone is the timezone inside the container.
             *     Local means it has the same timezone as the host machine
             *     Optional. */
            timezone?: string;
            /** @description Umask is the umask the init process of the container will be run with. */
            umask?: string;
            /** @description CgroupConf are key-value options passed into the container runtime
             *     that are used to configure cgroup v2.
             *     Optional. */
            unified?: {
                [key: string]: string;
            };
            /** @description Unmask a path in the container. Some paths are masked by default,
             *     preventing them from being accessed within the container; this undoes
             *     that masking. If ALL is passed, all paths will be unmasked.
             *     Optional. */
            unmask?: string[];
            /** @description UnsetEnv unsets the specified default environment variables from the image or from built-in or containers.conf
             *     Optional. */
            unsetenv?: string[];
            /** @description UnsetEnvAll unsetall default environment variables from the image or from built-in or containers.conf
             *     UnsetEnvAll unsets all default environment variables from the image or from built-in
             *     Optional. */
            unsetenvall?: boolean;
            /** @description UseImageHostname indicates that /etc/hostname should not be managed by
             *     Podman, and instead sourced from the image.
             *     Optional. */
            use_image_hostname?: boolean;
            /** @description UseImageHosts indicates that /etc/hosts should not be managed by
             *     Podman, and instead sourced from the image.
             *     Conflicts with HostAdd.
             *     Optional. */
            use_image_hosts?: boolean;
            /** @description UseImageResolvConf indicates that resolv.conf should not be managed
             *     by Podman, but instead sourced from the image.
             *     Conflicts with DNSServer, DNSSearch, DNSOption.
             *     Optional. */
            use_image_resolve_conf?: boolean;
            /** @description User is the user the container will be run as.
             *     Can be given as a UID or a username; if a username, it will be
             *     resolved within the container, using the container's /etc/passwd.
             *     If unset, the container will be run as root.
             *     Optional. */
            user?: string;
            userns?: components["schemas"]["Namespace"];
            utsns?: components["schemas"]["Namespace"];
            /** @description Volatile specifies whether the container storage can be optimized
             *     at the cost of not syncing all the dirty files in memory.
             *     Optional. */
            volatile?: boolean;
            /** @description Volumes are named volumes that will be added to the container.
             *     These will supersede Image Volumes and VolumesFrom volumes where
             *     there are conflicts.
             *     Optional. */
            volumes?: components["schemas"]["NamedVolume"][];
            /** @description VolumesFrom is a set of containers whose volumes will be added to
             *     this container. The name or ID of the container must be provided, and
             *     may optionally be followed by a : and then one or more
             *     comma-separated options. Valid options are 'ro', 'rw', and 'z'.
             *     Options will be used for all volumes sourced from the container.
             *     Optional. */
            volumes_from?: string[];
            /** @description Weight per cgroup per device, can override BlkioWeight */
            weightDevice?: {
                [key: string]: components["schemas"]["LinuxWeightDevice"];
            };
            /** @description WorkDir is the container's working directory.
             *     If unset, the default, /, will be used.
             *     Optional. */
            work_dir?: string;
        };
        /** StartupHealthCheck is the configuration of a startup healthcheck. */
        StartupHealthCheck: {
            Interval?: components["schemas"]["Duration"];
            /**
             * Format: int64
             * @description Retries is the number of consecutive failures needed to consider a container as unhealthy.
             *     Zero means inherit.
             */
            Retries?: number;
            StartInterval?: components["schemas"]["Duration"];
            StartPeriod?: components["schemas"]["Duration"];
            /**
             * Format: int64
             * @description Successes are the number of successes required to mark the startup HC
             *     as passed.
             *     If set to 0, a single success will mark the HC as passed.
             */
            Successes?: number;
            /** @description Test is the test to perform to check that the container is healthy.
             *     An empty slice means to inherit the default.
             *     The options are:
             *     {} : inherit healthcheck
             *     {"NONE"} : disable healthcheck
             *     {"CMD", args...} : exec arguments directly
             *     {"CMD-SHELL", command} : run command with system's default shell */
            Test?: string[];
            Timeout?: components["schemas"]["Duration"];
        };
        /** @description StoreInfo describes the container storage and its
         *     attributes */
        StoreInfo: {
            configFile?: string;
            containerStore?: components["schemas"]["ContainerStore"];
            graphDriverName?: string;
            graphOptions?: {
                [key: string]: unknown;
            };
            graphRoot?: string;
            /**
             * Format: uint64
             * @description GraphRootAllocated is how much space the graphroot has in bytes
             */
            graphRootAllocated?: number;
            /**
             * Format: uint64
             * @description GraphRootUsed is how much of graphroot is used in bytes
             */
            graphRootUsed?: number;
            graphStatus?: {
                [key: string]: string;
            };
            imageCopyTmpDir?: string;
            imageStore?: components["schemas"]["ImageStore"];
            runRoot?: string;
            transientStore?: boolean;
            volumePath?: string;
        };
        /**
         * StrSlice represents a string or an array of strings.
         * @description We need to override the json decoder to accept both options.
         */
        StrSlice: string[];
        Subnet: {
            /**
             * Format: string
             * @description Gateway IP for this Network.
             */
            gateway?: string;
            lease_range?: components["schemas"]["LeaseRange"];
            /**
             * Format: string
             * @description Subnet for this Network in CIDR form.
             */
            subnet?: string;
        };
        Summary: {
            /**
             * Format: int64
             * @description Number of containers using this image. Includes both stopped and running
             *     containers.
             *
             *     This size is not calculated by default, and depends on which API endpoint
             *     is used. `-1` indicates that the value has not been set / calculated.
             */
            Containers: number;
            /**
             * Format: int64
             * @description Date and time at which the image was created as a Unix timestamp
             *     (number of seconds since EPOCH).
             */
            Created: number;
            /** @description ID is the content-addressable ID of an image.
             *
             *     This identifier is a content-addressable digest calculated from the
             *     image's configuration (which includes the digests of layers used by
             *     the image).
             *
             *     Note that this digest differs from the `RepoDigests` below, which
             *     holds digests of image manifests that reference the image. */
            Id: string;
            /** @description User-defined key/value metadata. */
            Labels: {
                [key: string]: string;
            };
            /** @description Manifests is a list of image manifests available in this image.  It
             *     provides a more detailed view of the platform-specific image manifests or
             *     other image-attached data like build attestations.
             *
             *     WARNING: This is experimental and may change at any time without any backward
             *     compatibility. */
            Manifests?: components["schemas"]["ManifestSummary"][];
            /** @description ID of the parent image.
             *
             *     Depending on how the image was created, this field may be empty and
             *     is only set for images that were built/created locally. This field
             *     is empty if the image was pulled from an image registry. */
            ParentId: string;
            /** @description List of content-addressable digests of locally available image manifests
             *     that the image is referenced from. Multiple manifests can refer to the
             *     same image.
             *
             *     These digests are usually only available if the image was either pulled
             *     from a registry, or if the image was pushed to a registry, which is when
             *     the manifest is generated and its digest calculated. */
            RepoDigests: string[];
            /** @description List of image names/tags in the local image cache that reference this
             *     image.
             *
             *     Multiple image tags can refer to the same image, and this list may be
             *     empty if no tags reference the image, in which case the image is
             *     "untagged", in which case it can still be referenced by its ID. */
            RepoTags: string[];
            /**
             * Format: int64
             * @description Total size of image layers that are shared between this image and other
             *     images.
             *
             *     This size is not calculated by default. `-1` indicates that the value
             *     has not been set / calculated.
             */
            SharedSize: number;
            /**
             * Format: int64
             * @description Total size of the image including all layers it is composed of.
             */
            Size: number;
            /**
             * Format: int64
             * @description Total size of the image including all layers it is composed of.
             *
             *     Deprecated: this field is omitted in API v1.44, but kept for backward compatibility. Use Size instead.
             */
            VirtualSize?: number;
        };
        /** @description SummaryNetworkSettings provides a summary of container's networks
         *     in /containers/json */
        SummaryNetworkSettings: {
            Networks?: {
                [key: string]: components["schemas"]["EndpointSettings"];
            };
        };
        /** @description SystemCheckReport provides a report of what a storage consistency check
         *     found, and if we removed anything that was damaged, what we removed. */
        SystemCheckReport: {
            Containers?: {
                [key: string]: string[];
            };
            Errors?: boolean;
            Images?: {
                [key: string]: string[];
            };
            Layers?: {
                [key: string]: string[];
            };
            ROImages?: {
                [key: string]: string[];
            };
            ROLayers?: {
                [key: string]: string[];
            };
            RemovedContainers?: {
                [key: string]: string;
            };
            RemovedImages?: {
                [key: string]: string[];
            };
            RemovedLayers?: string[];
        };
        /** @description SystemComponentVersion is the type used by pkg/domain/entities */
        SystemComponentVersion: {
            ApiVersion?: string;
            Arch?: string;
            BuildTime?: string;
            Components?: components["schemas"]["ComponentVersion"][];
            Experimental?: boolean;
            GitCommit?: string;
            GoVersion?: string;
            KernelVersion?: string;
            MinAPIVersion?: string;
            Os?: string;
            Platform?: {
                Name?: string;
            };
            Version?: string;
        };
        /** @description SystemDfContainerReport describes a container for use with df */
        SystemDfContainerReport: {
            Command?: string[];
            ContainerID?: string;
            /** Format: date-time */
            Created?: string;
            Image?: string;
            /** Format: int64 */
            LocalVolumes?: number;
            Names?: string;
            /** Format: int64 */
            RWSize?: number;
            /** Format: int64 */
            Size?: number;
            Status?: string;
        };
        /** @description SystemDfImageReport describes an image for use with df */
        SystemDfImageReport: {
            /** Format: int64 */
            Containers?: number;
            /** Format: date-time */
            Created?: string;
            ImageID?: string;
            Repository?: string;
            /** Format: int64 */
            SharedSize?: number;
            /** Format: int64 */
            Size?: number;
            Tag?: string;
            /** Format: int64 */
            UniqueSize?: number;
        };
        /** @description SystemDfReport describes the response for df information */
        SystemDfReport: {
            Containers?: components["schemas"]["SystemDfContainerReport"][];
            Images?: components["schemas"]["SystemDfImageReport"][];
            /** Format: int64 */
            ImagesSize?: number;
            Volumes?: components["schemas"]["SystemDfVolumeReport"][];
        };
        /** @description SystemDfVolumeReport describes a volume and its size */
        SystemDfVolumeReport: {
            /** Format: int64 */
            Links?: number;
            /** Format: int64 */
            ReclaimableSize?: number;
            /** Format: int64 */
            Size?: number;
            VolumeName?: string;
        };
        /** SystemPruneReport provides report after system prune is executed. */
        SystemPruneReport: {
            ContainerPruneReports?: components["schemas"]["PruneReport"][];
            ImagePruneReports?: components["schemas"]["PruneReport"][];
            NetworkPruneReports?: components["schemas"]["NetworkPruneReport"][];
            PodPruneReport?: components["schemas"]["PodPruneReport"][];
            /** Format: uint64 */
            ReclaimedSpace?: number;
            VolumePruneReports?: components["schemas"]["PruneReport"][];
        };
        /** @description Task carries the information about one backend task */
        Task: {
            EndpointID?: string;
            EndpointIP?: string;
            Info?: {
                [key: string]: string;
            };
            Name?: string;
        };
        /** @description ThrottleDevice is a structure that holds device:rate_per_second pair */
        ThrottleDevice: {
            Path?: string;
            /** Format: uint64 */
            Rate?: number;
        };
        /** TmpfsOptions defines options specific to mounts of type "tmpfs". */
        TmpfsOptions: {
            Mode?: components["schemas"]["FileMode"];
            /** @description Options to be passed to the tmpfs mount. An array of arrays. Flag
             *     options should be provided as 1-length arrays. Other types should be
             *     provided as 2-length arrays, where the first item is the key and the
             *     second the value. */
            Options?: string[][];
            /**
             * Format: int64
             * @description Size sets the size of the tmpfs, in bytes.
             *
             *     This will be converted to an operating system specific value
             *     depending on the host. For example, on linux, it will be converted to
             *     use a 'k', 'm' or 'g' syntax. BSD, though not widely supported with
             *     docker, uses a straight byte value.
             *
             *     Percentages are not supported.
             */
            SizeBytes?: number;
        };
        /**
         * Topology is a map of topological domains to topological segments.
         * @description This description is taken verbatim from the CSI Spec:
         *
         *     A topological domain is a sub-division of a cluster, like "region",
         *     "zone", "rack", etc.
         *     A topological segment is a specific instance of a topological domain,
         *     like "zone3", "rack3", etc.
         *     For example {"com.company/zone": "Z1", "com.company/rack": "R3"}
         *     Valid keys have two segments: an OPTIONAL prefix and name, separated
         *     by a slash (/), for example: "com.company.example/zone".
         *     The key name segment is REQUIRED. The prefix is OPTIONAL.
         *     The key name MUST be 63 characters or less, begin and end with an
         *     alphanumeric character ([a-z0-9A-Z]), and contain only dashes (-),
         *     underscores (_), dots (.), or alphanumerics in between, for example
         *     "zone".
         *     The key prefix MUST be 63 characters or less, begin and end with a
         *     lower-case alphanumeric character ([a-z0-9]), contain only
         *     dashes (-), dots (.), or lower-case alphanumerics in between, and
         *     follow domain name notation format
         *     (https://tools.ietf.org/html/rfc1035#section-2.3.1).
         *     The key prefix SHOULD include the plugin's host company name and/or
         *     the plugin name, to minimize the possibility of collisions with keys
         *     from other plugins.
         *     If a key prefix is specified, it MUST be identical across all
         *     topology keys returned by the SP (across all RPCs).
         *     Keys MUST be case-insensitive. Meaning the keys "Zone" and "zone"
         *     MUST not both exist.
         *     Each value (topological segment) MUST contain 1 or more strings.
         *     Each string MUST be 63 characters or less and begin and end with an
         *     alphanumeric character with '-', '_', '.', or alphanumerics in
         *     between.
         */
        Topology: {
            Segments?: {
                [key: string]: string;
            };
        };
        /** @description TopologyRequirement expresses the user's requirements for a volume's
         *     accessible topology. */
        TopologyRequirement: {
            /** @description Preferred is a list of Topologies that the volume should attempt to be
             *     provisioned in.
             *
             *     Taken from the CSI spec:
             *
             *     Specifies the list of topologies the CO would prefer the volume to
             *     be provisioned in.
             *
             *     This field is OPTIONAL. If TopologyRequirement is specified either
             *     requisite or preferred or both MUST be specified.
             *
             *     An SP MUST attempt to make the provisioned volume available using
             *     the preferred topologies in order from first to last.
             *
             *     If requisite is specified, all topologies in preferred list MUST
             *     also be present in the list of requisite topologies.
             *
             *     If the SP is unable to make the provisioned volume available
             *     from any of the preferred topologies, the SP MAY choose a topology
             *     from the list of requisite topologies.
             *     If the list of requisite topologies is not specified, then the SP
             *     MAY choose from the list of all possible topologies.
             *     If the list of requisite topologies is specified and the SP is
             *     unable to make the provisioned volume available from any of the
             *     requisite topologies it MUST fail the CreateVolume call.
             *
             *     Example 1:
             *     Given a volume should be accessible from a single zone, and
             *     requisite =
             *     {"region": "R1", "zone": "Z2"},
             *     {"region": "R1", "zone": "Z3"}
             *     preferred =
             *     {"region": "R1", "zone": "Z3"}
             *     then the SP SHOULD first attempt to make the provisioned volume
             *     available from "zone" "Z3" in the "region" "R1" and fall back to
             *     "zone" "Z2" in the "region" "R1" if that is not possible.
             *
             *     Example 2:
             *     Given a volume should be accessible from a single zone, and
             *     requisite =
             *     {"region": "R1", "zone": "Z2"},
             *     {"region": "R1", "zone": "Z3"},
             *     {"region": "R1", "zone": "Z4"},
             *     {"region": "R1", "zone": "Z5"}
             *     preferred =
             *     {"region": "R1", "zone": "Z4"},
             *     {"region": "R1", "zone": "Z2"}
             *     then the SP SHOULD first attempt to make the provisioned volume
             *     accessible from "zone" "Z4" in the "region" "R1" and fall back to
             *     "zone" "Z2" in the "region" "R1" if that is not possible. If that
             *     is not possible, the SP may choose between either the "zone"
             *     "Z3" or "Z5" in the "region" "R1".
             *
             *     Example 3:
             *     Given a volume should be accessible from TWO zones (because an
             *     opaque parameter in CreateVolumeRequest, for example, specifies
             *     the volume is accessible from two zones, aka synchronously
             *     replicated), and
             *     requisite =
             *     {"region": "R1", "zone": "Z2"},
             *     {"region": "R1", "zone": "Z3"},
             *     {"region": "R1", "zone": "Z4"},
             *     {"region": "R1", "zone": "Z5"}
             *     preferred =
             *     {"region": "R1", "zone": "Z5"},
             *     {"region": "R1", "zone": "Z3"}
             *     then the SP SHOULD first attempt to make the provisioned volume
             *     accessible from the combination of the two "zones" "Z5" and "Z3" in
             *     the "region" "R1". If that's not possible, it should fall back to
             *     a combination of "Z5" and other possibilities from the list of
             *     requisite. If that's not possible, it should fall back  to a
             *     combination of "Z3" and other possibilities from the list of
             *     requisite. If that's not possible, it should fall back  to a
             *     combination of other possibilities from the list of requisite. */
            Preferred?: components["schemas"]["Topology"][];
            /** @description Requisite specifies a list of Topologies, at least one of which the
             *     volume must be accessible from.
             *
             *     Taken verbatim from the CSI Spec:
             *
             *     Specifies the list of topologies the provisioned volume MUST be
             *     accessible from.
             *     This field is OPTIONAL. If TopologyRequirement is specified either
             *     requisite or preferred or both MUST be specified.
             *
             *     If requisite is specified, the provisioned volume MUST be
             *     accessible from at least one of the requisite topologies.
             *
             *     Given
             *     x = number of topologies provisioned volume is accessible from
             *     n = number of requisite topologies
             *     The CO MUST ensure n >= 1. The SP MUST ensure x >= 1
             *     If x==n, then the SP MUST make the provisioned volume available to
             *     all topologies from the list of requisite topologies. If it is
             *     unable to do so, the SP MUST fail the CreateVolume call.
             *     For example, if a volume should be accessible from a single zone,
             *     and requisite =
             *     {"region": "R1", "zone": "Z2"}
             *     then the provisioned volume MUST be accessible from the "region"
             *     "R1" and the "zone" "Z2".
             *     Similarly, if a volume should be accessible from two zones, and
             *     requisite =
             *     {"region": "R1", "zone": "Z2"},
             *     {"region": "R1", "zone": "Z3"}
             *     then the provisioned volume MUST be accessible from the "region"
             *     "R1" and both "zone" "Z2" and "zone" "Z3".
             *
             *     If x<n, then the SP SHALL choose x unique topologies from the list
             *     of requisite topologies. If it is unable to do so, the SP MUST fail
             *     the CreateVolume call.
             *     For example, if a volume should be accessible from a single zone,
             *     and requisite =
             *     {"region": "R1", "zone": "Z2"},
             *     {"region": "R1", "zone": "Z3"}
             *     then the SP may choose to make the provisioned volume available in
             *     either the "zone" "Z2" or the "zone" "Z3" in the "region" "R1".
             *     Similarly, if a volume should be accessible from two zones, and
             *     requisite =
             *     {"region": "R1", "zone": "Z2"},
             *     {"region": "R1", "zone": "Z3"},
             *     {"region": "R1", "zone": "Z4"}
             *     then the provisioned volume MUST be accessible from any combination
             *     of two unique topologies: e.g. "R1/Z2" and "R1/Z3", or "R1/Z2" and
             *     "R1/Z4", or "R1/Z3" and "R1/Z4".
             *
             *     If x>n, then the SP MUST make the provisioned volume available from
             *     all topologies from the list of requisite topologies and MAY choose
             *     the remaining x-n unique topologies from the list of all possible
             *     topologies. If it is unable to do so, the SP MUST fail the
             *     CreateVolume call.
             *     For example, if a volume should be accessible from two zones, and
             *     requisite =
             *     {"region": "R1", "zone": "Z2"}
             *     then the provisioned volume MUST be accessible from the "region"
             *     "R1" and the "zone" "Z2" and the SP may select the second zone
             *     independently, e.g. "R1/Z4". */
            Requisite?: components["schemas"]["Topology"][];
        };
        /** Type represents the type of a mount. */
        Type: string;
        /**
         * TypeBlock defines options for using a volume as a block-type volume.
         * @description Intentionally empty.
         */
        TypeBlock: Record<string, never>;
        /** @description TypeMount contains options for using a volume as a Mount-type
         *     volume. */
        TypeMount: {
            /** @description FsType specifies the filesystem type for the mount volume. Optional. */
            FsType?: string;
            /** @description MountFlags defines flags to pass when mounting the volume. Optional. */
            MountFlags?: string[];
        };
        /** UTSMode represents the UTS namespace of the container. */
        UTSMode: string;
        /** Ulimit is a human friendly version of Rlimit. */
        Ulimit: {
            /** Format: int64 */
            Hard?: number;
            Name?: string;
            /** Format: int64 */
            Soft?: number;
        };
        /**
         * UpdateConfig holds the mutable attributes of a Container.
         * @description Those attributes can be updated at runtime.
         */
        UpdateConfig: {
            BlkioDeviceReadBps?: components["schemas"]["ThrottleDevice"][];
            BlkioDeviceReadIOps?: components["schemas"]["ThrottleDevice"][];
            BlkioDeviceWriteBps?: components["schemas"]["ThrottleDevice"][];
            BlkioDeviceWriteIOps?: components["schemas"]["ThrottleDevice"][];
            /** Format: uint16 */
            BlkioWeight?: number;
            BlkioWeightDevice?: components["schemas"]["WeightDevice"][];
            /** @description Applicable to UNIX platforms */
            CgroupParent?: string;
            /**
             * Format: int64
             * @description Applicable to Windows
             */
            CpuCount?: number;
            /** Format: int64 */
            CpuPercent?: number;
            /** Format: int64 */
            CpuPeriod?: number;
            /** Format: int64 */
            CpuQuota?: number;
            /** Format: int64 */
            CpuRealtimePeriod?: number;
            /** Format: int64 */
            CpuRealtimeRuntime?: number;
            /**
             * Format: int64
             * @description Applicable to all platforms
             */
            CpuShares?: number;
            CpusetCpus?: string;
            CpusetMems?: string;
            DeviceCgroupRules?: string[];
            DeviceRequests?: components["schemas"]["DeviceRequest"][];
            Devices?: components["schemas"]["DeviceMapping"][];
            /** Format: uint64 */
            IOMaximumBandwidth?: number;
            /** Format: uint64 */
            IOMaximumIOps?: number;
            /**
             * Format: int64
             * @description KernelMemory specifies the kernel memory limit (in bytes) for the container.
             *     Deprecated: kernel 5.4 deprecated kmem.limit_in_bytes.
             */
            KernelMemory?: number;
            /** Format: int64 */
            KernelMemoryTCP?: number;
            /** Format: int64 */
            Memory?: number;
            /** Format: int64 */
            MemoryReservation?: number;
            /** Format: int64 */
            MemorySwap?: number;
            /** Format: int64 */
            MemorySwappiness?: number;
            /** Format: int64 */
            NanoCpus?: number;
            OomKillDisable?: boolean;
            /** Format: int64 */
            PidsLimit?: number;
            RestartPolicy?: components["schemas"]["RestartPolicy"];
            Ulimits?: components["schemas"]["Ulimit"][];
        };
        UpdateContainerDevicesLimits: {
            /** @description Block IO weight (relative device weight) in the form:
             *     ```[{"Path": "device_path", "Weight": weight}]``` */
            BlkIOWeightDevice?: components["schemas"]["WeightDevice"][];
            /** @description Limit read rate (bytes per second) from a device, in the form:
             *     ```[{"Path": "device_path", "Rate": rate}]``` */
            DeviceReadBPs?: components["schemas"]["ThrottleDevice"][];
            /** @description Limit read rate (IO per second) from a device, in the form:
             *     ```[{"Path": "device_path", "Rate": rate}]``` */
            DeviceReadIOPs?: components["schemas"]["ThrottleDevice"][];
            /** @description Limit write rate (bytes per second) to a device, in the form:
             *     ```[{"Path": "device_path", "Rate": rate}]``` */
            DeviceWriteBPs?: components["schemas"]["ThrottleDevice"][];
            /** @description Limit write rate (IO per second) to a device, in the form:
             *     ```[{"Path": "device_path", "Rate": rate}]``` */
            DeviceWriteIOPs?: components["schemas"]["ThrottleDevice"][];
        };
        /** @description UpdateEntities used to wrap the oci resource spec in a swagger model */
        UpdateEntities: {
            /** @description Block IO weight (relative device weight) in the form:
             *     ```[{"Path": "device_path", "Weight": weight}]``` */
            BlkIOWeightDevice?: components["schemas"]["WeightDevice"][];
            /** @description Limit read rate (bytes per second) from a device, in the form:
             *     ```[{"Path": "device_path", "Rate": rate}]``` */
            DeviceReadBPs?: components["schemas"]["ThrottleDevice"][];
            /** @description Limit read rate (IO per second) from a device, in the form:
             *     ```[{"Path": "device_path", "Rate": rate}]``` */
            DeviceReadIOPs?: components["schemas"]["ThrottleDevice"][];
            /** @description Limit write rate (bytes per second) to a device, in the form:
             *     ```[{"Path": "device_path", "Rate": rate}]``` */
            DeviceWriteBPs?: components["schemas"]["ThrottleDevice"][];
            /** @description Limit write rate (IO per second) to a device, in the form:
             *     ```[{"Path": "device_path", "Rate": rate}]``` */
            DeviceWriteIOPs?: components["schemas"]["ThrottleDevice"][];
            blockIO?: components["schemas"]["LinuxBlockIO"];
            cpu?: components["schemas"]["LinuxCPU"];
            /** @description Devices configures the device allowlist. */
            devices?: components["schemas"]["LinuxDeviceCgroup"][];
            /** @description HealthCmd set a healthcheck command for the container. ('none' disables the existing healthcheck) */
            health_cmd?: string;
            /** @description HealthInterval set an interval for the healthcheck.
             *     (a value of disable results in no automatic timer setup) Changing this setting resets timer. */
            health_interval?: string;
            /** @description HealthLogDestination set the destination of the HealthCheck log.
             *     Directory path, local or events_logger (local use container state file)
             *     Warning: Changing this setting may cause the loss of previous logs! */
            health_log_destination?: string;
            /**
             * Format: uint64
             * @description HealthMaxLogCount set maximum number of attempts in the HealthCheck log file.
             *     ('0' value means an infinite number of attempts in the log file)
             */
            health_max_log_count?: number;
            /**
             * Format: uint64
             * @description HealthMaxLogSize set maximum length in characters of stored HealthCheck log.
             *     ('0' value means an infinite log length)
             */
            health_max_log_size?: number;
            /** @description HealthOnFailure set the action to take once the container turns unhealthy. */
            health_on_failure?: string;
            /**
             * Format: uint64
             * @description HealthRetries set the number of retries allowed before a healthcheck is considered to be unhealthy.
             */
            health_retries?: number;
            /** @description HealthStartPeriod set the initialization time needed for a container to bootstrap. */
            health_start_period?: string;
            /** @description HealthStartupCmd set a startup healthcheck command for the container. */
            health_startup_cmd?: string;
            /** @description HealthStartupInterval set an interval for the startup healthcheck.
             *     Changing this setting resets the timer, depending on the state of the container. */
            health_startup_interval?: string;
            /**
             * Format: uint64
             * @description HealthStartupRetries set the maximum number of retries before the startup healthcheck will restart the container.
             */
            health_startup_retries?: number;
            /**
             * Format: uint64
             * @description HealthStartupSuccess set the number of consecutive successes before the startup healthcheck is marked as successful
             *     and the normal healthcheck begins (0 indicates any success will start the regular healthcheck)
             */
            health_startup_success?: number;
            /** @description HealthStartupTimeout set the maximum amount of time that the startup healthcheck may take before it is considered failed. */
            health_startup_timeout?: string;
            /** @description HealthTimeout set the maximum time allowed to complete the healthcheck before an interval is considered failed. */
            health_timeout?: string;
            /** @description Hugetlb limits (in bytes). Default to reservation limits if supported. */
            hugepageLimits?: components["schemas"]["LinuxHugepageLimit"][];
            memory?: components["schemas"]["LinuxMemory"];
            network?: components["schemas"]["LinuxNetwork"];
            /** @description Disable healthchecks on container. */
            no_healthcheck?: boolean;
            pids?: components["schemas"]["LinuxPids"];
            /** @description Rdma resource restriction configuration.
             *     Limits are a set of key value pairs that define RDMA resource limits,
             *     where the key is device name and value is resource limits. */
            rdma?: {
                [key: string]: components["schemas"]["LinuxRdma"];
            };
            /** @description Unified resources. */
            unified?: {
                [key: string]: string;
            };
        };
        UpdateHealthCheckConfig: {
            /** @description HealthCmd set a healthcheck command for the container. ('none' disables the existing healthcheck) */
            health_cmd?: string;
            /** @description HealthInterval set an interval for the healthcheck.
             *     (a value of disable results in no automatic timer setup) Changing this setting resets timer. */
            health_interval?: string;
            /** @description HealthLogDestination set the destination of the HealthCheck log.
             *     Directory path, local or events_logger (local use container state file)
             *     Warning: Changing this setting may cause the loss of previous logs! */
            health_log_destination?: string;
            /**
             * Format: uint64
             * @description HealthMaxLogCount set maximum number of attempts in the HealthCheck log file.
             *     ('0' value means an infinite number of attempts in the log file)
             */
            health_max_log_count?: number;
            /**
             * Format: uint64
             * @description HealthMaxLogSize set maximum length in characters of stored HealthCheck log.
             *     ('0' value means an infinite log length)
             */
            health_max_log_size?: number;
            /** @description HealthOnFailure set the action to take once the container turns unhealthy. */
            health_on_failure?: string;
            /**
             * Format: uint64
             * @description HealthRetries set the number of retries allowed before a healthcheck is considered to be unhealthy.
             */
            health_retries?: number;
            /** @description HealthStartPeriod set the initialization time needed for a container to bootstrap. */
            health_start_period?: string;
            /** @description HealthStartupCmd set a startup healthcheck command for the container. */
            health_startup_cmd?: string;
            /** @description HealthStartupInterval set an interval for the startup healthcheck.
             *     Changing this setting resets the timer, depending on the state of the container. */
            health_startup_interval?: string;
            /**
             * Format: uint64
             * @description HealthStartupRetries set the maximum number of retries before the startup healthcheck will restart the container.
             */
            health_startup_retries?: number;
            /**
             * Format: uint64
             * @description HealthStartupSuccess set the number of consecutive successes before the startup healthcheck is marked as successful
             *     and the normal healthcheck begins (0 indicates any success will start the regular healthcheck)
             */
            health_startup_success?: number;
            /** @description HealthStartupTimeout set the maximum amount of time that the startup healthcheck may take before it is considered failed. */
            health_startup_timeout?: string;
            /** @description HealthTimeout set the maximum time allowed to complete the healthcheck before an interval is considered failed. */
            health_timeout?: string;
            /** @description Disable healthchecks on container. */
            no_healthcheck?: boolean;
        };
        /** @description UsageData Usage details about the volume. This information is used by the
         *     `GET /system/df` endpoint, and omitted in other endpoints. */
        UsageData: {
            /**
             * Format: int64
             * @description The number of containers referencing this volume. This field
             *     is set to `-1` if the reference-count is not available.
             */
            RefCount: number;
            /**
             * Format: int64
             * @description Amount of disk space used by the volume (in bytes). This information
             *     is only available for volumes created with the `"local"` volume
             *     driver. For volumes created with other volume drivers, this field
             *     is set to `-1` ("not available")
             */
            Size: number;
        };
        /** UsernsMode represents userns mode in the container. */
        UsernsMode: string;
        /** Version represents the internal object version. */
        Version: {
            /** Format: uint64 */
            Index?: number;
        };
        /** @description Volume volume */
        Volume: {
            ClusterVolume?: components["schemas"]["ClusterVolume"];
            /** @description Date/Time the volume was created. */
            CreatedAt?: string;
            /** @description Name of the volume driver used by the volume. */
            Driver: string;
            /** @description User-defined key/value metadata. */
            Labels: {
                [key: string]: string;
            };
            /** @description Mount path of the volume on the host. */
            Mountpoint: string;
            /** @description Name of the volume. */
            Name: string;
            /** @description The driver specific options used when creating the volume. */
            Options: {
                [key: string]: string;
            };
            /** @description The level at which the volume exists. Either `global` for cluster-wide,
             *     or `local` for machine level. */
            Scope: string;
            /** @description Low-level details about the volume, provided by the volume driver.
             *     Details are returned as a map with key/value pairs:
             *     `{"key":"value","key2":"value2"}`.
             *
             *     The `Status` field is optional, and is omitted if the volume driver
             *     does not support this feature. */
            Status?: {
                [key: string]: unknown;
            };
            UsageData?: components["schemas"]["UsageData"];
        };
        VolumeConfigResponse: {
            /** @description Anonymous indicates that the volume was created as an anonymous
             *     volume for a specific container, and will be removed when any
             *     container using it is removed. */
            Anonymous?: boolean;
            /**
             * Format: date-time
             * @description CreatedAt is the date and time the volume was created at. This is not
             *     stored for older Libpod volumes; if so, it will be omitted.
             */
            CreatedAt?: string;
            /** @description Driver is the driver used to create the volume.
             *     If set to "local" or "", the Local driver (Podman built-in code) is
             *     used to service the volume; otherwise, a volume plugin with the given
             *     name is used to mount and manage the volume. */
            Driver?: string;
            /**
             * Format: int64
             * @description GID is the GID that the volume was created with.
             */
            GID?: number;
            /** @description Labels includes the volume's configured labels, key:value pairs that
             *     can be passed during volume creation to provide information for third
             *     party tools. */
            Labels?: {
                [key: string]: string;
            };
            /**
             * Format: uint32
             * @description LockNumber is the number of the volume's Libpod lock.
             */
            LockNumber?: number;
            /**
             * Format: uint64
             * @description MountCount is the number of times this volume has been mounted.
             */
            MountCount?: number;
            /** @description Mountpoint is the path on the host where the volume is mounted. */
            Mountpoint?: string;
            /** @description Name is the name of the volume. */
            Name?: string;
            /** @description NeedsChown indicates that the next time the volume is mounted into
             *     a container, the container will chown the volume to the container process
             *     UID/GID. */
            NeedsChown?: boolean;
            /** @description NeedsCopyUp indicates that the next time the volume is mounted into */
            NeedsCopyUp?: boolean;
            /** @description Options is a set of options that were used when creating the volume.
             *     For the Local driver, these are mount options that will be used to
             *     determine how a local filesystem is mounted; they are handled as
             *     parameters to Mount in a manner described in the volume create
             *     manpage.
             *     For non-local drivers, these are passed as-is to the volume plugin. */
            Options?: {
                [key: string]: string;
            };
            /** @description Scope is unused and provided solely for Docker compatibility. It is
             *     unconditionally set to "local". */
            Scope?: string;
            /** @description Status is used to return information on the volume's current state,
             *     if the volume was created using a volume plugin (uses a Driver that
             *     is not the local driver).
             *     Status is provided to us by an external program, so no guarantees are
             *     made about its format or contents. Further, it is an optional field,
             *     so it may not be set even in cases where a volume plugin is in use. */
            Status?: {
                [key: string]: unknown;
            };
            /** @description StorageID is the ID of the container backing the volume in c/storage.
             *     Only used with Image Volumes. */
            StorageID?: string;
            /**
             * Format: uint64
             * @description Timeout is the specified driver timeout if given
             */
            Timeout?: number;
            /**
             * Format: int64
             * @description UID is the UID that the volume was created with.
             */
            UID?: number;
        };
        VolumeCreateOptions: {
            /** @description Volume driver to use */
            Driver?: string;
            /** @description Ignore existing volumes */
            IgnoreIfExists?: boolean;
            /** @description User-defined key/value metadata. Provided for compatibility */
            Label?: {
                [key: string]: string;
            };
            /** @description User-defined key/value metadata. Preferred field, will override Label */
            Labels?: {
                [key: string]: string;
            };
            /** @description New volume's name. Can be left blank */
            Name?: string;
            /** @description Mapping of driver options and values. */
            Options?: {
                [key: string]: string;
            };
        };
        /** VolumeOptions represents the options for a mount of type volume. */
        VolumeOptions: {
            DriverConfig?: components["schemas"]["Driver"];
            Labels?: {
                [key: string]: string;
            };
            NoCopy?: boolean;
            Subpath?: string;
        };
        VolumeRmReport: {
            Err?: string;
            Id?: string;
        };
        /** @description WaitExitError container waiting error, if any */
        WaitExitError: {
            /** @description Details of an error */
            Message?: string;
        };
        /**
         * WaitResponse ContainerWaitResponse
         * @description OK response to ContainerWait operation
         */
        WaitResponse: {
            Error?: components["schemas"]["WaitExitError"];
            /**
             * Format: int64
             * @description Exit code of the container
             */
            StatusCode: number;
        };
        /** @description WeightDevice is a structure that holds device:weight pair */
        WeightDevice: {
            Path?: string;
            /** Format: uint16 */
            Weight?: number;
        };
        cacheLibImage: Record<string, never>;
        /** @description Container update */
        containerUpdateRequest: {
            BlkioDeviceReadBps?: components["schemas"]["ThrottleDevice"][];
            BlkioDeviceReadIOps?: components["schemas"]["ThrottleDevice"][];
            BlkioDeviceWriteBps?: components["schemas"]["ThrottleDevice"][];
            BlkioDeviceWriteIOps?: components["schemas"]["ThrottleDevice"][];
            /** Format: uint16 */
            BlkioWeight?: number;
            BlkioWeightDevice?: components["schemas"]["WeightDevice"][];
            /** @description Applicable to UNIX platforms */
            CgroupParent?: string;
            /**
             * Format: int64
             * @description Applicable to Windows
             */
            CpuCount?: number;
            /** Format: int64 */
            CpuPercent?: number;
            /** Format: int64 */
            CpuPeriod?: number;
            /** Format: int64 */
            CpuQuota?: number;
            /** Format: int64 */
            CpuRealtimePeriod?: number;
            /** Format: int64 */
            CpuRealtimeRuntime?: number;
            /**
             * Format: int64
             * @description Applicable to all platforms
             */
            CpuShares?: number;
            CpusetCpus?: string;
            CpusetMems?: string;
            DeviceCgroupRules?: string[];
            DeviceRequests?: components["schemas"]["DeviceRequest"][];
            Devices?: components["schemas"]["DeviceMapping"][];
            /** Format: uint64 */
            IOMaximumBandwidth?: number;
            /** Format: uint64 */
            IOMaximumIOps?: number;
            /**
             * Format: int64
             * @description KernelMemory specifies the kernel memory limit (in bytes) for the container.
             *     Deprecated: kernel 5.4 deprecated kmem.limit_in_bytes.
             */
            KernelMemory?: number;
            /** Format: int64 */
            KernelMemoryTCP?: number;
            /** Format: int64 */
            Memory?: number;
            /** Format: int64 */
            MemoryReservation?: number;
            /** Format: int64 */
            MemorySwap?: number;
            /** Format: int64 */
            MemorySwappiness?: number;
            /** Format: int64 */
            NanoCpus?: number;
            OomKillDisable?: boolean;
            /** Format: int64 */
            PidsLimit?: number;
            RestartPolicy?: components["schemas"]["RestartPolicy"];
            Ulimits?: components["schemas"]["Ulimit"][];
        };
        networkConnectRequest: components["schemas"]["ConnectOptions"];
        networkConnectRequestLibpod: components["schemas"]["NetworkConnectOptions"];
        networkCreate: components["schemas"]["CreateRequest"];
        /** @description Network create */
        networkCreateLibpod: {
            /**
             * Format: date-time
             * @description Created contains the timestamp when this network was created.
             */
            created?: string;
            /** @description DNSEnabled is whether name resolution is active for container on
             *     this Network. Only supported with the bridge driver. */
            dns_enabled?: boolean;
            /** @description Driver for this Network, e.g. bridge, macvlan... */
            driver?: string;
            /** @description ID of the Network. */
            id?: string;
            /** @description Internal is whether the Network should not have external routes
             *     to public or other Networks. */
            internal?: boolean;
            /** @description IPAMOptions contains options used for the ip assignment. */
            ipam_options?: {
                [key: string]: string;
            };
            /** @description IPv6Enabled if set to true an ipv6 subnet should be created for this net. */
            ipv6_enabled?: boolean;
            /** @description Labels is a set of key-value labels that have been applied to the
             *     Network. */
            labels?: {
                [key: string]: string;
            };
            /** @description Name of the Network. */
            name?: string;
            /** @description List of custom DNS server for podman's DNS resolver at network level,
             *     all the containers attached to this network will consider resolvers
             *     configured at network level. */
            network_dns_servers?: string[];
            /** @description NetworkInterface is the network interface name on the host. */
            network_interface?: string;
            /** @description Options is a set of key-value options that have been applied to
             *     the Network. */
            options?: {
                [key: string]: string;
            };
            /** @description Routes to use for this network. */
            routes?: components["schemas"]["Route"][];
            /** @description Subnets to use for this network. */
            subnets?: components["schemas"]["Subnet"][];
        };
        networkDisconnectRequest: components["schemas"]["DisconnectOptions"];
        networkUpdateRequestLibpod: components["schemas"]["NetworkUpdateOptions"];
        /** @description Details for creating a volume */
        volumeCreate: {
            /** @description Name of the volume driver to use. */
            Driver: string;
            /** @description A mapping of driver options and values. These options are
             *     passed directly to the driver and are driver specific. */
            DriverOpts: {
                [key: string]: string;
            };
            /** @description User-defined key/value metadata. */
            Labels: {
                [key: string]: string;
            };
            /** @description The new volume's name. If not specified, Docker generates a name. */
            Name: string;
        };
    };
    responses: {
        /** @description No such secret */
        NoSuchSecret: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /**
                     * @description API root cause formatted for automated parsing
                     * @example API root cause
                     */
                    cause?: string;
                    /**
                     * @description human error message, formatted for a human to read
                     * @example human error message
                     */
                    message?: string;
                    /**
                     * Format: int64
                     * @description HTTP response code
                     */
                    response?: number;
                };
                "application/octet-stream": {
                    /**
                     * @description API root cause formatted for automated parsing
                     * @example API root cause
                     */
                    cause?: string;
                    /**
                     * @description human error message, formatted for a human to read
                     * @example human error message
                     */
                    message?: string;
                    /**
                     * Format: int64
                     * @description HTTP response code
                     */
                    response?: number;
                };
                "text/plain": {
                    /**
                     * @description API root cause formatted for automated parsing
                     * @example API root cause
                     */
                    cause?: string;
                    /**
                     * @description human error message, formatted for a human to read
                     * @example human error message
                     */
                    message?: string;
                    /**
                     * Format: int64
                     * @description HTTP response code
                     */
                    response?: number;
                };
            };
        };
        /** @description Secret create response */
        SecretCreateResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    ID?: string;
                };
                "application/octet-stream": {
                    ID?: string;
                };
                "text/plain": {
                    ID?: string;
                };
            };
        };
        /** @description Secret in use */
        SecretInUse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /**
                     * @description API root cause formatted for automated parsing
                     * @example API root cause
                     */
                    cause?: string;
                    /**
                     * @description human error message, formatted for a human to read
                     * @example human error message
                     */
                    message?: string;
                    /**
                     * Format: int64
                     * @description HTTP response code
                     */
                    response?: number;
                };
                "application/octet-stream": {
                    /**
                     * @description API root cause formatted for automated parsing
                     * @example API root cause
                     */
                    cause?: string;
                    /**
                     * @description human error message, formatted for a human to read
                     * @example human error message
                     */
                    message?: string;
                    /**
                     * Format: int64
                     * @description HTTP response code
                     */
                    response?: number;
                };
                "text/plain": {
                    /**
                     * @description API root cause formatted for automated parsing
                     * @example API root cause
                     */
                    cause?: string;
                    /**
                     * @description human error message, formatted for a human to read
                     * @example human error message
                     */
                    message?: string;
                    /**
                     * Format: int64
                     * @description HTTP response code
                     */
                    response?: number;
                };
            };
        };
        /** @description Secret inspect compat */
        SecretInspectCompatResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["SecretInfoReportCompat"];
                "application/octet-stream": components["schemas"]["SecretInfoReportCompat"];
                "text/plain": components["schemas"]["SecretInfoReportCompat"];
            };
        };
        /** @description Secret inspect response */
        SecretInspectResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["SecretInfoReport"];
                "application/octet-stream": components["schemas"]["SecretInfoReport"];
                "text/plain": components["schemas"]["SecretInfoReport"];
            };
        };
        /** @description Secret list response */
        SecretListCompatResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["SecretInfoReportCompat"][];
                "application/octet-stream": components["schemas"]["SecretInfoReportCompat"][];
                "text/plain": components["schemas"]["SecretInfoReportCompat"][];
            };
        };
        /** @description Secret list response */
        SecretListResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["SecretInfoReport"][];
                "application/octet-stream": components["schemas"]["SecretInfoReport"][];
                "text/plain": components["schemas"]["SecretInfoReport"][];
            };
        };
        /** @description Bad parameter in request */
        badParamError: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorModel"];
                "application/octet-stream": components["schemas"]["ErrorModel"];
                "text/plain": components["schemas"]["ErrorModel"];
            };
        };
        /** @description Conflict error in operation */
        conflictError: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorModel"];
                "application/octet-stream": components["schemas"]["ErrorModel"];
                "text/plain": components["schemas"]["ErrorModel"];
            };
        };
        /** @description Container already started */
        containerAlreadyStartedError: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorModel"];
                "application/octet-stream": components["schemas"]["ErrorModel"];
                "text/plain": components["schemas"]["ErrorModel"];
            };
        };
        /** @description Container already stopped */
        containerAlreadyStoppedError: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorModel"];
                "application/octet-stream": components["schemas"]["ErrorModel"];
                "text/plain": components["schemas"]["ErrorModel"];
            };
        };
        /** @description Create container */
        containerCreateResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ContainerCreateResponse"];
                "application/octet-stream": components["schemas"]["ContainerCreateResponse"];
                "text/plain": components["schemas"]["ContainerCreateResponse"];
            };
        };
        /** @description Inspect container */
        containerInspectResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ContainerJSON"];
                "application/octet-stream": components["schemas"]["ContainerJSON"];
                "text/plain": components["schemas"]["ContainerJSON"];
            };
        };
        /** @description Inspect container */
        containerInspectResponseLibpod: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["InspectContainerData"];
                "application/octet-stream": components["schemas"]["InspectContainerData"];
                "text/plain": components["schemas"]["InspectContainerData"];
            };
        };
        /** @description No such container */
        containerNotFound: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorModel"];
                "application/octet-stream": components["schemas"]["ErrorModel"];
                "text/plain": components["schemas"]["ErrorModel"];
            };
        };
        /** @description Remove Containers */
        containerRemoveLibpod: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["LibpodContainersRmReport"][];
                "application/octet-stream": components["schemas"]["LibpodContainersRmReport"][];
                "text/plain": components["schemas"]["LibpodContainersRmReport"][];
            };
        };
        /** @description Get stats for one or more containers */
        containerStats: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ContainerStats"];
                "application/octet-stream": components["schemas"]["ContainerStats"];
                "text/plain": components["schemas"]["ContainerStats"];
            };
        };
        /** @description List processes in container */
        containerTopResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ContainerTopOKBody"];
                "application/octet-stream": components["schemas"]["ContainerTopOKBody"];
                "text/plain": components["schemas"]["ContainerTopOKBody"];
            };
        };
        /** @description Update container */
        containerUpdateResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    ID?: string;
                };
                "application/octet-stream": {
                    ID?: string;
                };
                "text/plain": {
                    ID?: string;
                };
            };
        };
        /** @description Wait container */
        containerWaitResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    Error?: {
                        Message?: string;
                    };
                    /**
                     * Format: int64
                     * @description container exit code
                     */
                    StatusCode?: number;
                };
                "application/octet-stream": {
                    Error?: {
                        Message?: string;
                    };
                    /**
                     * Format: int64
                     * @description container exit code
                     */
                    StatusCode?: number;
                };
                "text/plain": {
                    Error?: {
                        Message?: string;
                    };
                    /**
                     * Format: int64
                     * @description container exit code
                     */
                    StatusCode?: number;
                };
            };
        };
        /** @description List Containers */
        containersList: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Container"][];
                "application/octet-stream": components["schemas"]["Container"][];
                "text/plain": components["schemas"]["Container"][];
            };
        };
        /** @description List Containers */
        containersListLibpod: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ListContainer"][];
                "application/octet-stream": components["schemas"]["ListContainer"][];
                "text/plain": components["schemas"]["ListContainer"][];
            };
        };
        /** @description Prune Containers */
        containersPrune: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ContainersPruneReport"][];
                "application/octet-stream": components["schemas"]["ContainersPruneReport"][];
                "text/plain": components["schemas"]["ContainersPruneReport"][];
            };
        };
        /** @description Prune Containers */
        containersPruneLibpod: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ContainersPruneReportLibpod"][];
                "application/octet-stream": components["schemas"]["ContainersPruneReportLibpod"][];
                "text/plain": components["schemas"]["ContainersPruneReportLibpod"][];
            };
        };
        /** @description Exec Session Inspect */
        execSessionInspect: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["InspectExecSession"];
                "application/octet-stream": components["schemas"]["InspectExecSession"];
                "text/plain": components["schemas"]["InspectExecSession"];
            };
        };
        /** @description No such exec instance */
        execSessionNotFound: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorModel"];
                "application/octet-stream": components["schemas"]["ErrorModel"];
                "text/plain": components["schemas"]["ErrorModel"];
            };
        };
        /** @description Healthcheck Results */
        healthCheck: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["HealthCheckResults"];
                "application/octet-stream": components["schemas"]["HealthCheckResults"];
                "text/plain": components["schemas"]["HealthCheckResults"];
            };
        };
        /** @description Image History */
        history: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["HistoryResponse"];
                "application/octet-stream": components["schemas"]["HistoryResponse"];
                "text/plain": components["schemas"]["HistoryResponse"];
            };
        };
        /** @description Image Delete */
        imageDeleteResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    deleted?: string;
                    untagged?: string[];
                }[];
                "application/octet-stream": {
                    deleted?: string;
                    untagged?: string[];
                }[];
                "text/plain": {
                    deleted?: string;
                    untagged?: string[];
                }[];
            };
        };
        /** @description Image Inspect */
        imageInspect: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ImageInspect"];
                "application/octet-stream": components["schemas"]["ImageInspect"];
                "text/plain": components["schemas"]["ImageInspect"];
            };
        };
        /** @description Image summary for compat API */
        imageList: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Summary"][];
                "application/octet-stream": components["schemas"]["Summary"][];
                "text/plain": components["schemas"]["Summary"][];
            };
        };
        /** @description Image summary for libpod API */
        imageListLibpod: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["LibpodImageSummary"][];
                "application/octet-stream": components["schemas"]["LibpodImageSummary"][];
                "text/plain": components["schemas"]["LibpodImageSummary"][];
            };
        };
        /** @description No such image */
        imageNotFound: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorModel"];
                "application/octet-stream": components["schemas"]["ErrorModel"];
                "text/plain": components["schemas"]["ErrorModel"];
            };
        };
        /** @description Image Import */
        imagesImportResponseLibpod: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ImageImportReport"];
                "application/octet-stream": components["schemas"]["ImageImportReport"];
                "text/plain": components["schemas"]["ImageImportReport"];
            };
        };
        /** @description Image Load */
        imagesLoadResponseLibpod: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ImageLoadReport"];
                "application/octet-stream": components["schemas"]["ImageLoadReport"];
                "text/plain": components["schemas"]["ImageLoadReport"];
            };
        };
        /** @description Image Prune */
        imagesPruneLibpod: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PruneReport"][];
                "application/octet-stream": components["schemas"]["PruneReport"][];
                "text/plain": components["schemas"]["PruneReport"][];
            };
        };
        /** @description Image Pull */
        imagesPullResponseLibpod: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["LibpodImagesPullReport"];
                "application/octet-stream": components["schemas"]["LibpodImagesPullReport"];
                "text/plain": components["schemas"]["LibpodImagesPullReport"];
            };
        };
        /** @description Image Remove */
        imagesRemoveResponseLibpod: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["LibpodImagesRemoveReport"];
                "application/octet-stream": components["schemas"]["LibpodImagesRemoveReport"];
                "text/plain": components["schemas"]["LibpodImagesRemoveReport"];
            };
        };
        /** @description Image Scp */
        imagesScpResponseLibpod: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ScpReport"];
                "application/octet-stream": components["schemas"]["ScpReport"];
                "text/plain": components["schemas"]["ScpReport"];
            };
        };
        /** @description Info */
        infoResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["LibpodInfo"];
                "application/octet-stream": components["schemas"]["LibpodInfo"];
                "text/plain": components["schemas"]["LibpodInfo"];
            };
        };
        /** @description Inspect Image */
        inspectImageResponseLibpod: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ImageData"];
                "application/octet-stream": components["schemas"]["ImageData"];
                "text/plain": components["schemas"]["ImageData"];
            };
        };
        /** @description Internal server error */
        internalError: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorModel"];
                "application/octet-stream": components["schemas"]["ErrorModel"];
                "text/plain": components["schemas"]["ErrorModel"];
            };
        };
        /** @description Inspect Manifest */
        manifestInspect: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Schema2ListPublic"];
                "application/octet-stream": components["schemas"]["Schema2ListPublic"];
                "text/plain": components["schemas"]["Schema2ListPublic"];
            };
        };
        /** @description No such manifest */
        manifestNotFound: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorModel"];
                "application/octet-stream": components["schemas"]["ErrorModel"];
                "text/plain": components["schemas"]["ErrorModel"];
            };
        };
        /** @description Network is already connected and container is running or transitioning to the running state ('initialized') */
        networkConnectedError: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorModel"];
                "application/octet-stream": components["schemas"]["ErrorModel"];
                "text/plain": components["schemas"]["ErrorModel"];
            };
        };
        /** @description Network create */
        networkCreateResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Network"];
                "application/octet-stream": components["schemas"]["Network"];
                "text/plain": components["schemas"]["Network"];
            };
        };
        /** @description Network inspect */
        networkInspectCompat: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Inspect"];
                "application/octet-stream": components["schemas"]["Inspect"];
                "text/plain": components["schemas"]["Inspect"];
            };
        };
        /** @description Network inspect */
        networkInspectResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["NetworkInspectReport"];
                "application/octet-stream": components["schemas"]["NetworkInspectReport"];
                "text/plain": components["schemas"]["NetworkInspectReport"];
            };
        };
        /** @description Network list */
        networkListCompat: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Inspect"][];
                "application/octet-stream": components["schemas"]["Inspect"][];
                "text/plain": components["schemas"]["Inspect"][];
            };
        };
        /** @description Network list */
        networkListLibpod: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Network"][];
                "application/octet-stream": components["schemas"]["Network"][];
                "text/plain": components["schemas"]["Network"][];
            };
        };
        /** @description No such network */
        networkNotFound: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorModel"];
                "application/octet-stream": components["schemas"]["ErrorModel"];
                "text/plain": components["schemas"]["ErrorModel"];
            };
        };
        /** @description Network prune */
        networkPruneResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["NetworkPruneReport"][];
                "application/octet-stream": components["schemas"]["NetworkPruneReport"][];
                "text/plain": components["schemas"]["NetworkPruneReport"][];
            };
        };
        /** @description Network Delete */
        networkRmResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["NetworkRmReport"][];
                "application/octet-stream": components["schemas"]["NetworkRmReport"][];
                "text/plain": components["schemas"]["NetworkRmReport"][];
            };
        };
        /** @description Success */
        ok: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": Record<string, never>;
                "application/octet-stream": Record<string, never>;
                "text/plain": Record<string, never>;
            };
        };
        /** @description PlayKube response */
        playKubeResponseLibpod: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PlayKubeReport"];
                "application/octet-stream": components["schemas"]["PlayKubeReport"];
                "text/plain": components["schemas"]["PlayKubeReport"];
            };
        };
        /** @description Pod already started */
        podAlreadyStartedError: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorModel"];
                "application/octet-stream": components["schemas"]["ErrorModel"];
                "text/plain": components["schemas"]["ErrorModel"];
            };
        };
        /** @description Pod already stopped */
        podAlreadyStoppedError: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorModel"];
                "application/octet-stream": components["schemas"]["ErrorModel"];
                "text/plain": components["schemas"]["ErrorModel"];
            };
        };
        /** @description Inspect pod */
        podInspectResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["InspectPodData"];
                "application/octet-stream": components["schemas"]["InspectPodData"];
                "text/plain": components["schemas"]["InspectPodData"];
            };
        };
        /** @description Kill Pod */
        podKillResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PodKillReport"];
                "application/octet-stream": components["schemas"]["PodKillReport"];
                "text/plain": components["schemas"]["PodKillReport"];
            };
        };
        /** @description No such pod */
        podNotFound: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorModel"];
                "application/octet-stream": components["schemas"]["ErrorModel"];
                "text/plain": components["schemas"]["ErrorModel"];
            };
        };
        /** @description Pause pod */
        podPauseResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PodPauseReport"];
                "application/octet-stream": components["schemas"]["PodPauseReport"];
                "text/plain": components["schemas"]["PodPauseReport"];
            };
        };
        /** @description Prune pod */
        podPruneResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PodPruneReport"];
                "application/octet-stream": components["schemas"]["PodPruneReport"];
                "text/plain": components["schemas"]["PodPruneReport"];
            };
        };
        /** @description Restart pod */
        podRestartResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PodRestartReport"];
                "application/octet-stream": components["schemas"]["PodRestartReport"];
                "text/plain": components["schemas"]["PodRestartReport"];
            };
        };
        /** @description Rm pod */
        podRmResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PodRmReport"];
                "application/octet-stream": components["schemas"]["PodRmReport"];
                "text/plain": components["schemas"]["PodRmReport"];
            };
        };
        /** @description Start pod */
        podStartResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PodStartReport"];
                "application/octet-stream": components["schemas"]["PodStartReport"];
                "text/plain": components["schemas"]["PodStartReport"];
            };
        };
        /** @description Pod Statistics */
        podStatsResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PodStatsReport"][];
                "application/octet-stream": components["schemas"]["PodStatsReport"][];
                "text/plain": components["schemas"]["PodStatsReport"][];
            };
        };
        /** @description Stop pod */
        podStopResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PodStopReport"];
                "application/octet-stream": components["schemas"]["PodStopReport"];
                "text/plain": components["schemas"]["PodStopReport"];
            };
        };
        /** @description List processes in pod */
        podTopResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PodTopOKBody"];
                "application/octet-stream": components["schemas"]["PodTopOKBody"];
                "text/plain": components["schemas"]["PodTopOKBody"];
            };
        };
        /** @description Unpause pod */
        podUnpauseResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PodUnpauseReport"];
                "application/octet-stream": components["schemas"]["PodUnpauseReport"];
                "text/plain": components["schemas"]["PodUnpauseReport"];
            };
        };
        /** @description List pods */
        podsListResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ListPodsReport"][];
                "application/octet-stream": components["schemas"]["ListPodsReport"][];
                "text/plain": components["schemas"]["ListPodsReport"][];
            };
        };
        /** @description Registry Search */
        registrySearchResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @description Automated indicates if the image was created by an automated build. */
                    Automated?: string;
                    /** @description Description of the image. */
                    Description?: string;
                    /**
                     * @description Index is the image index
                     * @example quay.io
                     */
                    Index?: string;
                    /**
                     * @description Name is the canonical name of the image
                     * @example docker.io/library/alpine"
                     */
                    Name?: string;
                    /** @description Official indicates if it's an official image. */
                    Official?: string;
                    /**
                     * Format: int64
                     * @description Stars is the number of stars of the image.
                     */
                    Stars?: number;
                    /** @description Tag is the image tag */
                    Tag?: string;
                };
                "application/octet-stream": {
                    /** @description Automated indicates if the image was created by an automated build. */
                    Automated?: string;
                    /** @description Description of the image. */
                    Description?: string;
                    /**
                     * @description Index is the image index
                     * @example quay.io
                     */
                    Index?: string;
                    /**
                     * @description Name is the canonical name of the image
                     * @example docker.io/library/alpine"
                     */
                    Name?: string;
                    /** @description Official indicates if it's an official image. */
                    Official?: string;
                    /**
                     * Format: int64
                     * @description Stars is the number of stars of the image.
                     */
                    Stars?: number;
                    /** @description Tag is the image tag */
                    Tag?: string;
                };
                "text/plain": {
                    /** @description Automated indicates if the image was created by an automated build. */
                    Automated?: string;
                    /** @description Description of the image. */
                    Description?: string;
                    /**
                     * @description Index is the image index
                     * @example quay.io
                     */
                    Index?: string;
                    /**
                     * @description Name is the canonical name of the image
                     * @example docker.io/library/alpine"
                     */
                    Name?: string;
                    /** @description Official indicates if it's an official image. */
                    Official?: string;
                    /**
                     * Format: int64
                     * @description Stars is the number of stars of the image.
                     */
                    Stars?: number;
                    /** @description Tag is the image tag */
                    Tag?: string;
                };
            };
        };
        /** @description Auth response */
        systemAuthResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["AuthReport"];
                "application/octet-stream": components["schemas"]["AuthReport"];
                "text/plain": components["schemas"]["AuthReport"];
            };
        };
        /** @description Check */
        systemCheckResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["SystemCheckReport"];
                "application/octet-stream": components["schemas"]["SystemCheckReport"];
                "text/plain": components["schemas"]["SystemCheckReport"];
            };
        };
        /** @description Disk usage */
        systemDiskUsage: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["SystemDfReport"];
                "application/octet-stream": components["schemas"]["SystemDfReport"];
                "text/plain": components["schemas"]["SystemDfReport"];
            };
        };
        /** @description System Prune results */
        systemPruneResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["SystemPruneReport"];
                "application/octet-stream": components["schemas"]["SystemPruneReport"];
                "text/plain": components["schemas"]["SystemPruneReport"];
            };
        };
        /** @description Image Tree */
        treeResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ImageTreeReport"];
                "application/octet-stream": components["schemas"]["ImageTreeReport"];
                "text/plain": components["schemas"]["ImageTreeReport"];
            };
        };
        /** @description Version */
        versionResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["SystemComponentVersion"];
                "application/octet-stream": components["schemas"]["SystemComponentVersion"];
                "text/plain": components["schemas"]["SystemComponentVersion"];
            };
        };
        /** @description Volume details */
        volumeCreateResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["VolumeConfigResponse"];
                "application/octet-stream": components["schemas"]["VolumeConfigResponse"];
                "text/plain": components["schemas"]["VolumeConfigResponse"];
            };
        };
        /** @description This response definition is used for both the create and inspect endpoints */
        volumeInspect: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Volume"];
                "application/octet-stream": components["schemas"]["Volume"];
                "text/plain": components["schemas"]["Volume"];
            };
        };
        /** @description Volume List */
        volumeList: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ListResponse"];
                "application/octet-stream": components["schemas"]["ListResponse"];
                "text/plain": components["schemas"]["ListResponse"];
            };
        };
        /** @description Volume list */
        volumeListLibpod: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["VolumeConfigResponse"][];
                "application/octet-stream": components["schemas"]["VolumeConfigResponse"][];
                "text/plain": components["schemas"]["VolumeConfigResponse"][];
            };
        };
        /** @description No such volume */
        volumeNotFound: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorModel"];
                "application/octet-stream": components["schemas"]["ErrorModel"];
                "text/plain": components["schemas"]["ErrorModel"];
            };
        };
        /** @description Volume Prune */
        volumePruneLibpod: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PruneReport"][];
                "application/octet-stream": components["schemas"]["PruneReport"][];
                "text/plain": components["schemas"]["PruneReport"][];
            };
        };
        /** @description Volume prune */
        volumePruneResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PruneReport"];
                "application/octet-stream": components["schemas"]["PruneReport"];
                "text/plain": components["schemas"]["PruneReport"];
            };
        };
    };
    parameters: never;
    requestBodies: {
        /** @description attributes for disconnecting a container from a network */
        networkDisconnectRequest: {
            content: {
                "application/json": components["schemas"]["networkDisconnectRequest"];
                "application/x-tar": components["schemas"]["networkDisconnectRequest"];
            };
        };
        /** @description Attributes for create */
        ContainerExecControl: {
            content: {
                "application/json": {
                    /** @description Attach to stderr of the exec command */
                    AttachStderr?: boolean;
                    /** @description Attach to stdin of the exec command */
                    AttachStdin?: boolean;
                    /** @description Attach to stdout of the exec command */
                    AttachStdout?: boolean;
                    /** @description Command to run, as a string or array of strings. */
                    Cmd?: string[];
                    /** @description "Override the key sequence for detaching a container. Format is a single character [a-Z] or ctrl-<value> where <value> is one of: a-z, @, ^, [, , or _."
                     *      */
                    DetachKeys?: string;
                    /** @description A list of environment variables in the form ["VAR=value", ...] */
                    Env?: string[];
                    /**
                     * @description Runs the exec process with extended privileges
                     * @default false
                     */
                    Privileged?: boolean;
                    /** @description Allocate a pseudo-TTY */
                    Tty?: boolean;
                    /** @description "The user, and optionally, group to run the exec process inside the container. Format is one of: user, user:group, uid, or uid:gid."
                     *      */
                    User?: string;
                    /** @description The working directory for the exec process inside the container. */
                    WorkingDir?: string;
                };
                "application/x-tar": {
                    /** @description Attach to stderr of the exec command */
                    AttachStderr?: boolean;
                    /** @description Attach to stdin of the exec command */
                    AttachStdin?: boolean;
                    /** @description Attach to stdout of the exec command */
                    AttachStdout?: boolean;
                    /** @description Command to run, as a string or array of strings. */
                    Cmd?: string[];
                    /** @description "Override the key sequence for detaching a container. Format is a single character [a-Z] or ctrl-<value> where <value> is one of: a-z, @, ^, [, , or _."
                     *      */
                    DetachKeys?: string;
                    /** @description A list of environment variables in the form ["VAR=value", ...] */
                    Env?: string[];
                    /**
                     * @description Runs the exec process with extended privileges
                     * @default false
                     */
                    Privileged?: boolean;
                    /** @description Allocate a pseudo-TTY */
                    Tty?: boolean;
                    /** @description "The user, and optionally, group to run the exec process inside the container. Format is one of: user, user:group, uid, or uid:gid."
                     *      */
                    User?: string;
                    /** @description The working directory for the exec process inside the container. */
                    WorkingDir?: string;
                };
            };
        };
        /** @description tarfile of files to copy into the container */
        PutContainerArchiveRequest: {
            content: {
                "application/json": string;
                "application/x-tar": string;
            };
        };
        /** @description Kubernetes YAML file. */
        KubeApplyLibpodRequest: {
            content: {
                "application/json": string;
                "application/x-tar": string;
            };
        };
    };
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    SystemAuth: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Authentication to check */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AuthConfig"];
                "application/x-tar": components["schemas"]["AuthConfig"];
            };
        };
        responses: {
            200: components["responses"]["systemAuthResponse"];
            500: components["responses"]["internalError"];
        };
    };
    ImageBuild: {
        parameters: {
            query?: {
                /** @description Path within the build context to the `Dockerfile`.
                 *     This is ignored if remote is specified and points to an external `Dockerfile`.
                 *      */
                dockerfile?: string;
                /** @description A name and optional tag to apply to the image in the `name:tag` format. If you omit the tag, the default latest value is assumed. You can provide several t parameters. */
                t?: string;
                /** @description TBD Extra hosts to add to /etc/hosts
                 *     (As of version 1.xx)
                 *      */
                extrahosts?: string;
                /** @description Not to create /etc/hosts when building the image
                 *      */
                nohosts?: boolean;
                /** @description A Git repository URI or HTTP/HTTPS context URI.
                 *     If the URI points to a single text file, the file’s contents are placed
                 *     into a file called Dockerfile and the image is built from that file. If
                 *     the URI points to a tarball, the file is downloaded by the daemon and the
                 *     contents therein used as the context for the build. If the URI points to a
                 *     tarball and the dockerfile parameter is also specified, there must be a file
                 *     with the corresponding path inside the tarball.
                 *     (As of version 1.xx)
                 *      */
                remote?: string;
                /** @description Number of times to retry in case of failure when performing push/pull.
                 *      */
                retry?: number;
                /** @description Delay between retries in case of push/pull failures.
                 *      */
                "retry-delay"?: string;
                /** @description Suppress verbose build output
                 *      */
                q?: boolean;
                /** @description Contents of base images to be modified on ADD or COPY only
                 *     (As of Podman version v5.2)
                 *      */
                compatvolumes?: boolean;
                /** @description Do not use the cache when building the image
                 *     (As of version 1.xx)
                 *      */
                nocache?: boolean;
                /** @description JSON array of images used to build cache resolution
                 *     (As of version 1.xx)
                 *      */
                cachefrom?: string;
                /** @description Attempt to pull the image even if an older image exists locally
                 *     (As of version 1.xx)
                 *      */
                pull?: boolean;
                /** @description Remove intermediate containers after a successful build
                 *     (As of version 1.xx)
                 *      */
                rm?: boolean;
                /** @description Always remove intermediate containers, even upon failure
                 *     (As of version 1.xx)
                 *      */
                forcerm?: boolean;
                /** @description Memory is the upper limit (in bytes) on how much memory running containers can use
                 *     (As of version 1.xx)
                 *      */
                memory?: number;
                /** @description MemorySwap limits the amount of memory and swap together
                 *     (As of version 1.xx)
                 *      */
                memswap?: number;
                /** @description CPUShares (relative weight
                 *     (As of version 1.xx)
                 *      */
                cpushares?: number;
                /** @description CPUSetCPUs in which to allow execution (0-3, 0,1)
                 *     (As of version 1.xx)
                 *      */
                cpusetcpus?: string;
                /** @description CPUPeriod limits the CPU CFS (Completely Fair Scheduler) period
                 *     (As of version 1.xx)
                 *      */
                cpuperiod?: number;
                /** @description CPUQuota limits the CPU CFS (Completely Fair Scheduler) quota
                 *     (As of version 1.xx)
                 *      */
                cpuquota?: number;
                /** @description JSON map of string pairs denoting build-time variables.
                 *     For example, the build argument `Foo` with the value of `bar` would be encoded in JSON as `["Foo":"bar"]`.
                 *
                 *     For example, buildargs={"Foo":"bar"}.
                 *
                 *     Note(s):
                 *     * This should not be used to pass secrets.
                 *     * The value of buildargs should be URI component encoded before being passed to the API.
                 *
                 *     (As of version 1.xx)
                 *      */
                buildargs?: string;
                /** @description ShmSize is the "size" value to use when mounting an shmfs on the container's /dev/shm directory.
                 *     Default is 64MB
                 *     (As of version 1.xx)
                 *      */
                shmsize?: number;
                /** @description Silently ignored.
                 *     Squash the resulting images layers into a single layer
                 *     (As of version 1.xx)
                 *      */
                squash?: boolean;
                /** @description JSON map of key, value pairs to set as labels on the new image
                 *     (As of version 1.xx)
                 *      */
                labels?: string;
                /** @description Sets the networking mode for the run commands during build.
                 *     Supported standard values are:
                 *       * `bridge` limited to containers within a single host, port mapping required for external access
                 *       * `host` no isolation between host and containers on this network
                 *       * `none` disable all networking for this container
                 *       * container:<nameOrID> share networking with given container
                 *       ---All other values are assumed to be a custom network's name
                 *     (As of version 1.xx)
                 *      */
                networkmode?: string;
                /** @description Platform format os[/arch[/variant]]
                 *     Can be comma separated list for multi arch builds.
                 *     (As of version 1.xx)
                 *      */
                platform?: string;
                /** @description Target build stage
                 *     (As of version 1.xx)
                 *      */
                target?: string;
                /** @description output configuration TBD
                 *     (As of version 1.xx)
                 *      */
                outputs?: string;
            };
            header?: {
                "Content-Type"?: "application/x-tar";
                "X-Registry-Config"?: string;
            };
            path?: never;
            cookie?: never;
        };
        /** @description A tar archive compressed with one of the following algorithms:
         *     identity (no compression), gzip, bzip2, xz.
         *      */
        requestBody?: {
            content: {
                "application/json": string;
                "application/x-tar": string;
            };
        };
        responses: {
            /** @description OK (As of version 1.xx) */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description output from build process
                         * @example (build details...)
                         *     Successfully built 8ba084515c724cbf90d447a63600c0a6
                         *     Successfully tagged your_image:latest
                         *
                         */
                        stream: string;
                    };
                };
            };
            400: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    ImageCommit: {
        parameters: {
            query?: {
                /** @description the name or ID of a container */
                container?: string;
                /** @description the repository name for the created image */
                repo?: string;
                /** @description tag name for the created image */
                tag?: string;
                /** @description commit message */
                comment?: string;
                /** @description author of the image */
                author?: string;
                /** @description pause the container before committing it */
                pause?: boolean;
                /** @description instructions to apply while committing in Dockerfile format */
                changes?: string;
                /** @description squash newly built layers into a single new layer */
                squash?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["imageNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerDelete: {
        parameters: {
            query?: {
                /** @description If the container is running, kill it before removing it. */
                force?: boolean;
                /** @description Remove the volumes associated with the container. */
                v?: boolean;
                /** @description not supported */
                link?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["badParamError"];
            404: components["responses"]["containerNotFound"];
            409: components["responses"]["conflictError"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerArchive: {
        parameters: {
            query: {
                /** @description Path to a directory in the container to extract */
                path: string;
            };
            header?: never;
            path: {
                /** @description container name or id */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            400: components["responses"]["badParamError"];
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    PutContainerArchive: {
        parameters: {
            query: {
                /** @description Path to a directory in the container to extract */
                path: string;
                /** @description if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa (1 or true) */
                noOverwriteDirNonDir?: string;
                /** @description copy UID/GID maps to the dest file or di (1 or true) */
                copyUIDGID?: string;
            };
            header?: never;
            path: {
                /** @description container name or id */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["PutContainerArchiveRequest"];
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["badParamError"];
            /** @description the container rootfs is read-only */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerAttach: {
        parameters: {
            query?: {
                /** @description keys to use for detaching from the container */
                detachKeys?: string;
                /** @description Stream all logs from the container across the connection. Happens before streaming attach (if requested). At least one of logs or stream must be set */
                logs?: boolean;
                /** @description Attach to the container. If unset, and logs is set, only the container's logs will be sent. At least one of stream or logs must be set */
                stream?: boolean;
                /** @description Attach to container STDOUT */
                stdout?: boolean;
                /** @description Attach to container STDERR */
                stderr?: boolean;
                /** @description Attach to container STDIN */
                stdin?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No error, connection has been hijacked for transporting streams. */
            101: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["badParamError"];
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerExec: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description name of container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["ContainerExecControl"];
        responses: {
            /** @description no error */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            /** @description container is paused */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: components["responses"]["internalError"];
        };
    };
    ContainerExport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description tarball is returned in body */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerInspect: {
        parameters: {
            query?: {
                /** @description include the size of the container */
                size?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or id of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["containerInspectResponse"];
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerKill: {
        parameters: {
            query?: {
                /** @description Send kill signal to all containers */
                all?: boolean;
                /** @description signal to be sent to container */
                signal?: string;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            409: components["responses"]["conflictError"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerLogs: {
        parameters: {
            query?: {
                /** @description Keep connection after returning logs. */
                follow?: boolean;
                /** @description Return logs from stdout */
                stdout?: boolean;
                /** @description Return logs from stderr */
                stderr?: boolean;
                /** @description Only return logs since this time, as a UNIX timestamp */
                since?: string;
                /** @description Only return logs before this time, as a UNIX timestamp */
                until?: string;
                /** @description Add timestamps to every log line */
                timestamps?: boolean;
                /** @description Only return this number of log lines from the end of the logs */
                tail?: string;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description logs returned as a stream in response body. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerPause: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerRename: {
        parameters: {
            query: {
                /** @description New name for the container */
                name: string;
            };
            header?: never;
            path: {
                /** @description Full or partial ID or full name of the container to rename */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            409: components["responses"]["conflictError"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerResize: {
        parameters: {
            query?: {
                /** @description Height to set for the terminal, in characters */
                h?: number;
                /** @description Width to set for the terminal, in characters */
                w?: number;
                /** @description Ignore containers not running errors */
                running?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ok"];
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerRestart: {
        parameters: {
            query?: {
                /** @description timeout before sending kill signal to container */
                t?: number;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerStart: {
        parameters: {
            query?: {
                /** @description Override the key sequence for detaching a container. Format is a single character [a-Z] or ctrl-<value> where <value> is one of: a-z, @, ^, [, , or _. */
                detachKeys?: string;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            304: components["responses"]["containerAlreadyStartedError"];
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerStats: {
        parameters: {
            query?: {
                /** @description Stream the output */
                stream?: boolean;
                /** @description Provide a one-shot response in which preCPU stats are blank, resulting in a single cycle return. */
                "one-shot"?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerStop: {
        parameters: {
            query?: {
                /** @description number of seconds to wait before killing container */
                t?: number;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            304: components["responses"]["containerAlreadyStoppedError"];
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerTop: {
        parameters: {
            query?: {
                /** @description arguments to pass to ps such as aux. */
                ps_args?: string;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["containerTopResponse"];
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerUnpause: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Full or partial ID or full name of the container to rename */
                name: string;
            };
            cookie?: never;
        };
        /** @description attributes for updating the container */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["containerUpdateRequest"];
                "application/x-tar": components["schemas"]["containerUpdateRequest"];
            };
        };
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerWait: {
        parameters: {
            query?: {
                /** @description wait until container is to a given condition. default is stopped. valid conditions are:
                 *       - configured
                 *       - created
                 *       - exited
                 *       - paused
                 *       - running
                 *       - stopped
                 *      */
                condition?: string;
                /** @description Time Interval to wait before polling for completion. */
                interval?: string;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["containerWaitResponse"];
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerCreate: {
        parameters: {
            query?: {
                /** @description container name */
                name?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Container to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateContainerConfig"];
                "application/x-tar": components["schemas"]["CreateContainerConfig"];
            };
        };
        responses: {
            201: components["responses"]["containerCreateResponse"];
            400: components["responses"]["badParamError"];
            404: components["responses"]["containerNotFound"];
            409: components["responses"]["conflictError"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerList: {
        parameters: {
            query?: {
                /** @description Return all containers. By default, only running containers are shown */
                all?: boolean;
                /** @description Return containers in storage not controlled by Podman */
                external?: boolean;
                /** @description Return this number of most recently created containers, including non-running ones. */
                limit?: number;
                /** @description Return the size of container as fields SizeRw and SizeRootFs. */
                size?: boolean;
                /** @description A JSON encoded value of the filters (a `map[string][]string`) to process on the containers list. Available filters:
                 *     - `ancestor`=(`<image-name>[:<tag>]`, `<image id>`, or `<image@digest>`)
                 *     - `before`=(`<container id>` or `<container name>`)
                 *     - `expose`=(`<port>[/<proto>]` or `<startport-endport>/[<proto>]`)
                 *     - `exited=<int>` containers with exit code of `<int>`
                 *     - `health`=(`starting`, `healthy`, `unhealthy` or `none`)
                 *     - `id=<ID>` a container's ID
                 *     - `is-task`=(`true` or `false`)
                 *     - `label`=(`key` or `"key=value"`) of a container label
                 *     - `name=<name>` a container's name
                 *     - `network`=(`<network id>` or `<network name>`)
                 *     - `publish`=(`<port>[/<proto>]` or `<startport-endport>/[<proto>]`)
                 *     - `since`=(`<container id>` or `<container name>`)
                 *     - `status`=(`created`, `restarting`, `running`, `removing`, `paused`, `exited` or `dead`)
                 *     - `volume`=(`<volume name>` or `<mount point destination>`)
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["containersList"];
            400: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerPrune: {
        parameters: {
            query?: {
                /** @description Filters to process on the prune list, encoded as JSON (a `map[string][]string`).  Available filters:
                 *      - `until=<timestamp>` Prune containers created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
                 *      - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune containers with (or without, in case `label!=...` is used) the specified labels.
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["containersPrune"];
            500: components["responses"]["internalError"];
        };
    };
    SystemEvents: {
        parameters: {
            query?: {
                /** @description start streaming events from this time */
                since?: string;
                /** @description stop streaming events later than this */
                until?: string;
                /** @description JSON encoded map[string][]string of constraints */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description returns a string of json data describing an event */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: components["responses"]["internalError"];
        };
    };
    ExecInspect: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Exec instance ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["execSessionInspect"];
            404: components["responses"]["execSessionNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ExecResize: {
        parameters: {
            query?: {
                /** @description Height of the TTY session in characters */
                h?: number;
                /** @description Width of the TTY session in characters */
                w?: number;
                /** @description Ignore containers not running errors */
                running?: boolean;
            };
            header?: never;
            path: {
                /** @description Exec instance ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["execSessionNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ExecStart: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Exec instance ID */
                id: string;
            };
            cookie?: never;
        };
        /** @description Attributes for start */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Detach from the command. Not presently supported. */
                    Detach?: boolean;
                    /** @description Allocate a pseudo-TTY. Presently ignored. */
                    Tty?: boolean;
                };
                "application/x-tar": {
                    /** @description Detach from the command. Not presently supported. */
                    Detach?: boolean;
                    /** @description Allocate a pseudo-TTY. Presently ignored. */
                    Tty?: boolean;
                };
            };
        };
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["execSessionNotFound"];
            /** @description container is not running */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: components["responses"]["internalError"];
        };
    };
    ImageDelete: {
        parameters: {
            query?: {
                /** @description remove the image even if used by containers or has other tags */
                force?: boolean;
                /** @description do not remove dangling parent images */
                noprune?: boolean;
            };
            header?: never;
            path: {
                /** @description name or ID of image to delete */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["imageDeleteResponse"];
            404: components["responses"]["imageNotFound"];
            409: components["responses"]["conflictError"];
            500: components["responses"]["internalError"];
        };
    };
    ImageGet: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/x-tar": string;
                };
            };
            500: components["responses"]["internalError"];
        };
    };
    ImageHistory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["history"];
            404: components["responses"]["imageNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ImageInspect: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["imageInspect"];
            404: components["responses"]["imageNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ImagePush: {
        parameters: {
            query?: {
                /** @description The tag to associate with the image on the registry. */
                tag?: string;
                /** @description All indicates whether to push all images related to the image list */
                all?: boolean;
                /** @description Use compression on image. */
                compress?: boolean;
                /** @description Allows for pushing the image to a different destination than the image refers to. */
                destination?: string;
                /** @description Manifest type (oci, v2s1, or v2s2) to use when pushing an image. Default is manifest type of source, with fallbacks. */
                format?: string;
                /** @description Require TLS verification. */
                tlsVerify?: boolean;
            };
            header?: {
                /** @description A base64-encoded auth configuration. */
                "X-Registry-Auth"?: string;
            };
            path: {
                /** @description Name of image to push. */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            404: components["responses"]["imageNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ImageTag: {
        parameters: {
            query?: {
                /** @description the repository to tag in */
                repo?: string;
                /** @description the name of the new tag */
                tag?: string;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["badParamError"];
            404: components["responses"]["imageNotFound"];
            409: components["responses"]["conflictError"];
            500: components["responses"]["internalError"];
        };
    };
    ImageCreate: {
        parameters: {
            query?: {
                /** @description Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed. */
                fromImage?: string;
                /** @description Source to import. The value may be a URL from which the image can be retrieved or - to read the image from the request body. This parameter may only be used when importing an image */
                fromSrc?: string;
                /** @description Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image. */
                repo?: string;
                /** @description Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled. */
                tag?: string;
                /** @description Set commit message for imported image. */
                message?: string;
                /** @description Platform in the format os[/arch[/variant]] */
                platform?: string;
            };
            header?: {
                /** @description A base64-encoded auth configuration. */
                "X-Registry-Auth"?: string;
            };
            path?: never;
            cookie?: never;
        };
        /** @description Image content if fromSrc parameter was used */
        requestBody?: {
            content: {
                "text/plain": string;
                "application/octet-stream": string;
            };
        };
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            404: components["responses"]["imageNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ImageGetAll: {
        parameters: {
            query: {
                /** @description one or more image names or IDs comma separated */
                names: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            500: components["responses"]["internalError"];
        };
    };
    ImageList: {
        parameters: {
            query?: {
                /** @description Show all images. Only images from a final layer (no children) are shown by default. */
                all?: boolean;
                /** @description A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:
                 *     - `before`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`)
                 *     - `dangling=true`
                 *     - `label=key` or `label="key=value"` of an image label
                 *     - `reference`=(`<image-name>[:<tag>]`)
                 *     - `since`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`)
                 *      */
                filters?: string;
                /** @description Not supported */
                digests?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["imageList"];
            500: components["responses"]["internalError"];
        };
    };
    ImageLoad: {
        parameters: {
            query?: {
                /** @description not supported */
                quiet?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description tarball of container image */
        requestBody?: {
            content: {
                "application/json": string;
                "application/x-tar": string;
            };
        };
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: components["responses"]["internalError"];
        };
    };
    ImagePrune: {
        parameters: {
            query?: {
                /** @description filters to apply to image pruning, encoded as JSON (map[string][]string). Available filters:
                 *       - `dangling=<boolean>` When set to `true` (or `1`), prune only
                 *          unused *and* untagged images. When set to `false`
                 *          (or `0`), all unused images are pruned.
                 *       - `until=<string>` Prune images created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
                 *       - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune images with (or without, in case `label!=...` is used) the specified labels.
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["imageDeleteResponse"];
            500: components["responses"]["internalError"];
        };
    };
    ImageSearch: {
        parameters: {
            query?: {
                /** @description term to search */
                term?: string;
                /** @description maximum number of results */
                limit?: number;
                /** @description A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:
                 *     - `is-automated=(true|false)`
                 *     - `is-official=(true|false)`
                 *     - `stars=<number>` Matches images that have at least 'number' stars.
                 *      */
                filters?: string;
                /** @description Require HTTPS and verify signatures when contacting registries. */
                tlsVerify?: boolean;
                /** @description list the available tags in the repository */
                listTags?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["registrySearchResponse"];
            400: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    SystemInfo: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description to be determined */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: components["responses"]["internalError"];
        };
    };
    SystemPing: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Max compatibility API Version the server supports */
                    "API-Version"?: string;
                    /** @description Default version of docker image builder */
                    "BuildKit-Version"?: string;
                    /** @description always no-cache */
                    "Cache-Control"?: string;
                    /** @description If the server is running with experimental mode enabled, always true */
                    "Docker-Experimental"?: boolean;
                    /** @description Max Podman API Version the server supports.
                     *     Available if service is backed by Podman, therefore may be used to
                     *     determine if talking to Podman engine or another engine
                     *      */
                    "Libpod-API-Version"?: string;
                    /** @description Default version of libpod image builder.
                     *       Available if service is backed by Podman, therefore may be used to
                     *       determine if talking to Podman engine or another engine
                     *      */
                    "Libpod-Buildah-Version"?: string;
                    /** @description always no-cache */
                    Pragma?: string;
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            500: components["responses"]["internalError"];
        };
    };
    ImageBuildLibpod: {
        parameters: {
            query?: {
                /** @description Path within the build context to the `Dockerfile`.
                 *     This is ignored if remote is specified and points to an external `Dockerfile`.
                 *      */
                dockerfile?: string;
                /** @description A name and optional tag to apply to the image in the `name:tag` format.  If you omit the tag, the default latest value is assumed. You can provide several t parameters. */
                t?: string;
                /** @description Instead of building for a set of platforms specified using the platform option, inspect the build's base images,
                 *     and build for all of the platforms that are available.  Stages that use *scratch* as a starting point can not be inspected,
                 *     so at least one non-*scratch* stage must be present for detection to work usefully.
                 *      */
                allplatforms?: boolean;
                /** @description TBD Extra hosts to add to /etc/hosts
                 *     (As of version 1.xx)
                 *      */
                extrahosts?: string;
                /** @description Not to create /etc/hosts when building the image
                 *      */
                nohosts?: boolean;
                /** @description A Git repository URI or HTTP/HTTPS context URI.
                 *     If the URI points to a single text file, the file’s contents are placed
                 *     into a file called Dockerfile and the image is built from that file. If
                 *     the URI points to a tarball, the file is downloaded by the daemon and the
                 *     contents therein used as the context for the build. If the URI points to a
                 *     tarball and the dockerfile parameter is also specified, there must be a file
                 *     with the corresponding path inside the tarball.
                 *     (As of version 1.xx)
                 *      */
                remote?: string;
                /** @description Suppress verbose build output
                 *      */
                q?: boolean;
                /** @description Contents of base images to be modified on ADD or COPY only
                 *     (As of Podman version v5.2)
                 *      */
                compatvolumes?: boolean;
                /** @description Do not use the cache when building the image
                 *     (As of version 1.xx)
                 *      */
                nocache?: boolean;
                /** @description JSON array of images used to build cache resolution
                 *     (As of version 1.xx)
                 *      */
                cachefrom?: string;
                /** @description Attempt to pull the image even if an older image exists locally
                 *     (As of version 1.xx)
                 *      */
                pull?: boolean;
                /** @description Remove intermediate containers after a successful build
                 *     (As of version 1.xx)
                 *      */
                rm?: boolean;
                /** @description Always remove intermediate containers, even upon failure
                 *     (As of version 1.xx)
                 *      */
                forcerm?: boolean;
                /** @description Memory is the upper limit (in bytes) on how much memory running containers can use
                 *     (As of version 1.xx)
                 *      */
                memory?: number;
                /** @description MemorySwap limits the amount of memory and swap together
                 *     (As of version 1.xx)
                 *      */
                memswap?: number;
                /** @description CPUShares (relative weight
                 *     (As of version 1.xx)
                 *      */
                cpushares?: number;
                /** @description CPUSetCPUs in which to allow execution (0-3, 0,1)
                 *     (As of version 1.xx)
                 *      */
                cpusetcpus?: string;
                /** @description CPUPeriod limits the CPU CFS (Completely Fair Scheduler) period
                 *     (As of version 1.xx)
                 *      */
                cpuperiod?: number;
                /** @description CPUQuota limits the CPU CFS (Completely Fair Scheduler) quota
                 *     (As of version 1.xx)
                 *      */
                cpuquota?: number;
                /** @description JSON map of string pairs denoting build-time variables.
                 *     For example, the build argument `Foo` with the value of `bar` would be encoded in JSON as `["Foo":"bar"]`.
                 *
                 *     For example, buildargs={"Foo":"bar"}.
                 *
                 *     Note(s):
                 *     * This should not be used to pass secrets.
                 *     * The value of buildargs should be URI component encoded before being passed to the API.
                 *
                 *     (As of version 1.xx)
                 *      */
                buildargs?: string;
                /** @description ShmSize is the "size" value to use when mounting an shmfs on the container's /dev/shm directory.
                 *     Default is 64MB
                 *     (As of version 1.xx)
                 *      */
                shmsize?: number;
                /** @description Silently ignored.
                 *     Squash the resulting images layers into a single layer
                 *     (As of version 1.xx)
                 *      */
                squash?: boolean;
                /** @description JSON map of key, value pairs to set as labels on the new image
                 *     (As of version 1.xx)
                 *      */
                labels?: string;
                /** @description Add an intermediate image *label* (e.g. label=*value*) to the intermediate image metadata. */
                layerLabel?: string[];
                /** @description Cache intermediate layers during build.
                 *     (As of version 1.xx)
                 *      */
                layers?: boolean;
                /** @description Sets the networking mode for the run commands during build.
                 *     Supported standard values are:
                 *       * `bridge` limited to containers within a single host, port mapping required for external access
                 *       * `host` no isolation between host and containers on this network
                 *       * `none` disable all networking for this container
                 *       * container:<nameOrID> share networking with given container
                 *       ---All other values are assumed to be a custom network's name
                 *     (As of version 1.xx)
                 *      */
                networkmode?: string;
                /** @description Platform format os[/arch[/variant]]
                 *     (As of version 1.xx)
                 *      */
                platform?: string;
                /** @description Target build stage
                 *     (As of version 1.xx)
                 *      */
                target?: string;
                /** @description output configuration TBD
                 *     (As of version 1.xx)
                 *      */
                outputs?: string;
                /** @description Inject http proxy environment variables into container
                 *     (As of version 2.0.0)
                 *      */
                httpproxy?: boolean;
                /** @description Unset environment variables from the final image. */
                unsetenv?: string[];
                /** @description Unset the image label, causing the label not to be inherited from the base image. */
                unsetlabel?: string[];
                /** @description Extra volumes that should be mounted in the build container. */
                volume?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK (As of version 1.xx) */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description output from build process
                         * @example (build details...)
                         *
                         */
                        stream: string;
                    };
                };
            };
            400: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    ImageCommitLibpod: {
        parameters: {
            query: {
                /** @description the name or ID of a container */
                container: string;
                /** @description author of the image */
                author?: string;
                /** @description instructions to apply while committing in Dockerfile format (i.e. "CMD=/bin/foo") */
                changes?: string[];
                /** @description commit message */
                comment?: string;
                /** @description format of the image manifest and metadata (default "oci") */
                format?: string;
                /** @description pause the container before committing it */
                pause?: boolean;
                /** @description squash the container before committing it */
                squash?: boolean;
                /** @description the repository name for the created image */
                repo?: string;
                /** @description output from commit process */
                stream?: boolean;
                /** @description tag name for the created image */
                tag?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["imageNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerDeleteLibpod: {
        parameters: {
            query?: {
                /** @description additionally remove containers that depend on the container to be removed */
                depend?: boolean;
                /** @description force stop container if running */
                force?: boolean;
                /** @description ignore errors when the container to be removed does not existxo */
                ignore?: boolean;
                /** @description number of seconds to wait before killing container when force removing */
                timeout?: number;
                /** @description delete volumes */
                v?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["containerRemoveLibpod"];
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["badParamError"];
            404: components["responses"]["containerNotFound"];
            409: components["responses"]["conflictError"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerArchiveLibpod: {
        parameters: {
            query: {
                /** @description Path to a directory in the container to extract */
                path: string;
                /** @description JSON encoded map[string]string to translate paths */
                rename?: string;
            };
            header?: never;
            path: {
                /** @description container name or id */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            400: components["responses"]["badParamError"];
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    PutContainerArchiveLibpod: {
        parameters: {
            query: {
                /** @description Path to a directory in the container to extract */
                path: string;
                /** @description pause the container while copying (defaults to true) */
                pause?: boolean;
            };
            header?: never;
            path: {
                /** @description container name or id */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["PutContainerArchiveRequest"];
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["badParamError"];
            /** @description the container rootfs is read-only */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerAttachLibpod: {
        parameters: {
            query?: {
                /** @description keys to use for detaching from the container */
                detachKeys?: string;
                /** @description Stream all logs from the container across the connection. Happens before streaming attach (if requested). At least one of logs or stream must be set */
                logs?: boolean;
                /** @description Attach to the container. If unset, and logs is set, only the container's logs will be sent. At least one of stream or logs must be set */
                stream?: boolean;
                /** @description Attach to container STDOUT */
                stdout?: boolean;
                /** @description Attach to container STDERR */
                stderr?: boolean;
                /** @description Attach to container STDIN */
                stdin?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No error, connection has been hijacked for transporting streams. */
            101: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["badParamError"];
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerChangesLibpod: {
        parameters: {
            query?: {
                /** @description specify a second layer which is used to compare against it instead of the parent layer */
                parent?: string;
                /** @description select what you want to match, default is all */
                diffType?: "all" | "container" | "image";
            };
            header?: never;
            path: {
                /** @description the name or id of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of Changes */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerCheckpointLibpod: {
        parameters: {
            query?: {
                /** @description keep all temporary checkpoint files */
                keep?: boolean;
                /** @description leave the container running after writing checkpoint to disk */
                leaveRunning?: boolean;
                /** @description checkpoint a container with established TCP connections */
                tcpEstablished?: boolean;
                /** @description export the checkpoint image to a tar.gz */
                export?: boolean;
                /** @description do not include root file-system changes when exporting. can only be used with export */
                ignoreRootFS?: boolean;
                /** @description do not include associated volumes. can only be used with export */
                ignoreVolumes?: boolean;
                /** @description dump the container's memory information only, leaving the container running. only works on runc 1.0-rc or higher */
                preCheckpoint?: boolean;
                /** @description check out the container with previous criu image files in pre-dump. only works on runc 1.0-rc or higher */
                withPrevious?: boolean;
                /** @description checkpoint a container with filelocks */
                fileLocks?: boolean;
                /** @description add checkpoint statistics to the returned CheckpointReport */
                printStats?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description tarball is returned in body if exported */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerExecLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description name of container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["ContainerExecControl"];
        responses: {
            /** @description no error */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            /** @description container is paused */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: components["responses"]["internalError"];
        };
    };
    ContainerExistsLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description container exists */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerExportLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description tarball is returned in body */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerHealthcheckLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["healthCheck"];
            404: components["responses"]["containerNotFound"];
            /** @description container has no healthcheck or is not running */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: components["responses"]["internalError"];
        };
    };
    ContainerInitLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description container already initialized */
            304: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerInspectLibpod: {
        parameters: {
            query?: {
                /** @description display filesystem usage */
                size?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["containerInspectResponseLibpod"];
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerKillLibpod: {
        parameters: {
            query?: {
                /** @description signal to be sent to container, either by integer or SIG_ name */
                signal?: string;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            409: components["responses"]["conflictError"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerLogsLibpod: {
        parameters: {
            query?: {
                /** @description Keep connection after returning logs. */
                follow?: boolean;
                /** @description Return logs from stdout */
                stdout?: boolean;
                /** @description Return logs from stderr */
                stderr?: boolean;
                /** @description Only return logs since this time, as a UNIX timestamp */
                since?: string;
                /** @description Only return logs before this time, as a UNIX timestamp */
                until?: string;
                /** @description Add timestamps to every log line */
                timestamps?: boolean;
                /** @description Only return this number of log lines from the end of the logs */
                tail?: string;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description logs returned as a stream in response body. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerMountLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description mounted container */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerPauseLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerRenameLibpod: {
        parameters: {
            query: {
                /** @description New name for the container */
                name: string;
            };
            header?: never;
            path: {
                /** @description Full or partial ID or full name of the container to rename */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            409: components["responses"]["conflictError"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerResizeLibpod: {
        parameters: {
            query?: {
                /** @description Height to set for the terminal, in characters */
                h?: number;
                /** @description Width to set for the terminal, in characters */
                w?: number;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ok"];
            404: components["responses"]["containerNotFound"];
            409: components["responses"]["conflictError"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerRestartLibpod: {
        parameters: {
            query?: {
                /** @description number of seconds to wait before killing container */
                t?: number;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerRestoreLibpod: {
        parameters: {
            query?: {
                /** @description the name of the container when restored from a tar. can only be used with import */
                name?: string;
                /** @description keep all temporary checkpoint files */
                keep?: boolean;
                /** @description checkpoint a container with established TCP connections */
                tcpEstablished?: boolean;
                /** @description import the restore from a checkpoint tar.gz */
                import?: boolean;
                /** @description do not include root file-system changes when exporting. can only be used with import */
                ignoreRootFS?: boolean;
                /** @description do not restore associated volumes. can only be used with import */
                ignoreVolumes?: boolean;
                /** @description ignore IP address if set statically */
                ignoreStaticIP?: boolean;
                /** @description ignore MAC address if set statically */
                ignoreStaticMAC?: boolean;
                /** @description restore a container with file locks */
                fileLocks?: boolean;
                /** @description add restore statistics to the returned RestoreReport */
                printStats?: boolean;
                /** @description pod to restore into */
                pod?: string;
            };
            header?: never;
            path: {
                /** @description the name or id of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description tarball is returned in body if exported */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerStartLibpod: {
        parameters: {
            query?: {
                /** @description Override the key sequence for detaching a container. Format is a single character [a-Z] or ctrl-<value> where <value> is one of: a-z, @, ^, [, , or _. */
                detachKeys?: string;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            304: components["responses"]["containerAlreadyStartedError"];
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerStatsLibpod: {
        parameters: {
            query?: {
                /** @description Stream the output */
                stream?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            409: components["responses"]["conflictError"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerStopLibpod: {
        parameters: {
            query?: {
                /** @description number of seconds to wait before killing container */
                timeout?: number;
                /** @description do not return error if container is already stopped */
                Ignore?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            304: components["responses"]["containerAlreadyStoppedError"];
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerTopLibpod: {
        parameters: {
            query?: {
                /** @description when true, repeatedly stream the latest output (As of version 4.0) */
                stream?: boolean;
                /** @description if streaming, delay in seconds between updates. Must be >1. (As of version 4.0) */
                delay?: number;
                /** @description arguments to pass to ps such as aux.
                 *      */
                ps_args?: string[];
            };
            header?: never;
            path: {
                /** @description Name of container to query for processes (As of version 1.xx) */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["containerTopResponse"];
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerUnmountLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description ok */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerUnpauseLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerUpdateLibpod: {
        parameters: {
            query?: {
                /** @description New restart policy for the container. */
                restartPolicy?: string;
                /** @description New amount of retries for the container's restart policy. Only allowed if restartPolicy is set to on-failure */
                restartRetries?: number;
            };
            header?: never;
            path: {
                /** @description Full or partial ID or full name of the container to update */
                name: string;
            };
            cookie?: never;
        };
        /** @description attributes for updating the container */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateEntities"];
                "application/x-tar": components["schemas"]["UpdateEntities"];
            };
        };
        responses: {
            201: components["responses"]["containerUpdateResponse"];
            400: components["responses"]["badParamError"];
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerWaitLibpod: {
        parameters: {
            query?: {
                /** @description Conditions to wait for. If no condition provided the 'exited' condition is assumed. */
                condition?: ("configured" | "created" | "exited" | "healthy" | "initialized" | "paused" | "removing" | "running" | "stopped" | "stopping" | "unhealthy")[];
                /** @description Time Interval to wait before polling for completion. */
                interval?: string;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Status code */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": number;
                    "text/plain": number;
                };
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerCreateLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description attributes for creating a container */
        requestBody: {
            content: {
                "application/json": components["schemas"]["SpecGenerator"];
                "application/x-tar": components["schemas"]["SpecGenerator"];
            };
        };
        responses: {
            201: components["responses"]["containerCreateResponse"];
            400: components["responses"]["badParamError"];
            404: components["responses"]["containerNotFound"];
            409: components["responses"]["conflictError"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerListLibpod: {
        parameters: {
            query?: {
                /** @description Return all containers. By default, only running containers are shown */
                all?: boolean;
                /** @description Return this number of most recently created containers, including non-running ones. */
                limit?: number;
                /** @description Include namespace information */
                namespace?: boolean;
                /** @description Ignored. Previously included details on pod name and ID that are currently included by default. */
                pod?: boolean;
                /** @description Return the size of container as fields SizeRw and SizeRootFs. */
                size?: boolean;
                /** @description Sync container state with OCI runtime */
                sync?: boolean;
                /** @description A JSON encoded value of the filters (a `map[string][]string`) to process on the containers list. Available filters:
                 *     - `ancestor`=(`<image-name>[:<tag>]`, `<image id>`, or `<image@digest>`)
                 *     - `before`=(`<container id>` or `<container name>`)
                 *     - `expose`=(`<port>[/<proto>]` or `<startport-endport>/[<proto>]`)
                 *     - `exited=<int>` containers with exit code of `<int>`
                 *     - `health`=(`starting`, `healthy`, `unhealthy` or `none`)
                 *     - `id=<ID>` a container's ID
                 *     - `is-task`=(`true` or `false`)
                 *     - `label`=(`key` or `"key=value"`) of a container label
                 *     - `name=<name>` a container's name
                 *     - `network`=(`<network id>` or `<network name>`)
                 *     - `pod`=(`<pod id>` or `<pod name>`)
                 *     - `publish`=(`<port>[/<proto>]` or `<startport-endport>/[<proto>]`)
                 *     - `since`=(`<container id>` or `<container name>`)
                 *     - `status`=(`created`, `restarting`, `running`, `removing`, `paused`, `exited` or `dead`)
                 *     - `volume`=(`<volume name>` or `<mount point destination>`)
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["containersListLibpod"];
            400: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerPruneLibpod: {
        parameters: {
            query?: {
                /** @description Filters to process on the prune list, encoded as JSON (a `map[string][]string`).  Available filters:
                 *      - `until=<timestamp>` Prune containers created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
                 *      - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune containers with (or without, in case `label!=...` is used) the specified labels.
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["containersPruneLibpod"];
            500: components["responses"]["internalError"];
        };
    };
    ContainerShowMountedLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description mounted containers */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: string;
                    };
                };
            };
            500: components["responses"]["internalError"];
        };
    };
    ContainersStatsAllLibpod: {
        parameters: {
            query?: {
                /** @description names or IDs of containers */
                containers?: string[];
                /** @description Stream the output */
                stream?: boolean;
                /** @description Time in seconds between stats reports */
                interval?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["containerStats"];
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    SystemEventsLibpod: {
        parameters: {
            query?: {
                /** @description start streaming events from this time */
                since?: string;
                /** @description stop streaming events later than this */
                until?: string;
                /** @description JSON encoded map[string][]string of constraints */
                filters?: string;
                /** @description when false, do not follow events */
                stream?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description returns a string of json data describing an event */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: components["responses"]["internalError"];
        };
    };
    ExecInspectLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Exec instance ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["execSessionNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ExecResizeLibpod: {
        parameters: {
            query?: {
                /** @description Height of the TTY session in characters */
                h?: number;
                /** @description Width of the TTY session in characters */
                w?: number;
            };
            header?: never;
            path: {
                /** @description Exec instance ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["execSessionNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ExecStartLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Exec instance ID */
                id: string;
            };
            cookie?: never;
        };
        /** @description Attributes for start */
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Detach from the command. */
                    Detach?: boolean;
                    /** @description Allocate a pseudo-TTY. */
                    Tty?: boolean;
                    /** @description Height of the TTY session in characters. Tty must be set to true to use it. */
                    h?: number;
                    /** @description Width of the TTY session in characters. Tty must be set to true to use it. */
                    w?: number;
                };
                "application/x-tar": {
                    /** @description Detach from the command. */
                    Detach?: boolean;
                    /** @description Allocate a pseudo-TTY. */
                    Tty?: boolean;
                    /** @description Height of the TTY session in characters. Tty must be set to true to use it. */
                    h?: number;
                    /** @description Width of the TTY session in characters. Tty must be set to true to use it. */
                    w?: number;
                };
            };
        };
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["execSessionNotFound"];
            /** @description container is not running. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: components["responses"]["internalError"];
        };
    };
    GenerateSystemdLibpod: {
        parameters: {
            query?: {
                /** @description Use container/pod names instead of IDs. */
                useName?: boolean;
                /** @description Create a new container instead of starting an existing one. */
                new?: boolean;
                /** @description Do not generate the header including the Podman version and the timestamp. */
                noHeader?: boolean;
                /** @description Start timeout in seconds. */
                startTimeout?: number;
                /** @description Stop timeout in seconds. */
                stopTimeout?: number;
                /** @description Systemd restart-policy. */
                restartPolicy?: "no" | "on-success" | "on-failure" | "on-abnormal" | "on-watchdog" | "on-abort" | "always";
                /** @description Systemd unit name prefix for containers. */
                containerPrefix?: string;
                /** @description Systemd unit name prefix for pods. */
                podPrefix?: string;
                /** @description Systemd unit name separator between name/id and prefix. */
                separator?: string;
                /** @description Configures the time to sleep before restarting a service. */
                restartSec?: number;
                /** @description Systemd Wants list for the container or pods. */
                wants?: string[];
                /** @description Systemd After list for the container or pods. */
                after?: string[];
                /** @description Systemd Requires list for the container or pods. */
                requires?: string[];
                /** @description Set environment variables to the systemd unit files. */
                additionalEnvVariables?: string[];
            };
            header?: never;
            path: {
                /** @description Name or ID of the container or pod. */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: string;
                    };
                };
            };
            500: components["responses"]["internalError"];
        };
    };
    GenerateKubeLibpod: {
        parameters: {
            query: {
                /** @description Name or ID of the container or pod. */
                names: string[];
                /** @description Generate YAML for a Kubernetes service object. */
                service?: boolean;
                /** @description Generate YAML for the given Kubernetes kind. */
                type?: string;
                /** @description Set the replica number for Deployment kind. */
                replicas?: number;
                /** @description don't truncate annotations to the Kubernetes maximum length of 63 characters */
                noTrunc?: boolean;
                /** @description add podman-only reserved annotations in generated YAML file (cannot be used by Kubernetes) */
                podmanOnly?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Kubernetes YAML file describing pod */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/vnd.yaml": string;
                    "application/json": string;
                };
            };
            500: components["responses"]["internalError"];
        };
    };
    ImageDeleteLibpod: {
        parameters: {
            query?: {
                /** @description remove the image even if used by containers or has other tags */
                force?: boolean;
            };
            header?: never;
            path: {
                /** @description name or ID of image to remove */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["imagesRemoveResponseLibpod"];
            400: components["responses"]["badParamError"];
            404: components["responses"]["imageNotFound"];
            409: components["responses"]["conflictError"];
            500: components["responses"]["internalError"];
        };
    };
    ImageChangesLibpod: {
        parameters: {
            query?: {
                /** @description specify a second layer which is used to compare against it instead of the parent layer */
                parent?: string;
                /** @description select what you want to match, default is all */
                diffType?: "all" | "container" | "image";
            };
            header?: never;
            path: {
                /** @description the name or id of the image */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of Changes */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["containerNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ImageExistsLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description image exists */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["imageNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ImageGetLibpod: {
        parameters: {
            query?: {
                /** @description format for exported image */
                format?: string;
                /** @description use compression on image */
                compress?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/x-tar": string;
                };
            };
            404: components["responses"]["imageNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ImageHistoryLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["history"];
            404: components["responses"]["imageNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ImageInspectLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["inspectImageResponseLibpod"];
            404: components["responses"]["imageNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ImagePushLibpod: {
        parameters: {
            query?: {
                /** @description Allows for pushing the image to a different destination than the image refers to. */
                destination?: string;
                /** @description Enforce compressing the layers with the specified --compression and do not reuse differently compressed blobs on the registry. */
                forceCompressionFormat?: boolean;
                /** @description Compression format used to compress image layers. */
                compressionFormat?: string;
                /** @description Compression level used to compress image layers. */
                compressionLevel?: number;
                /** @description Require TLS verification. */
                tlsVerify?: boolean;
                /** @description Silences extra stream data on push. */
                quiet?: boolean;
                /** @description Manifest type (oci, v2s1, or v2s2) to use when pushing an image. Default is manifest type of source, with fallbacks. */
                format?: string;
                /** @description All indicates whether to push all images related to the image list. */
                all?: boolean;
                /** @description Discard any pre-existing signatures in the image. */
                removeSignatures?: boolean;
                /** @description Number of times to retry push in case of failure. */
                retry?: number;
                /** @description Delay between retries in case of push failures. Duration format such as "412ms", or "3.5h". */
                retryDelay?: string;
            };
            header?: {
                /** @description A base64-encoded auth configuration. */
                "X-Registry-Auth"?: string;
            };
            path: {
                /** @description Name of image to push. */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            404: components["responses"]["imageNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ImageResolveLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the (short) name to resolve */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description resolved image names */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    ImageTagLibpod: {
        parameters: {
            query?: {
                /** @description the repository to tag in */
                repo?: string;
                /** @description the name of the new tag */
                tag?: string;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["badParamError"];
            404: components["responses"]["imageNotFound"];
            409: components["responses"]["conflictError"];
            500: components["responses"]["internalError"];
        };
    };
    ImageTreeLibpod: {
        parameters: {
            query?: {
                /** @description show all child images and layers of the specified image */
                whatrequires?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["treeResponse"];
            404: components["responses"]["imageNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ImageUntagLibpod: {
        parameters: {
            query?: {
                /** @description the repository to untag */
                repo?: string;
                /** @description the name of the tag to untag */
                tag?: string;
            };
            header?: never;
            path: {
                /** @description the name or ID of the container */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["badParamError"];
            404: components["responses"]["imageNotFound"];
            409: components["responses"]["conflictError"];
            500: components["responses"]["internalError"];
        };
    };
    ImageExportLibpod: {
        parameters: {
            query?: {
                /** @description format for exported image (only docker-archive is supported) */
                format?: string;
                /** @description references to images to export */
                references?: string[];
                /** @description use compression on image */
                compress?: boolean;
                /** @description accept uncompressed layers when copying OCI images */
                ociAcceptUncompressedLayers?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            404: components["responses"]["imageNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ImageImportLibpod: {
        parameters: {
            query?: {
                /** @description Apply the following possible instructions to the created image: CMD | ENTRYPOINT | ENV | EXPOSE | LABEL | STOPSIGNAL | USER | VOLUME | WORKDIR.  JSON encoded string */
                changes?: string[];
                /** @description Set commit message for imported image */
                message?: string;
                /** @description Optional Name[:TAG] for the image */
                reference?: string;
                /** @description Load image from the specified URL */
                url?: string;
            };
            header?: {
                "Content-Type"?: "application/x-tar";
            };
            path?: never;
            cookie?: never;
        };
        /** @description tarball for imported image */
        requestBody: {
            content: {
                "application/x-tar": string;
            };
        };
        responses: {
            200: components["responses"]["imagesImportResponseLibpod"];
            400: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    ImageListLibpod: {
        parameters: {
            query?: {
                /** @description Show all images. Only images from a final layer (no children) are shown by default. */
                all?: boolean;
                /** @description A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:
                 *     - `before`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`)
                 *     - `dangling=true`
                 *     - `label=key` or `label="key=value"` of an image label
                 *     - `reference`=(`<image-name>[:<tag>]`)
                 *     - `id`=(`<image-id>`)
                 *     - `since`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`)
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["imageListLibpod"];
            500: components["responses"]["internalError"];
        };
    };
    ImageLoadLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description tarball of container image */
        requestBody: {
            content: {
                "application/x-tar": string;
            };
        };
        responses: {
            200: components["responses"]["imagesLoadResponseLibpod"];
            400: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    ImagePruneLibpod: {
        parameters: {
            query?: {
                /** @description Remove all images not in use by containers, not just dangling ones
                 *      */
                all?: boolean;
                /** @description Remove images even when they are used by external containers (e.g, by build containers)
                 *      */
                external?: boolean;
                /** @description Remove persistent build cache created by build instructions such as `--mount=type=cache`.
                 *      */
                buildcache?: boolean;
                /** @description filters to apply to image pruning, encoded as JSON (map[string][]string). Available filters:
                 *       - `dangling=<boolean>` When set to `true` (or `1`), prune only
                 *          unused *and* untagged images. When set to `false`
                 *          (or `0`), all unused images are pruned.
                 *       - `until=<string>` Prune images created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
                 *       - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune images with (or without, in case `label!=...` is used) the specified labels.
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["imagesPruneLibpod"];
            500: components["responses"]["internalError"];
        };
    };
    ImagePullLibpod: {
        parameters: {
            query?: {
                /** @description Mandatory reference to the image (e.g., quay.io/image/name:tag) */
                reference?: string;
                /** @description silences extra stream data on pull */
                quiet?: boolean;
                /** @description Return the same JSON payload as the Docker-compat endpoint. */
                compatMode?: boolean;
                /** @description Pull image for the specified architecture. */
                Arch?: string;
                /** @description Pull image for the specified operating system. */
                OS?: string;
                /** @description Pull image for the specified variant. */
                Variant?: string;
                /** @description Pull policy, "always" (default), "missing", "newer", "never". */
                policy?: string;
                /** @description Require TLS verification. */
                tlsVerify?: boolean;
                /** @description Pull all tagged images in the repository. */
                allTags?: boolean;
            };
            header?: {
                /** @description base-64 encoded auth config. Must include the following four values: username, password, email and server address OR simply just an identity token. */
                "X-Registry-Auth"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["imagesPullResponseLibpod"];
            400: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    ImageDeleteAllLibpod: {
        parameters: {
            query?: {
                /** @description Images IDs or names to remove. */
                images?: string[];
                /** @description Remove all images. */
                all?: boolean;
                /** @description Force image removal (including containers using the images). */
                force?: boolean;
                /** @description Ignore if a specified image does not exist and do not throw an error. */
                ignore?: boolean;
                /** @description Resolves to manifest list instead of image. */
                lookupManifest?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["imagesRemoveResponseLibpod"];
            400: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    ImageScpLibpod: {
        parameters: {
            query?: {
                /** @description dest connection/image */
                destination?: string;
                /** @description quiet output */
                quiet?: boolean;
            };
            header?: never;
            path: {
                /** @description source connection/image */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["imagesScpResponseLibpod"];
            400: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    ImageSearchLibpod: {
        parameters: {
            query?: {
                /** @description term to search */
                term?: string;
                /** @description maximum number of results */
                limit?: number;
                /** @description A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:
                 *     - `is-automated=(true|false)`
                 *     - `is-official=(true|false)`
                 *     - `stars=<number>` Matches images that have at least 'number' stars.
                 *      */
                filters?: string;
                /** @description Require HTTPS and verify signatures when contacting registries. */
                tlsVerify?: boolean;
                /** @description list the available tags in the repository */
                listTags?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["registrySearchResponse"];
            500: components["responses"]["internalError"];
        };
    };
    SystemInfoLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["infoResponse"];
            500: components["responses"]["internalError"];
        };
    };
    KubeApplyLibpod: {
        parameters: {
            query?: {
                /** @description Path to the CA cert file for the Kubernetes cluster. */
                caCertFile?: string;
                /** @description Path to the kubeconfig file for the Kubernetes cluster. */
                kubeConfig?: string;
                /** @description The namespace to deploy the workload to on the Kubernetes cluster. */
                namespace?: string;
                /** @description Create a service object for the container being deployed. */
                service?: boolean;
                /** @description Path to the Kubernetes yaml file to deploy. */
                file?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["KubeApplyLibpodRequest"];
        responses: {
            /** @description Kubernetes YAML file successfully deployed to cluster */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            500: components["responses"]["internalError"];
        };
    };
    ManifestModifyLibpod: {
        parameters: {
            query?: {
                /** @description Require HTTPS and verify signatures when contacting registries. */
                tlsVerify?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the manifest */
                name: string;
            };
            cookie?: never;
        };
        /** @description options for mutating a manifest */
        requestBody: {
            content: {
                "application/json": components["schemas"]["ManifestModifyOptions"];
                "application/x-tar": components["schemas"]["ManifestModifyOptions"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ManifestModifyReport"];
                };
            };
            400: components["responses"]["badParamError"];
            404: components["responses"]["manifestNotFound"];
            /** @description Operation had partial success, both Images and Errors may have members */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ManifestModifyReport"];
                };
            };
            500: components["responses"]["internalError"];
        };
    };
    ManifestCreateLibpod: {
        parameters: {
            query: {
                /** @description One or more names of an image or a manifest list. Repeat parameter as needed.
                 *
                 *     Support for multiple images, as of version 4.0.0
                 *     Alias of `image` is support for compatibility with < 4.0.0
                 *     Response status code is 200 with < 4.0.0 for compatibility
                 *      */
                images: string;
                /** @description add all contents if given list */
                all?: boolean;
                /** @description modify an existing list if one with the desired name already exists */
                amend?: boolean;
            };
            header?: never;
            path: {
                /** @description manifest list or index name to create */
                name: string;
            };
            cookie?: never;
        };
        /** @description options for new manifest */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ManifestModifyOptions"];
                "application/x-tar": components["schemas"]["ManifestModifyOptions"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IDResponse"];
                };
            };
            400: components["responses"]["badParamError"];
            404: components["responses"]["imageNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ManifestDeleteLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The name or ID of the  list to be deleted */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["imagesRemoveResponseLibpod"];
            404: components["responses"]["manifestNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ManifestAddLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the manifest */
                name: string;
            };
            cookie?: never;
        };
        /** @description options for creating a manifest */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ManifestAddOptions"];
                "application/x-tar": components["schemas"]["ManifestAddOptions"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IDResponse"];
                };
            };
            404: components["responses"]["manifestNotFound"];
            409: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    ManifestExistsLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the manifest list */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description manifest list exists */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["manifestNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ManifestInspectLibpod: {
        parameters: {
            query?: {
                /** @description Require HTTPS and verify signatures when contacting registries. */
                tlsVerify?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the manifest list */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["manifestInspect"];
            404: components["responses"]["manifestNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ManifestPushV3Libpod: {
        parameters: {
            query: {
                /** @description the destination for the manifest */
                destination: string;
                /** @description push all images */
                all?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the manifest */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IDResponse"];
                };
            };
            400: components["responses"]["badParamError"];
            404: components["responses"]["manifestNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    ManifestPushLibpod: {
        parameters: {
            query?: {
                /** @description add existing instances with requested compression algorithms to manifest list */
                addCompression?: string[];
                /** @description Enforce compressing the layers with the specified --compression and do not reuse differently compressed blobs on the registry. */
                forceCompressionFormat?: boolean;
                /** @description push all images */
                all?: boolean;
                /** @description Require HTTPS and verify signatures when contacting registries. */
                tlsVerify?: boolean;
                /** @description silences extra stream data on push */
                quiet?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the manifest list */
                name: string;
                /** @description the registry for the manifest list */
                destination: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IDResponse"];
                };
            };
            400: components["responses"]["badParamError"];
            404: components["responses"]["manifestNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    NetworkDeleteLibpod: {
        parameters: {
            query?: {
                /** @description remove containers associated with network */
                force?: boolean;
            };
            header?: never;
            path: {
                /** @description the name of the network */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["networkRmResponse"];
            404: components["responses"]["networkNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    NetworkConnectLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name of the network */
                name: string;
            };
            cookie?: never;
        };
        /** @description attributes for connecting a container to a network */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["networkConnectRequestLibpod"];
                "application/x-tar": components["schemas"]["networkConnectRequestLibpod"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["networkNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    NetworkDisconnectLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name of the network */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["networkDisconnectRequest"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["networkNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    NetworkExistsLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the network */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description network exists */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["networkNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    NetworkInspectLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name of the network */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["networkInspectResponse"];
            404: components["responses"]["networkNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    NetworkUpdateLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the network */
                name: string;
            };
            cookie?: never;
        };
        /** @description attributes for updating a netavark network */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["networkUpdateRequestLibpod"];
                "application/x-tar": components["schemas"]["networkUpdateRequestLibpod"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    NetworkCreateLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description attributes for creating a network */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["networkCreateLibpod"];
                "application/x-tar": components["schemas"]["networkCreateLibpod"];
            };
        };
        responses: {
            200: components["responses"]["networkCreateResponse"];
            400: components["responses"]["badParamError"];
            409: components["responses"]["conflictError"];
            500: components["responses"]["internalError"];
        };
    };
    NetworkListLibpod: {
        parameters: {
            query?: {
                /** @description JSON encoded value of the filters (a `map[string][]string`) to process on the network list. Available filters:
                 *       - `name=[name]` Matches network name (accepts regex).
                 *       - `id=[id]` Matches for full or partial ID.
                 *       - `driver=[driver]` Only bridge is supported.
                 *       - `label=[key]` or `label=[key=value]` Matches networks based on the presence of a label alone or a label and a value.
                 *       - `until=[timestamp]` Matches all networks that were created before the given timestamp.
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["networkListLibpod"];
            500: components["responses"]["internalError"];
        };
    };
    NetworkPruneLibpod: {
        parameters: {
            query?: {
                /** @description Filters to process on the prune list, encoded as JSON (a `map[string][]string`).
                 *     Available filters:
                 *       - `until=<timestamp>` Prune networks created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
                 *       - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune networks with (or without, in case `label!=...` is used) the specified labels.
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["networkPruneResponse"];
            500: components["responses"]["internalError"];
        };
    };
    PlayKubeLibpod: {
        parameters: {
            query?: {
                /** @description JSON encoded value of annotations (a map[string]string). */
                annotations?: string;
                /** @description Logging driver for the containers in the pod. */
                logDriver?: string;
                /** @description logging driver options */
                logOptions?: string[];
                /** @description USe the network mode or specify an array of networks. */
                network?: string[];
                /** @description do not setup /etc/hosts file in container */
                noHosts?: boolean;
                /** @description use annotations that are not truncated to the Kubernetes maximum length of 63 characters */
                noTrunc?: boolean;
                /** @description publish a container's port, or a range of ports, to the host */
                publishPorts?: string[];
                /** @description Whether to publish all ports defined in the K8S YAML file (containerPort, hostPort), if false only hostPort will be published */
                publishAllPorts?: boolean;
                /** @description replace existing pods and containers */
                replace?: boolean;
                /** @description Starts a service container before all pods. */
                serviceContainer?: boolean;
                /** @description Start the pod after creating it. */
                start?: boolean;
                /** @description Static IPs used for the pods. */
                staticIPs?: string[];
                /** @description Static MACs used for the pods. */
                staticMACs?: string[];
                /** @description Require HTTPS and verify signatures when contacting registries. */
                tlsVerify?: boolean;
                /** @description Set the user namespace mode for the pods. */
                userns?: string;
                /** @description Clean up all objects created when a SIGTERM is received or pods exit. */
                wait?: boolean;
                /** @description Build the images with corresponding context. */
                build?: boolean;
            };
            header?: {
                "Content-Type"?: "plain/text" | "application/x-tar";
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["KubeApplyLibpodRequest"];
        responses: {
            200: components["responses"]["playKubeResponseLibpod"];
            500: components["responses"]["internalError"];
        };
    };
    PlayKubeDownLibpod: {
        parameters: {
            query?: {
                /** @description Remove volumes. */
                force?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["playKubeResponseLibpod"];
            500: components["responses"]["internalError"];
        };
    };
    PodDeleteLibpod: {
        parameters: {
            query?: {
                /** @description force removal of a running pod by first stopping all containers, then removing all containers in the pod */
                force?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the pod */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["podRmResponse"];
            400: components["responses"]["badParamError"];
            404: components["responses"]["podNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    PodExistsLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the pod */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description pod exists */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["podNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    PodInspectLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the pod */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["podInspectResponse"];
            404: components["responses"]["podNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    PodKillLibpod: {
        parameters: {
            query?: {
                /** @description signal to be sent to pod */
                signal?: string;
            };
            header?: never;
            path: {
                /** @description the name or ID of the pod */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["podKillResponse"];
            400: components["responses"]["badParamError"];
            404: components["responses"]["podNotFound"];
            409: components["responses"]["podKillResponse"];
            500: components["responses"]["internalError"];
        };
    };
    PodPauseLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the pod */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["podPauseResponse"];
            404: components["responses"]["podNotFound"];
            409: components["responses"]["podPauseResponse"];
            500: components["responses"]["internalError"];
        };
    };
    PodRestartLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the pod */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["podRestartResponse"];
            404: components["responses"]["podNotFound"];
            409: components["responses"]["podRestartResponse"];
            500: components["responses"]["internalError"];
        };
    };
    PodStartLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the pod */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["podStartResponse"];
            304: components["responses"]["podAlreadyStartedError"];
            404: components["responses"]["podNotFound"];
            409: components["responses"]["podStartResponse"];
            500: components["responses"]["internalError"];
        };
    };
    PodStopLibpod: {
        parameters: {
            query?: {
                /** @description timeout */
                t?: number;
            };
            header?: never;
            path: {
                /** @description the name or ID of the pod */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["podStopResponse"];
            304: components["responses"]["podAlreadyStoppedError"];
            400: components["responses"]["badParamError"];
            404: components["responses"]["podNotFound"];
            409: components["responses"]["podStopResponse"];
            500: components["responses"]["internalError"];
        };
    };
    PodTopLibpod: {
        parameters: {
            query?: {
                /** @description when true, repeatedly stream the latest output (As of version 4.0) */
                stream?: boolean;
                /** @description if streaming, delay in seconds between updates. Must be >1. (As of version 4.0) */
                delay?: number;
                /** @description arguments to pass to ps such as aux.
                 *      */
                ps_args?: string;
            };
            header?: never;
            path: {
                /** @description Name of pod to query for processes */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["podTopResponse"];
            404: components["responses"]["podNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    PodUnpauseLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the pod */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["podUnpauseResponse"];
            404: components["responses"]["podNotFound"];
            409: components["responses"]["podUnpauseResponse"];
            500: components["responses"]["internalError"];
        };
    };
    PodCreateLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description attributes for creating a pod */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PodSpecGenerator"];
                "application/x-tar": components["schemas"]["PodSpecGenerator"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IDResponse"];
                };
            };
            400: components["responses"]["badParamError"];
            /** @description status conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            500: components["responses"]["internalError"];
        };
    };
    PodListLibpod: {
        parameters: {
            query?: {
                /** @description JSON encoded value of the filters (a map[string][]string) to process on the pods list. Available filters:
                 *       - `id=<pod-id>` Matches all of pod id.
                 *       - `label=<key>` or `label=<key>:<value>` Matches pods based on the presence of a label alone or a label and a value.
                 *       - `name=<pod-name>` Matches all of pod name.
                 *       - `until=<timestamp>` List pods created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
                 *       - `status=<pod-status>` Pod's status: `stopped`, `running`, `paused`, `exited`, `dead`, `created`, `degraded`.
                 *       - `network=<pod-network>` Name or full ID of network.
                 *       - `ctr-names=<pod-ctr-names>` Container name within the pod.
                 *       - `ctr-ids=<pod-ctr-ids>` Container ID within the pod.
                 *       - `ctr-status=<pod-ctr-status>` Container status within the pod.
                 *       - `ctr-number=<pod-ctr-number>` Number of containers in the pod.
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["podsListResponse"];
            400: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    PodPruneLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["podPruneResponse"];
            400: components["responses"]["badParamError"];
            /** @description pod already exists */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: components["responses"]["internalError"];
        };
    };
    PodStatsAllLibpod: {
        parameters: {
            query?: {
                /** @description Provide statistics for all running pods. */
                all?: boolean;
                /** @description Names or IDs of pods. */
                namesOrIDs?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["podStatsResponse"];
            404: components["responses"]["podNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    SecretDeleteLibpod: {
        parameters: {
            query?: {
                /** @description Remove all secrets */
                all?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the secret */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["NoSuchSecret"];
            500: components["responses"]["internalError"];
        };
    };
    SecretExistsLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the secret */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description secret exists */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["NoSuchSecret"];
            500: components["responses"]["internalError"];
        };
    };
    SecretInspectLibpod: {
        parameters: {
            query?: {
                /** @description Display Secret */
                showsecret?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the secret */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SecretInspectResponse"];
            404: components["responses"]["NoSuchSecret"];
            500: components["responses"]["internalError"];
        };
    };
    SecretCreateLibpod: {
        parameters: {
            query: {
                /** @description User-defined name of the secret. */
                name: string;
                /** @description Secret driver */
                driver?: string;
                /** @description Secret driver options */
                driveropts?: string;
                /** @description Labels on the secret */
                labels?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Secret */
        requestBody?: {
            content: {
                "application/json": string;
                "application/x-tar": string;
            };
        };
        responses: {
            201: components["responses"]["SecretCreateResponse"];
            500: components["responses"]["internalError"];
        };
    };
    SecretListLibpod: {
        parameters: {
            query?: {
                /** @description JSON encoded value of the filters (a `map[string][]string`) to process on the secrets list. Currently available filters:
                 *       - `name=[name]` Matches secrets name (accepts regex).
                 *       - `id=[id]` Matches for full or partial ID.
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SecretListResponse"];
            500: components["responses"]["internalError"];
        };
    };
    SystemCheckLibpod: {
        parameters: {
            query?: {
                /** @description Skip time-consuming checks */
                quick?: boolean;
                /** @description Remove inconsistent images */
                repair?: boolean;
                /** @description Remove inconsistent containers and images */
                repair_lossy?: boolean;
                /** @description Maximum allowed age of unreferenced layers */
                unreferenced_layer_max_age?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["systemCheckResponse"];
            400: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    SystemDataUsageLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["systemDiskUsage"];
            500: components["responses"]["internalError"];
        };
    };
    SystemPruneLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["systemPruneResponse"];
            400: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    SystemVersionLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["versionResponse"];
        };
    };
    VolumeDeleteLibpod: {
        parameters: {
            query?: {
                /** @description force removal */
                force?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the volume */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["volumeNotFound"];
            /** @description Volume is in use and cannot be removed */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: components["responses"]["internalError"];
        };
    };
    VolumeExistsLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name of the volume */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description volume exists */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["volumeNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    VolumeInspectLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the volume */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["volumeCreateResponse"];
            404: components["responses"]["volumeNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    VolumeCreateLibpod: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description attributes for creating a volume */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["VolumeCreateOptions"];
                "application/x-tar": components["schemas"]["VolumeCreateOptions"];
            };
        };
        responses: {
            201: components["responses"]["volumeCreateResponse"];
            500: components["responses"]["internalError"];
        };
    };
    VolumeListLibpod: {
        parameters: {
            query?: {
                /** @description JSON encoded value of the filters (a map[string][]string) to process on the volumes list. Available filters:
                 *       - driver=<volume-driver-name> Matches volumes based on their driver.
                 *       - label=<key> or label=<key>:<value> Matches volumes based on the presence of a label alone or a label and a value.
                 *       - name=<volume-name> Matches all of volume name.
                 *       - opt=<driver-option> Matches a storage driver options
                 *       - `until=<timestamp>` List volumes created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["volumeListLibpod"];
            500: components["responses"]["internalError"];
        };
    };
    VolumePruneLibpod: {
        parameters: {
            query?: {
                /** @description JSON encoded value of filters (a map[string][]string) to match volumes against before pruning.
                 *     Available filters:
                 *       - `until=<timestamp>` Prune volumes created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
                 *       - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune volumes with (or without, in case `label!=...` is used) the specified labels.
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["volumePruneLibpod"];
            500: components["responses"]["internalError"];
        };
    };
    NetworkList: {
        parameters: {
            query?: {
                /** @description JSON encoded value of the filters (a `map[string][]string`) to process on the network list. Currently available filters:
                 *       - `name=[name]` Matches network name (accepts regex).
                 *       - `id=[id]` Matches for full or partial ID.
                 *       - `driver=[driver]` Only bridge is supported.
                 *       - `label=[key]` or `label=[key=value]` Matches networks based on the presence of a label alone or a label and a value.
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["networkListCompat"];
            500: components["responses"]["internalError"];
        };
    };
    NetworkInspect: {
        parameters: {
            query?: {
                /** @description Detailed inspect output for troubleshooting */
                verbose?: boolean;
                /** @description Filter the network by scope (swarm, global, or local) */
                scope?: string;
            };
            header?: never;
            path: {
                /** @description the name of the network */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["networkInspectCompat"];
            404: components["responses"]["networkNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    NetworkDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name of the network */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["networkNotFound"];
            500: components["responses"]["internalError"];
        };
    };
    NetworkConnect: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name of the network */
                name: string;
            };
            cookie?: never;
        };
        /** @description attributes for connecting a container to a network */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["networkConnectRequest"];
                "application/x-tar": components["schemas"]["networkConnectRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["badParamError"];
            403: components["responses"]["networkConnectedError"];
            500: components["responses"]["internalError"];
        };
    };
    NetworkDisconnect: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name of the network */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["networkDisconnectRequest"];
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    NetworkCreate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description attributes for creating a network */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["networkCreate"];
                "application/x-tar": components["schemas"]["networkCreate"];
            };
        };
        responses: {
            /** @description network created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        Id?: string;
                        Warning?: string;
                    };
                };
            };
            400: components["responses"]["badParamError"];
            500: components["responses"]["internalError"];
        };
    };
    NetworkPrune: {
        parameters: {
            query?: {
                /** @description Filters to process on the prune list, encoded as JSON (a map[string][]string).
                 *     Available filters:
                 *       - `until=<timestamp>` Prune networks created before this timestamp. The <timestamp> can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
                 *       - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune networks with (or without, in case `label!=...` is used) the specified labels.
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        NetworksDeleted?: string[];
                    };
                };
            };
            500: components["responses"]["internalError"];
        };
    };
    SecretList: {
        parameters: {
            query?: {
                /** @description JSON encoded value of the filters (a `map[string][]string`) to process on the secrets list. Currently available filters:
                 *       - `name=[name]` Matches secrets name (accepts regex).
                 *       - `id=[id]` Matches for full or partial ID.
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SecretListCompatResponse"];
            500: components["responses"]["internalError"];
        };
    };
    SecretInspect: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the secret */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SecretInspectCompatResponse"];
            404: components["responses"]["NoSuchSecret"];
            500: components["responses"]["internalError"];
        };
    };
    SecretDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the secret */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["NoSuchSecret"];
            500: components["responses"]["internalError"];
        };
    };
    SecretCreate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description attributes for creating a secret
         *      */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SecretCreate"];
                "application/x-tar": components["schemas"]["SecretCreate"];
            };
        };
        responses: {
            201: components["responses"]["SecretCreateResponse"];
            409: components["responses"]["SecretInUse"];
            500: components["responses"]["internalError"];
        };
    };
    SystemDataUsage: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["systemDiskUsage"];
            500: components["responses"]["internalError"];
        };
    };
    SystemVersion: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["versionResponse"];
        };
    };
    VolumeList: {
        parameters: {
            query?: {
                /** @description JSON encoded value of the filters (a map[string][]string) to process on the volumes list. Available filters:
                 *       - driver=<volume-driver-name> Matches volumes based on their driver.
                 *       - label=<key> or label=<key>:<value> Matches volumes based on the presence of a label alone or a label and a value.
                 *       - name=<volume-name> Matches all of volume name.
                 *       - `until=<timestamp>` List volumes created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
                 *
                 *     Note:
                 *       The boolean `dangling` filter is not yet implemented for this endpoint.
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["volumeList"];
            500: components["responses"]["internalError"];
        };
    };
    VolumeInspect: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description the name or ID of the volume */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["volumeInspect"];
            500: components["responses"]["internalError"];
        };
    };
    VolumeDelete: {
        parameters: {
            query?: {
                /** @description Force removal of the volume. This actually only causes errors due
                 *     to the names volume not being found to be suppressed, which is the
                 *     behaviour Docker implements.
                 *      */
                force?: boolean;
            };
            header?: never;
            path: {
                /** @description the name or ID of the volume */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description no error */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["volumeNotFound"];
            /** @description Volume is in use and cannot be removed */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: components["responses"]["internalError"];
        };
    };
    VolumeCreate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description attributes for creating a volume.
         *     Note: If a volume by the same name exists, a 201 response with that volume's information will be generated.
         *      */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["volumeCreate"];
                "application/x-tar": components["schemas"]["volumeCreate"];
            };
        };
        responses: {
            201: components["responses"]["volumeInspect"];
            500: components["responses"]["internalError"];
        };
    };
    VolumePrune: {
        parameters: {
            query?: {
                /** @description JSON encoded value of filters (a map[string][]string) to match volumes against before pruning.
                 *     Available filters:
                 *       - `until=<timestamp>` Prune volumes created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
                 *       - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune volumes with (or without, in case `label!=...` is used) the specified labels.
                 *      */
                filters?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["volumePruneResponse"];
            500: components["responses"]["internalError"];
        };
    };
}
