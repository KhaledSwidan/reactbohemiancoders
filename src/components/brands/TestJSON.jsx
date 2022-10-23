import { useState } from "react";
import styles from "./brands.module.css";
import brandTest from "../imgs/africana.webp"

const TestJSON = () =>
{
  const { box, offCanvHead, btnClose, card } = styles;

  const [offCanBrand] = useState([
    {
      "char": "a",
      "num": 1,
      "brandName": "ACM",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "a",
      "num": 2,
      "brandName": "Aroma",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "a",
      "num": 3,
      "brandName": "Africana",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "a",
      "num": 4,
      "brandName": "Argan Z",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "a",
      "num": 5,
      "brandName": "Anivagene",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "a",
      "num": 6,
      "brandName": "Always",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "a",
      "num": 7,
      "brandName": "Amma Care",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "a",
      "num": 8,
      "brandName": "Avene",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "a",
      "num": 9,
      "brandName": "Avent",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "b",
      "num": 10,
      "brandName": "B.Neotra",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "b",
      "num": 11,
      "brandName": "Baby Joy",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "b",
      "num": 12,
      "brandName": "Bel Clinic",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "b",
      "num": 13,
      "brandName": "Beurer",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "b",
      "num": 14,
      "brandName": "Bio Balance",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "b",
      "num": 15,
      "brandName": "Bio Organic",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "b",
      "num": 16,
      "brandName": "Bio-Derma",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "b",
      "num": 17,
      "brandName": "Bless",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "b",
      "num": 18,
      "brandName": "Braun",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "b",
      "num": 19,
      "brandName": "Bubblzz",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "c",
      "num": 20,
      "brandName": "CHI",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "c",
      "num": 21,
      "brandName": "Clean & Clear",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "c",
      "num": 22,
      "brandName": "Clear",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "c",
      "num": 23,
      "brandName": "CLEO",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "d",
      "num": 24,
      "brandName": "Dabur Amla",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "d",
      "num": 25,
      "brandName": "DAX",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "d",
      "num": 26,
      "brandName": "Dermatique",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "d",
      "num": 27,
      "brandName": "Dove",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "d",
      "num": 28,
      "brandName": "Dr Brown",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "d",
      "num": 29,
      "brandName": "Ducray",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "d",
      "num": 30,
      "brandName": "Durex",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "e",
      "num": 31,
      "brandName": "Easy Care",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "e",
      "num": 32,
      "brandName": "ECO",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "e",
      "num": 33,
      "brandName": "Enliven",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "e",
      "num": 34,
      "brandName": "EVA",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "f",
      "num": 35,
      "brandName": "Fine Care",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "g",
      "num": 36,
      "brandName": "Garnier",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "g",
      "num": 37,
      "brandName": "Gillette",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "g",
      "num": 38,
      "brandName": "GK Keratin",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "g",
      "num": 39,
      "brandName": "Gliss",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "g",
      "num": 40,
      "brandName": "Glysolid",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "h",
      "num": 41,
      "brandName": "Hayah",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "h",
      "num": 42,
      "brandName": "Head & Shoulders",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "h",
      "num": 43,
      "brandName": "Herbal",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "i",
      "num": 44,
      "brandName": "IDEAL",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "i",
      "num": 45,
      "brandName": "ISIS",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "i",
      "num": 46,
      "brandName": "Infinity",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "j",
      "num": 47,
      "brandName": "J&J",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "k",
      "num": 48,
      "brandName": "Kaminomoto",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "k",
      "num": 49,
      "brandName": "Korloff",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "l",
      "num": 50,
      "brandName": "La Roche",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "l",
      "num": 51,
      "brandName": "Labello",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "l",
      "num": 52,
      "brandName": "LifeBuoy",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "l",
      "num": 53,
      "brandName": "Loreal",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "l",
      "num": 54,
      "brandName": "Lux",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "m",
      "num": 55,
      "brandName": "Mustela",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "n",
      "num": 56,
      "brandName": "Neutrogena",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "n",
      "num": 57,
      "brandName": "Nike",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "n",
      "num": 58,
      "brandName": "Nivea",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "n",
      "num": 59,
      "brandName": "Nuby",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "n",
      "num": 60,
      "brandName": "NUXE",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "o",
      "num": 61,
      "brandName": "OLAY",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "o",
      "num": 62,
      "brandName": "ORAL-B",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "o",
      "num": 63,
      "brandName": "ORANGE DAILY",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "o",
      "num": 64,
      "brandName": "ORS",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "o",
      "num": 65,
      "brandName": "Organic SPA",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "p",
      "num": 66,
      "brandName": "Palmer's",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "p",
      "num": 67,
      "brandName": "Pampers",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "p",
      "num": 68,
      "brandName": "Pantene",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "p",
      "num": 69,
      "brandName": "Penduline",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "p",
      "num": 70,
      "brandName": "Pharmaceris",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "p",
      "num": 71,
      "brandName": "Philips",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "r",
      "num": 72,
      "brandName": "Rexsol",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "r",
      "num": 73,
      "brandName": "Rilastil",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "s",
      "num": 74,
      "brandName": "Sandacare",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "s",
      "num": 75,
      "brandName": "Sanosan",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "s",
      "num": 76,
      "brandName": "Skin Code",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "s",
      "num": 77,
      "brandName": "Sunsilk",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "s",
      "num": 78,
      "brandName": "SVR",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "t",
      "num": 79,
      "brandName": "Topicrem",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "t",
      "num": 80,
      "brandName": "Tresemme",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "t",
      "num": 81,
      "brandName": "Trichup",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "u",
      "num": 82,
      "brandName": "URIAGE",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "v",
      "num": 83,
      "brandName": "Vatika",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "v",
      "num": 84,
      "brandName": "VICHY",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    },
    {
      "char": "y",
      "num": 85,
      "brandName": "Yves Rocher",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022",
    },
    {
      "char": "z",
      "num": 86,
      "brandName": "Zero Frizz",
      "brandDetails": "معلومات عن المنتج",
      "updateTime": "20 / 5 / 2022"
    }
  ]);

  const offCanBrandJSX = offCanBrand.map(e =>
  {
    return (
      <div key={e.id} className={`${e.char} ${box} boxBrand col-sm-6 col-md-4 col-lg-2 my-3 mx-2`} data-work={`${e.brandName}`}>
        <button className="btn p-0 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target={`#offcanvasBottom${e.num}`} aria-controls={`offcanvasBottom${e.num}`}>
          <img className="img-fluid rounded" src={brandTest} alt={`${e.brandName}`} />
        </button>
        <div className="offcanvas offcanvas-bottom" data-bs-scroll="true" tabIndex="-1" id={`offcanvasBottom${e.num}`} aria-labelledby={`offcanvasBottom${e.num}Label`} style={{ height: "90%" }}>
          <div className={`${offCanvHead} offcanvas-header`}>
            <h5 className="offcanvas-title" id={`offcanvasWithBothOptionsLabel${e.num}`}>منتجات {e.brandName}</h5>
            <button type="button" className={`btn-close ${btnClose}`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="container">
              <div className="row justify-content-center">
                <div className="con col-sm-6 col-md-3 my-2">
                  <div className={card}>
                    <img src={brandTest} className="card-img-top mx-auto img-fluid rounded-top" alt={`${e.brandName}`} />
                    <div className="card-body py-2 px-1">
                      <h5 className="card-title">{e.brandName}</h5>
                      <p className="card-text">{e.brandDetails}</p>
                      <p className="card-text"><small className=" ">أخر تحديث {e.updateTime}</small></p>
                      <div className="card-body-options">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="price">
                          <p className="fw-bold fs-5">50 EGP</p>
                        </div>
                        <button type="button" className="btn btn-primary rounded-pill">اضافه الى السلة</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {offCanBrandJSX}
    </>
  )
}

export default TestJSON