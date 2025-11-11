import { motion } from "framer-motion"

const Asection1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 280 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center px-4 pt-40 pb-[40px] text-center max-w-auto mx-auto w-full bg-[#f9f9f9]"
    >
      {/* Enhanced Content Container */}
      <div className="max-w-[800px] relative">
        {/* Decorative Element */}
        {/* <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#13233b] rounded-full" /> */}

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-[30px] md:text-[60px] font-bold leading-tight text-[#13233b] mb-8 tracking-[0.03em]"
          style={{ fontFamily: "ROGBold" }}
        >
          Bringing the Future of Wellness to You
        </motion.h2>

        {/* First Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-[20px] md:text-[22px] leading-[1.6] text-[#3a4458] font-semibold mb-6" style={{ fontFamily: "Minionpro" }}
        >
          At Aayush Wellness, we believe that health is not just about curing illness it's about preventing it,
          enhancing it, and making wellness a way of life.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="text-[18px] md:text-[20px] leading-[1.4] text-[#3a4458] font-regular mb-10" style={{ fontFamily: "Minionpro" }}
        >
          With a deep-rooted commitment to science-backed innovation and natural health solutions, we are redefining the
          wellness experience—integrating nutraceuticals, personalized healthcare, preventive wellness, and digital
          health solutions to create a seamless journey toward better living.
        </motion.p>

        {/* Decorative Element */}
        <div className="w-16 h-1 bg-[#13233b] rounded-full mx-auto mt-4" />
      </div>
    </motion.div>
  )
}

export default Asection1;
