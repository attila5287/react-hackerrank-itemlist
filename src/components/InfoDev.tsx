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
                  ease: "linear",
                }}
              />
              <a
                className="text-info"
                href="https://www.hackerrank.com/challenges/item-list-manager/problem"
              >
                HackerRank REACT interview question
              </a>
              , click for code:
              <i className="fab fa-github mx-1"></i>
              <a href="https://github.com/attila5287/react-hackerrank-itemlist">
                attila5287's solution
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}