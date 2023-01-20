export default function CategoryBadge({ category, greyed = false }) {
  return greyed ? (
    <div className="uppercase text-sm text-darkgray px-[5px] py-[3px] rounded-md w-fit bg-graybadgebg">
      {category.name}
    </div>
  ) : (
    <div className="uppercase text-sm text-blue px-[5px] py-[3px] rounded-md w-fit bg-bluebadgebg">
      {category.name}
    </div>
  );
}
