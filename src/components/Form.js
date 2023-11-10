import React from 'react';

const Form = ({
	handleSubmit,
	handleExpenseNameChange,
	expenseName,
	handleExpenseValueChange,
	expenseValue,
	expenseData,
	isEditing,
	editedName,
	editedValue,
	editedId,
	setEditedName,
	setEditedValue,
	setExpenseData,
	setIsEditing,
	setEditedId,
	setAlertMessage,
}) => {
	const handleEditNameChange = (e) => {
		setEditedName(e.target.value);
	};
	const handleEditValueChange = (e) => {
		setEditedValue(e.target.value);
	};
	const handleEditSubmit = (e) => {
		e.preventDefault();
		let newExpenseData = expenseData.map((data) => {
			if (data.id === editedId) {
				data.name = editedName;
				data.value = editedValue;
			}
			return data;
		});
		setExpenseData(newExpenseData);
		setIsEditing(false);
		setEditedId(null);
		setAlertMessage('항목이 수정되었습니다');
		setTimeout(() => setAlertMessage(null), 2000);
		localStorage.setItem('expenseData', JSON.stringify(newExpenseData));
	};
	if (isEditing) {
		return (
			<form
				className='flex justify-between'
				onSubmit={handleEditSubmit}>
				<div className='flex flex-col flex-1'>
					<label>지출 항목</label>
					<input
						type='text'
						placeholder='항목 이름을 적어주세요'
						onChange={handleEditNameChange}
						value={editedName}
					/>
				</div>
				<div className='flex flex-col flex-1'>
					<label>예상 비용</label>
					<input
						type='number'
						min='500'
						placeholder='예상 지출액을 적어주세요'
						onChange={handleEditValueChange}
						value={editedValue}
						required
					/>
				</div>
				<input
					className='flex-none'
					type='submit'
					value='완료'
					onSubmit={handleEditSubmit}
				/>
			</form>
		);
	} else {
		return (
			<form
				className='flex justify-between'
				onSubmit={handleSubmit}>
				<div className='flex flex-col flex-1'>
					<label>지출 항목</label>
					<input
						type='text'
						placeholder='항목 이름을 적어주세요'
						onChange={handleExpenseNameChange}
						value={expenseName}
					/>
				</div>
				<div className='flex flex-col flex-1'>
					<label>예상 비용</label>
					<input
						type='number'
						min='500'
						placeholder='예상 지출액을 적어주세요'
						onChange={handleExpenseValueChange}
						value={expenseValue}
						required
					/>
				</div>
				<input
					className='flex-none'
					type='submit'
					value='추가'
				/>
			</form>
		);
	}
};

export default Form;
