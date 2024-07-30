import noDataIcon from "../assets/icons/no-data.svg"

export const NotFoundCard = () => {
    return (
        <div className="flex flex-col w-full h-full justify-center items-center gap-y-2 pb-4">
              <img className="h-8 w-8" src={noDataIcon} />
              <p className="text-[18px]">Sorry, data is not available.</p>
        </div>
    )
}