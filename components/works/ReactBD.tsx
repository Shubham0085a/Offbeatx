import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Antony SJ
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Founder / <span className="text-textGreen tracking-wide">CEO</span></p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Antony is a seasoned entrepreneur in the HoReCa industry, with over 15
          years of experience.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Coming from an IT background, he s a pro at managing operations and
          keeping costs in check to boost profits. Besides running his own
          cafe/restaurant, he also offers consultancy services to HoReCa
          businesses aiming to optimize their operations.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          He s known for his stellar results in strategy development, cost
          control, budget planning, and leading teams.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          His innovative approach has a proven track record of driving growth
          and success, making him a valuable asset for any organization looking
          to improve operations and profitability.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
