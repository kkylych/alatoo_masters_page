import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MenuButton = ({ onClick }) => (
  <motion.button
    className="text-5xl cursor-pointer text-white inline-block"
    onClick={onClick}
    whileHover={{ scale: 0.9 }}
    whileTap={{ scale: 0.9 }}
    style={{ transformOrigin: "center" }}
  >
    <i className="bx bx-menu align-middle"></i>
  </motion.button>
);

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const linkVariants = {
    hover: { scale: 1.05, backgroundColor: "#cf1421", color: "#ffffff" },
    tap: { scale: 0.95 },
  };

  return (
    <nav className="sticky top-0 flex justify-end items-center text-white py-3 px-8 md:px-32 drop-shadow-md z-30 bg-[#2d2753]">
      <div className="flex justify-end w-auto">
        <MenuButton onClick={() => setIsMenuOpen(true)} />
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 h-full w-64 z-50 p-6 shadow-xl bg-[#2d2753]"
            style={{
              backgroundColor: "#2d2753",
              boxShadow: "10px 0 15px -3px rgba(0,0,0,0.3)",
            }}
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <button
              className="absolute top-4 right-4 text-3xl text-white hover:text-red-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ×
            </button>

            <ul className="flex flex-col gap-4 font-montserrat bg-[#2d2753]">
              {[
                ["О нас", "#about"],
                ["Магистратура", "#masters"],
                ["PhD", "#phd"],
                ["Аспирантура", "#aspirantura"],
                ["Публикации", "#publications"],
                ["Поступление", "#admissions"],
              ].map(([title, url]) => (
                <motion.li
                  key={title}
                  className="p-3 rounded-md cursor-pointer text-white"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <a href={url} onClick={() => setIsMenuOpen(false)}>
                    {title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Sidebar;
