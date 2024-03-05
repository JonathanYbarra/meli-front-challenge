
export const ProductBreadCrumb = () => {
  const categories: string[] = ["Electornica, Audio y Video", "IPod"];
  
  return (
    <ul className="breadcrumb">
      {categories.map((category, i) => (
        <li
          className={`breadcrumb-item ${
            i === categories.length - 1 && "active"
          }`}
          key={i}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};
