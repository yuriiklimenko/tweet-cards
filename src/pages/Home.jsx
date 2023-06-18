import { Heading } from "../Heading/Heading";
import backgroundImage from "../img/bg.png";
import { BackgroundImage } from "../BackgroundImage/BackgroundImage";

const Home = () => {
  return (
    <BackgroundImage imageUrl={backgroundImage}>
      <Heading text="Welcome to Tweet Cards App!" />
    </BackgroundImage>
  );
};

export default Home;
