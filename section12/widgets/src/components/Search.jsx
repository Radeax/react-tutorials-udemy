import React, { useState, useEffect } from 'react';
import axios from 'axios';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState(['']);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        // ?action=query&list=search&srsearch=programming=&format=json
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    if (debouncedTerm) search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
            rel="noreferrer"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(result.snippet),
            }}
          ></span>
        </div>
      </div>
    );
  });

  return (
    <div className="ui container">
      <div className="search-bar ui segment">
        <div className="ui form">
          <div className="field">
            <label>Enter Search Term</label>
            <input
              className="input"
              onChange={(e) => setTerm(e.target.value)}
              value={term}
            />
          </div>
        </div>
        <div className="ui celled list">{renderedResults}</div>
      </div>
    </div>
  );
};

export default Search;
