import "./App.css";

function App() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <section>
      <Image />
      <Title />
      <Author />
    </section>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/719S4nXwvxL._AC_UY327_FMwebp_QL65_.jpg"
      alt="The Journey Home: Autobiography of an American Swami"
    />
  );
};

const Title = () => {
  return <h1>The Journey Home: Autobiography of an American Swami</h1>;
};

const Author = () => {
  return <h4>By : Radhanath Swami </h4>;
};

export default App;
