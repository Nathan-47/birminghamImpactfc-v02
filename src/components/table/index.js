import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { TableContainer } from "./tableElements";


const TableReg = () => {
    return (
        <TableContainer>
        <Table responsive="md">
            <thead>
                <tr>
                    <th>LOCATION</th>
    <th></th>
    <th>COST PER SESSION</th>
    <th>MONTHLY</th>
    </tr>
    </thead>
    <tbody>
    <tr>
     <td>BMRC (Moseley) - Saturday 10am-12pm </td>
    <td></td>
    <td>£5</td>
    <td>£20</td>
  </tr>
  <tr>
    <td>Recreational Park - Saturday 1pm-3pm</td>
    <td></td>
    <td>£3</td>
    <td>£12</td>
  </tr>
  <tr>
    <td>Saltley Wellbeing Centre - Wednesday 6pm-7:30pm </td>
    <td></td>
    <td>£3</td>
    <td>£12</td>
  </tr>
  <tr>
    <td>Stechford Road Playing Fields</td>
    <td></td>
    <td>£5</td>
    <td>£20</td>

  </tr>
</tbody>
</Table>
</TableContainer>

    );
}

export default TableReg;