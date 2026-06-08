import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0, y: 36, scale: 0.975 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -24, scale: 0.98 },
}

const pageTransition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.55,
}

export default function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}
