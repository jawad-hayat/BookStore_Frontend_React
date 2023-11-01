import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Book } from "../../app/models/book";

interface Props {
    book: Book;
}

export default function BookCard({ book }: Props) {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'secondary.main' }}>
                        {book.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={book.name}
                titleTypographyProps={{
                    sx: { fontWeight: 'bold', color: 'primary.main' }
                }}
            />
            <CardMedia
                sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }}
                image={book.pictureUrl}
                title={book.name}
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                    ${book.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {book.bookBrand} / {book.bookType}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    )
}