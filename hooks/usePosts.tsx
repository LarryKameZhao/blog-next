import { useState, useEffect } from 'react';
import axios from 'axios';
type Post = {
  id: string;
  date: string;
  title: string;
};
export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get('/api/v1/posts').then(
      (res) => {
        console.log(res.data);
        setPosts(res.data);
        setLoading(false);
        if (res.data.length === 0) {
          setIsEmpty(true);
        }
      },
      () => {
        setLoading(false);
      }
    );
  }, []);
  return {
    posts,
    setPosts,
    isLoading,
    setLoading,
    isEmpty,
    setIsEmpty,
  };
};
