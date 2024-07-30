import React from "react";

const CustomLink = ({ title, date, buttonText }) => {
  return (
    <>
      <div className="my-32 flex w-full items-center justify-end px-5">
        <div className="flex w-1/2 flex-col items-center justify-center sm:w-full">
          <div className="flex w-full items-center justify-between">
            <h4 className="font-[Milk-2] text-3xl font-medium leading-normal text-black xxl:text-5xl">
              {title}
            </h4>
            <h4 className="font-[Milk-2] text-3xl font-medium leading-normal text-black xxl:text-5xl">
              {date}
            </h4>
          </div>
          <div className="custom-link SMN_effect-31 mt-2 flex h-12 w-full cursor-pointer items-center justify-between rounded-lg bg-black px-5 xxl:mt-5 xxl:h-24 xxl:rounded-2xl">
            <h5 className="centro font-[Milk-2] text-lg font-medium leading-normal text-white xxl:text-3xl">
              {buttonText}
              <span>{buttonText}</span>
            </h5>
            <div className="arrow font-[Milk-2] text-xl leading-normal text-white xxl:text-3xl">
              →
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomLink;
