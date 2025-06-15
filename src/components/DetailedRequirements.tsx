import { motion } from "framer-motion";

export default function DetailedRequirements() {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-sm-6">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            <h5 className="text-center text-warning">
              <i className="fas fa-exclamation-triangle mx-2"></i>
              <i> Detailed Requirements</i>
            </h5>
          </motion.div>
          <ul>
            {[
              "-WHEN THE APPLICATION LOADS:",
              "It should display an empty list.",
              "The input field should accept user text input.",
              "-WHEN THE BUTTON IS CLICKED:",
              "The text from the input field should be added to the list.",
              "The input field should be cleared.",
              "-IF THE INPUT FIELD IS EMPTY AND THE BUTTON IS CLICKED: ",
              "Nothing should be added to the list.",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: (index + 5) * 0.35, duration: 0.5 }}
              >
                <li style={{ listStyleType: "none" }}>
                  {String(item).charAt(0) !== "-" && (
                    <i className="fas fa-check mx-2"></i>
                  )}
                  {item}
                </li>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}