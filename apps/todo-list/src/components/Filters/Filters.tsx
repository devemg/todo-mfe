import './Filters.css';

type FiltersProps = {
  selectedFilter: string;
  onFilterChange?: (filter: string) => void;
}

const filters = ['All', 'Active', 'Completed'];

export const Filters: React.FC<FiltersProps> = ({ onFilterChange, selectedFilter = 'All'}) => {

  const handleFilterClick = (element: string) => {
    onFilterChange && onFilterChange(element);
  }

  return (
    <ul className='filters'>
      {
        filters.map((el)=><li className={selectedFilter === el ? 'selected' : ''} key={el} onClick={()=>handleFilterClick(el)}>{el}</li>)
      }
    </ul>
  )
}
