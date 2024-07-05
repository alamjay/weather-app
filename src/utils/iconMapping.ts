import icon1 from "../assets/icons/01.png";
import icon2 from "../assets/icons/02.png";
import icon3 from "../assets/icons/03.png";
import icon4 from "../assets/icons/04.png";
import icon9 from "../assets/icons/09.png";
import icon10 from "../assets/icons/10.png";
import icon11 from "../assets/icons/11.png";
import icon13 from "../assets/icons/13.png";
import icon50 from "../assets/icons/50.png";

export const iconMapping = (forecast: any) => {
    switch (forecast?.weather[0]?.icon) {
        case "02d" :
        case "02n":
            return icon2;
        case "03d":
        case "03n":
            return icon3;
        case "04d":
        case "04n":
            return icon4;
        case "09d":
        case "09n":
            return icon9;
        case "10d":
        case "10n":
            return icon10;
        case "11d":
        case "11n":
            return icon11;
        case "13d":
        case "13n":
            return icon13;
        case "50d":
        case "50n":
            return icon50;
        default:
            return icon1;
    }
}