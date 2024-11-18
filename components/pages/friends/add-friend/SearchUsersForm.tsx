import Form from "next/form";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import SearchFormReset from "./SearchFormReset";

const SearchUsersForm = ({ username }: { username?: string }) => {
  return (
    <Form
      action={`/friends/add-friend`}
      className={`search-form flex flex-row items-center gap-3 w-2/5 p-2 rounded-md border-1 hover:md:scale-[101%] hover:shadow-md shadow-inner bg-neutral-100 dark:bg-neutral-600 cursor-pointer`}
    >
      <Input
        type="username"
        name="username"
        defaultValue={username}
        className="rounded-md font-sour-gummy"
        placeholder="Enter username"
      />
      {username && <SearchFormReset />}
      <button
        type="submit"
        className="text-[#6439FF] dark:text-custom-200 text-xl font-sour-gummy tracking-wide cursor-pointer"
      >
        <SearchIcon className="mr-4 hover:md:scale-[110%]" />
      </button>
    </Form>
  );
};

export default SearchUsersForm;
