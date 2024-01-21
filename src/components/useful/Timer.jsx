import React, { useEffect, useState } from 'react'

const Timer = ({ time }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = time;



    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);


   


    return (
        <div dir='ltr' style={{color: "#ff0f00", fontSize: "var(--small-desktop)"}}>
            {`${days.toLocaleString("fa-IR")} : ${hours.toLocaleString("fa-IR")} : ${minutes.toLocaleString("fa-IR")} : ${seconds.toLocaleString("fa-IR")}`}
        </div>
    )
}

export default Timer