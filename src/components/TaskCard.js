import React, { useState } from 'react';

const TaskCard = ({ task, onUpdate }) => {
  const [notes, setNotes] = useState(task.notes);

  const handleDone = () => onUpdate(task.id, { status: 'Done', notes });
  const handleSave = () => onUpdate(task.id, { notes });

  return (
    <div className="border p-4 m-2 rounded">
      <h3 className="font-bold">#{task.id} - {task.task}</h3>
      <p>Due: {task.due_time || 'N/A'}</p>
      <p>Status: {task.status}</p>
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      <div className="flex gap-2 mt-2">
        <button onClick={handleSave}> Save Notes</button>
        <button onClick={handleDone}> Mark Done</button>
      </div>
    </div>
  );
};

export default TaskCard;
