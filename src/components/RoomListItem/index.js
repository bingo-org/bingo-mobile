import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
`;
const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;
const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

const RoomListItem = ({
  name = 'Juan Jose Lopez Tugores',
  image = 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/66222434_2898545357036280_5504794931140493312_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=Kn2v546IwD0AX8b8VHY&_nc_ht=scontent-sjc3-1.xx&oh=f22f15702412d850ea7941f1475bdbcf&oe=5EBB4CA0',
}) => (
  <Container>
    <Image source={{uri: image}} />
    <Title>{name}</Title>
  </Container>
);

export default RoomListItem;
