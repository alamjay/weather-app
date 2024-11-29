import noDataIcon from "../assets/icons/no-data.svg"

type props = {
    style?: string;
}

export const NotFoundCard = ({style="w-full h-full"}: props) => {
    return (
        <div className={`flex flex-col justify-center items-center gap-y-2 pb-4 ${style}`}>
              <img className="h-8 w-8" src={noDataIcon} />
              <p className="text-[18px]">Sorry, data is not available.</p>
        </div>
    )
}