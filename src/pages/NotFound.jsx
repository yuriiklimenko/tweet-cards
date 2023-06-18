import backgroundImage from "../img/404.png";
import { GoBackButton } from "../GoBackButton/GoBackButton";
import { BackgroundImage } from "../BackgroundImage/BackgroundImage";

const NotFound = () => {
  return (
    <BackgroundImage imageUrl={backgroundImage}>
      <GoBackButton />
    </BackgroundImage>
  );
};

export default NotFound;
