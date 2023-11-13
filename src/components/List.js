import React from 'react';
import { BiSolidEditAlt } from 'react-icons/bi';
import { FaDeleteLeft } from 'react-icons/fa6';

const List = React.memo(
	({
		id,
		value,
		name,
		provided,
		snapshot,
		handleRemove,
		setIsEditing,
		setEditedName,
		setEditedValue,
		setAlertMessage,
	}) => {
		const handleEdit = (id) => {
			setIsEditing(id); // isEditing 값을 true로 바꿔준다.
			setEditedName(name);
			setEditedValue(value);
			setAlertMessage('항목이 수정되고 있습니다');
			setTimeout(() => setAlertMessage(null), 2000);
		};

		return (
			<li
				key={id}
				{...provided.draggableProps}
				ref={provided.innerRef}
				{...provided.dragHandleProps}
				className={`${
					snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'
				} flex justify-between mb-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded`}>
				<span className='flex-1'>{name}</span>
				<span className='flex-1'>
					{parseInt(value).toLocaleString()}원
				</span>
				<button
					className='flex-none mr-2'
					onClick={() => handleEdit(id)}>
					<BiSolidEditAlt />
				</button>
				<button
					className='flex-none'
					onClick={() => handleRemove(id)}>
					<FaDeleteLeft />
				</button>
			</li>
		);
	}
);

export default List;
