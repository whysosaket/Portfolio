import profilePic from "../../assets/profile.jpeg";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      className="container "
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className="profile">
        <img src={profilePic} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>Saket Aryan</span>{" "}
        </h3>
        <span className="job">A Passionate Code Copier</span>
        <span className="text">
          Transforming
          <br /> ideas into surreal <br /> experiences.
        </span>
        <motion.a
          href="https://linktr.ee/whysosaket"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          connect with me
        </motion.a>
        <div className="web">Web Developer</div>
        <div className="ui">Machine Learning</div>
        <div className="freelance">App Development</div>
      </div>
    </motion.div>
  );
};

export default Home;
