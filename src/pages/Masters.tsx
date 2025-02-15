import { motion } from "framer-motion";
import mastersPhoto from "../assets/masters_photo.jpg";
import MastersInfo from "./MastersInfo";

const Masters = () => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#cf1421",
      transition: { duration: 0.15 },
    },
    tap: { scale: 0.95 },
    initial: { scale: 1, backgroundColor: "#2d2753" },
  };

  return (
    <>
      <section className="px-8 pt-20 md:pt-30">
        <motion.div
          key="masters-page"
          className="mx-auto px-8 lg:flex gap-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center lg:text-left lg:w-1/2 sm:pb-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-[#2d2753]">
              Магистратура
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light text-[#333333]">
              Магистратура — это вторая ступень высшего образования,
              фокусирующаяся на углублении знаний и развитии исследовательских
              навыков. Степень «магистр» присуждается после освоения программы и
              защиты диссертации. Включает научные семинары и исследовательские
              мероприятия.
            </p>
            <p className="mt-8 md:mt-12">
              <motion.button
                type="button"
                className="py-4 px-12 rounded text-white transition-all duration-300 tracking-wider"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                Подробнее
              </motion.button>
            </p>
          </div>

          <div className="lg:w-1/2 pt-5">
            <div style={{ height: "450px" }}>
              <img
                src={mastersPhoto}
                alt=""
                className="drop-shadow-2xl w-full h-full object-cover rounded-lg hover:scale-102 transition-all"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <MastersInfo />
    </>
  );
};

export default Masters;
