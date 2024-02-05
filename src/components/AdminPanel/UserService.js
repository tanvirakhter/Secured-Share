// src/UserService.js
const fetchUsers = () => {
    // Replace this with your actual data fetching logic (e.g., from an API)
    return Promise.resolve([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
      { id: 3, name: 'Bob Smith' },
      { id: 4, name: 'Alice Johnson' },
      { id: 5, name: 'Charlie Brown' },
    ]);
  };
  
  export { fetchUsers };
  