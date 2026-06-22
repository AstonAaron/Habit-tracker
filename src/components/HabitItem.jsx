import { useState } from "react";

function HabitItem({ habit, toggleHabit, deleteHabit, editHabit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(habit.name);

    const saveEdit = () => {
        editHabit(habit.id, editedName);
        setIsEditing(false);
    };

    return (
        <li className="habit-item">
            <input
                type="checkbox"
                checked={habit.completed}
                onChange={() => toggleHabit(habit.id)}
            />

            {isEditing ? (
                <input value={editedName} onChange={(e) => setEditedName(e.target.value)} />
            ) : (
                <div className="habit-info">
                    <span className={habit.completed ? "completed" : ""}>{habit.name}</span>

                    <small>
                        {habit.category} | Streak: {habit.streak}
                    </small>

                    {habit.lastCompletedDate && (
                        <small>Last completed: {habit.lastCompletedDate}</small>
                    )}
                </div>
            )}

            {isEditing ? (
                <button onClick={saveEdit}>Save</button>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}

            <button onClick={() => deleteHabit(habit.id)}>Delete</button>
        </li>
    );
}

export default HabitItem;
