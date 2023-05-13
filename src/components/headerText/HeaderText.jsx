import "./headreText.style.css";

const HeaderText = () => {
  const getRandomNum = () => {
    const myNum = Math.floor(Math.random() * 10 + 1);
    let message;
    if (myNum % 2 == 0) {
      message = `${myNum} is Even`;
    } else {
      message = `${myNum} is Odd`;
    }
    return message;
  };
  // const students = ["Murat", "Shahzod", "Tom", "Alina", "Esma"];
  return (
    <>
      <h1>{getRandomNum()}</h1>
      {/* <h1>Students lists</h1> */}
      {/* <ol>
        <li>{students[0]}</li>
        <li>{students[1]}</li>
        <li>{students[2]}</li>
        <li>{students[3]}</li>
        <li>{students[4]}</li>
      </ol> */}

      {/* <ol>
        {students.map((el) => (
          <li>{el}</li>
        ))}
      </ol> */}
    </>
  );
};

export default HeaderText;
