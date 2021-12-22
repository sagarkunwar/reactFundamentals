import "./App.css";

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/719S4nXwvxL._AC_UY327_FMwebp_QL65_.jpg",
    title: "The Journey Home: Autobiography of an American Swami",
    author: "By : Radhanath Swami",
    price: 20,
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/91-q6csmh1L._AC_UY327_FMwebp_QL65_.jpg",
    title: "The Journey Within: Exploring the Path of Bhakti",
    author: "By : Radhanath Swami",
    price: 20,
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/911lep0m0AL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Chasing Rhinos With The Swami - Volume 1",
    author: "By :  Sam Speerstra (Shyamasundar Das)",
    price: 20,
  },
];

function App() {
  return (
    <section className="booklist">
      {books.map((books) => {
        return <Book key={books.id} book={books}></Book>;
      })}
    </section>
  );
}

const Book = (book) => {
  // console.log(book);
  const { img, title, author, price } = book.book; // we are taking value inside the two object book/book
  return (
    <section
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{price}</p>
      <button
        type="button"
        onClick={() => {
          console.log("I think you want to order this book");
        }}
      >
        Buy
      </button>
    </section>
  );
};

export default App;
