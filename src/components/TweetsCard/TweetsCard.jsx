import picture1x from "../../assets/pictures/picture2-1x.png";
import picture2x from "../../assets/pictures/picture2-2x.png";
import logo1x from "../../assets/pictures/logo-1x.png";
import logo2x from "../../assets/pictures/logo-2x.png";

import classNames from "classnames";

import s from "./TweetsCard.module.scss";
import { useState } from "react";
import { followUser, unFollowUser } from "../../services/api";

function TweetsCard({ user }) {
    
  const [folowing, setFollowing] = useState(user.followers);
  const [isFollowed, setIsFollowed] = useState(user.isFollowed ?? false);
  const numberFormatter = new Intl.NumberFormat("en-IN");

  const getClassName = (isActive) => {
    return isActive
      ? classNames({
          [s.tweets_button]: true,
          [s.tweets__activeButton]: true,
        })
      : classNames({
          [s.tweets_button]: true,
          [s.tweets__activeButton]: false,
        });
  };

  const handleFollowing = async () => {
      setIsFollowed(true);
    setFollowing((prevState) => prevState + 1);
      await followUser(user.id, folowing + 1)
  };

  const handleUnFollowing = async () => {
      setIsFollowed(false);
    setFollowing((prevState) => prevState - 1);
      await unFollowUser(user.id, folowing - 1)
  };

  return (
    <li className={s.tweets__container}>
      <picture>
        <source srcSet={`${picture1x} 1x, ${picture2x} 2x`} />
        <img src={picture1x} alt="decoration background" />
      </picture>

      <picture className={s.tweets__logo}>
        <source srcSet={`${logo1x} 1x, ${logo2x} 2x`} />
        <img src={logo1x} alt="logo" />
      </picture>
      <div className={s.tweets__line} />
      <div className={s.tweets__avatarWrapper} />
      <img className={s.tweets__avatar} alt="user avatar" src={`${user.avatar}`} />
      <p className={s.tweets__tweetsText}>{user.tweets} Tweets</p>
      <p className={s.tweets__followers}>
        {numberFormatter.format(folowing)} followers
      </p>
      <button
        type="button"
        className={getClassName(isFollowed)}
        onClick={isFollowed ? handleUnFollowing : handleFollowing}
      >
        {isFollowed ? "Following" : "Follow"}
      </button>
    </li>
  );
}

export default TweetsCard;
