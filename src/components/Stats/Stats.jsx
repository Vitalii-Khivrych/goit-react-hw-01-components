import PropTypes from 'prop-types';
import s from './Stats.module.css';

function Stats({ label, percentage }) {
  return (
    <li className={s.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Stats;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
