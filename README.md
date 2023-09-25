# XML-to-Redis Exporter

## Introduction

The XML-to-Redis Exporter is a Node.js application designed to read XML files, parse them into JSON format, and store the JSON data in a Redis database. This documentation provides an overview of the project, its features, and instructions on how to use it.

## Getting Started

### Prerequisites

Before using the XML-to-Redis Exporter, ensure you have the following prerequisites installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Docker (for running the application in a container)

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/xml-to-redis-exporter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd xml-to-redis-exporter
   ```
3. Install project dependencies:
    ```bash
   npm install
   ```
## Usage

### Exporting XML to Redis

To export XML data to Redis, use the provided export.sh script as follows:
   ```bash
   docker-compose up -d  # Start the application and Redis containers
   ./export.sh -v /path/to/your/xml/file.xml
   ```
Replace `/path/to/your/xml/file.xml` with the path to your XML file. This command will execute the export script and store the data in the Redis database.

## Project Structure

The project is organized into the following directories and files:

- `scripts/`: Contains script files for reading XML, parsing XML, and saving data to Redis.
- `data/`: Directory for storing XML files.
- `docker-compose.yml`: Docker Compose configuration for running the application and Redis.
- `Dockerfile`: Dockerfile for building the Node.js application image.
- `index.js`: Main application file.
- `package.json` and `package-lock.json`: Node.js project configuration files.

## Docker Configuration

The XML-to-Redis Exporter can be run using Docker containers. Docker Compose is used to manage the application and Redis services. Ensure you have Docker and Docker Compose installed to use this feature.

## Testing

Unit tests for the project can be found in the `tests/` directory. You can run the tests using the following command:
  ```bash
   npm test
  ```
