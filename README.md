<p align="center"><img src="https://raw.githubusercontent.com/danisec/assets/refs/heads/main/images/portofolio-dani/portofolio-dani.jpeg" width="auto" height="auto" alt="Portofolio Preview"></p>

# Portofolio Dani Aprilyanto

Portofolio dani aprilyanto built with NextJS v15 and TailwindCSS v4.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Requirements

- Node.js
- PNPM

## Installation

Follow these steps to set up the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/danisec/portofolio.git

   cd portofolio
   ```

2. Install the dependencies:

   ```bash
    pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm run dev
   ```

4. Build the project:

   ```bash
    pnpm run build
   ```

5. Start the production server:

   ```bash
    pnpm run start
   ```

## Usage

- Access the application in your browser at `http://localhost:3000`.

## Docker Compose

1. Copy env template:

```bash
cp .env.example .env
```

### Development (Hot Reload)

```bash
docker compose -f docker-compose.dev.yml up --build
```

- Runs Next.js in dev mode (`npm run dev`) with bind mount.
- Any local file changes are reflected automatically (hot reload).
- App URL: `http://localhost:3000`

### Production

```bash
docker compose up -d --build
```

- Builds and runs production image (`next build` + `next start`).
- App URL mengikuti `DOCKER_APP_PORT_PROD` (default `3005`).

### Dynamic env variables

- `DOCKER_APP_PORT_DEV`: host port untuk dev container.
- `DOCKER_APP_PORT_PROD`: host port untuk prod container.
- `APP_INTERNAL_PORT`: port aplikasi di dalam container.
- `DOCKER_CONTAINER_NAME_DEV`: nama container dev.
- `DOCKER_CONTAINER_NAME_PROD`: nama container prod.
- `WATCHPACK_POLLING`, `CHOKIDAR_USEPOLLING`: optimasi file watching untuk hot reload di Docker.

## Project Structure

- **public**: Contains static files.
  - **images**: Contains the images.
    - **logo**: Contains the logo images.
    - **profile**: Contains the profile images.
    - **showcase**: Contains the showcase images.
  - **resume**: Contains the resume files.
- **src**: Contains the source code.
  - **components**: Contains the components.
  - **pages**: Contains the pages.
  - **data**: Contains the data.
  - **utils**: Contains the utility functions.
