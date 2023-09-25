#!/bin/bash

# Check if the '-v' flag is present and extract the file path
if [[ $1 == "-v" && ! -z $2 ]]; then
    FILE_PATH=$2
else
    echo "Usage: export.sh -v /path/to/xml"
    exit 1
fi

# Build and run the Docker Compose services
docker-compose build
docker-compose up -d

# Run the app container with the specified file path
docker-compose run --rm app $FILE_PATH

# Stop and remove the Docker Compose services
docker-compose down
