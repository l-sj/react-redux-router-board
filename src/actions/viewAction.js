export const GET_ITEM = 'GET_ITEM';

export const getItemDispatch = (id) => ({
  type: GET_ITEM,
  payload: {
    id
  }
});
