import React from "react";
import styles from "./Partner.module.css"
export default function Partner() {
	return (
		<div className={styles.mainContainer}>
			<div
				className={styles.title}
			>
				OUR PARTNERS
			</div>
			<div className={styles.partners}>
				<img className={styles.img} src="/images/janssen_logo.png" alt="janssen_logo" />
				<img  className={styles.img} src="/images/mankind_logo.png" alt="mankind_logo" />
				<img  className={styles.img} src="/images/niper_logo.png" alt="niper_logo" />
				<img  className={styles.img} src="/images/sun_pharma_logo.png" alt="sun_pharma_logo" />
				<img  className={styles.img} src="/images/amgen_logo.png" alt="amgen_logo" />
			</div>
		</div>
	);
}
