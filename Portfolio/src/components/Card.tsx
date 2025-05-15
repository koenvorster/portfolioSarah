import { motion } from "framer-motion";

const Card = ({ title, description, buttonText, onClick }: {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="card"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
      <button onClick={onClick}>{buttonText}</button>
    </motion.div>
  );
};

const CardContainer = () => {
  return (
    <div className="card-container">
      <Card
        title=""
        description="Discover what I can do!"
        buttonText="SkillsSection"
        onClick={() => alert("Navigating to SkillsSection")}
      />
      <Card
        title=""
        description="Find out my personality."
        buttonText="About Me"
        onClick={() => alert("Navigating to About Me")}
      />
      <Card
        title=""
        description="Want to work together?"
        buttonText="Contact"
        onClick={() => alert("Navigating to Contact")}
      />
    </div>
  );
};

export default CardContainer;
