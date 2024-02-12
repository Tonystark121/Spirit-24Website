import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import styles from "./Footer.module.css"
const Footer1 = () => {
	return (
		<div className={styles.mainContainer}
			// style={{
			// 	backgroundColor: "#F2F7F8",
			// 	height: "240px",
			// 	borderRadius: "20px",
			// 	width: "80%",
			// 	display: "flex",
			// 	justifyContent: "flex-end",
			// 	borderBottom: "35px solid #009D9A",
			// }}
		>
			<div style={{ width: "50%", marginLeft: "8%" }}>
				<div style={{ marginTop: "5%" }}>
					<p style={{ color: "#009D9A", fontWeight: "bold" }}>
						International Conference on
					</p>
					<h1
						style={{
							fontSize: "20px",
							fontWeight: "bold",
							color: "gray",
						}}
					>
						Pharmaceutical Innovations &
					</h1>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							flexWrap: "wrap",
						}}
					>
						<h1
							style={{
								fontSize: "20px",
								fontWeight: "bold",
								color: "gray",
							
							}}
						>
							SPIRIT :&nbsp;
						</h1>
						<p style={{ color: "#009D9A", fontWeight: "bold" }}>
							The Annual Techno-Pharma Conclave
						</p>
					</div>
				</div>
				<div style={{ marginTop: "5%" }}>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							flexWrap: "wrap",
						}}
					>
						<h1 style={{ color: "#009D9A", fontSize: "18px" }}>
							Email us :&nbsp;
						</h1>
						<p style={{ fontSize: "20px", color: "gray", fontWeight: "bold" }}>
							spirit@itbhu.ac.in
						</p>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							flexWrap: "wrap",
						}}
					>
						<h1 style={{ color: "#009D9A", fontSize: "18px" }}>
							Mobile :&nbsp;
						</h1>
						<p style={{ fontSize: "20px", color: "gray", fontWeight: "bold" }}>
							+91 8319456409
						</p>
					</div>
				</div>
			</div>
			<div
				className={styles.buttondiv}
			>
				<button
					className={styles.button}
				>
					Register Now
				</button>
				<div style={{ marginTop: "5%" }}>
					<a
						style={{ color: "black", cursor: "pointer" }}
						href="https://www.facebook.com/IITBHUSPIRIT/"
						target="_blank"
					>
						<FaFacebookSquare size={30} />
					</a>
					<a
						style={{ color: "black", cursor: "pointer" }}
						href="https://www.instagram.com/spirit.iit.bhu?igsh=bWZnYXpmOXh4MGVx"
						target="_blank"
					>
						<FaInstagram size={30} />
					</a>
					<a
						href="https://twitter.com/Spirit_IIT"
						target="_blank"
						style={{ color: "black", cursor: "pointer" }}
					>
						<RiTwitterXFill size={30} />
					</a>
					<a
						href="https://www.linkedin.com/company/spiritiitbhu/"
						target="_blank"
						style={{ color: "black", cursor: "pointer" }}
					>
						<FaLinkedin size={30} style={{ cursor: "pointer" }} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer1;