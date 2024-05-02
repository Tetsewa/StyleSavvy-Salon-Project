import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(service, price) {
    return { service, price };
}

const rows1 = [
    createData('Women\'s Haircut', '€ 50.00'),
    createData('Men\'s Haircut', '€ 35.00'),
    createData('Children\'s Haircut (under 12)', '€ 25.00'),
    createData('Updo/Event Styling', '€ 70.00'),
    createData('Bridal Hair (including trial)', '€ 150.00'),
    createData('Deep Conditioning Treatment)', '€ 30.00'),
    createData('Keratin Treatment)', '€ 200.00'),
    createData('Scalp Treatment)', '€ 50.00')  
];
const rows2 = [
    createData('Classic Manicure', '€ 50.00'),
    createData('Gel Manicure', '€ 35.00'),
    createData('Classic Pedicure', '€ 25.00'),
    createData('Spa Pedicure', '€ 40.00'),
    createData('Basic Nail Art (per nail)', '€ 70.00'),
    createData('Intricate Nail Art (per nail)', '€ 150.00'),
];
const rows3 = [
    createData('Express Facial', '€ 50.00'),
    createData('Signature Facial', '€ 35.00'),
    createData('Hydrating Facial', '€ 25.00'),
    createData('Eyebrow Wax', '€ 30.00'),
    createData('Lip Wax', '€ 10.00'),
    createData('Full Face Wax', '€ 50.00'),
    createData('Brazilian Wax', '€ 25.00')
];
const rows4 = [
    createData('Relaxation Package (Includes massage, facial, and manicure)', '€ 150.00'),
    createData('Pamper Me Package (Includes pedicure, scalp treatment, and makeup)', '€ 200.00'),
];


export default function PriceTable() {
    return (
        <div className ="grid grid-cols-1 md:grid-cols-2 mx-[200px]">
            <div className ="max-w-2xl m-5" > 
            
            <TableContainer component={Paper} >
            <Table sx={{ maxWidth: 672 }} aria-label="simple table" >
                <TableHead>
                    <TableRow className='bg-fifthcolor'>
                        <TableCell >Hair Services</TableCell>
                        <TableCell align="left">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {rows1.map((row) => (
                        <TableRow
                            key={row.service}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.service}
                            </TableCell>
                            <TableCell align="left">{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>

        

            <div className ="max-w-2xl m-5">
            <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 672 }} aria-label="simple table">
                <TableHead>
                    <TableRow className='bg-fifthcolor'>
                        <TableCell>Skin Care Services</TableCell>
                        <TableCell align="left">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows3.map((row) => (
                        <TableRow
                            key={row.service}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.service}
                            </TableCell>
                            <TableCell align="left">{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
            </div>

            <div className ="max-w-2xl m-5" >
            <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 672 }} aria-label="simple table">
                <TableHead>
                    <TableRow className='bg-fifthcolor'>
                        <TableCell>Nail Services</TableCell>
                        <TableCell align="left">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows2.map((row) => (
                        <TableRow
                            key={row.service}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.service}
                            </TableCell>
                            <TableCell align="left">{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
            </div>

            <div className ="max-w-2xl m-5">
            <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 672 }} aria-label="simple table">
                <TableHead>
                    <TableRow className='bg-fifthcolor'>
                        <TableCell>Spa Services</TableCell>
                        <TableCell align="left">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows4.map((row) => (
                        <TableRow
                            key={row.service}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.service}
                            </TableCell>
                            <TableCell align="left">{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
            </div>
            
        </div>
    );
}