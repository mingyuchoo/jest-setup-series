import { useState } from 'react';

interface IUseCommentsManagement {
  comments: never[];
  fetchComments: () => Promise<void>;
}
const useCommentsManagement = (): IUseCommentsManagement => {
  const [comments, setComments] = useState([]);

  const fetchComments = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  };

  return { comments, fetchComments };
};

export default useCommentsManagement;
