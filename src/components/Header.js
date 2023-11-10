import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const Header = ({ setExpenseData, setAlerMessage }) => {
	const handleRomoveAllClick = () => {
		if (setExpenseData.length) {
			setExpenseData([]);
			setAlerMessage('항목이 모두 삭제되었습니다');
			setTimeout(() => setAlerMessage(null), 2000);
			localStorage.setItem('expenseData', JSON.stringify([]));
		}
	};
	return (
		<header className='flex justify-between mb-3'>
			<h1 className='text-2xl font-semibold	'>예산 계산기</h1>
			<button onClick={handleRomoveAllClick}>
				<AiFillDelete />
			</button>
		</header>
	);
};

export default Header;
