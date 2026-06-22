function HabitItem({
    habit,
    toggleHabit,
    deleteHabit,
}) {
    return (
        <li>
            <input
            type="checkbox"
            checked={habit.completed}
            onChange={() =>
                toggleHabit(habit.id)
            }
            />
            
            <span
                style={{
                    textDecortation: habit.completed
                    ? "line-through"
                    : "none",
                    marginLeft: "8px",
                }}
                >
                    {habit.name}
                </span>
                    
                <button
                onClick={() =>
                    deleteHabit(habit.id)
                }
                >
                    Delete
                </button>
        </li>
    );
}

export default HabitItem;