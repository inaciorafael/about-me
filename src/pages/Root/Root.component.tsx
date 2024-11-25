import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Header } from "../../components";

const Root = () => {
  const { pathname } = useLocation();

  return (
    <main className="invisible-scrollbar">
      <Header />
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.2 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex flex-col px-5 md:p-0 gap-10 md:max-w-[30%]">
            <div></div>
            <Outlet />
            <div className="h-5"></div>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Root;
