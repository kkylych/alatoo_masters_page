import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarVariants = {
    open: { x: 0, transition: { duration: 0.2 } },
    closed: { x: "-100%", transition: { duration: 0.2 } },
  };

  const menuItems = [
    {
      link: "computer-science",
      label: "Информатика и вычислительная техника",
    },
    { link: "economics", label: "Экономика" },
    { link: "international-relations", label: "Международные отношения" },
    { link: "management", label: "Менеджмент" },
    { link: "phylology", label: "Филология" },
    { link: "law", label: "Юриспруденция" },
    { link: "pedagogy", label: "Педагогика" },
    { link: "journalism", label: "Журналистика" },
    { link: "psychology", label: "Психология" },
    { link: "linguistics", label: "Лингвистика" },
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
              className="self-end text-2xl mb-4"
              onClick={() => setIsSidebarOpen(false)}
            >
              &#10005;
            </button>
            <ul className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="text-center py-2 cursor-pointer"
                  whileHover={{ backgroundColor: "#cf1421", color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Link to={item.link}>{item.label}</Link>
                </motion.li>
              ))}
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
