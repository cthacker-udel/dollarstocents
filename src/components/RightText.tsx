import { Row, Col } from 'react-bootstrap';

export const RightText = (props: {value: string}) => {

	return (

		<Row>
			<Col>
				This is the right text: {props.value}
			</Col>
		</Row>

	);

}