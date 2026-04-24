import React from "react";

const CheckCircleIcon = (props) => {
	return (
        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M15.214 30.215c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm-4.127-15.941c-.633-.633-1.658-.633-2.291 0s-.633 1.658 0 2.291l3.988 3.988c.633.633 1.658.633 2.291 0l7.637-7.637c.633-.633.633-1.658 0-2.291s-1.658-.633-2.291 0l-6.491 6.491-2.843-2.843z" fill={props.fill} /></svg>
	)
}

export default CheckCircleIcon;