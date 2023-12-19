# Student Information Learning Management System (SILMS)

Welcome to the Student Information Learning Management System (SILMS) repository! This project is a comprehensive learning management system developed using Turbo, Vite with React for the frontend, and NestJS for the backend.

## Prerequisites

- Node.js
- npm

## Implemented Technologies and Practices
- **Turbo for Optimized Builds** ✅
- **Monorepo Structure** ✅
- **Tailwind CSS and Flowbite for UI** ✅
- **SSR, API Versioning, PWA** ✅
- **Router v6, Code Splitting, Lazy Loading** ✅
- **Internationalization** with react-i18next ✅
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

## License
This project is licensed under the MIT License. You can find the license information in the LICENSE file.

## Support
If you encounter any issues or have any questions regarding SILMS, make comments on your assigned issues thread on GitHub for others to see and help.
