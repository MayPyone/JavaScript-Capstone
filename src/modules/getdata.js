const getData = () => {
	//button to be cteated in main home page
  const selectedMovie = document.querySelector('.selectmovie');
  //get the id of the selectedMovie
  const id=selectedid;
  
  refresh.addEventListener('click', async () => {
    const fetchData = await fetch(
      'https://api.tvmaze.com/shows/'+id,
    );
    const data = await fetchData.json();
	
	const  maindiv=document.createElement('div');
	
	
	
	
	
	
	
	
	
	
	
    document.querySelector('ul').innerHTML = '';
	
	
	
	
	
    data.result.forEach((user) => {
      document.querySelector(
        'ul',
      ).innerHTML += ` <li><span>${user.user} </span>: <span>${user.score}</span></li> `;
    });
  });
};

export default getData;