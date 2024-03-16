import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [selectedPages, setSelectedPages] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if (selectedPages.length === 8) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedPages]);

  const handlePageSelect = (page) => {
    if (selectedPages.includes(page)) {
      setSelectedPages(
        selectedPages.filter((selectedPage) => selectedPage !== page)
      );
    } else {
      setSelectedPages([...selectedPages, page]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedPages([]);
    } else {
      setSelectedPages([1, 2, 3, 4, 5, 6, 7, 8]);
    }
    setSelectAll(!selectAll);
  };

  return (
    <div className="container">
      <div className="top-section">
        <div className="box-group">
          <input
            type="checkbox"
            id="all-pages"
            checked={selectAll}
            onChange={handleSelectAll}
          />
          <label htmlFor="all-pages">All pages</label>
        </div>
      </div>
      <div className="middle-section">
        {Array.from({ length: 8 }, (_, index) => (
          <div className="box-group" key={index}>
            <input
              type="checkbox"
              id={`page${index}`}
              checked={selectedPages.includes(index + 1)}
              onChange={() => handlePageSelect(index + 1)}
            />
            <label htmlFor={`page${index}`}>Page {index + 1}</label>
          </div>
        ))}
      </div>
      <div className="bottom-section">
        <button
          disabled={selectedPages.length === 0}
          onClick={() => {
            console.log(selectedPages);
            setSelectedPages([]);
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default App;
