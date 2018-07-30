// function to create a one second delay
export const delay = (time) => new Promise(resolve => setTimeout(() => resolve(), time))
