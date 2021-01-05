import React, { useEffect, useState } from 'react'

let interval = undefined;

const DatePicker = (props) => {
    let { id = '', placeHolder, typeOfTime = null, typeOfRange = null } = props
    let [dropify, setDropify] = useState(null);
    useEffect(() => {
        checkForJquery();
    }, [])

    const checkForJquery = () => {
        // interval =   setInterval(() => {
        //     console.log("windows object", window.$.prototype.dropify);
        //   }, 2000);
        if (window.$ && window.$.prototype.dropify && window.$.prototype.chosen) {
            clearInterval(interval);
            let $ = window.$;
            $('.dropify').dropify();
            $('.chosen').chosen()

            if (id && typeOfRange) {
                $(`#${typeOfRange}`).flatpickr({
                    mode: "range",
                    dateFormat: "Y-m-d",
                    altInput: true,
                    altFormat: "F j, Y",
                    minDate: "today"
                });
            } else if (id && typeOfTime) {
                $(`#${typeOfTime}`).flatpickr({
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "H:i",
                    time_24hr: true
                });
            } else {
                $(`#${id}`).flatpickr({
                    dateFormat: "Y-m-d",
                    altInput: true,
                    altFormat: "F j, Y",
                    minDate: "today"
                });
            }
        }
    }

    return (
        <input type="text" id={`${id}`} placeholder={`${placeHolder}`} />
    )
}

export default DatePicker