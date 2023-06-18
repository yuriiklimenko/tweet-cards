import PropTypes from "prop-types";
import twoTabletsImg from "../../img/twoTabletsImg.png";
import logo from "../../img/logo.png";
import { useState, useEffect } from "react";
import css from "./UserItem.module.css";

import { updateUsersData } from "../../apiOperations/Operations";

export const UserItem = ({ user }) => {
  const { user: name, id, avatar, tweets, followers } = user;
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(followers);

  useEffect(() => {
    const savedArray = localStorage.getItem("idArr");
    const newArray = savedArray ? JSON.parse(savedArray) : [];
    const isIdPresent = newArray.includes(id);

    setIsFollowing(isIdPresent);
  }, [id]);

  const handleFollowClick = () => {
    if (!isFollowing) {
      const savedArray = localStorage.getItem("idArr");

      const newArray = savedArray ? JSON.parse(savedArray) : [];

      newArray.push(id);

      localStorage.setItem("idArr", JSON.stringify(newArray));

      updateUsersData(id, {
        followers: followersCount + 1,
      });

      setFollowersCount(followersCount + 1);
    }

    if (isFollowing) {
      const savedArray = localStorage.getItem("idArr");

      if (savedArray) {
        const newArray = JSON.parse(savedArray);
        const updatedArray = newArray.filter((num) => num !== id);

        localStorage.setItem("idArr", JSON.stringify(updatedArray));
      }

      updateUsersData(id, {
        followers: followersCount - 1,
      });
      setFollowersCount(followersCount - 1);
    }
    setIsFollowing(!isFollowing);
  };

  return (
    <div className={css.card}>
      <img className={css.logoImg} src={logo} alt="logo" />
      <img className={css.twoTabletsImg} src={twoTabletsImg} alt="twoTablets" />
      <div className={css.line}></div>
      <div className={css.wrapperAvatar}>
        <img className={css.avatar} src={avatar} alt={name} />
      </div>
      <p className={css.tweets}>{tweets} tweets</p>

      <p className={css.followers}>
        {followersCount.toLocaleString("en-US", { useGrouping: true })}{" "}
        Followers
      </p>

      <button
        type="button"
        className={css.btn}
        style={{ backgroundColor: isFollowing ? "#5CD3A8" : "#EBD8FF" }}
        onClick={handleFollowClick}
      >
        {isFollowing ? "following" : "follow"}
      </button>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
};
