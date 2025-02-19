import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface MenuItem {
  link: string;
  label: string;
}

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const location = useLocation();

  const sidebarVariants = {
    open: { x: 0, transition: { duration: 0.2 } },
    closed: { x: "-100%", transition: { duration: 0.2 } },
  };

  const menuItems: MenuItem[] = [
    {
      link: "/masters/computer-science",
      label: t("sidebar.label_1"),
    },
    { link: "/masters/economics", label: t("sidebar.label_2") },
    {
      link: "/masters/international-relations",
      label: t("sidebar.label_3"),
    },
    { link: "/masters/management", label: t("sidebar.label_4") },
    { link: "/masters/philology", label: t("sidebar.label_5") },
    { link: "/masters/law", label: t("sidebar.label_6") },
    { link: "/masters/pedagogy", label: t("sidebar.label_7") },
    { link: "/masters/journalism", label: t("sidebar.label_8") },
    { link: "/masters/psychology", label: t("sidebar.label_9") },
    { link: "/masters/linguistics", label: t("sidebar.label_10") },
  ];

  return (
    <div>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            className="fixed top-24 left-0 h-full w-64 bg-[var(--primary-color)] text-white flex flex-col p-4 z-50"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
          >
            <button
              className="self-end text-2xl mb-4 cursor-pointer hover:scale-105 transition-all"
              onClick={() => setIsSidebarOpen(false)}
            >
              &#10005;
            </button>
            <ul className="flex flex-col gap-4">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.link;
                return (
                  <motion.li
                    key={index}
                    className={`text-center cursor-pointer rounded-md pointer-events-auto ${
                      isActive
                        ? "bg-[var(--secondary-color)] text-white"
                        : "hover:bg-[var(--secondary-color)] transition-all"
                    }`}
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <NavLink to={item.link} className="w-full h-full block py-1">{item.label}</NavLink>
                  </motion.li>
                );
              })}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>

      {!isSidebarOpen && (
        <motion.button
          onClick={() => setIsSidebarOpen(true)}
          initial={{ opacity: 0.5, scale: 1, backgroundColor: "var(--primary-color)" }}
          whileHover={{
            opacity: 1,
            scale: 1.1,
            backgroundColor: "var(--secondary-color)",
            transition: { duration: 0.2 },
          }}
          className="cursor-pointer fixed top-30 left-5 w-12 h-12 flex items-center justify-center text-white rounded-full z-50"
        >
          &#9776;
        </motion.button>
      )}
    </div>
  );
};

export default Sidebar;
