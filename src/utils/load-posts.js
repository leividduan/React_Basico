export const loadPosts = async () => {
  const postsRespose = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosRespose = fetch('https://jsonplaceholder.typicode.com/photos');

  const [posts, photos] = await Promise.all([postsRespose, photosRespose]);

  const postsJson = await posts.json();
  const photosJson = await photos.json();

  const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url };
  });

  return postsAndPhotos;
};
