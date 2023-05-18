const Menu = ({ direction }) => {
  const isLeft = direction === "left";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={27} height={14} fill="none">
      <path
        stroke="#fff"
        d={isLeft ? "M0 1h27M0 7h27M0 13h17" : "M0 1h27M0 7h27M10 13h17"}
      />
    </svg>
  );
};

export default Menu;
