import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "../blog.module.css";

const GeneralBlog = () =>
{
  const { card } = styles;
  const [blogJSX, setBlogJSX] = useState([]);

  useEffect(() =>
  {
    fetch("http://localhost:8000/blogs")
      .then(res => res.json())
      .then(data => setBlogJSX(data))
  }, []);
  
  const finalBlogJSX = blogJSX.map((e) =>
  {
    return (
      <>  
        <div className="col-md-6 col-lg-4 mt-3">
          <div className={`${card} bg-white rounded`} key={e.toString()}>
            <img src={e.imgSrc} className="card-img-top rounded-top" alt={e.title} />
            <div className="card-body py-3 px-2">
              <h5 className="card-title">{e.title}</h5>
              <span className="text-black-50" style={{ fontSize: ".7rem" }}>{e.date}</span>
              <p className="card-text text-muted">{e.content}</p>
              <Link to="/" className="btn btn-primary">اعرف المزيد</Link>
            </div>
          </div>
        </div>
      </>
    )
  });

  return (
    <>
      <div className="general" id="generalBlog">
        <h2 className="py-4 px-3 my-2 d-flex align-items-center mx-4 rounded">أحدث الأخبار الطبية</h2>
        <div className="container">
          <div className="row py-4 justify-content-center mx-4">
            {finalBlogJSX}
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralBlog