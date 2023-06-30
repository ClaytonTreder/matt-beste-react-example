import { useState } from 'react'
import styles from './Counter.module.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default Counter
