import ReactGA from 'react-ga';

export const setupAnalytics = () => {
    ReactGA.initialize('G-53BWKJ5PSL');
}

export const logPageView = (event: string) => {
    ReactGA.pageview(event);
}