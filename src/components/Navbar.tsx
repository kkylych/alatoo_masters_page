import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.webp";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageButton from "./LanguageButton";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const linkVariants = {
    hover: { scale: 1.1, backgroundColor: "var(--secondary-color)", color: "#ffffff" },
    tap: { scale: 0.9 },
  };

  return (
    <nav className="sticky top-0 left-0 flex justify-between items-center text-white py-4 px-8 md:px-20 bg-[var(--primary-color)] drop-shadow-md z-100">
      <NavLink to="/">
        <motion.img
          src={Logo}
          alt="Logo"
          className="w-18 hover:scale-105 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </NavLink>

      <ul className="hidden xl:flex items-center gap-8 font-montserrat font-semibold text-sm">
        <motion.li
          className="rounded-md cursor-pointer"
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <NavLink to="/about" className="block p-2 w-full h-full">
            {t("navbar.link_1")}
          </NavLink>
        </motion.li>
        <motion.li
          className="rounded-md cursor-pointer"
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <NavLink to="/masters" className="block p-2 w-full h-full">
            {t("navbar.link_2")}
          </NavLink>
        </motion.li>
        <motion.li
          className="rounded-md cursor-pointer"
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <NavLink to="/phd" className="block p-2 w-full h-full">
            {t("navbar.link_3")}
          </NavLink>
        </motion.li>
        <motion.li
          className="rounded-md cursor-pointer"
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <NavLink to="/aspirantura" className="block p-2 w-full h-full">
            {t("navbar.link_4")}
          </NavLink>
        </motion.li>
        <motion.li
          className="rounded-md cursor-pointer"
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <NavLink to="/publications" className="block p-2 w-full h-full">
            {t("navbar.link_5")}
          </NavLink>
        </motion.li>
        <motion.li
          className="rounded-md cursor-pointer"
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <NavLink to="/admissions" className="block p-2 w-full h-full">
            {t("navbar.link_6")}
          </NavLink>
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
          placeholder={t("navbar.placeholder")}
          className="py-2 pl-10 rounded-xl border-2 border-[var(--secondary-color)] focus:bg-[#3c2a47] focus:outline-[var(--secondary-color)] text-white"
          whileFocus={{ scale: 1.05 }}
        />
      </div>

      <div className="flex items-center gap-5">
        <LanguageButton />

        <motion.i
          className="bx bx-menu block xl:before:hidden text-5xl cursor-pointer text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.9 }}
        ></motion.i>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute xl:hidden top-24 left-0 w-full bg-[var(--primary-color)] flex flex-col items-center gap-6 font-semibold text-base overflow-hidden font-montserrat z-50"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.1 }}
          >
            <motion.li
              className="list-none w-full text-center cursor-pointer text-white"
              whileHover={{ backgroundColor: "var(--secondary-color)", color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/about"
                className="block p-4 w-full h-full"
              >
                {t("navbar.link_1")}
              </NavLink>
            </motion.li>
            <motion.li
              className="list-none w-full text-center cursor-pointer text-white"
              whileHover={{ backgroundColor: "var(--secondary-color)", color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/masters"
                className="block p-4 w-full h-full"
              >
                {t("navbar.link_2")}
              </NavLink>
            </motion.li>
            <motion.li
              className="list-none w-full text-center cursor-pointer text-white"
              whileHover={{ backgroundColor: "var(--secondary-color)", color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/phd"
                className="block p-4 w-full h-full"
              >
                {t("navbar.link_3")}
              </NavLink>
            </motion.li>
            <motion.li
              className="list-none w-full text-center cursor-pointer text-white"
              whileHover={{ backgroundColor: "var(--secondary-color)", color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/aspirantura"
                className="block p-4 w-full h-full"
              >
                {t("navbar.link_4")}
              </NavLink>
            </motion.li>
            <motion.li
              className="list-none w-full text-center cursor-pointer text-white"
              whileHover={{ backgroundColor: "var(--secondary-color)", color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/publications"
                className="block p-4 w-full h-full"
              >
                {t("navbar.link_5")}
              </NavLink>
            </motion.li>
            <motion.li
              className="list-none w-full text-center cursor-pointer text-white"
              whileHover={{ backgroundColor: "var(--secondary-color)", color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/admissions"
                className="block p-4 w-full h-full"
              >
                {t("navbar.link_6")}
              </NavLink>
            </motion.li>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
