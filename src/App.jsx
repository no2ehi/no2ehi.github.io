import './App.css';

const App = () => {
  return (
    <div className="flex flex-col justify-content items-center w-full h-full mt-10 ">
      
        <div className="flex flex-col items-center w-2/5 bg-gray-100 p-4 rounded shadow">
        <h1 className="font-medium text-xl mb-3">>... No2ehi Github page</h1>
        <p>Front-End Developer</p>
        </div>

        <div className="flex flex-col items-center gap-3 mt-8">
          <h3 className="font-medium">work sample:</h3>
          <ul>
            <li><a href="">Simple Todo App</a></li>
            <li><a href="">React Tik Tok Toe</a></li>
          </ul>
        </div>
      
    </div>
  );
}

export default App;
