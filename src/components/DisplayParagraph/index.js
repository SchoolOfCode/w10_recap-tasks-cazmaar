import articles from "../../libs/articles";
import Button from "../Button";
import PageHeader from "../PageHeader";
import Paragraph from "../Paragraph";

function DisplayParagraph() {
  return (
    <section>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <PageHeader heading={article.title} />
            {article.paragraphs.map((paragraph) => {
              return <Paragraph key={paragraph.id} text={paragraph.text} />;
            })}
            <Button />
          </div>
        );
      })}
    </section>
  );
}
export default DisplayParagraph;
