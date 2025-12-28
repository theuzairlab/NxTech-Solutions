"use client";

import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_LINK || "";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999999999] bg-black/50 flex items-center justify-center p-0 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-none sm:rounded-2xl shadow-2xl w-full h-[80vh] mt-10 sm:w-full sm:max-w-4xl sm:h-[80vh] flex flex-col overflow-hidden"
          >
            <div className="bg-primary text-white p-3 sm:p-4 flex items-center justify-between">
              <div className="font-semibold text-sm sm:text-base">Book a Free Consultation</div>
              <button
                onClick={onClose}
                className="p-1 sm:p-1.5 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src={calendlyUrl}
                className="w-full h-full border-0"
                title="Calendly Scheduling"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

