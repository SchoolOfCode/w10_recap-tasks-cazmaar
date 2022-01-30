import "./App.css";
import PageHeader from "../PageHeader";
import DisplayParagraph from "../DisplayParagraph";

function App() {
  return (
    <main className="App">
      <PageHeader heading="WikiPigeon" />
      <DisplayParagraph />
    </main>
  );
}

export default App;

//       {articles.map((article) => {
//         return (
//           <article key={article.id} className="post">
//             <h2>{article.title}</h2>
//             {article.paragraphs.map((paragraph) => (
//               <p key={paragraph.id}>{paragraph.text}</p>
//             ))}
//             <button className="like-button">Like 👍</button>
//             <section className="comment-section">
//               {article.comments.map((comment) => {
//                 return (
//                   <div key={comment.id} className="comment">
//                     <h4>{comment.name} says:</h4>
//                     <p>{comment.text}</p>
//                   </div>
//                 );
//               })}
//             </section>
//           </article>
//         );
//       })}
