import styles from "./errormessage.module.css"

const ErrorMessage = ({ message, arrowDir, position }) => {
  let arrowStyle = "";
  let locationStyle = "";

  switch (arrowDir) {
    case "down":
      arrowStyle = `${styles.down}`;
      break;
    case "up":
      arrowStyle = `${styles.up}`;
      break;
    case "left":
      arrowStyle = `${styles.left}`;
      break;
    case "right":
      arrowStyle = `${styles.right}`;
      break;
    default:
      arrowStyle = "";
  }

  switch (position) {
    case "left":
      locationStyle = `${styles.left_position}`;
      arrowStyle = `${styles.left_position_arrow}`;
      break;
    case "right":
      locationStyle = `${styles.right_position}`;
      arrowStyle = `${styles.right_position_arrow}`;
      break;
    default:
      locationStyle = `${styles.position}`;
  }
  return (
    <div
      className={`${locationStyle} ${styles.message}`}
    >
      {message}
      <div
        className={`${arrowStyle} ${styles.arrow}`}
      ></div>
    </div>
  );
};

export default ErrorMessage;
