import { Search as SearchIcon } from 'lucide-react';

const SearchUsers = () => {
  return (
    <div className="input__container">      
      <input
        type="text"
        name="username"
        className="input__search !font-sour-gummy dark:border-slate-900 dark:hover:border-black hover:shadow-[5px_5px_0_0_black] focus:shadow-[5px_5px_0_0_black] 
         dark:hover:shadow-[5px_5px_0_0_#94a3b8] dark:focus:shadow-[5px_5px_0_0_#94a3b8]
         hover:-translate-x-1 hover:-translate-y-1 focus:-translate-x-1 focus:-translate-y-1 
         transition-transform"
        placeholder="Enter username"
      />
      <button type="submit" className="input__button__shadow dark:!shadow-slate-400 hover:bg-[#6439FF] 
         hover:shadow-[5px_5px_0_0_black] 
         dark:hover:shadow-[5px_5px_0_0_#94a3b8]
         hover:-translate-x-1 hover:-translate-y-1 
         transition-transform">
        <SearchIcon className='stroke-slate-100 !fill-[#6439FF]' />
      </button>
    </div>
  );
};

export default SearchUsers;
