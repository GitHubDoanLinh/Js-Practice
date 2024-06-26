const getLastPost = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return {title: data.at(-1).title, text: data.at(-1).body}
}
const lastPost = getLastPost();
console.log(lastPost)
// lastPost.then(last => console.log(last)) //smell code

const lastPost2 = await getLastPost();
console.log(lastPost2);