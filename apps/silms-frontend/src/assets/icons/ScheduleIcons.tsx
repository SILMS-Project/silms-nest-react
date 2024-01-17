import { ReactNode } from "react";

interface LayoutProps {
    icon: ReactNode;
};

const ScheduleIcons = (props: LayoutProps) => {

    return (
        <>
            {props.icon}
        </>  
    );
};

export default ScheduleIcons;