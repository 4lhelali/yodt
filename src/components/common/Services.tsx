"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type SectionKey =
  | "education"
  | "activities"
  | "services"
  | "legal"
  | "health"
  | "funActivities"
  | "travels"
  | "creativeness"
  | "culture";

const Services = () => {
  const [openSection, setOpenSection] = useState<Record<SectionKey, boolean>>({
    education: false,
    activities: false,
    services: false,
    legal: false,
    health: false,
    funActivities: false,
    travels: false,
    creativeness: false,
    culture: false,
  });

  const toggleSection = (section: SectionKey) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderToggle = (
    label: string,
    section: SectionKey,
    content: React.ReactNode,
  ) => (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-md transition-all hover:shadow-xl dark:border-black dark:bg-black">
      <button
        onClick={() => toggleSection(section)}
        className="text-red-700 flex w-full items-center justify-end text-sm font-semibold dark:text-red"
        aria-expanded={openSection[section]}
      >
        <div className="flex items-center gap-2">
          <span>{label}</span>
          <motion.div
            animate={{ rotate: openSection[section] ? 90 : 0 }}
            transition={{ duration: 0.1 }}
            className="rounded-full bg-red-100 p-1 shadow-sm transition-colors duration-300 hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800"
          >
            <ChevronLeft className="h-4 w-4 text-red-600 dark:text-red-300" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {openSection[section] && (
          <motion.div
            key={section}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden pt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <section className="rtl mx-auto max-w-7xl px-4 py-16 text-right">
      <div className="mb-14 text-center">
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          <span className="relative inline-block after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-16 after:-translate-x-1/2 after:content-['']">
            Our Services
          </span>
        </h2>
        <div className="mx-auto h-1 w-24 bg-primary"></div>
        
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Educational */}
        <div>
          <h3 className="mb-4 text-center text-2xl font-bold text-black dark:text-white">
            الجانب التعليمي
          </h3>
          {renderToggle(
            "الدورات التخصصية",
            "education",
            <p>نص تمثيلي لمحتوى الدورات التخصصية.</p>,
          )}
          {renderToggle(
            "برامج المهارات",
            "creativeness",
            <p>نص تمثيلي لمحتوى برامج المهارات.</p>,
          )}
          {renderToggle(
            "اللجنة الثقافية",
            "culture",
            <p>نص تمثيلي لمحتوى اللجنة الثقافية.</p>,
          )}
        </div>

        {/* Activities */}
        <div>
          <h3 className="mb-4 text-center text-2xl font-bold text-black dark:text-white">
            جانب الأنشطة
          </h3>
          {renderToggle(
            "الفعاليات الوطنية والدينية",
            "activities",
            <p>فعاليات تهدف لتعزيز الهوية والانتماء.</p>,
          )}
          {renderToggle(
            "الأنشطة الترفيهية والثقافية",
            "funActivities",
            <p>أنشطة مليئة بالمتعة والفائدة الثقافية.</p>,
          )}
          {renderToggle(
            "الرحلات",
            "travels",
            <p>تنظيم رحلات تعليمية وترفيهية ضمن برامجنا.</p>,
          )}
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-4 text-center text-2xl font-bold text-black dark:text-white">
            الجانب الخدمي
          </h3>
          {renderToggle(
            "خدمات جامعية",
            "services",
            <p>استشارات أكاديمية ومساعدة في المعاملات الجامعية.</p>,
          )}
          {renderToggle(
            "خدمات قانونية",
            "legal",
            <p>دعم قانوني للطلاب بالتعاون مع الجهات الرسمية.</p>,
          )}
          {renderToggle(
            "خدمات صحية",
            "health",
            <p>توجيهات وتأمين صحي وإرشاد طبي للطلاب.</p>,
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
