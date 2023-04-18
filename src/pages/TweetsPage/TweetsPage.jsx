import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { getAllUsers } from "../../services/api";

import TweetsList from "../../components/TweetsList/TweetsList";
import Loader from "../../components/Loader/Loader";

import { FiArrowLeft } from "react-icons/fi";
import s from "./TweetsPage.module.scss";

function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await getAllUsers(page);
      setUsers([...users, ...data]);
      setIsLoading(false);
    })();
    // eslint-disable-next-line
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (!users.length) {
    return <Loader />;
  } else {
    return (
      <>
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
        <TweetsList users={users} />
        {isLoading && <Loader />}
        <button
          type="button"
          className={s.tweets__button}
          onClick={handleLoadMore}
          disabled={page === 4}
        >
          Load more
        </button>
      </>
    );
  }
}

export default TweetsPage;
