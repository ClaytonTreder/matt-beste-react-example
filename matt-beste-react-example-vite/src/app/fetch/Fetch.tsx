import { useEffect, useState } from "react";
import styles from "./Fetch.module.css";

function Fetch() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    /* 
       React.Strict mode is on
       StrictMode renders components twice (on dev but not production) 
       in order to detect any problems with your code and warn you 
       about them (which can be quite useful).

       remove strict mode from ./main to test this
    */
    fetch("https://www.boredapi.com/api/activity")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className={styles.container}>
      <h4>Activity</h4>
      {data?.activity}
    </div>
  );
}

export default Fetch;
