import React, { Suspense } from 'react'
import App from './App.tsx'
import './index.css'
import './global/i18n';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { loadUser } from './store/slices/authSlice.ts';
import { store } from './store/store.ts';
import PageLoader from './components/PageLoader.tsx';

store.dispatch<any>(loadUser());
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

//@ts-ignore
hydrateRoot(document, <React.StrictMode><Suspense loading={<PageLoader />}><BrowserRouter><App assetMap={window.assetMap} /></BrowserRouter></Suspense></React.StrictMode>);
