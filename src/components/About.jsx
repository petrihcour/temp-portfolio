import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        Hello again! I'm Vanessa, a Software Developer diving headfirst into the
        world of pixels and possibilities (don't worry, I have a helmet on). With an excitement for creating seamless
        digital experiences, I've become fluent in the languages of JavaScript,
        React, HTML, and CSS.  However, my journey extends beyond programming; it's shaped by five years of dynamic leadership and creative problem-solving in the ever-evolving realm of retail management. {" "}
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        Beyond the screen, I'm a curious explorer, always seeking new
        horizons across the United States. Whether I'm enhancing technology to
        improve lives, getting lost in the frisson of live music, or immersing myself in the Dungeons & Dragons multiverse, my passion
        knows no bounds. The thrill of exploring and discovering new things shapes my journey in both tech and life.{" "}
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        Join me on this digital adventure! If you're looking for a
        developer with technical capability, collaborative spirit, and a talent
        for impactful results, let's team up. You can find me on LinkedIn for a
        virtual handshake or explore my coding escapades on GitHub. Together,
        let's conjure up some tech magic and create experiences that echo
        across the digital landscape!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
