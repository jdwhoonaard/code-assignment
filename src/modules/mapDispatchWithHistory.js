export default (actions) => (dispatch, { history }) => ({
  ...Object.keys(actions)
    .reduce((acc, actionName) => {
      acc[actionName] = (...args) => dispatch({
        ...actions[actionName](...args),
        history,
      })

      return acc
    }, {}),
})
