import GettingStartedSection from "@components/GettingStartedSection";
import LandingBanner from "@components/LandingBanner";
import { Fragment } from "react";

const IndexPage = () => {
    return (
        <Fragment>
            <LandingBanner />
            <GettingStartedSection />
        </Fragment>
    );
};

export default IndexPage;