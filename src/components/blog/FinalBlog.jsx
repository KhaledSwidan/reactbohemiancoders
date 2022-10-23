import MainTitle from "../mainTitle/MainTitle";
import styles from "./blog.module.css";
import NavBlog from "./blog nav/NavBlog";
import { Outlet } from "react-router-dom";

const FinalBlog = () =>
{
  const { blog } = styles;
  return (
    <>
      <section className={`${blog} py-5" id="blog `}>
        <div className="container py-4">
          <MainTitle title="المقالات الطبية"
            content="تعرف على اخر المقالات الطبية والمواضيع المتعلقة بالصحة والأدوية
          ومستحضرات التجميل" />
          <NavBlog />
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default FinalBlog