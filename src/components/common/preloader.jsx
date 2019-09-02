import preloader from "../../assets/fetching.svg";
import React from "react";

let Preloader =(props) => {
    return <div>
        <img src={preloader} alt='loading'/>
    </div>
};
export default Preloader;