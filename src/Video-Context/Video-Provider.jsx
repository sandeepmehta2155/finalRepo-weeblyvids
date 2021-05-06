import { createContext, useContext, useReducer } from "react";

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [videoState, videoDispatch] = useReducer(videoReducer, { videoSrc });
  return (
    <VideoContext.Provider
      value={{ videoSrc: videoState.videoSrc, videoDispatch }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export function useVid() {
  return useContext(VideoContext);
}

const videoReducer = (state, action) => {
  switch (action.type) {
    case "addToHistory":
      return {
        ...state,
        videoSrc: state.videoSrc.map((obj) =>
          action.obj.videoDetails.id === obj.videoDetails.id
            ? { ...obj, addedInHistory: "yes" }
            : obj
        )
      };
    case "addToLiked":
      return {
        ...state,
        videoSrc: state.videoSrc.map((obj) =>
          action.obj.videoDetails.id === obj.videoDetails.id
            ? { ...obj, isVideoLiked: "yes" }
            : obj
        )
      };
    case "removeFromLiked":
      return {
        ...state,
        videoSrc: state.videoSrc.map((obj) =>
          action.obj.videoDetails.id === obj.videoDetails.id
            ? { ...obj, isVideoLiked: "no" }
            : obj
        )
      };
    case "subscribe":
      return {
        ...state,
        videoSrc: state.videoSrc.map((obj) =>
          action.obj.videoDetails.id === obj.videoDetails.id
            ? { ...obj, subscription: "yes" }
            : obj
        )
      };
    case "subscribed":
      return {
        ...state,
        videoSrc: state.videoSrc.map((obj) =>
          action.obj.videoDetails.id === obj.videoDetails.id
            ? { ...obj, subscription: "no" }
            : obj
        )
      };
    case "addToWatchLater":
      return {
        ...state,
        videoSrc: state.videoSrc.map((obj) =>
          action.obj.videoDetails.id === obj.videoDetails.id
            ? { ...obj, watchLater: "yes" }
            : obj
        )
      };
    case "removeFromWatchLater":
      return {
        ...state,
        videoSrc: state.videoSrc.map((obj) =>
          action.obj.videoDetails.id === obj.videoDetails.id
            ? { ...obj, watchLater: "no" }
            : obj
        )
      };
    default:
      return { ...state };
  }
};

const videoSrc = [
  {
    addedInHistory: "no",
    isVideoLiked: "no",
    videoDetails: {
      id: "hIYSxqrraWA",
      title:
        "Basics of Share Market for Beginners | Investing in 2021 | Ankur Warikoo Hindi",
      views: "192,188 views",
      date: "Dec 22, 2020",
      duration: "19:34",
      streamer: "warikoo",
      streamerIcon:
        "https://yt3.ggpht.com/ytc/AAUvwni0zYJJ7E-m-2tskhvqp9bnUjIP0dnU1dcn9c8lNQ=s176-c-k-c0x00ffffff-no-rj",
      contentCovered:
        "How to invest in stocks​? What is my #investing​ strategy? Which tools do I use?..."
    },
    srcLinks: {
      imgSrc:
        "https://i.ytimg.com/vi/hIYSxqrraWA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbWlmfBaykh_BmPZ2b2PPktBos",
      vidSrc: "https://www.youtube.com/embed/hIYSxqrraWA?autoplay=1",
      gifSrc:
        "https://i.ytimg.com/an_webp/jwsr3kXru7g/mqdefault_6s.webp?du=3000&sqp=CIiCyYQG&rs=AOn4CLCeTD8kAm5qAz-SFem1GjBs8SYz-A"
    },

    subscription: "no",
    watchLater: "no"
  },
  {
    addedInHistory: "no",
    isVideoLiked: "no",
    videoDetails: {
      id: "wFDidmRsSpY",
      title:
        "How to 🟢BUY 🔴SELL SHARES on Zerodha Demat a/c, KITE APP? Live Demo!",
      views: "1,168,009 views",
      date: "May 20, 2020",
      duration: "",
      streamer: "Labour Law Advisor",

      streamerIcon:
        "https://yt3.ggpht.com/ytc/AAUvwniKLv8OUIav1NVgVBwJRec7HY55CWhONnFtwHSJDg=s176-c-k-c0x00ffffff-no-rj",
      contentCovered:
        "If trading in the stock market has you confused then watch this live demo with an in-depth tutorial that will take you step-by-step on how to buy ... "
    },
    srcLinks: {
      imgSrc:
        "https://i.ytimg.com/vi/wFDidmRsSpY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDC5uQ53N3XiDw4vbxnVWGjWh9zKA",
      vidSrc: "https://www.youtube.com/embed/wFDidmRsSpY?autoplay=1"
    },

    subscription: "no",
    watchLater: "no"
  },
  {
    addedInHistory: "no",
    isVideoLiked: "no",
    videoDetails: {
      id: "6rUovK92M5g",
      title:
        "6 दिन में 6 देशो को जंग में हरा दिया | Israel Case Study | Dr Vivek Bindra",
      views: "15,193,346 views",
      date: "Mar 3, 2019",
      streamer: "Dr. Vivek Bindra: Motivational Speaker",
      duration: "",
      streamerIcon:
        "https://yt3.ggpht.com/ytc/AAUvwniwmNRAmAsMmX8cognCbbxwQA-KGY66i-3TmX6H8A=s176-c-k-c0x00ffffff-no-rj",
      contentCovered:
        "If trading in the stock market has you confused then watch this live demo with an in-depth tutorial that will take you step-by-step on how to buy ... "
    },
    srcLinks: {
      imgSrc:
        "https://i.ytimg.com/vi/6rUovK92M5g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfHGgMhviAsZiEEOQDs47_Dj-RRQ",
      vidSrc: "https://www.youtube.com/embed/6rUovK92M5g"
    },

    subscription: "no",
    watchLater: "no"
  },
  {
    addedInHistory: "no",
    isVideoLiked: "no",
    videoDetails: {
      id: "X2iWUZQf1Ko",
      title:
        "Basics of Stock Market For Beginners Lecture 1 By CA Rachana Phadke Ranade",
      views: "13M views",
      timeSpan: "2 years ago",
      duration: "",
      streamer: "CA Rachana Phadke Ranade",
      streamerIcon:
        "https://yt3.ggpht.com/ytc/AAUvwnhyQxJ5qyZrz_BA3G3UnYz7H5GCX5PrkGtcyCM6RQ=s68-c-k-c0x00ffffff-no-rj",
      contentCovered:
        "What is covered? 00:00 - Introduction 05:50 - Busting the major myths of Stock Market 06:11 - Myth #1: Investments in Stock ..."
    },
    srcLinks: {
      imgSrc:
        "https://i.ytimg.com/vi/Xn7KWR9EOGQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVeuC-hbtJoWBlcWHzfZHLDRXDeA?autoplay=1",
      vidSrc: "https://www.youtube.com/embed/X2iWUZQf1Ko"
    },

    subscription: "no",
    watchLater: "no"
  },
  {
    addedInHistory: "no",
    isVideoLiked: "no",
    videoDetails: {
      id: "jwsr3kXru7g",
      title:
        "Basics of Share Market for Beginners pt.2 | Investing in 2021 | Ankur Warikoo Hindi",
      views: "147,060 views",
      date: "Feb 9, 2021",
      duration: "15:20",
      streamer: "warikoo",
      streamerIcon:
        "https://yt3.ggpht.com/ytc/AAUvwni0zYJJ7E-m-2tskhvqp9bnUjIP0dnU1dcn9c8lNQ=s176-c-k-c0x00ffffff-no-rj",
      contentCovered:
        "In this video, I will teach you five basic things to know while #investing​ in the stock market. If you have never invested in the stock market before or are scared of the market dipping or have very little money to invest, all your fears will be addressed in this video. We will also talk about the three mistakes you must avoid while investing in the stock market. "
    },
    srcLinks: {
      imgSrc:
        "https://i.ytimg.com/vi/jwsr3kXru7g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAklk6n5ucx-zXEwkUXAGvkIkn3lw",
      vidSrc: "https://www.youtube.com/embed/jwsr3kXru7g?autoplay=1",
      gifSrc:
        "https://i.ytimg.com/an_webp/nmjbzn1eKuM/mqdefault_6s.webp?du=3000&sqp=CNf6yIQG&rs=AOn4CLDXJYGOzz5tPd76dH7Qa6dF50k57Q"
    },

    subscription: "no",
    watchLater: "no"
  },
  // {
  //   videoDetails: {
  //     id: "wFDidmRsSpY",
  //     title:
  //       "How to 🟢BUY 🔴SELL SHARES on Zerodha Demat a/c, KITE APP? Live Demo!",
  //     views: "1,168,009 views",
  //     date: "May 20, 2020",
  //     streamer: "Labour Law Advisor",
  //     streamerIcon:
  //       "https://yt3.ggpht.com/ytc/AAUvwniKLv8OUIav1NVgVBwJRec7HY55CWhONnFtwHSJDg=s176-c-k-c0x00ffffff-no-rj",
  //     contentCovered:
  //       "If trading in the stock market has you confused then watch this live demo with an in-depth tutorial that will take you step-by-step on how to buy ... "
  //   },
  //   srcLinks: {
  //     imgSrc:
  //       "https://i.ytimg.com/vi/POdzdc-WNOY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDpTJmXzaHXlXcuhP_M8zpYiyf3Ww",
  //     vidSrc: "https://www.youtube.com/embed/wFDidmRsSpY"
  //   },
  //
  //     subscription: "no",watchLater :"no"
  //
  // },
  // {
  //   videoDetails: {
  //     id: "6rUovK92M5g",
  //     title:
  //       "6 दिन में 6 देशो को जंग में हरा दिया | Israel Case Study | Dr Vivek Bindra",
  //     views: "15,193,346 views",
  //     date: "Mar 3, 2019",
  //     streamer: "Dr. Vivek Bindra: Motivational Speaker",
  //     streamerIcon:
  //       "https://yt3.ggpht.com/ytc/AAUvwniwmNRAmAsMmX8cognCbbxwQA-KGY66i-3TmX6H8A=s176-c-k-c0x00ffffff-no-rj",
  //     contentCovered:
  //       "If trading in the stock market has you confused then watch this live demo with an in-depth tutorial that will take you step-by-step on how to buy ... "
  //   },
  //   srcLinks: {
  //     imgSrc:
  //       "https://i.ytimg.com/vi/6rUovK92M5g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfHGgMhviAsZiEEOQDs47_Dj-RRQ",
  //     vidSrc: "https://www.youtube.com/embed/6rUovK92M5g"
  //   },
  //
  //     subscription: "no",watchLater :"no"
  //
  // },
  // {
  //   videoDetails: {
  //     id: "X2iWUZQf1Ko",
  //     title:
  //       "Basics of Stock Market For Beginners Lecture 1 By CA Rachana Phadke Ranade",
  //     views: "13M views",
  //     timeSpan: "2 years ago",
  //     streamer: "CA Rachana Phadke Ranade",
  //     streamerIcon:
  //       "https://yt3.ggpht.com/ytc/AAUvwnhyQxJ5qyZrz_BA3G3UnYz7H5GCX5PrkGtcyCM6RQ=s68-c-k-c0x00ffffff-no-rj",
  //     contentCovered:
  //       "What is covered? 00:00 - Introduction 05:50 - Busting the major myths of Stock Market 06:11 - Myth #1: Investments in Stock ..."
  //   },
  //   srcLinks: {
  //     imgSrc:
  //       "https://i.ytimg.com/vi/Xn7KWR9EOGQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVeuC-hbtJoWBlcWHzfZHLDRXDeA",
  //     vidSrc: "https://www.youtube.com/embed/X2iWUZQf1Ko"
  //   },
  //
  //     subscription: "no",watchLater :"no"
  //
  // },
  {
    addedInHistory: "no",
    isVideoLiked: "no",
    videoDetails: {
      id: "nmjbzn1eKuM",
      title:
        "How to pick stocks? | Investment Masterclass | Ankur Warikoo Hindi Video",
      views: "83,483 views",
      date: "Mar 16, 2021",
      streamer: "warikoo",
      duration: "17:54",
      streamerIcon:
        "https://yt3.ggpht.com/ytc/AAUvwni0zYJJ7E-m-2tskhvqp9bnUjIP0dnU1dcn9c8lNQ=s176-c-k-c0x00ffffff-no-rj",
      contentCovered:
        "Stock picking is an art. And I understand most beginners are confused with it. They want to pick the methods of successful investors, but don’t know where to start...."
    },
    srcLinks: {
      imgSrc:
        "https://i.ytimg.com/vi/POdzdc-WNOY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDpTJmXzaHXlXcuhP_M8zpYiyf3Ww",
      vidSrc: "https://www.youtube.com/embed/nmjbzn1eKuM?autoplay=1",
      gifSrc:
        "https://i.ytimg.com/an_webp/POdzdc-WNOY/mqdefault_6s.webp?du=3000&sqp=COb6yIQG&rs=AOn4CLDPVbcLK4qOOl6zbKzGt-hqJdHOqw"
    },

    subscription: "no",
    watchLater: "no"
  }
  // {
  //   videoDetails: {
  //     id: "wFDidmRsSpY",
  //     title:
  //       "How to 🟢BUY 🔴SELL SHARES on Zerodha Demat a/c, KITE APP? Live Demo!",
  //     views: "1,168,009 views",
  //     date: "May 20, 2020",
  //     streamer: "Labour Law Advisor",
  //     streamerIcon:
  //       "https://yt3.ggpht.com/ytc/AAUvwniKLv8OUIav1NVgVBwJRec7HY55CWhONnFtwHSJDg=s176-c-k-c0x00ffffff-no-rj",
  //     contentCovered:
  //       "If trading in the stock market has you confused then watch this live demo with an in-depth tutorial that will take you step-by-step on how to buy ... "
  //   },
  //   srcLinks: {
  //     imgSrc:
  //       "https://i.ytimg.com/vi/wFDidmRsSpY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDC5uQ53N3XiDw4vbxnVWGjWh9zKA",
  //     vidSrc: "https://www.youtube.com/embed/wFDidmRsSpY"
  //   },
  //
  //     subscription: "no",watchLater :"no"
  //
  // },
  // {
  //   videoDetails: {
  //     id: "6rUovK92M5g",
  //     title:
  //       "6 दिन में 6 देशो को जंग में हरा दिया | Israel Case Study | Dr Vivek Bindra",
  //     views: "15,193,346 views",
  //     date: "Mar 3, 2019",
  //     streamer: "Dr. Vivek Bindra: Motivational Speaker",
  //     streamerIcon:
  //       "https://yt3.ggpht.com/ytc/AAUvwniwmNRAmAsMmX8cognCbbxwQA-KGY66i-3TmX6H8A=s176-c-k-c0x00ffffff-no-rj",
  //     contentCovered:
  //       "If trading in the stock market has you confused then watch this live demo with an in-depth tutorial that will take you step-by-step on how to buy ... "
  //   },
  //   srcLinks: {
  //     imgSrc:
  //       "https://i.ytimg.com/vi/6rUovK92M5g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfHGgMhviAsZiEEOQDs47_Dj-RRQ",
  //     vidSrc: "https://www.youtube.com/embed/6rUovK92M5g"
  //   },
  //
  //     subscription: "no",watchLater :"no"
  //
  // },
  // {
  //   videoDetails: {
  //     id: "X2iWUZQf1Ko",
  //     title:
  //       "Basics of Stock Market For Beginners Lecture 1 By CA Rachana Phadke Ranade",
  //     views: "13M views",
  //     timeSpan: "2 years ago",
  //     streamer: "CA Rachana Phadke Ranade",
  //     streamerIcon:
  //       "https://yt3.ggpht.com/ytc/AAUvwnhyQxJ5qyZrz_BA3G3UnYz7H5GCX5PrkGtcyCM6RQ=s68-c-k-c0x00ffffff-no-rj",
  //     contentCovered:
  //       "What is covered? 00:00 - Introduction 05:50 - Busting the major myths of Stock Market 06:11 - Myth #1: Investments in Stock ..."
  //   },
  //   srcLinks: {
  //     imgSrc:
  //       "https://i.ytimg.com/vi/Xn7KWR9EOGQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVeuC-hbtJoWBlcWHzfZHLDRXDeA",
  //     vidSrc: "https://www.youtube.com/embed/X2iWUZQf1Ko"
  //   },
  //
  //     subscription: "no",watchLater :"no"
  //
  // },
  // {
  //   videoDetails: {
  //     id: "POdzdc-WNOY",
  //     title:
  //       "How to get rich in the stock market? | Warikoo Hindi | Share market investing for beginners",
  //     views: "147,060 views",
  //     date: "Feb 9, 2021",
  //     duration: "11:51",
  //     streamer: "warikoo",
  //     streamerIcon:
  //       "https://yt3.ggpht.com/ytc/AAUvwni0zYJJ7E-m-2tskhvqp9bnUjIP0dnU1dcn9c8lNQ=s176-c-k-c0x00ffffff-no-rj",
  //     contentCovered:
  //       "In this video we will discuss what is the best investment option for you, and how to cover for market risks. We will also understand how having time on your hand increases the chances of your money being multiplied...."
  //   },
  //   srcLinks: {
  //     imgSrc:
  //       "https://i.ytimg.com/vi/POdzdc-WNOY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDpTJmXzaHXlXcuhP_M8zpYiyf3Ww",
  //     vidSrc: "https://www.youtube.com/embed/POdzdc-WNOY",
  //     gifSrc:
  //       "https://i.ytimg.com/an_webp/hIYSxqrraWA/mqdefault_6s.webp?du=3000&sqp=CMCPyYQG&rs=AOn4CLBCUa7hux3ArvX0D116qiaDbHtD8w"
  //   },
  //
  //     subscription: "no",watchLater :"no"
  //
  // },
  // {
  //   videoDetails: {
  //     id: "wFDidmRsSpY",
  //     title:
  //       "How to 🟢BUY 🔴SELL SHARES on Zerodha Demat a/c, KITE APP? Live Demo!",
  //     views: "1,168,009 views",
  //     date: "May 20, 2020",
  //     streamer: "Labour Law Advisor",
  //     streamerIcon:
  //       "https://yt3.ggpht.com/ytc/AAUvwniKLv8OUIav1NVgVBwJRec7HY55CWhONnFtwHSJDg=s176-c-k-c0x00ffffff-no-rj",
  //     contentCovered:
  //       "If trading in the stock market has you confused then watch this live demo with an in-depth tutorial that will take you step-by-step on how to buy ... "
  //   },
  //   srcLinks: {
  //     imgSrc:
  //       "https://i.ytimg.com/vi/wFDidmRsSpY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDC5uQ53N3XiDw4vbxnVWGjWh9zKA",
  //     vidSrc: "https://www.youtube.com/embed/wFDidmRsSpY"
  //   },
  //
  //     subscription: "no",watchLater :"no"
  //
  // },
  // {
  //   videoDetails: {
  //     id: "6rUovK92M5g",
  //     title:
  //       "6 दिन में 6 देशो को जंग में हरा दिया | Israel Case Study | Dr Vivek Bindra",
  //     views: "15,193,346 views",
  //     date: "Mar 3, 2019",
  //     streamer: "Dr. Vivek Bindra: Motivational Speaker",
  //     streamerIcon:
  //       "https://yt3.ggpht.com/ytc/AAUvwniwmNRAmAsMmX8cognCbbxwQA-KGY66i-3TmX6H8A=s176-c-k-c0x00ffffff-no-rj",
  //     contentCovered:
  //       "If trading in the stock market has you confused then watch this live demo with an in-depth tutorial that will take you step-by-step on how to buy ... "
  //   },
  //   srcLinks: {
  //     imgSrc:
  //       "https://i.ytimg.com/vi/6rUovK92M5g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfHGgMhviAsZiEEOQDs47_Dj-RRQ",
  //     vidSrc: "https://www.youtube.com/embed/6rUovK92M5g"
  //   },
  //
  //     subscription: "no",watchLater :"no"
  //
  // },
  // {
  //   videoDetails: {
  //     id: "X2iWUZQf1Ko",
  //     title:
  //       "Basics of Stock Market For Beginners Lecture 1 By CA Rachana Phadke Ranade",
  //     views: "13M views",
  //     timeSpan: "2 years ago",
  //     streamer: "CA Rachana Phadke Ranade",
  //     streamerIcon:
  //       "https://yt3.ggpht.com/ytc/AAUvwnhyQxJ5qyZrz_BA3G3UnYz7H5GCX5PrkGtcyCM6RQ=s68-c-k-c0x00ffffff-no-rj",
  //     contentCovered:
  //       "What is covered? 00:00 - Introduction 05:50 - Busting the major myths of Stock Market 06:11 - Myth #1: Investments in Stock ..."
  //   },
  //   srcLinks: {
  //     imgSrc:
  //       "https://i.ytimg.com/vi/Xn7KWR9EOGQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVeuC-hbtJoWBlcWHzfZHLDRXDeA",
  //     vidSrc: "https://www.youtube.com/embed/X2iWUZQf1Ko"
  //   },
  //
  //     subscription: "no",watchLater :"no"
  //
  // }
];
