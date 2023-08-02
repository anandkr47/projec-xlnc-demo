import React from "react";
import YouTube from "react-youtube";
import { makeStyles } from "@material-ui/core/styles";
import styles,{ layout } from "../style";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { about } from "../assets";


const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    maxWidth: "800px",
    margin: "0 auto",
    
    boxShadow: "10 40px 80px rgba(0, 0, 0, 0.1)", /* Add box shadow */
    borderRadius: "80px", /* Add border radius */
    marginTop:"100px",
  },
  playIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "60px",
    color: "#fff",
    cursor: "pointer",
  },
}));

const AboutVideo = () => {
  const classes = useStyles();
  

  return (
    <section id="about" className="placeholder">
      <div className={` ${styles.flexCenter}`}>
  <h3 className={styles.heading2}
  style={{marginLeft:"41%",marginTop:"100px"}}
  
  >About</h3>
    <img src={about} alt="star" className="w-[50px] h-[50px] object-contain rounded-full" 
    style={{marginRight:"41%",marginTop:"100px"}}/>
  </div>
    <div className={classes.root}>
     

      
        <YouTube
          videoId={'fpnPWIqvwO8'}
          opts={{
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      
    </div>
    
    </section>
  );
};

export default AboutVideo;
