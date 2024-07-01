import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({ 
          id,
          title,
          img,
          titleClassName,
          description,
          imgClassName,
          className,
          spareImg
        }) => (
            <BentoGridItem
                key={id}
                id={id}
                img={img}
                spareImg={spareImg} 
                title={title}
                description={description}
                className={className}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
            />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
