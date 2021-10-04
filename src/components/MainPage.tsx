import { ChangeEvent, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Form } from 'react-bootstrap';
import { CalculatedResult } from './CalculatedResult';
import { CalculateResultButton } from './CalculateResultButton';

export const MainPage = (): JSX.Element => {
	const [val, setVal] = useState<string>('');
	const [changeVal, setChangeVal] = useState<string>('');

	useEffect(() => {
		console.log('Value has changed');
		setChangeVal(val);
	}, [val]);

	return (
		<>
			<Row>
				<Col>
					<Card>
						<Card.Title style={{ textAlign: 'center' }}>Enter Amount of $ to convert to cents</Card.Title>
						<Card.Body>
							<Form>
								<Form.Control type="text" value={val} onChange={(e: ChangeEvent<HTMLInputElement>) => {
									const expr = /^\d+\.?\d{0,2}$/g;
									if (!e.target.value.startsWith('$') && (isNaN(parseInt(e.target.value)) || !new RegExp(expr).test(e.target.value))) {
										console.log(`in if statement`);
										setVal(e.target.value.substring(0, e.target.value.length - 1));
									} else {
										setVal(e.target.value);
									}
								}} style={{ textAlign: 'center' }}>
								</Form.Control>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<br />
			<Row>
				<Col style={{ textAlign: 'center', display: 'block' }}>
					<CalculateResultButton />
				</Col>
			</Row>
			<br />
			<Row>
				<Col>
					<CalculatedResult value={changeVal} />
				</Col>
			</Row>
		</>

	);
};
