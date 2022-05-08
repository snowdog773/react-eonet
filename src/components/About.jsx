import React from "react";
const About = () => {
  return (
    <div className="reportOuter">
      <div></div>
      <div className="aboutContent">
        <h2>All About CAGED</h2>
        <p>
          The climate and geological event dispatch or CAGED for short is an
          interface that displays data about current and past climate and
          geological events. The data is taken from NASA&apos;s Earth
          Observatory Natural Event Tracker (EONET) which collects data from a
          number of sources and maintains a database of current and past
          environmental events. This site is designed to provide a quick and
          convenient way to search through this information and quickly return
          important data relating to each event, including a satellite map of
          the location it took place.
        </p>
        <p>
          One of the main motivators for creating this site is to showcase the
          sheer number of extreme weather events happening globally, and how
          climate change is shaping the future of our planet. The message I hope
          people will take away is that its not too late to change our course
          but it requires action now. Both individually and collectively we need
          to make the difficult decisions now to keep global warming below the
          threshold of survivability.
        </p>
        <p>
          From a technical perspective, this site is built in the React
          Javascript framework. The initial render returns the last 100 days of
          events from the EONET API, and the options on the left hand panel are
          used to dynamically create API requests to return a list of events
          based on user defined parameters. The panel on the right contains a
          search box which calls a regexp function to quickly search through the
          currently displayed events by title, as well as a set of quick filter
          buttons which filter the currently displayed data by category. These
          controls allow the user to sift through lists of events quickly
          without having to wait seconds for an API call to return each time.
        </p>
        <h2>Known Issues</h2>
        <p>
          Deep within the JSON object returned by the API lies the long and lat
          references for each event which is passed to google maps to render a
          satellite view of the area in question. However in some cases the data
          returns multiple locations for reasons such as the event happening in
          multiple locations or to track a storm or an iceberg as it moves. The
          logic in this site has been set to return the first pair of
          coordinates for Googlemaps to render a satellite view, however as only
          one position in a sequence of positions is rendered this can sometimes
          produce innacurate results.
        </p>
        <p>
          The other issue is to do with events such as icebergs that can
          sometimes have existed within EONET for decades. The site is set up to
          render the most recent entries in the database first, however a
          discrepancy between the date an event is created and the date of its
          most recent update means that the ordering of events in the list can
          sometimes be unpredictable, particularly when it comes to icebergs.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default About;
