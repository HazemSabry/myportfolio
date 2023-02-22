import whatsappIcon from "../assets/whatsapp.png";
import github from "../assets/github.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/hazem-sabry-1b1ab021a/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://wa.me/01117176767"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="whatsapp-link" src={whatsappIcon} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/hazem.sabry.5473/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/HazemSabry"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={github} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
