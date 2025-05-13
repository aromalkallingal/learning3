export default function App() {

  const loadPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.text();
    console.log(data);
  }
  return <div>
    <button>Load</button>
  </div>
}



