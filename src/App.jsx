import {useState} from "react";

import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
    const [habits, setHabits] = useState([]);
    const [newHabit, setNewHabit] = useState("");
    
    const addHabit = () => {
        if (!newHabit.trim()) return;
        
        setHabits([
            ...habits,
            {
                id: Date.now(),
                name: newHabit,
                completed: false,
            },
        ]),
        
        setNewHabit("");
    };
    
    const toggleHabit = (id) => {
        setHabits(
            habits.map((habit) =>
            habit.id === id
        ? {
            ...habit,
            completed: !habit.completed,
        }
            :habit
            )
        );
    };
    
    const deleteHabit = (id) => {
        setHabits(
            habits.filter(
                (habit) => habit.id !== id
            )
        );
    };
    
    const completedCount =
    habits.filter(
        (habit) => habit.completed
    ).length;
    
    
    return (
        <div style={{ padding: "2rem" }}>
            <h1> Habit Tracker </h1>
            
            <p> 
                Completed: {completedCount} /
                {habits.length}
            </p>
            
            <HabitForm
            newHabit={newHabit}
            setNewHabit={setNewHabit}
            addHabit={addHabit}
            />
            
            <HabitList
            habits={habits}
            toggleHabit={toggleHabit}
            deleteHabit={deleteHabit}
            />
        </div>
    );
}

export default App;