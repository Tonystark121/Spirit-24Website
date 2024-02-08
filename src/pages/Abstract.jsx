import React from 'react'
import styles from './Abstract.module.css'
import image from '../assets/image 1.png'

const Abstract = () => {
  return (
    <>
      <>
  {/* Hello world */}
  <div className={styles.abstract_container}>
    <div className={styles.abstract_container_left}>
      <p className={styles.abstract_container_left_heading}>Submit your abstract</p>
      <p className={styles.abstract_container_left_text1}>
        We invite abstracts for poster in Pharmacy and related domains for the
        International Conference on Pharmaceutical Innovations 2024
      </p>
      <button className={styles.abstract_container_left_button}>
        <h1 className={styles.abstract_container_left_button_text}>Submit now</h1>
      </button>
      <p className={styles.abstract_container_left_text2}>
        Submission deadline : 15th March 2023
      </p>
    </div>
    <div className={styles.div_abstract_image}>
      <img src={image} alt="" className={styles.abstract_image} />
    </div>
  </div>
</>

    </>
  )
}

export default Abstract
