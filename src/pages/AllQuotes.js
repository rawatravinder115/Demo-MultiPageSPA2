import QuotesList from '../components/quotes/QuoteList';

const DUMMY_QUOTES=[
    {id:'q1',author: 'max', text:'Learning React is fun!'},
    {id:'q2', author: 'ravinder' , text: 'learning React is great!'},
]

const AllQuotes = () => {
  return <QuotesList quotes={DUMMY_QUOTES} />
};

export default AllQuotes;