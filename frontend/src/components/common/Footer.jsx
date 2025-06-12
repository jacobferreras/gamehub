import React from "react";

const TodoListFooter = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-black text-base-content rounded p-10">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by
          RadiantHub
        </p>
      </aside>
    </footer>
  );
};

export default TodoListFooter;
