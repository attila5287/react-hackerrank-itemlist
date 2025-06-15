import { motion } from "framer-motion";

export default function InfoDev() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="d-block"
          >
            <p className="my-0">
              <motion.i 
                className="fab fa-react mx-2"
                animate={{ 
                  rotate: 360,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <a
                className="text-info"
                href="https://www.hackerrank.com/challenges/item-list-manager/problem"
              >
                HackerRank REACT interview question,
              </a>
              <i className="mx-1">solved by:</i>
              <motion.a
                className="fab fa-github mx-2"
                href="https://github.com/attila5287"
                whileHover={{ scale: 1.2 }}
              >
                <motion.span
                  className="text-info mx-2"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 1000,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  attila5287
                </motion.span>
              </motion.a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}