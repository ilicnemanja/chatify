"use client";

import Link from "next/link";
import { X } from "lucide-react";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();
  };

  return (
    <button type="reset" onClick={reset}>
      <Link href="/friends/add-friend" className="search-btn text-neutral-400">
        <X className="size-5" />
      </Link>
    </button>
  );
};

export default SearchFormReset;