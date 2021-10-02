import { Row, Col } from 'react-bootstrap';
import { reduceEachTrailingCommentRange } from 'typescript';

export const LeftText = (props: {value: string}) => {

	return(

		<Row>
			<Col>
				Text goes here : ${props.value}
			</Col>
		</Row>


	);

}