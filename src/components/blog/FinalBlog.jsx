import MainTitle from "../mainTitle/MainTitle";
import FirstBlog from "./blog one/FirstBlog";
import styles from "./blog.module.css";
import GeneralBlog from "./general blog/GeneralBlog";
import SecondBlog from "./blog two/SecondBlog";
import ThirdBlog from "./blog three/ThirdBlog";
import ForthBlog from "./blog four/ForthBlog";

const FinalBlog = () =>
{
  const {blog, mainTopics} = styles;
  return (
    <>
      <section className={`${blog} py-5" id="blog `}>
        <div className="container py-4">
          <MainTitle title="المقالات الطبية"
            content="تعرف على اخر المقالات الطبية والمواضيع المتعلقة بالصحة والأدوية
          ومستحضرات التجميل" />
          <div className={`${mainTopics} scrollspy-example`} data-bs-spy="scroll" data-bs-target="#navBlog" data-bs-smooth-scroll="true" tabIndex={-1}>
            <GeneralBlog />
            <hr />
            <FirstBlog />
            <hr />
            <SecondBlog />
            <hr />
            <ThirdBlog />
            <hr />
            <ForthBlog />
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalBlog