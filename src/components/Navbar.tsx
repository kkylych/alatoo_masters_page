import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const linkVariants = {
    hover: { scale: 1.1, backgroundColor: "#cf1421", color: "#ffffff" },
    tap: { scale: 0.9 },
  };

  return (
    <nav className="sticky top-0 left-0 flex justify-between items-center text-white py-3 px-8 md:px-32 bg-[#2d2753] drop-shadow-md z-30">
      <a href="#">
        <motion.img
          src={Logo}
          alt="Logo"
          className="w-18 hover:scale-105 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </a>

      <ul className="hidden xl:flex items-center gap-8 font-montserrat font-semibold text-sm">
        <motion.li
          className="p-2 rounded-md cursor-pointer"
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <a href="#about">О нас</a>
        </motion.li>
        <motion.li
          className="p-2 rounded-md cursor-pointer"
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <a href="#masters">Магистратура</a>
        </motion.li>
        <motion.li
          className="p-2 rounded-md cursor-pointer"
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <a href="#phd">PhD</a>
        </motion.li>
        <motion.li
          className="p-2 rounded-md cursor-pointer"
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <a href="#aspirantura">Аспирантура</a>
        </motion.li>
        <motion.li
          className="p-2 rounded-md cursor-pointer"
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <a href="#publications">Публикации</a>
        </motion.li>
        <motion.li
          className="p-2 rounded-md cursor-pointer"
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <a href="#admissions">Поступление</a>
        </motion.li>
      </ul>

      <div className="relative hidden md:flex items-center justify-center gap-3">
        <motion.i
          className="bx bx-search absolute left-3 text-2xl text-white z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></motion.i>
        <motion.input
          type="text"
          placeholder="Поиск..."
          className="py-2 pl-10 rounded-xl border-2 border-[#cf1421] focus:bg-[#3c2a47] focus:outline-[#cf1421] text-white"
          whileFocus={{ scale: 1.05 }}
        />
      </div>

      <motion.i
        className="bx bx-menu block xl:before:hidden text-5xl cursor-pointer text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 0.9 }}
      ></motion.i>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute xl:hidden top-24 left-0 w-full bg-[#2d2753] flex flex-col items-center gap-6 font-semibold text-base overflow-hidden font-montserrat"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.1 }}
          >
            <motion.li
              className="list-none w-full text-center p-4 cursor-pointer text-white"
              whileHover={{ backgroundColor: "#cf1421", color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              <a href="#about">О нас</a>
            </motion.li>
            <motion.li
              className="list-none w-full text-center p-4 cursor-pointer text-white"
              whileHover={{ backgroundColor: "#cf1421", color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              <a href="#masters">Магистратура</a>
            </motion.li>
            <motion.li
              className="list-none w-full text-center p-4 cursor-pointer text-white"
              whileHover={{ backgroundColor: "#cf1421", color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              <a href="#phd">PhD</a>
            </motion.li>
            <motion.li
              className="list-none w-full text-center p-4 cursor-pointer text-white"
              whileHover={{ backgroundColor: "#cf1421", color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              <a href="#aspirantura">Аспирантура</a>
            </motion.li>
            <motion.li
              className="list-none w-full text-center p-4 cursor-pointer text-white"
              whileHover={{ backgroundColor: "#cf1421", color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              <a href="#publications">Публикации</a>
            </motion.li>
            <motion.li
              className="list-none w-full text-center p-4 cursor-pointer text-white"
              whileHover={{ backgroundColor: "#cf1421", color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              <a href="#admissions">Поступление</a>
            </motion.li>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
