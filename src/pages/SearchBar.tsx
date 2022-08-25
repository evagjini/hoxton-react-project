type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};
export function SearchBar({ setSearch }: Props) {
  return (
    <input
      className="search"
      placeholder="Search for a flower..."
      onChange={(event) => {
        setSearch(event.target.value);
      }}
    />
  );
}
