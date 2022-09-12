const Message = () => <p>This is my message</p>;

export const Personal = () => <p>This is my personal components</p>;

export const Diver = () => <h1>Testing</h1>;
export function Diver2(props) {
  //props -> JS object
  return (
    <>
      <h1>Testing2</h1>
      <code>props</code>
      <code>{props.name}</code>
    </>
  );
}

const addition2 = (x, y) => x + y;

export const Addition = () => {
  const addition = (x, y) => x + y;
  const substraction = (x, y) => x - y;
  const division = (x, y) => {
    if (x > y) return x / y;

    return y / x;
  };
  function divi(x, y) {
    if (x > y) return x / y;

    return y / x;
  }

  return (
    <div>
      <h2>Addition</h2>
      <Personal />
      <code>{addition(30, 20)}</code>
      <br />
      <code>{substraction(30, 20)}</code>
      <br />
      <code>{division(30, 20)}</code>
      <br />
      <code>{divi(30, 20)}</code>
      <br />
      <p>{addition2(9, 12)}</p>
    </div>
  );
};

export default Message;
