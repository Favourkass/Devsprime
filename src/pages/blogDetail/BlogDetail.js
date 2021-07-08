import NavBar from "../../components/navbar/NavBarWraper/index";
import Footer from "../../components/Footer/index";
import BlogBody from "./blogBody/index"
import CommentThread from "./blogBody/comments/Comment"
import LeaveComment from "./blogBody/comments/LeaveComment"

const BlogDetail = () => {
  return (
    <>
      <NavBar />
      <BlogBody/>
      <CommentThread />
      <LeaveComment/>
      <Footer />

    </>
  );
};

export default BlogDetail;
