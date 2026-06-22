import { useEffect, useState } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import "./App.css";

function App() {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem("habits");
    return savedHabits ? JSON.parse(savedHabits) : [];
  });

  const [newHabit, setNewHabit] = useState("");
  const [category, setCategory] = useState("Health");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = () => {
    if (!newHabit.trim()) return;

    const habit = {
      id: Date.now(),
      name: newHabit,
      category,
      completed: false,
      streak: 0,
    };

    setHabits([...habits, habit]);
    setNewHabit("");
    setCategory("Health");
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed: !habit.completed,
              streak: !habit.completed ? habit.streak + 1 : Math.max(habit.streak - 1, 0),
            }
          : habit
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const editHabit = (id, updatedName) => {
    if (!updatedName.trim()) return;

    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, name: updatedName } : habit
      )
    );
  };

  const clearCompleted = () => {
    setHabits(habits.filter((habit) => !habit.completed));
  };

  const completedCount = habits.filter((habit) => habit.completed).length;

  const filteredHabits = habits.filter((habit) => {
    if (filter === "completed") return habit.completed;
    if (filter === "active") return !habit.completed;
    return true;
  });

  return (
    <main className="app">
      <section className="card">
        <h1>Habit Tracker</h1>

        <p className="stats">
          Completed: {completedCount} / {habits.length}
        </p>

        <HabitForm
          newHabit={newHabit}
          setNewHabit={setNewHabit}
          category={category}
          setCategory={setCategory}
          addHabit={addHabit}
        />

        <div className="filters">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("active")}>Active</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
        </div>

        <HabitList
          habits={filteredHabits}
          toggleHabit={toggleHabit}
          deleteHabit={deleteHabit}
          editHabit={editHabit}
        />

        {completedCount > 0 && (
          <button className="clear-btn" onClick={clearCompleted}>
            Clear Completed
          </button>
        )}
      </section>
    </main>
  );
}

export default App;