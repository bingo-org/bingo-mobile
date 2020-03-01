import React from 'react';
import styled from 'styled-components/native';
import RoomListItem from '../RoomListItem';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
const Container = styled.View`
  flex: 1;
`;
const List = styled.FlatList`
  flex: 1;
`;

const RoomList = ({rooms = [{id: 'id'}, {id: 'id2'}]}) => (
  <SafeAreaView>
    <Container>
      <List
        data={rooms}
        keyExtractor={room => room.id}
        renderItem={({item: room}) => <RoomListItem id={room.id} />}
      />
    </Container>
  </SafeAreaView>
);

export default RoomList;
