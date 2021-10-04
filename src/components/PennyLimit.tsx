import { Form } from 'react-bootstrap';

export const PennyLimit = (): JSX.Element => {
	const changeHandler = () => {
		console.log('hello');
	};
	return (
		<Form>
			<Form.Group className='mb-3' controlId='formBasicNumerical'>
				<Form.Label>Limit</Form.Label>
				<Form.Control type='number' placeholder='0' style={{ width: '100px' }}/>
			</Form.Group>
		</Form>
	);
};
