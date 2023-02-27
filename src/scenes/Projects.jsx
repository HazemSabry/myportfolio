import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import pillar from "../assets/project-1.png";
import dashboard from "../assets/project-2.png";
import Omnifood from "../assets/project-3.png";
import CommEleEngineeringWebsite from "../assets/project-4.png";
import teslaCloneMaster from "../assets/project-5.png";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, image, link, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <div style={{ margin: "10px" }}>
      <motion.div variants={projectVariant} className="relative">
        <a href={link} rel="noreferrer" target="_blank">
          <div className={overlayStyles} style={{ overflow: "hidden" }}>
            <p className="text-2xl font-playfair">{title}</p>
            <p className="mt-7">{description}</p>
          </div>
        </a>
        <img src={image} alt={projectTitle} />
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          showcases design, development, and implementation; features visual
          materials; presents challenges and outcomes; explore project details
          and progress.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Pillar"
            image={pillar}
            link="https://pillarcomsa.vercel.app/"
            description="An architecture company website showcases services, portfolio, team members, and awards. It provides information on design approach, resources, and contact information for prospective clients.(incomplete because of company mangers problems)"
          />
          <Project
            title="Website Dashboard"
            image={dashboard}
            link="https://pillarcomsa.vercel.app/dashboard/app"
            description="A website dashboard for user accounts is a platform displaying personalized information, settings, and controls for registered users to manage their profiles, subscriptions, and activities."
          />

          <Project
            title="Tesla-Clone-Master"
            image={teslaCloneMaster}
            link="https://effortless-kheer-b24264.netlify.app"
            description="Tesla-clone-master is a front-end project created for self-training. Its landing page serves as an introduction, including a header section and a hero section."
          />

          <Project
            title="Omnifood"
            image={Omnifood}
            link="https://omnifood-hazem-sabry.netlify.app/"
            description="A website to improve HTML, CSS, and JS skills offers tutorials, exercises, and quizzes to enhance proficiency in front-end web development."
          />

          <Project
            title="Comm-Ele-engineering-website"
            image={CommEleEngineeringWebsite}
            link="https://hazemsabry.github.io/Comm-Ele-engineering-website/"
            description="Developed a modern and responsive website for the Electrical Engineering department at my college as a front-end web developer in my beginning."
          />

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
