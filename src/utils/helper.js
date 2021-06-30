//error message retriever
export const retrieveErrMessage = err => {
  if (err.response && err.response.data) {
    return err.response.data || err.response.data.error
  } else if (err.message) {
    return err.message;
  } else {
    return err;
  }
};
