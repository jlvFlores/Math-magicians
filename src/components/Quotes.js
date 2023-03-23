import { useEffect, useState } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState({});
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'XnPOlsunLwSVKUuyg2IqIw==Qdbj0Zm3ufHz0zZW',
          },
        }).then((res) => res.json())
          .then((data) => setQuote(data[0]));
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, []);

  if (hasError) return <div>Could not get quote!</div>;

  if (isLoading) return <div>Loading, please wait...</div>;

  return (
    <div>
      <p>{quote.quote}</p>
      <p>{`- ${quote.author}`}</p>
    </div>
  );
};

export default Quotes;
