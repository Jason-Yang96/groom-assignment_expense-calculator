import React from 'react';
// import { useState } from 'react';

const List = ({
	id,
	value,
	name,
	provided,
	snapshot,
	handleRemove,
	setIsEditing,
	setEditedName,
	setEditedValue,
	setEditedId,
}) => {
	const handleEdit = (id) => {
		setIsEditing(true); // isEditing 값을 true로 바꿔준다.
		setEditedName(name);
		setEditedValue(value);
		setEditedId(id);
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
			<span className='flex-1'>{parseInt(value).toLocaleString()}원</span>
			<button
				className='flex-none mr-2'
				onClick={() => handleEdit(id)}>
				수정
			</button>
			<button
				className='flex-none'
				onClick={() => handleRemove(id)}>
				삭제
			</button>
		</li>
	);
};

export default List;

// if (isEditing) {
// 	return (
// 		<li className='flex justify-between py-2 px-2 mb-2 rounded bg-gray-100 hover:bg-gray-200 active:bg-gray-300'>
// 			<form
// 				className='flex'
// 				onSubmit={handleEditSubmit}>
// 				<input
// 					value={editedName}
// 					type='text'
// 					className='w-full px-3  mr-4 text-gray-500 rounded'
// 					onChange={handleEditNameChange}
// 					required
// 				/>
// 				<input
// 					value={editedValue}
// 					type='number'
// 					className='w-full px-3  mr-4 text-gray-500 rounded'
// 					onChange={handleEditValueChange}
// 					required
// 				/>
// 			</form>
// 			<button
// 				className='flex-none mr-2'
// 				onClick={handleEditSubmit}>
// 				저장
// 			</button>
// 			<button
// 				className='flex-none'
// 				onClick={() => handleRemove(id)}>
// 				삭제
// 			</button>
// 		</li>
// 	);
// } else {
