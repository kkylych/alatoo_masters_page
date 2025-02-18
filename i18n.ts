import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        navbar: {
          link_1: "О нас",
          link_2: "Магистратура",
          link_3: "PhD",
          link_4: "Аспирантура",
          link_5: "Публикации",
          link_6: "Поступление",
          placeholder: "Поиск...",
        },

        sidebar: {
          label_1: "Информатика и вычислительная техника",
          label_2: "Экономика",
          label_3: "Международные отношения",
          label_4: "Менеджмент",
          label_5: "Филология",
          label_6: "Юриспруденция",
          label_7: "Педагогика",
          label_8: "Журналистика",
          label_9: "Психология",
          label_10: "Лингвистика",
        },

        footer: {
          title_1: "Образование",
          title_1_item_1: "Лицензии и свидетельства об аккредитации",
          title_1_item_2: "Факультеты и кафедры",
          title_1_item_3: "Система онлайн-курсов",
          title_1_item_4: "Библиотека",

          title_2: "Исследования",
          title_2_item_1: "Институты",
          title_2_item_2: "Исследовательские центры",
          title_2_item_3: "Лаборатории",

          title_3: "Поступление",
          title_3_item_1: "Студенты граждан КР",
          title_3_item_2: "Иностранные студенты",

          title_4: "Университетская жизнь",
          title_4_item_1: "Общественный организации",
          title_4_item_2: "Достижения студентов",
          title_4_item_3: "Жильё и питание",
          title_4_item_4: `Спортивные клубы, спартакиады и соревнования`,
          title_4_item_5: `Клубы`,
          title_4_item_6: `Здоровье и медицина`,
          title_4_item_7: `3D тур`,

          title_5: "О нас",
          title_5_item_1: "Об университете",
          title_5_item_2: "Уставы и документы",
          title_5_item_3: "Руководство",
          title_5_item_4: "Структура",
          title_5_item_5: "Вакансии",
          title_5_item_6: "Объявления и контакты",
          title_5_item_7: "Новости и события",

          title_6: "Департаменты",
          title_6_item_1: "Департамент образования и управление качеством",
          title_6_item_2: "Институт повышении квалификации и инновации",
          title_6_item_3: "Офис международных отношений",
          title_6_item_4: "Офис по работе с выпускниками",
          title_6_item_5: "Студенческий отдел",
        },

        masters: {
          title: "Магистратура",
          description: `Магистратура — это вторая ступень высшего образования,
              фокусирующаяся на углублении знаний и развитии исследовательских
              навыков. Степень «магистр» присуждается после освоения программы и
              защиты диссертации. Включает научные семинары и исследовательские
              мероприятия.`,
          button: "Подробнее",
        },

        mastersInfo: {
          informationTitle: "Основные сведения",
          informationItemTitle_1: "Рабочие дни",
          informationItemDescription_1: "Понедельник-пятница, с 9:00 до 17:00",
          informationItemTitle_2: "Срок обучения",
          informationItemDescription_2:
            "2 года (2,5 года для дистанционного обучения)",
          informationItemTitle_3: "Документы для поступления",
          informationItemDescription_3:
            "принимаются с 6 июля по 16 сентября 2024 г.",
          documentTitle: "Документы для поступления",
          documentItem_1: "Диплом бакалавра (оригинал)",
          documentItem_2: "2 фотографии 3x4",
          documentItem_3: "Копия паспорта (оригинал для просмотра)",
          documentItem_4: "Личный листок по учету кадров",
          documentItem_5: "30% от контракта",
          warningTitle: "На заметку иностранным гражданам!",
          warningDescription: `Представить перевод паспорта, диплома и его вкладыша на
                  кыргызский либо на русский языки (перевод должен быть
                  подтвержден сертифицированным нотариусом или переводческой
                  фирмой)`,
        },

        computerScience: {
          title: "Информатика и вычислительная техника",
          description: `Направление Информатики и вычислительной техники готовит
              специалистов, способных разрабатывать автоматизированные системы
              обработки информации с применением ИИ, сетевых технологий, баз
              данных и современных IT-решений. Обучение ведется на английском
              языке с использованием передовой исследовательской базы,
              позволяющей магистрантам реализовывать научные и прикладные
              проекты. Выпускники-магистры востребованы на высокооплачиваемых
              позициях в Кыргызстане и за рубежом.`,
        },

        economics: {
          title: "Экономика",
          description: `Эта программа дает ценный опыт в качественных и количественных исследованиях, 
              а также готовит специалистов по экономическому развитию и научных исследователей (Ph.D). 
              Обучаясь здесь, можно получить двойной диплом. 
              МУА заключил контракт с Университетом Клермон-Овернь (Франция) по программе Erasmus+, 
              позволяя учиться 1 год во Франции по стипендии и получить дипломы обоих вузов. 
              Заявки принимаются от выпускников экономики, менеджмента, международных отношений 
              и прикладной математики. Участвовать могут студенты с высокими академическими результатами 
              за 1-й курс. Требуется уровень английского B2: TOEFL IBT 95 или IELTS 7.`,
        },

        internationalRelations: {
          title: "Международные отношения",
          description: `Программа «Международные отношения» обеспечивает междисциплинарное
              исследование глобальной динамики с упором на такие ключевые
              области, как международная политика, международное развитие,
              глобальное управление, экономические отношения и исследования
              безопасности. Наша программа, основанная на ценностях
              многосторонности, прав человека и устойчивости, дает студентам
              знания и навыки, необходимые для успешной карьеры в дипломатии,
              политическом анализе, международном развитии, разрешении
              конфликтов и международном праве.`,
        },

        management: {
          title: "Менеджмент",
          description: `Магистерская программа по Менеджменту (бизнес-аналитика)
              Международного университета Ала-Тоо предоставит вам все
              необходимые знания и навыки для успешной карьеры в сфере
              бизнес-аналитики. Программа включает комплексное сочетание
              технических, аналитических, бизнес- и коммуникационных
              компетенций, что позволит вам эффективно работать с данными,
              принимать обоснованные решения и разрабатывать стратегии для
              бизнеса. Обучение охватывает ключевые аспекты анализа данных,
              управления проектами, цифровой трансформации и бизнес-стратегий,
              готовя выпускников к востребованным позициям в ведущих компаниях.`,
        },

        philology: {
          title: "Филология",
          description: `Программа сочетает изучение языков, литературы, культуры и
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
              науке, культуре и международных компаниях.`,
        },

        law: {
          title: "Юриспруденция",
          description: `Программа Юриспруденция (Международное право и бизнес) предлагает
              комплексное изучение юридических аспектов международного бизнеса.
              В рамках обучения вы освоите ключевые вопросы, связанные с
              глобальными коммерческими операциями, технологическим и
              инвестиционным правом, а также углубитесь в международное
              публичное и частное право. Особое внимание уделяется практическим
              навыкам: студенты пишут научные статьи по актуальным темам
              бизнес-юриспруденции и разрабатывают диссертацию, отражающую
              современные вызовы международного права. Карьерные перспективы
              включают работу в международных компаниях, юридических фирмах,
              государственных учреждениях, а также в сфере консалтинга и
              предпринимательства.`,
        },

        pedagogy: {
          title: "Педагогика",
          description: `Магистратура по педагогике — это интенсивная программа, нацеленная
              на подготовку специалистов, обладающих глубокими знаниями в
              области образовательных технологий, педагогической психологии и
              управленческих навыков. Она сочетает в себе теоретическое обучение
              и практическое применение знаний, что обеспечивает высокую
              конкурентоспособность выпускников на рынке труда. Программа
              активно поддерживает научные исследования. Магистранты имеют
              возможность участвовать в конференциях, семинарах и научных
              проектах. Исследования могут быть направлены на различные аспекты
              педагогики, включая оценку эффективности образовательных
              технологий, изучение социальных факторов, влияющих на обучение, и
              разработку новых образовательных методик.`,
          careerTitle: "Возможности карьерного роста",
          careerSubTitle:
            "Выпускники программы могут выбрать различные карьерные пути, включая:",
          careerInformationItem_1: "Консультирование в области образования",
          careerInformationItem_2:
            "Исследовательская деятельность в университетах и научных центрах",
          careerInformationItem_3:
            "Управление образовательными проектами и программами",
          careerInformationItem_4:
            "Работа в образовательных учреждениях (учителя, преподаватели, воспитатели)",

          opportunityTitle: "Дополнительные возможности",
          opportunitySubTitle: "Двойной диплом",
          opportunityDescription: `Одной из уникальных возможностей нашей программы является получение
          двойного диплома. Магистранты могут подать в университет Северной
          Америки, что позволяет им:`,

          opportunityItem_1: "Получить два диплома",
          opportunityItem_2:
            "Углубить свои знания в международных методах образования",
          opportunityItem_3:
            "Расширить сеть профессиональных связей и культурный опыт",
          opportunityItem_4: "Изучить новые педагогические практики и подходы",
          opportunityItem_5:
            "Принять участие в международных исследовательских проектах",
          opportunityItem_6:
            "Развить языковые навыки и межкультурную компетенцию",

          opportunitySubDescription: `Программа двойного диплома включает учебные модули, совместные проекты
          и другие формы сотрудничества. Это не только улучшает академическую
          подготовку магистров, но и делает их более привлекательными для
          работодателей на международном уровне.`,
        },

        journalism: {
          title: "Журналистика",
          description: `Программа магистратуры Журналистика (Медиа, искусственный
              интеллект и искусство) предоставляет широкие возможности, развивая
              профессиональные и исследовательские навыки в таких сферах как
              Prompt engineering, искусственный интеллект, журналистика данных,
              медиаисследования, медиаменеджмент и визуальные искусства.
              Программа также включает углубленное изучение менеджмента
              различных проектов, SMM marketing, targeting, создание креативного
              контента с помощью мультимедийных программ и современных
              медиатехнологий.`,

          choiceTitle: "Почему нужно выбирать нас?",
          choiceItem_1: "Гибридная форма обучения",
          choiceItem_2:
            "Гибкий график занятий и возможность совмещать учебу с профессиональной деятельностью",
          choiceItem_3:
            "Возможность дальнейшего карьерного роста в сфере медиа коммуникаций, связей с общественностью и других",
          choiceItem_4:
            "Преподавание ведется полностью на английском языке, включая преподавателей-носителей английского языка",
        },

        psychology: {
          title: "Психология",
          description: `Магистерская программа «Психология» предоставляет магистрантам
              глубокое понимание психологических теорий и концепций, развивает
              практические навыки работы с данными и клиентами, поддерживает
              интердисциплинарный подход к исследованиям, поощряет участие в
              научных проектах и готовит к разнообразным карьерным возможностям
              в области психологии, включая психотерапию, образование,
              управление персоналом и исследования.`,
        },

        linguistics: {
          title: "Лингвистика",
          description: `Направление Лингвистика нацелено на уникальную образовательную
              программу, которая обеспечивает студентам широкие знания и навыки
              в области языковедения и языкознания, перевода и межкультурной
              коммуникации. Наши выпускники могут работать в компаниях,
              разрабатывающих лингвистический софт: программы распознавания
              речи, автоматической обработки текста, автоматического перевода;
              участвовать в создании различных компьютерных словарей,
              справочников, энциклопедий, сайтов в Интернете; работать
              переводчиками или преподавателями. Наша цель — развивать у
              студентов критическое мышление, творческий подход к решению задач
              и способность к эффективной коммуникации на различных языках.`,
        },
      },
    },
    en: {
      translation: {
        navbar: {
          link_1: "About Us",
          link_2: "Master’s Programs",
          link_3: "PhD",
          link_4: "Postgraduate Studies",
          link_5: "Publications",
          link_6: "Admissions",
          placeholder: "Search...",
        },

        sidebar: {
          label_1: "Computer Science and Engineering",
          label_2: "Economics",
          label_3: "International Relations",
          label_4: "Management",
          label_5: "Philology",
          label_6: "Law",
          label_7: "Pedagogy",
          label_8: "Journalism",
          label_9: "Psychology",
          label_10: "Linguistics",
        },

        footer: {
          title_1: "Education",
          title_1_item_1: "Licenses and Accreditation Certificates",
          title_1_item_2: "Faculties and Departments",
          title_1_item_3: "Online Course System",
          title_1_item_4: "Library",

          title_2: "Research",
          title_2_item_1: "Institutes",
          title_2_item_2: "Research Centers",
          title_2_item_3: "Laboratories",

          title_3: "Admissions",
          title_3_item_1: "Citizens of the Kyrgyz Republic",
          title_3_item_2: "International Students",

          title_4: "University Life",
          title_4_item_1: "Public Organizations",
          title_4_item_2: "Student Achievements",
          title_4_item_3: "Housing and Dining",
          title_4_item_4: "Sports Clubs, Spartakiads, and Competitions",
          title_4_item_5: "Clubs",
          title_4_item_6: "Health and Medicine",
          title_4_item_7: "3D Tour",

          title_5: "About Us",
          title_5_item_1: "About the University",
          title_5_item_2: "Statutes and Documents",
          title_5_item_3: "Administration",
          title_5_item_4: "Structure",
          title_5_item_5: "Vacancies",
          title_5_item_6: "Announcements and Contacts",
          title_5_item_7: "News and Events",

          title_6: "Departments",
          title_6_item_1: "Department of Education and Quality Management",
          title_6_item_2: "Institute for Advanced Training and Innovation",
          title_6_item_3: "International Relations Office",
          title_6_item_4: "Alumni Relations Office",
          title_6_item_5: "Student Affairs Office",
        },

        masters: {
          title: "Master's Degree",
          description:
            "A master's degree is the second stage of higher education, focusing on deepening knowledge and developing research skills. The degree is awarded upon completion of the program and defense of a thesis. It includes academic seminars and research activities.",
          button: "Learn More",
        },

        mastersInfo: {
          informationTitle: "Key Information",
          informationItemTitle_1: "Working Days",
          informationItemDescription_1:
            "Monday to Friday, from 9:00 AM to 5:00 PM",
          informationItemTitle_2: "Duration of Study",
          informationItemDescription_2:
            "2 years (2.5 years for distance learning)",
          informationItemTitle_3: "Application Period",
          informationItemDescription_3:
            "Accepted from July 6 to September 16, 2024",
          documentTitle: "Required Documents",
          documentItem_1: "Bachelor's degree diploma (original)",
          documentItem_2: "Two 3x4 cm photos",
          documentItem_3: "Copy of passport (original for verification)",
          documentItem_4: "Personal record sheet",
          documentItem_5: "30% of the contract fee",
          warningTitle: "Important Notice for Foreign Applicants!",
          warningDescription: `You must provide a translated version of your passport, diploma, 
                and diploma supplement into Kyrgyz or Russian (the translation must be 
                certified by a notary or a translation agency).`,
        },

        computerScience: {
          title: "Computer Science and Engineering",
          description: `The Computer Science and Engineering program prepares specialists capable of developing automated information processing systems using AI, network technologies, databases, and modern IT solutions. The education is delivered in English using state-of-the-art research facilities that allow graduate students to carry out both scientific and applied projects. Graduates are in high demand for well-paid positions in Kyrgyzstan and abroad.`,
        },

        economics: {
          title: "Economics",
          description: `This program provides valuable experience in qualitative and quantitative 
              research, preparing specialists in economic development and academic researchers (Ph.D.). 
              Students have the opportunity to earn a double degree. 
              MUA has signed a contract with the University of Clermont Auvergne (France) under the Erasmus+ 
              program, allowing students to study in France for one year on a scholarship and obtain diplomas 
              from both universities. Applications are accepted from graduates of economics, management, 
              international relations, and applied mathematics. Students with high academic performance 
              in their first year are eligible to participate. An English proficiency level of B2 is required: 
              TOEFL IBT 95 or IELTS 7.`,
        },

        internationalRelations: {
          title: "International Relations",
          description: `The International Relations program offers an interdisciplinary study of 
              global dynamics, focusing on key areas such as international politics, 
              international development, global governance, economic relations, and security studies.
              Our program, based on the values of multilateralism, human rights, and sustainability, 
              equips students with the knowledge and skills needed for a successful career in diplomacy, 
              political analysis, international development, conflict resolution, and international law.`,
        },

        management: {
          title: "Management",
          description: `The Master's program in Management (Business Analytics) at Ala-Too International 
              University provides all the essential knowledge and skills for a successful career in 
              business analytics. 
              The program offers a comprehensive combination of technical, analytical, business, and 
              communication competencies, enabling you to work effectively with data, make informed 
              decisions, and develop business strategies. 
              The curriculum covers key aspects of data analysis, project management, digital transformation, 
              and business strategies, preparing graduates for in-demand positions in leading companies.`,
        },

        philology: {
          title: "Philology",
          description: `The program combines the study of languages, literature, culture, and 
              communication, shaping specialists in linguistics, translation, teaching, 
              and the media industry. 
              Students master English, Kyrgyz, Russian, Turkish, German, and French, 
              while exploring national, British, and American literature, as well as 
              European and American culture. 
              Graduates can work as translators, teachers, editors, content managers, 
              researchers, and intercultural communication specialists. The program 
              develops critical thinking, analytical skills, and a deep understanding 
              of linguistic processes. 
              A degree in philology opens opportunities in education, media, research, 
              culture, and international companies.`,
        },

        law: {
          title: "Law",
          description: `The Law program (International Law and Business) offers a comprehensive 
              study of the legal aspects of international business. 
              During the course, you will master key issues related to global commercial 
              operations, technology and investment law, as well as delve into public 
              and private international law. 
              Special attention is given to practical skills: students write research papers 
              on current topics in business law and develop a dissertation addressing modern 
              challenges in international law. 
              Career opportunities include positions in international companies, law firms, 
              government institutions, consulting, and entrepreneurship.`,
        },

        pedagogy: {
          title: "Pedagogy",
          description: `The Master's program in Pedagogy is an intensive course aimed at training 
              specialists with deep knowledge in educational technologies, pedagogical psychology, 
              and management skills. 
              It combines theoretical learning with practical application, ensuring high 
              competitiveness for graduates in the job market. 
              The program actively supports scientific research, providing master's students with 
              opportunities to participate in conferences, seminars, and research projects. 
              Research can focus on various aspects of pedagogy, including evaluating the 
              effectiveness of educational technologies, studying social factors affecting learning, 
              and developing new teaching methodologies.`,

          careerTitle: "Career Growth Opportunities",
          careerSubTitle:
            "Graduates of the program can pursue various career paths, including:",
          careerInformationItem_1: "Educational consulting",
          careerInformationItem_2:
            "Research activities in universities and research centers",
          careerInformationItem_3:
            "Management of educational projects and programs",
          careerInformationItem_4:
            "Work in educational institutions (teachers, lecturers, educators)",

          opportunityTitle: "Additional Opportunities",
          opportunitySubTitle: "Dual Degree",
          opportunityDescription: `One of the unique features of our program is the opportunity to obtain a 
              dual degree. Master's students can apply to a North American university, allowing them to:`,

          opportunityItem_1: "Receive two diplomas",
          opportunityItem_2:
            "Deepen their knowledge of international education methods",
          opportunityItem_3:
            "Expand their professional network and cultural experience",
          opportunityItem_4: "Explore new teaching practices and approaches",
          opportunityItem_5: "Participate in international research projects",
          opportunityItem_6:
            "Develop language skills and intercultural competence",

          opportunitySubDescription: `The dual degree program includes academic modules, joint projects, and 
              other forms of collaboration. This not only enhances the academic preparation of 
              master's students but also makes them more attractive to employers at the 
              international level.`,
        },

        journalism: {
          title: "Journalism",
          description: `The Master's program in Journalism (Media, Artificial Intelligence, and Art) 
              provides extensive opportunities, developing professional and research skills in fields 
              such as Prompt Engineering, Artificial Intelligence, Data Journalism, Media Studies, 
              Media Management, and Visual Arts. 
              The program also includes in-depth studies in project management, SMM marketing, 
              targeting, creative content creation using multimedia tools, and modern media technologies.`,

          choiceTitle: "Why Choose Us?",
          choiceItem_1: "Hybrid learning format",
          choiceItem_2:
            "Flexible schedule allowing students to combine studies with professional activities",
          choiceItem_3:
            "Opportunities for career growth in media communications, public relations, and other fields",
          choiceItem_4:
            "All courses are taught entirely in English, including by native English-speaking instructors",
        },

        psychology: {
          title: "Psychology",
          description: `The Master's program in Psychology provides students with a deep understanding 
              of psychological theories and concepts, develops practical skills in working with data 
              and clients, supports an interdisciplinary research approach, and encourages participation 
              in various psychology-related fields, including psychotherapy, education, human resource 
              management, and research.`,
        },

        linguistics: {
          title: "Linguistics",
          description: `The Linguistics program offers a unique educational experience, providing students 
              with extensive knowledge and skills in linguistics, translation, and intercultural 
              communication. Our graduates can work in companies developing linguistic software, such as 
              speech recognition programs, automatic text processing, and machine translation systems. 
              They can also contribute to the creation of various digital dictionaries, reference books, 
              encyclopedias, and websites or pursue careers as translators and educators. Our goal is to 
              develop students' critical thinking, creative problem-solving abilities, and proficiency in 
              effective communication across multiple languages.`,
        },
      },
    },
  },
  lng: "ru", // язык по умолчанию
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React уже обрабатывает экранирование
  },
});

export default i18n;
