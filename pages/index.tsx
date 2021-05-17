import DashboardPromo from "@components/DashboardPromo";
import GettingStartedSection from "@components/GettingStartedSection";
import LandingBanner from "@components/LandingBanner";
import LandingFooter from "@components/LandingFooter";
import ServerStatusSection from "@components/ServerStatusSection";
import { Fragment } from "react";

const IndexPage = () => {
    return (
        <Fragment>
            <LandingBanner />
            <GettingStartedSection />  
            <DashboardPromo />  
            <ServerStatusSection />
        </Fragment>
    );
};

export default IndexPage;