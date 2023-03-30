import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ActionType } from "../../ActionTypes";
import { store } from "../../store";
import ContentGrid from "./ContentGrid";
import ContentList from "./ContentList";

const NewsContent: React.FC = () => {
  const { id } = useParams();
  const grid = useSelector((state: any) => state.isButtonOn);
  const [data, setData] = useState([
    {
      source: {
        id: "",
        name: "",
      },
      author: "",
      title: "",
      description: "",
      url: "",
      urlToImage: "",
      publishedAt: "",
      content: "",
    },
  ]);
  useEffect(() => {
    axios
      .get(
        `top-headlines?country=${id}&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then(function (response) {
        setData(response.data.articles);
        store.dispatch({
          type: ActionType.INCREMENT_NUMBER,
          payload: response.data.articles.length,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id, grid]);

  return (
    <>{grid ? <ContentGrid data={data} /> : <ContentList data={data} />}</>
  );
};

export default NewsContent;
