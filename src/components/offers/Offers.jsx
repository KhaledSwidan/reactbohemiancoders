import MainTitle from "../mainTitle/MainTitle";
import Deals from "./Deals";
import Discounts from "./Discounts";
import styles from "./offers.module.css";

const Offers = () =>
{
  const { offers, targets } = styles;
  return (
    <>
      <section id="offers" className={`${offers} py-5 position-relative`}>
        <div className="container">
          <MainTitle
            title="العروض والخصومات"
            content="تعرف على العروض والخصومات المتاحة" />
          <div className={targets}>
            <Deals />
            <hr />
            <Discounts />
          </div>
        </div>
      </section>
    </>
  );
};

export default Offers