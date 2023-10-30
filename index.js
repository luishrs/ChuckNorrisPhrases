const apiUrl = 'https://api.chucknorris.io/jokes/random';

const getQuote = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const chuckNorrisJoke = data.value;
    console.log('Chuck Norris quote', chuckNorrisJoke);
  } catch (error) {
    console.error(
      'An error occurred when searching for the Chuck Norris phrase:',
      error
    );
  }
};
getQuote();
