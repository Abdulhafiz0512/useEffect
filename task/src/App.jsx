import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    const handleSelectChange = (event) => {
        const postId = event.target.value;
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(data => {
                setSelectedPost(data);
                setLoading(false);
            });
    };

    return (
        <div>
            <h1>Posts</h1>
            <select onChange={handleSelectChange}>
                <option value="">Select a post</option>
                {posts.map(post => (
                    <option key={post.id} value={post.id}>
                        {post.title}
                    </option>
                ))}
            </select>
            {loading && <p>Loading...</p>}
            {selectedPost && (
                <div>
                    <h2>{selectedPost.title}</h2>
                    <p>{selectedPost.body}</p>
                </div>
            )}
        </div>
    );
};

export default DataFetcher;
