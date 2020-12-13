import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './Table';
import Navigation from './Navigation';

function App() {

  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const get = async() => {
      setLoading(true);
      const res = await axios.get('https://classmarker-app.herokuapp.com/mockData');
      setContent(res.data);
      setLoading(false);
    }
    get();
  },[])

  const last = pageNo*20;
  const first = last-20;
  const tableContent = content.slice(first,last);

  const navigate = (number) => {
    setPageNo(number);
  }

  const prev = () => {
    setPageNo(pageNo-1);
  }

  const next = () => {
    setPageNo(pageNo+1);
  }

  return (
    <div className="app">
      <h1>Table</h1>
      {
        loading ? 
            <div>
                <h1>Loading!</h1>
            </div> 
            : 
            <div>
              <h5>Page No: {pageNo} of {Math.ceil(content.length/20)}</h5>
              <Table content={tableContent}/>
              <Navigation total={content.length} pageNo={pageNo} navigate={navigate} prev={prev} next={next}/>
            </div>
      }
    </div>
  );
}

export default App;
