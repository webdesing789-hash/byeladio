import { motion, AnimatePresence } from 'framer-motion';

interface RedirectLoaderProps {
  isVisible: boolean;
  targetName: string;
}

const RedirectLoader = ({ isVisible, targetName }: RedirectLoaderProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative z-10 text-center"
          >
            <motion.p
              className="font-display text-lg md:text-xl font-medium mb-6 text-muted-foreground"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Redirecting to {targetName}...
            </motion.p>

            {/* Loading bar container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-full px-6 py-3 min-w-[200px] md:min-w-[280px]"
            >
              {/* Progress bar */}
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  style={{
                    boxShadow: '0 0 20px hsl(260 80% 60% / 0.5)',
                  }}
                />
              </div>
            </motion.div>

            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-full blur-xl opacity-30 -z-10"
              style={{
                background: 'linear-gradient(135deg, hsl(260 80% 60% / 0.3), hsl(180 70% 50% / 0.3))',
              }}
            />
          </motion.div>

          {/* Animated dots */}
          <motion.div 
            className="mt-8 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.15
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RedirectLoader;
