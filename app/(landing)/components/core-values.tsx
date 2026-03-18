// "use client";

// import { motion } from "framer-motion"; // adjust to your import
// import { ABOUT_PAGE_CONTENT, getIconComponent } from "../about/page";

// export default function CoreValuesSection() {
//   return (
//     <section className="w-full">
    
//       <div className="w-full px-6 pt-24">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center max-w-2xl mx-auto mb-16"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
//             {ABOUT_PAGE_CONTENT.vision.sectionTitle}
//           </h2>
//           <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
//             {ABOUT_PAGE_CONTENT.vision.paragraphs[0]}
//           </p>
//         </motion.div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-dashed divide-slate-300 dark:divide-slate-700 border-t border-b border-dashed border-slate-300 dark:border-slate-700 sm:[&>*:not(:last-child)]:border-r sm:[&>*:not(:last-child)]:border-dashed sm:[&>*:not(:last-child)]:border-slate-300 dark:sm:[&>*:not(:last-child)]:border-slate-700">
//         {ABOUT_PAGE_CONTENT.coreValues.map((val, idx) => {
//           const IconComponent = getIconComponent(val.icon);
//           return (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1, duration: 0.5 }}
//               className="flex flex-col gap-5 px-6 py-10"
//             >
//               <IconComponent className="w-10 h-10 text-slate-700 dark:text-slate-300" />

//               <div className="flex flex-col gap-2 pt-10 lg:pt-16">
//                 <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
//                   {val.title}
//                 </h3>
//                 <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
//                   {val.description}
//                 </p>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </ section>
//   );
// }