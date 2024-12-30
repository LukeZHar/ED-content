import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './navbar';
import { Homepage } from './homepage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Articles } from './articles';
import { ArticlePage } from './article';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            {/* Navbar visible on all routes. */}
            <Navbar />

            {/* Per-route content set up in Routes. */}
            <Routes>
                <Route path="/" element={<Homepage />} />

                {/* Nested routes set up as-is from the Ed lesson! */}
                <Route path="/articles" element={<Outlet />}>
                    <Route index element={<Articles />} />

                    {/* This syntax might seem weird, but the assumption is that 
					the full route would be `/articles/:id` based on the syntax used for nesting. */}
                    <Route path=":id" element={<ArticlePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();