import { Suspense } from "react";

import { Routes } from "react-router-dom";

import { Route } from "react-router-dom";
import Layout from "../layout/layout";
import { HomePage } from "../pages/homepage/homepage";

export const MyRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="projects" element={<HomePage></HomePage>} />
        </Route>
      </Routes>
    </Suspense>
  );
};
