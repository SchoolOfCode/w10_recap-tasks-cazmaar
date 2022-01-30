import articles from "../../libs/articles";
import Button from "../Button";
import PageHeader from "../PageHeader";
import Paragraph from "../Paragraph";
import Comment from "../Comment";
import ParagraphTitle from "../ParagraphTitle";

function Display() {
  return (
    <section>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <ParagraphTitle title={article.title} />
            {article.paragraphs.map((paragraph) => {
              return <Paragraph key={paragraph.id} text={paragraph.text} />;
            })}
            <Button />
            {article.comments.map((comment) => {
              return <Comment key={comment.id} name={comment.name} text={comment.text} />;
            })}
          </div>
        );
      })}
    </section>
  );
}
export default Display;
