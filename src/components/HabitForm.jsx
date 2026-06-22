function HabitForm({
    newHabit,
    setNewHabit,
    addHabit
}) {
    return (
        <div>
            <input
            type="text"
            value={newHabit}
            onChange={(e) =>
                setNewHabit(e.target.value)
            }
            placeholder="Enter a habit"
            />
            
            <button
            onClick={addHabit}
            disabled={!newHabit.trim()}
            >
                Add
            </button>
        </div>
    );
}

export default HabitForm;