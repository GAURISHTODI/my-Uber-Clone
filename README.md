Hello there, I have tried creating Uber-Clone, here is some information about it-

TECH USED:

(1) React-Native (Javascript) using Redux for Central Data and Hooks for State-management
(2) tailwind css using classnames library
(3) GCP-API Integration

FEATURES:

(1) Homescreen and Mapscreen, where you can put "Where from?" and "Where To?" data
(2) Live Distance and Directions fetched using GCP's API, with marker implementation
(3) Live Fare and Time calculation displayed as per distance, duration and other factors
(4) Surplus small features:

    (i) Implemented React-Redux for creating a central data storage unit
    (ii) Implemented tailwind-css using tailwind classnames library
    (iii) Gestures, main-menu button and tab-like opacities which all helps to navigaet easily.
    (iv) Locally saves "favourite" location under "Home" and "Office" for easy daily use.
    (v) Seperate options available with separate fares namely for UberX, UberXL and UberLUX
    (vi) Added SURGE_CHARGE_RATE variable (See RideOptionsCard.js) that can be modified for to boost charges in high traffic

APIs USED:
(Through Google Cloud Platform)
(implemented using GoogleAutocomplete)

(1) GooglePlacesAPI
(2) GoogleDirectionsAPI
(3) GoogleDistanceMatrixAPI
