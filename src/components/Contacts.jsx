import styled from "styled-components";

export default function Contacts() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <StyledCont id="contact">
      <Left>
        <img src="assets/shake.svg" alt="" />
      </Left>
      <Right>
        <Container>
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message" />
            <button type="submit">Send</button>
          </form>
        </Container>
      </Right>
    </StyledCont>
  );
}
const StyledCont = styled.section`
  overflow: hidden;
  display: flex;
  background-color: white;
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex: 1;
  img {
    object-fit: cover;
    height: 100%;
  }
`;
const Right = styled.div`
  flex: 1;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 500px;
  margin-bottom: 7rem;
  h2 {
    margin-bottom: 2rem;
    font-size: 40px;
    font-weight: 700;
    color: black;
  }
  form {
    button {
      width: 170px;
      height: 40px;
      background-color: crimson;
      color: white;
      border: none;
      border-radius: 5px;
      font-weight: 500;
      cursor: pointer;
    }
    input {
      width: 300px;
      height: 30px;
    }
    textarea {
      width: 300px;
      height: 200px;
    }
    width: 100%;
    height: 35vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;
