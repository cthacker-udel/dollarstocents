import { useEffect, useState } from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import { LeftText } from './LeftText';

export const MainPage = () => {

	const [val,setVal] = useState<string>('');

	useEffect(() => {

		console.log('Value has changed');
		// do something

	},[val]);

	return(

		<Row>
			<Col>
				<Card>

					<Card.Title>This is a card title</Card.Title>
					<Card.Body>This is a card body</Card.Body>

				</Card>
			</Col>
			<Col>
				<Form>
					<Form.Control type="text" placeholder="enter text" onChange={(e) => {

						setVal(e.target.value);

					}}>
					</Form.Control>
				</Form>
			</Col>
			<Col>
				<LeftText value={val} />
			</Col>
		</Row>

	);

}