import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const location = useLocation();

  const sidebarVariants = {
    open: { x: 0, transition: { duration: 0.2 } },
    closed: { x: "-100%", transition: { duration: 0.2 } },
  };

  const menuItems= [
    {
      link: "/masters/computer-science",
      label: "Информатика и вычислительная техника",
    },
    { link: "/masters/economics", label: "Экономика" },
    {
      link: "/masters/international-relations",
      label: "Международные отношения",
    },
    { link: "/masters/management", label: "Менеджмент" },
    { link: "/masters/philology", label: "Филология" },
    { link: "/masters/law", label: "Юриспруденция" },
    { link: "/masters/pedagogy", label: "Педагогика" },
    { link: "/masters/journalism", label: "Журналистика" },
    { link: "/masters/psychology", label: "Психология" },
    { link: "/masters/linguistics", label: "Лингвистика" },
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
            className="fixed top-24 left-0 h-full w-64 bg-[#2d2753] text-white flex flex-col p-4 z-50"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
          >
            <button
              className="self-end text-2xl mb-4 cursor-pointer"
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
                    className={`text-center py-1 cursor-pointer rounded-md ${
                      isActive
                        ? "bg-[#cf1421] text-white"
                        : "hover:bg-[#cf1421] transition-all"
                    }`}
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <NavLink to={item.link}>{item.label}</NavLink>
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
          initial={{ opacity: 0.5, scale: 1, backgroundColor: "#2d2753" }}
          whileHover={{
            opacity: 1,
            scale: 1.1,
            backgroundColor: "#cf1421",
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
