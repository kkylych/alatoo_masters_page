import { motion } from "framer-motion";
import philPhoto from "../assets/phil_photo.jpg";

const Philology = () => {
  return (
    <>
      <section className="px-8 pt-20 pb-20">
        <motion.div
          key="phil-page"
          className="mx-auto px-8 lg:flex-row flex flex-col items-center gap-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="lg:w-1/2 pt-5 pb-5">
            <div style={{ height: "450px" }}>
              <img
                src={philPhoto}
                alt=""
                className="drop-shadow-2xl w-full h-full object-cover rounded-lg hover:scale-102 transition-all"
              />
            </div>
          </div>

          <div className="text-center lg:text-left lg:w-1/2 sm:pb-12">
            <h1 className="text-2xl lg:text-5xl xl:text-6xl font-bold leading-none text-[#2d2753]">
              Филология
            </h1>
            <p className="text-lg lg:text-xl mt-6 font-light text-[#333333]">
              Программа сочетает изучение языков, литературы, культуры и
              коммуникации, формируя специалистов в лингвистике, переводе,
              преподавании и медиаиндустрии. Студенты овладевают английским,
              кыргызским, русским, турецким, немецким и французским языками,
              изучают отечественную, британскую и американскую литературу, а
              также европейскую и американскую культуру. Выпускники могут
              работать переводчиками, преподавателями, редакторами,
              контент-менеджерами, исследователями и специалистами по
              межкультурной коммуникации. Обучение развивает критическое
              мышление, аналитические навыки и глубокое понимание языковых
              процессов. Диплом открывает возможности в образовании, медиа,
              науке, культуре и международных компаниях.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Philology;
