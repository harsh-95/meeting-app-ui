// Create Redux action creators that return an action
export const selectContact = (name) => ({
    type : 'SELECT_CONTACT',
    payload: name
  })

  export const selectMeetingDate = (name) => ({
    type : 'SELECT_DATE',
    payload: name
  })

  export const selectMeetingTime = (name) => ({
    type : 'SELECT_TIME',
    payload: name
  })

  // export const fetchMessages = () => ({
  //   type : 'FETCH_MESSAGES',
  // })

  // export const selectCurrentContact = (contactId) => ({
  //   type : 'SHOW_CURRENT_CONTACT',
  //   payload: contactId
  // })

  // export const sendInputMessage = (text) => ({
  //   type : 'SEND_INPUT_MESSAGE',
  //   payload: {
  //       label: "sent",
  //       text: text,
  //       time: new Date().toString()
  //   }
  // })
  
  // export const addNewContact = (contactObj) => ({
  //   type : 'ADD_NEW_CONTACT',
  //   payload: contactObj,
  // })

  // export const updateExistingContact = (contactObj) => ({
  //   type : 'UPDATE_EXISTING_CONTACT',
  //   payload: contactObj,
  // })

  // export const deleteContact = (contactId) => ({
  //   type : 'DELETE_CONTACT',
  //   payload: contactId,
  // })

