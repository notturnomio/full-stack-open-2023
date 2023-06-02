import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatsField = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const StatClicks = ({ clicks }) => {
  const allFeedbacks = clicks.good + clicks.neutral + clicks.bad;
  const averageScore = ((clicks.good - clicks.bad) / allFeedbacks).toFixed(2);
  const positivePercentage =
    ((clicks.good / allFeedbacks) * 100).toFixed(2) + ' %';

  return (
    <>
      <h3>Statistics:</h3>
      {!allFeedbacks ? (
        <p>No feedbacks yet</p>
      ) : (
        <table>
          <tbody>
            <StatsField text='Excellent' value={clicks.good} />
            <StatsField text='Good enough' value={clicks.neutral} />
            <StatsField text='Not so good' value={clicks.bad} />
            <StatsField text='All' value={allFeedbacks} />
            <StatsField text='Average' value={averageScore} />
            <StatsField text='Positive' value={positivePercentage} />
          </tbody>
        </table>
      )}
    </>
  );
};

const App = () => {
  // States
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Handlers
  const handleGoodClick = () => setClicks({ ...clicks, good: clicks.good + 1 });

  const handleNeutralClick = () =>
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });

  const handleBadClick = () => setClicks({ ...clicks, bad: clicks.bad + 1 });

  return (
    <>
      <h2>Give your feedback</h2>
      <Button onClick={handleBadClick} text='Not so good' />
      <Button onClick={handleNeutralClick} text='Good enough' />
      <Button onClick={handleGoodClick} text='Excellent' />
      <StatClicks clicks={clicks} />
    </>
  );
};

export default App;
