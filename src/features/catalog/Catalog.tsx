import { useEffect, useState } from "react";
import BookList from "./BookList";
import { Book } from "../../app/models/book";

export default function Catalog() {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetch('https://localhost:7120/api/Books')
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                setBooks(data.data)
            });
    }, [])

    return (
        <>
            <BookList books={books} />
        </>
    )
}