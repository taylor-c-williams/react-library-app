import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Book from '../../components/book/Book'
import { getBookById } from '../../services/books'

function BookDetail() {
  const { id } = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data))
  }, [id])

  if (!book) return <h3>Loading book...</h3>

  return (
    <section>
      <Book book={book} showDetail />
      <Link to="/">Back to Catalog &gt; &gt; </Link>
    </section>
  )
}

export default BookDetail
