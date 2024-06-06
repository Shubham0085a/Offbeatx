import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Bibin Moncy
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        <span className="text-textGreen tracking-wide">
          Chief Product Officer
        </span>
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Bibin is a seasoned pro who s launched two successful mobile apps.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          He s been hands-on in every step, from design to marketing, showing
          his expertise.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          As a Marketing Executive in the internet industry, he shines in social
          media management and modern marketing.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          . Bibin s diverse skills make him a valuable asset in app development
          and internet marketing.
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
