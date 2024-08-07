type props = {
    height?: string;
    width?: string;
    color?: string;
}

export const LoadingIndicator = ({height="20px", width="20px", color="#09f"}: props) => {
    return (
        <div className="pulse-indicator">
            <div className="pulse pulse1" style={{height: height, width: width, backgroundColor: color}}></div>
            <div className="pulse pulse2" style={{height: height, width: width, backgroundColor: color}}></div>
            <div className="pulse pulse3" style={{height: height, width: width, backgroundColor: color}}></div>
        </div>
    )
}