import React from "react";

const layout = ({ children }) => {
   return (
      <div>
         <nav>root navbar</nav>
         {children}
      </div>
   );
};

export default layout;
