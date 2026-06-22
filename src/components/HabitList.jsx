import HabitItem from "./HabitItem";

function HabitList({ habits, toggleHabit, deleteHabit, editHabit }) {
  if (habits.length === 0) {
    return <p className="empty-message">No habits found.</p>;
  }

  return (
    <ul className="habit-list">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          toggleHabit={toggleHabit}
          deleteHabit={deleteHabit}
          editHabit={editHabit}
        />
      ))}
    </ul>
  );
}

export default HabitList;