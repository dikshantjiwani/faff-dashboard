import React, { useState } from 'react';
import { fetchTasksForAssignee, updateTask } from './services/api';
import TaskCard from './components/TaskCard';

function App() {
  const [name, setName] = useState('');
  const [tasks, setTasks] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = async () => {
    try {
      const data = await fetchTasksForAssignee(name);
      setTasks(data);
      setLoggedIn(true);
    } catch (err) {
      alert(" Could not fetch tasks. Check name or network.");
    }
  };

  const logout = () => {
    setName('');
    setTasks([]);
    setLoggedIn(false);
  };

  const handleUpdate = async (id, updates) => {
    await updateTask(id, updates);
    const data = await fetchTasksForAssignee(name);
    setTasks(data);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4"> Task Dashboard</h1>

      {!loggedIn ? (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            className="border px-2 py-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={login} className="ml-2 px-4 py-1 bg-blue-600 text-white rounded">Login</button>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-semibold"> Hello, {name}</h2>
            <button onClick={logout} className="px-3 py-1 bg-red-500 text-white rounded">🚪 Logout</button>
          </div>
          {tasks.length === 0 ? (
            <p>No tasks assigned to you!</p>
          ) : (
            tasks.map(task => (
              <TaskCard key={task.id} task={task} onUpdate={handleUpdate} />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default App;
