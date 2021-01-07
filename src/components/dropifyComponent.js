import React,{useEffect, useState} from 'react'

let interval = undefined;

const DropifyComp = (props) => {
    let [loading, setLoading]= useState(true);  
    const checkForJquery = () => {
    if(window.$ &&  window.$.prototype.dropify && window.$.prototype.chosen){
        clearInterval(interval);
        let $ = window.$;
        $('.dropify').dropify();
        $('.chosen').chosen()
      }
    }
    useEffect(() => {
        checkForJquery();
      }, [])  
    return (
        <input type="file" name="" id="" className="dropify"/>
    )
}

export default DropifyComp