//AUTHOR: MIHIR MESIA
import "./css/burger_table.css";
import BurgerTableRow from "./burgerTableRow";
import PropTypes from "prop-types";

export default function BurgerTable({ allData, value, setValue }) {
  const { title, data } = allData;
  return (
    <table>
      <caption>{title}</caption>
      <BurgerTableRow data={data} value={value} setValue={setValue} />
    </table>
  );
}

BurgerTable.propTypes = {
  allData: PropTypes.object.isRequired,
  value: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
};
