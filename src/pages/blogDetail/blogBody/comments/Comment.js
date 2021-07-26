import { AllComments } from "./Comment.styles";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { blogComments } from "../../../../redux/actions/blogActions/blogAction";
// import Reply from "./Reply";
import request from "../../../../request";
import dateConverter from "../../../blogs/blogcard/dateConverter"


const CommentThread = () => {
  const { blogId } = useParams();
  let blogCommentState = useSelector((state) => state.blogs.comments);
  let res = blogCommentState.data;
  const dispatch = useDispatch();
  const fetchComment = async (id) => {
    const response = await request
      .get(`/blogs/${id}/comments/`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(blogComments(response.data));
  };
  useEffect(() => {
    fetchComment(blogId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchComment]);

  return (
    <>
      {res && Object.keys(res).length > 0 ? (
        res.data.map((comment) => {
          return (
            <AllComments>
              <div className="container">
                <ul className="comment">
                  <img
                    className="comment-image"
                    src="https://res.cloudinary.com/devsprime/image/upload/v1625618499/Avatar/avatar-1577909_960_720_oxff9k.png"
                    alt="pimage"
                    width="70"
                  />
                  <li>
                    <p>{comment.comment}</p>
                    <p>
                      {dateConverter(comment.created_at)}
                      <span>
                        {" "}
                        <b>Reply</b>
                      </span>
                    </p>
                    {/* <Reply /> */}
                  </li>
                </ul>
              </div>
            </AllComments>
          );
        })
      ) : (
        <div>loading..</div>
      )}
    </>
  );
};

export default CommentThread;
