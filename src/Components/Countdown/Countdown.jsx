import "./Countdown.css";
import Countdown from "react-countdown";

const Countdowns = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);
  targetDate.setHours(targetDate.getHours() + 2);
  targetDate.setMinutes(targetDate.getMinutes() + 50);
  targetDate.setSeconds(targetDate.getSeconds() + 44);

  const render = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Countdown Selesai!!</span>;
    } else {
      return (
        <span>
          <div className="countdown-hari">
            <p>{days}d</p>
            <p>{hours}h</p>
            <p>{minutes}m</p>
            <p>{seconds}s</p>
          </div>
        </span>
      );
    }
  };
  return (
    <div>
      <h2>
        <Countdown date={targetDate} renderer={render} />
      </h2>
    </div>
  );
};

export default Countdowns;
