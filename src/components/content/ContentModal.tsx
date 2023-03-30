export const ContentModal = (props: {
  image: string;
  content: string;
  author: string;
  url: string;
}) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={props.image}
        style={{ width: "90%", height: "auto", borderRadius: 10 }}
        alt={""}
      />
      {props.content ? <p>{props.content}</p> : <p>No content ...</p>}
      <p>author: {props.author}</p>
      <a href={props.url} target="_blank" rel="noreferrer">
        Source
      </a>
    </div>
  );
};
