import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../../app/models/book";


export default function BookDetails() {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://localhost:7120/api/Books/${id}`)
            .then(response => setBook(response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [id]);

    if (loading) return <h3>Loading...</h3>

    if (!book) return <h3>Product not found</h3>

    return (
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <img src={book.pictureUrl} alt={book.name} style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h3'>{book.name}</Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant='h4' color='secondary'>${book.price}</Typography>
                <TableContainer>
                    <Table>
                        <TableBody sx={{ fontSize: '1.1em' }}>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{book.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{book.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{book.bookType}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{book.bookBrand}</TableCell>
                            </TableRow>
                            {/* <TableRow>
                                <TableCell>Quantity in stock</TableCell>
                                <TableCell>{book.quantityInStock}</TableCell>
                            </TableRow> */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}