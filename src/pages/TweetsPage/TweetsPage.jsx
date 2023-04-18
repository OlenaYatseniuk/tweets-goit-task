
import { Link, useLocation } from "react-router-dom";

import { getAllUsers } from "../../services/api";

import { FiArrowLeft } from "react-icons/fi";
import { useEffect, useState } from "react";
import TweetsList from "../../components/TweetsList/TweetsList";
import s from './TweetsPage.module.scss'
import Loader from "../../components/Loader/Loader";

function TweetsPage() {
  const [users, setUsers] = useState(null);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const data = await getAllUsers();
      console.log(data)
      setUsers(data);
    })();
  }, [])
  if (!users) {
    return <Loader/>;
  }
  return (<>
  <div className={s.linkWrapper}>
            <Link to={location.state?.from ?? "/"} className={s.linkBack}>
              <FiArrowLeft
                style={{
                  cursor: "pointer",
                  padding: "2px",
                  width: "30px",
                  height: "25px",
                }}
              />
              <span>Go Back</span>
            </Link>
          </div>
  <TweetsList users={users} />;</>
  )
}

export default TweetsPage;