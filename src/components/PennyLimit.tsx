import { Form } from 'react-bootstrap';
import { useState } from 'react';

export const PennyLimit = (): JSX.Element => {
	const [val, setVal] = useState<number>(0);
	const changeHandler = (e: React.FormEvent<HTMLElement>) => {
		const changedElement = e.target as HTMLInputElement;
		if (parseInt(changedElement.value) < 0) {
			setVal(0);
		} else {
			setVal(parseInt(changedElement.value));
		}
	};
	return (
		<Form>
			<Form.Group className='mb-3' controlId='formBasicNumerical'>
				<Form.Label>Limit</Form.Label>
				<Form.Control type='number' value={val} style={{ width: '100px' }} onChange={ changeHandler }/>
			</Form.Group>
		</Form>
	);
};
