import { useState } from 'react';

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.',
];

const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const mostVoted = votes.indexOf(Math.max(...votes));

  const nextAnecdoteHandler = () => {
    setSelected(getRandomNum(0, anecdotes.length));
  };

  const votesHandler = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  return (
    <>
      <h2>Anecdote of the day</h2>
      <h3>{anecdotes[selected]}</h3>
      has {votes[selected]} votes
      <br />
      <Button onClick={votesHandler} text='vote' />
      <Button onClick={nextAnecdoteHandler} text='next anecdote' />
      <h3>Anecdote with most votes</h3>
      {anecdotes[mostVoted]}
      <br />
      has {votes[mostVoted]} votes
    </>
  );
};

export default App;
