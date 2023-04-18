import TweetsCard from "../TweetsCard/TweetsCard";
import s from './TweetsList.module.scss'

function TweetsList({ users }) {
    console.log(users,'users in TweetsList')
    return (
        <ul className={s.tweets__list}>
            {users.map(user => {
                return <TweetsCard key={user.id} user={user} />
            })}
            
  </ul>
  );
}

export default TweetsList;