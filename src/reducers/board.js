import produce from 'immer';

const dummyData = {
  id: 1,
  title: 'trollers_clone',
  list: [
    {
      id: 1,
      title: 'test list',
      card: [
        {
          id: 1,
          title: 'test card',
          description: 'test description',
          cover: 'tomato',
          label: 'black, light-green',
        },
      ]
    }
  ]
}
const initialState = {
  Lists: dummyData,

}

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch(action.type){
    default:
      break;
  }
})

export default reducer;