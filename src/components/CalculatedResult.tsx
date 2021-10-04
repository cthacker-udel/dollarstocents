import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Table, Row, Col } from 'react-bootstrap';
import { changeFunc } from '../util/changefunction';
import { useEffect, useState } from 'react';
import { QuarterLimit } from './QuarterLimit';
import { DimeLimit } from './DimeLimit';
import { NickelLimit } from './NickelLimit';
import { PennyLimit } from './PennyLimit';

export const CalculatedResult = (props: { value: string }): JSX.Element => {
	const [changeAmt, setChangeAmt] = useState<number[]>([0, 0, 0, 0]);

	useEffect(() => {
		setChangeAmt(changeFunc(props.value));
	}, [props.value]);

	console.log(`change amt : ${JSON.stringify(changeAmt)} and value passed in is : ${props.value}`);
	return (
		<Card>
			<Card.Title style={{ textAlign: 'center' }}>Calculate Result is Displayed Here</Card.Title>
			<Card.Body>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>
								<Row>
									<Col>
										Quarters
									</Col>
									<Col>
										<QuarterLimit />
									</Col>
								</Row>
							</th>
							<th>
								<Row>
									<Col>
										Dimes
									</Col>
									<Col>
										<DimeLimit />
									</Col>
								</Row>
							</th>
							<th>
								<Row>
									<Col>
										Nickels
									</Col>
									<Col>
										<NickelLimit />
									</Col>
								</Row>
							</th>
							<th>
								<Row>
									<Col>
										Pennies
									</Col>
									<Col>
										<PennyLimit />
									</Col>
								</Row>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								{changeAmt[0]}
							</td>
							<td>
								{changeAmt[1]}
							</td>
							<td>
								{changeAmt[2]}
							</td>
							<td>
								{changeAmt[3]}
							</td>
						</tr>
					</tbody>
				</Table>
			</Card.Body>

		</Card>);
};

