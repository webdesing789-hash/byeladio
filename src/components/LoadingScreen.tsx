import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 3000; // 3 seconds total
    const interval = 30;
    const increment = (100 * interval) / duration;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment + Math.random() * 2;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
        >
          {/* Background marquee text */}
          <div className="absolute inset-0 flex items-center overflow-hidden opacity-5">
            <div className="marquee whitespace-nowrap">
              <span className="font-display text-[15vw] font-bold tracking-tight">
                A CREATIVE DEVELOPER • A CREATIVE DESIGNER • A CREATIVE DEVELOPER • A CREATIVE DESIGNER •
              </span>
            </div>
          </div>

          {/* Loading content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative z-10 text-center"
          >
            <motion.h1 
              className="font-display text-4xl md:text-6xl font-bold mb-8 text-gradient"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Welcome
            </motion.h1>

            {/* Loading bar container */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-full px-8 py-4 min-w-[280px] md:min-w-[350px]"
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="font-display font-bold text-foreground tracking-wider">
                    LOADING
                  </span>
                  <span className="font-display font-bold text-primary tabular-nums">
                    {Math.min(100, Math.round(progress))}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
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
            </div>
          </motion.div>

          {/* Animated dots */}
          <motion.div 
            className="absolute bottom-20 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
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
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
