import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Deepa Malpani
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
      Founder / 
        <span className="text-textGreen tracking-wide"> COO</span>
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Deepa Malpani is a top-notch corporate pro known for managing people and
hitting targets nationwide.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          She s praised for her professionalism, quick
learning, and adaptability. With tons of experience and sharp strategic
skills,
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Deepa is ready to drive business operations and lead the venture to
          success.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
