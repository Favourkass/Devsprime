import React from "react";
import LeaveCommentContainer from "./LeaveComment.styles";
import { SubHeader, Paragraph } from "../../../../components/typography/index";
import Button from "../../../../components/button/index";
import { useSelector } from "react-redux";
import request, { headers } from "../../../../request";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";


const LeaveComment = () => {
  let user = useSelector((state) => state.user.users);
  const { blogId } = useParams();
  const [comment, setComment] = useState();
  const [email] = useState();
  const [submit, setSubmit] = useState('Proceed')
  
const handleSubmit = async event => {
    event.preventDefault()
    setSubmit('Loading. . .')
    if (email==="") {
      toast.error("You must login first")
      setSubmit('Proceed')
      return
    }
    if (!comment) {
      toast.error("Please write a comment")
      setSubmit('Proceed')
      return
    }
    setComment('')
    
    try {
      const token = localStorage.getItem('token')
      const response = await request.post(`/blogs/${blogId}/comments/`, {
        "comment": comment,
        }, headers(token));
      if (response.data.message === "success") {
        setSubmit('Comment sent')
        
      }
    } catch (err) {
      toast.warn("Only logged in users are allowed to comment")
      setSubmit('Proceed')
    }

  }

  const handleChange = event => {
    setComment(event.target.value)
    
  }

return (
        <LeaveCommentContainer className="container">
          <SubHeader children="Leave a Comment" color="black" />
          <Paragraph children="Your email address will not be published" />

          <form onSubmit={handleSubmit}>
            {user.data === undefined ? (
              <p></p>
            ) : (
              <div>
                <input type="text"  name="email" value={user.data.email} />
                <input type="hidden"  name="blogId" value={blogId} />
                
              </div>
            )}

<textarea
                  className="inputarea textarea"
                  type="text"
                  name="comment"
                  id="comment"
                  onChange={handleChange}
                  value={comment}
                  placeholder="write your comment here"
                  
                  rows="4" 
                  columns="50"
                />
                <Button
              type="submit"
              medium
              primary
              handleClick
              width
              children={submit}
            />
          </form>
        </LeaveCommentContainer>
  );
};

export default LeaveComment;
