import React from 'react';

const Notification = ({ alertMessage }) => {
	return (
		<div
			className={`${
				alertMessage ? 'bg-blue-100' : 'bg-white'
			} absolute top-11 rounded-md shadow bg-white p-6 m-4`}>
			{alertMessage}
		</div>
	);
};

export default Notification;
