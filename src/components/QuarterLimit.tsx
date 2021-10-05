import { Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { QuarterLimitContext } from '../context/QuarterLimitContext';

export const QuarterLimit = (props: { setterQ: React.Dispatch<React.SetStateAction<number>> }): JSX.Element => {
	const [val, setVal] = useState<number>(0);
	const changeHandler = (e: React.FormEvent<HTMLElement>) => {
		const changedElement = e.target as HTMLInputElement;
		if (parseInt(changedElement.value) < 0) {
			setVal(0);
		} else {
			setVal(parseInt(changedElement.value));
		}
		console.log(`set val to ${val}`);
	};
	useEffect(() => {
		if (val !== 0) {
			props.setterQ(val);
		}
	}, [val]);
	return (
		<Form>
			<Form.Group className='mb-3' controlId='formBasicNumerical'>
				<Form.Label>Limit</Form.Label>
				<Form.Control type='number' value={val} style={{ width: '100px' }} onChange={ changeHandler }/>
			</Form.Group>
		</Form>
	);
};
