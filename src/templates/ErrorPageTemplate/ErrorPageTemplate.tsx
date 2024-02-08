interface ErrorPageTemplateProps {
  title: string;
  description: string;
  image: React.ReactNode;
}

export const ErrorPageTemplate = ({
  title,
  description,
  image,
}: ErrorPageTemplateProps) => {
  return (
    <div className="">
      <div className="">
        {image}
        <div className="">
          <h1 className="">{title}</h1>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
};
