import { useState } from "react";

function App() {
    const [habits, setHabits] = useState([]);
    const [newHabit, setNewHabit] = useState("");

    const addHabit = () => {
        if (!newHabit.trim()) return;

        const habit = {
            id: Date.now(),
            name: newHabit,
            completed: false
        };

        setHabits({ ...habits, habit });
        setNewHabit("");
    };

    const toggleHabit = (id) => {
        setHabits(
            habits.map((habit) =>
                habit.id === id ? { ...habit, completed: !habit.completed } : habit
            )
        );
    };

    const deleteHabit = (id) => {
        setHabits(habits.filter((habit) => habit.id !== id));
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Habit Tracker</h1>
            <input
                type="text"
                value={newHabit}
                onChange={(e) => setNewHabit(e.target.value)}
                placeholder="Enter a habit"
            />

            <button onClick={addHabit}>Add</button>

            <ul>
                {habits.map((habit) => (
                    <li key={habit.id}>
                        <input
                            type="checkbox"
                            checked={habit.completed}
                            onChange={() => toggleHabit(habit.id)}
                        />

                        <span
                            style={{
                                textDecoration: habit.completed ? "line-through" : "none",
                                marginLeft: "8px"
                            }}>
                            {habit.name}
                        </span>

                        <button
                            onClick={() => deleteHabit(habit.id)}
                            style={{ marginLeft: "10px" }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
