import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaPencilAlt, FaUserAlt, FaTrashAlt, FaRegSave } from "react-icons/fa";

export default function BookTable(props) {
	const { data, onDelete } = props;

	const onClickEdit = (row) => {
		console.log(row)
	}
	const onClickDelete = (row) => {
		onDelete(row._id)
	}
  	return (
    	<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Title</TableCell>
						<TableCell align="center">Description</TableCell>
						<TableCell align="center">Author</TableCell>
						<TableCell align="center">Published At</TableCell>
						<TableCell align="right"></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
				{
					data.length > 0 ?
					(data.map((row, index) => (
					    <TableRow
					      key={"book-" + index}
					      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
					    >
					    	<TableCell component="th" scope="row">{row.title}</TableCell>
						    <TableCell align="right">{row.description}</TableCell>
						    <TableCell align="right">{row.authorName}</TableCell>
						    <TableCell align="center">{row.published_at}</TableCell>
						    <TableCell align="right">
						    	<FaPencilAlt className="cursor-pointer" onClick={() => onClickEdit(row)} />
						    	<span className="pr-3"></span>
						    	<FaTrashAlt className="cursor-pointer" onClick={() => onClickDelete(row)} />
						    </TableCell>
					    </TableRow>
					))):
					<TableRow 
					    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
					>
				    	<TableCell className="text-center" colSpan="5">No data</TableCell>
					</TableRow>
				}
				</TableBody>
			</Table>
	    </TableContainer>
  );
}
