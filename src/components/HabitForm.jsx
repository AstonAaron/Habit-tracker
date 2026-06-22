function HabitForm({
  newHabit,
  setNewHabit,
  category,
  setCategory,
  addHabit,
  
}) {
  return (
    <div className="habit-form">
      <input
        type="text"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        placeholder="Enter a habit"
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Health">Health</option>
        <option value="School">School</option>
        <option value="Fitness">Fitness</option>
        <option value="Coding">Coding</option>
        <option value="Personal">Personal</option>
      </select>

      <button onClick={addHabit} disabled={!newHabit.trim()}>
        Add
      </button>
    </div>
  );
  
}



export default HabitForm;