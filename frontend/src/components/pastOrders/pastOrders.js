//AUTHOR: MIHIR MESIA
//AUTHOR: MIHIR MESIA
import { useState, useEffect } from "react";
import OrderComponent from "./order-component";
import default_img from "../../images/empty-cart-img.png";
import Logo from "../header/logo";
import "../../Reused.css";
import "./pastOrder.css";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";
export default function PastOrders() {
  const [past_orders, setPastOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetch_data() {
      setLoading(true);
      try {
        const user_name = await fetch("/api/account/getUser");
        const user = await user_name.json();
        const fetched_data = await fetch(
          "/api/fetch_recent_orders/" + user.user
        );
        const data = await fetched_data.json();
        const cart = [];
        data.map((element) => {
          element.orders.map((e) => {
            e.cart.map((cart_data) => {
              cart.push(cart_data);
            });
          });
        });
        setPastOrders(cart);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    fetch_data();
  }, []);
  function pastOrdersUI() {
    return (
      <div>
        <Logo />
        <div className="order_mainarea">
          <h1>Order History</h1>
          <div className="orders_data_list">
      // conditions well handled
            {past_orders.length == 0 ? (
              <div>
                <img src={default_img} alt="no_orders" />
              </div>
            ) : (
              past_orders.map((element) => {
                return <OrderComponent data={element} />;
              })
            )}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="content_block">
      {loading ? <Spinner /> : pastOrdersUI()}
    </div>
  );
}

PastOrders.propTypes = {};
