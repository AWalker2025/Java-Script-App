window.addEventListener('load', () => {
    displayQuote();
    let counter = document.getElementById('count');
    counter.innerText = data.length;
  });
  
  function getQuote() {
    const seed = Math.random();
    let selected = document.getElementById('select').value;
    const filteredData = data.filter(quote => quote.tag === selected);
    if (selected != 'All') {
      const i = (Math.floor(seed * filteredData.length));
      return filteredData[i];;
    } else {
      const i = (Math.floor(seed * data.length));
      return data[i];
    }
  };
  const quoteFactory = (obj) => {
    const makeQuote = 
      `<article class="quote">
        <button class="close" onClick="this.parentElement.remove();">&times;</button>
        <figure>
          <blockquote cite="${obj.path}">${obj.title}</blockquote>
          <figcaption>
          <span class="content">${obj.content}</span> 
          </figcaption>
        <img src= "${obj.photo}">
        </figure>
        <footer>
         
          <span class="tags">${obj.tag}</span>
        </footer>
      </article>`;
      return makeQuote;
  };
  
  function displayQuote() {
    let parentNode = document.getElementById('main');
    parentNode.insertAdjacentHTML('beforeend', quoteFactory(getQuote()));
  }
