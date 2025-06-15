import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="mb-2">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <h1 className="my-0 text-success text-center">
              <i className="fab fa-hackerrank mx-2"></i>
              <a href="https://react-hackerrank-itemlist.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-success">
                Item List Manager 
              </a>
            </h1>
          </motion.div>
        </div>
  );
}
