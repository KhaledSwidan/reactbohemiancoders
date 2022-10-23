import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "../blog.module.css";

const SecondBlog = () =>
{
  const { card, mainTopics } = styles;
  const [blogJSX] = useState([
    {
      "id": 1,
      "title": "1 عنوان المقال",
      "content": "محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال ",
      "date": "March 5, 2022",
      "imgSrc": "https://picsum.photos/id/49/720/480"
    },
    {
      "id": 2,
      "title": "2 عنوان المقال",
      "content": "محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال ",
      "date": "March 5, 2022",
      "imgSrc": "https://picsum.photos/id/49/720/480"
    },
    {
      "id": 3,
      "title": "3 عنوان المقال",
      "content": "محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال ",
      "date": "March 5, 2022",
      "imgSrc": "https://picsum.photos/id/49/720/480"
    },
    {
      "id": 4,
      "title": "4 عنوان المقال",
      "content": "محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال ",
      "date": "March 5, 2022",
      "imgSrc": "https://picsum.photos/id/49/720/480"
    },
    {
      "id": 5,
      "title": "5 عنوان المقال",
      "content": "محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال محتوي المقال ",
      "date": "March 5, 2022",
      "imgSrc": "https://picsum.photos/id/49/720/480"
    }
  ]);
  
  const finalBlogJSX = blogJSX.map(e =>
  {
    return (
      <div className="col-md-6 col-lg-4 mt-3" key={e.id}>
        <div className={`${card} bg-white rounded`}>
          <img src={e.imgSrc} className="card-img-top rounded-top" alt={e.title} />
          <div className="card-body py-3 px-2">
            <h5 className="card-title">{e.title}</h5>
            <span className="text-black-50" style={{ fontSize: ".7rem" }}>{e.date}</span>
            <p className="card-text text-muted">{e.content}</p>
            <Link to="/" className="btn btn-primary">اعرف المزيد</Link>
          </div>
        </div>
      </div>
    )
  });

  return (
    <>
      <div className={`${mainTopics} blog-two`} id="secondBlog">
        <h2 className="py-4 px-3 my-2 d-flex align-items-center mx-4 rounded">الأمراض الموسمية</h2>
        <div className="container">
          <div className="row py-4 justify-content-center mx-4">
            {finalBlogJSX}
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondBlog