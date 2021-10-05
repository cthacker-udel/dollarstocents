import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Table, Row, Col } from 'react-bootstrap';
import { changeFunc } from '../util/changefunction';
import { useEffect, useState, useContext } from 'react';
import { QuarterLimit } from './QuarterLimit';
import { DimeLimit } from './DimeLimit';
import { NickelLimit } from './NickelLimit';
import { QuarterLimitContext } from '../context/QuarterLimitContext';
import { DimeLimitContext } from '../context/DimeLimitContext';
import { NickelLimitContext } from '../context/NickelLimitContext';

export const CalculatedResult = (props: { value: string }): JSX.Element => {
	const [changeAmt, setChangeAmt] = useState<number[]>([0, 0, 0, 0]);
	const [qLim, setQLim] = useState<number>(0);
	const [nLim, setNLim] = useState<number>(0);
	const [dLim, setDLim] = useState<number>(0);
	console.log(`qlim = ${qLim} and dLim = ${dLim} and nLim = ${nLim}`);

	useEffect(() => {
		setChangeAmt(changeFunc(props.value, qLim, dLim, nLim));
	}, [props.value]);

	// console.log(`change amt : ${JSON.stringify(changeAmt)} and value passed in is : ${props.value}`);
	return (
		<>
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
											<QuarterLimit setterQ={setQLim} />
										</Col>
									</Row>
								</th>
								<th>
									<Row>
										<Col>
											Dimes
										</Col>
										<Col>
											<DimeLimit setterD={setDLim}/>
										</Col>
									</Row>
								</th>
								<th>
									<Row>
										<Col>
											Nickels
										</Col>
										<Col>
											<NickelLimit setterN={setNLim}/>
										</Col>
									</Row>
								</th>
								<th>
									<Row>
										<Col>
											Pennies
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

			</Card>
		</>
	);
};

