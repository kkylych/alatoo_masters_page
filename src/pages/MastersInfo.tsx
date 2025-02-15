import { motion } from "framer-motion";

const MastersInfo = () => {
  const information = [
    {
      title: "Рабочие дни",
      description: "Понедельник-пятница, с 9:00 до 17:00",
    },
    {
      title: "Срок обучения",
      description: "2 года (2,5 года для дистанционного обучения)",
    },
    {
      title: "Документы для поступления",
      description: "принимаются с 6 июля по 16 сентября 2024 г.",
    },
  ];

  const documents = [
    "Диплом бакалавра (оригинал)",
    "2 фотографии 3x4",
    "Копия паспорта (оригинал для просмотра)",
    "Личный листок по учету кадров",
    "30% от контракта",
  ];

  return (
    <div>
      <motion.section
        className="lg:pb-28 lg:pt-30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="container px-8 mx-auto gap-12 text-center max-w-full overflow-hidden md:pt-10 pt-7">
          <h2 className="text-3xl lg:text-5xl font-semibold text-[#2d2753] flex items-center justify-center gap-3">
            <i className="bx bx-info-circle text-[#cf1421] text-5xl"></i>
            Основные сведения
          </h2>
          <div className="flex flex-col md:flex-row gap-6 mt-15 flex-wrap">
            {information.map((feature, index) => (
              <motion.div
                key={index}
                className="flex-1 px-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="flex justify-center items-center flex-col p-12 rounded-lg border border-solid border-gray-200 mb-8 box-border md:h-60 transition-all duration-300 hover:shadow-2xl hover:border-[#cf1421]"
                  style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
                >
                  <p className="font-semibold text-2xl text-[#cf1421] transition-colors duration-300 hover:text-[#2d2753]">
                    {feature.title}
                  </p>
                  <p className="mt-4 text-xl font-light text-[#333333]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="lg:pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="container px-8 mx-auto text-center max-w-full overflow-hidden md:pt-10 pt-7">
          <h2 className="text-3xl lg:text-5xl font-semibold text-[#2d2753] flex items-center justify-center gap-3">
            <i className="bx bxs-file-doc text-[#cf1421] text-5xl"></i>
            Документы для поступления
          </h2>
          <div className="flex flex-col md:flex-row mt-15 flex-wrap justify-center">
            {documents.map((item, index) => (
              <motion.div
                key={index}
                className="flex-1 px-3 min-w-[300px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="flex justify-center items-center flex-col p-8 rounded-lg border border-solid border-gray-200 mb-8 box-border md:h-40 transition-all duration-300 hover:shadow-2xl hover:border-[#cf1421] bg-gray-100"
                  style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
                >
                  <p className="font-semibold text-2xl text-[#2d2753] transition-colors duration-300 hover:text-[#cf1421]">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="lg:pb-20 w-full pt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="container px-8 text-center mx-auto max-w-full">
          <div
            className="group relative overflow-hidden bg-white px-8 pt-16 pb-12 shadow-xl ring-1 ring-gray-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl w-full rounded-lg border border-solid border-gray-200 hover:border-[#cf1421]"
            style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-32 w-32 rounded-full  transition-all duration-700 group-hover:scale-[15] group-hover:bg-[#cf1421]"></span>

            <div className="relative z-10 mx-auto space-y-8">
              <motion.span
                className="grid h-24 w-24 place-items-center rounded-full bg-[#cf1421] mx-auto"
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-12 w-12 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </motion.span>

              <h3 className="text-5xl font-bold text-[#2d2753] transition-colors duration-300 group-hover:text-white">
                На заметку иностранным гражданам!
              </h3>

              <div className=" text-xl lg:text-2xl mt-6 font-light text-[#333333] leading-relaxed transition-colors duration-300 group-hover:text-white/90 max-w-2xl mx-auto">
                <p>
                  Представить перевод паспорта, диплома и его вкладыша на
                  кыргызский либо на русский языки (перевод должен быть
                  подтвержден сертифицированным нотариусом или переводческой
                  фирмой).
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default MastersInfo;
