import articles from "../../libs/articles";
import Button from "../Button";
import Paragraph from "../Paragraph";
import Comment from "../Comment";
import ParagraphTitle from "../ParagraphTitle";
import PageHeading from "../PageHeader";
import LogoutButton from "../LogOutButton";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton";

function Display() {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <section>
      <LogoutButton />
      <PageHeading heading="WikiPigeon" />
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <ParagraphTitle data-testid="paragraph" title={article.title} />
            {article.paragraphs.map((paragraph) => {
              return <Paragraph key={paragraph.id} text={paragraph.text} />;
            })}
            <Button />
            {article.comments.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  name={comment.name}
                  text={comment.text}
                />
              );
            })}
          </div>
        );
      })}
    </section>
  ) : (
    <p>
      <LoginButton />
    </p>
  );
}
export default Display;
