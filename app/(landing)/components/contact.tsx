"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactSupport from "./cont";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form Submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    reset();
    alert("Message sent successfully!");
  };

  return (
    <section className="bg-white py-12 sm:py-10 relative overflow-hidden">
      <div className="max-w-7xl pb-4 mx-auto px-4 sm:px-6 relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-3">
            Connect with <span className="text-theme-primary">our team</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto">
            We're here to help you succeed. Reach out with any questions about
            our services.
          </p>
        </motion.div>
      
        <div className="w-full">
             <ContactSupport/>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
