import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const href =
    "https://wa.me/5511917830499?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Maestro%20AI%20OS";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full grid place-items-center shadow-2xl transition-all duration-300"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={2} />
    </motion.a>
  );
}
