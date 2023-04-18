import s from "./TweetsCard.module.scss";
import picture1x from "../../assets/pictures/picture2-1x.png";
import picture2x from "../../assets/pictures/picture2-2x.png";
import logo1x from "../../assets/pictures/logo-1x.png";
import logo2x from "../../assets/pictures/logo-2x.png";

function TweetsCard({user:{avatar, followers, tweets}}) {
    // console.log("part in card",user)
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
      <img
        className={s.tweets__avatar}
        alt="user avatar"
        src={`${avatar}`}
      />
      <p className={s.tweets__tweetsText}>{tweets} Tweets</p>
      <p className={s.tweets__followers}>{followers} followers</p>
      <button type="button" className={s.tweets_button}>
        Follow
      </button>
    </li>
  );
}

export default TweetsCard;
