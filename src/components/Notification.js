import React from 'react';

const Notification = ({ alertMessage }) => {
	return (
		<div
			className={`${
				alertMessage ? 'bg-white' : 'hidden'
			} absolute top-11 rounded-md shadow  p-6 m-4`}>
			{alertMessage}
		</div>
	);
};

export default Notification;
