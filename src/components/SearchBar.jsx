function SearchBar(props) {
  function handleSearchChange(event) {
    props.setSearchTerm(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search Projects"
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
