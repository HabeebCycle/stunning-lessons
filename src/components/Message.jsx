const Message = () => <p>This is my message</p>;
export const Personal = () => <p>This is my personal components</p>;

export const Addition = () => {
  const addition = (x, y) => x + y;
  const substraction = (x, y) => x - y;

  return (
    <div>
      <h2>Addition</h2>
      <Personal />
      <code>{addition(30, 20)}</code>
      <br />
      <code>{substraction(30, 20)}</code>
    </div>
  );
};

export default Message;
