import React from 'react';
import styled from 'styled-components/native';
import RoomListItem from '../RoomListItem';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
const Container = styled.View`
  flex: 1;
`;
const Menu = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 10px;
`;
const ImageButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 20px;
`;
const Image = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;
const Brand = styled.Text`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
`;
const IconButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.1);
`;
const List = styled.FlatList`
  flex: 1;
`;

const RoomList = ({
  image = 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/66222434_2898545357036280_5504794931140493312_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=Kn2v546IwD0AX8b8VHY&_nc_ht=scontent-sjc3-1.xx&oh=f22f15702412d850ea7941f1475bdbcf&oe=5EBB4CA0',
  rooms = [
    {id: 'id'},
    {id: 'id2'},
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(id => ({id})),
  ],
}) => (
  <SafeAreaView>
    <Container>
      <Menu>
        <ImageButton>
          <Image source={{uri: image}} />
        </ImageButton>
        <Brand>Bingo</Brand>
        <IconButton>
          <Icon name="add" size={24} />
        </IconButton>
      </Menu>
      <List
        data={rooms}
        keyExtractor={room => room.id}
        renderItem={({item: room}) => <RoomListItem id={room.id} />}
      />
    </Container>
  </SafeAreaView>
);

export default RoomList;
