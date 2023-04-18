import React from "react";
import { Comment } from "react-loader-spinner";

import s from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={s.loader}>
      <Comment
        visible={true}
        height="100"
        width="100"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#471CA9"
      />
    </div>
  );
};

export default Loader;
