export default function Feedback({ feedback, positiveFeedback }) {
  if (!feedback) return <p>No feedback available.</p>;

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
}
