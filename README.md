# Student Information Learning Management System (SILMS)

Welcome to the Student Information Learning Management System (SILMS) repository! This project is a comprehensive learning management system developed using Turbo, Vite with React for the frontend, and NestJS for the backend.

## Prerequisites

- Node.js
- npm
- PostgreSQL

## Implemented Technologies and Practices
- **Turbo for Optimized Builds** ✅
- **Monorepo Structure** ✅
- **Tailwind CSS and Flowbite for UI** ✅
- **SSR** ✅
- **API Versioning** ✅
- **PWA** ✅
- **Router v6** ✅
- **Code Splitting** ✅
- **Lazy Loading** ✅
- **Internationalization with react-i18next** ✅
- **Localization** ✅
- **OpenAPI (Swagger) Implementation** ✅
- **Server Query via Redux RTK-Query** ✅
- **Backend: NestJS** ✅
- **Frontend: Vite with React** ✅

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/SILMS-Project/silms-nest-react.git
```
### Install Dependencies

Navigate to the project directory and install the required dependencies for both the backend and frontend:

```bash
cd silms-nest-react
npm install

cd apps/silms-backend
npm install

cd ../silms-frontend
npm install
```

### File Structure
Once the dependencies are installed, here's the file structure you'll find:
```bash
silms-nest-react/
├── apps/
│   ├── silms-backend/
│   └── silms-frontend/

```

## Setting Up PostgreSQL

To run this application, ensure you have PostgreSQL installed and running on your machine. If you haven't installed PostgreSQL yet, you can download it from [here](https://www.postgresql.org/download/).

### Configuring PostgreSQL Credentials

Ensure you have the necessary PostgreSQL credentials set up in the `.env` file located in the **root directory of the backend**. Modify the following environment variables with your PostgreSQL credentials:

```dotenv
# .env file

APP_NAME=
APP_DESCRIPTION=
APP_SERVER_LISTEN_PORT=
APP_SERVER_LISTEN_IP=
API_VERSION=
GLOBAL_PREFIX=


#jwt
JWT_SECRET=
JWT_TIME=

DB_HOST=your_postgres_host
DB_PORT=your_postgres_port
DB_USERNAME=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_NAME=your_postgres_database_name
```

### Running the Application
After the dependencies are installed, you can run the application front the root directory using the following command:
```bash
npm run dev
```

This will start the development server for both the frontend and backend.

Frontend: 
```bash
http://localhost:5173/ 
```

Backend: 
```bash
http://localhost:3000/
```

Backend with global prefix: 
```bash
http://localhost:3000/backend
```
Swagger UI can be accessed via: 
```bash
http://localhost:3000/api
```

## Branching Structure

- **main:** Represents the stable, production-ready code.
- **dev:** Branch for ongoing development.
- **frontend/xyz:** Feature-specific branches for frontend changes.
- **backend/abc:** Bug fix branches specific to the backend.
- **testing/123:** Branch dedicated to QA and testing purposes.


## License
This project is licensed under the MIT License. You can find the license information in the LICENSE file.

## Support
If you encounter any issues or have any questions regarding SILMS, make comments on your assigned issues thread on GitHub for others to see and help.
