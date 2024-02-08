import React from 'react';
import styles from './Partners.module.css';
import image from './../assets/image 1.png'

const Partners = () => {
  return (
    <>
      <div id={styles.our_partners_container}>
    <p id={styles.our_partners_heading}>Our Partners</p>
    <div id={styles.our_partners_images_div}>
      <img src={image} className={styles.our_partners_images} alt="" />
      <img src={image} className={styles.our_partners_images} alt="" />
      <img src={image} className={styles.our_partners_images} alt="" />
      <img src={image} className={styles.our_partners_images} alt="" />
    </div>
  </div>
</>
    
  )
}

export default Partners
