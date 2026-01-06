"use client";

import React, { useCallback, useState } from "react";

const page = () => {
   const [value, setValue] = useState(1);

   const handleCount = useCallback(() => {
      setValue((prev) => prev + 1);
   }, []);

   return (
      <div>
         <h1> value is incremented : {value}</h1>
         <button onClick={() => handleCount()} className="flex px-4 py-2 text-2xl bg-green-600">
            ADD
         </button>
         {value}
      </div>
   );
};

export default page;
