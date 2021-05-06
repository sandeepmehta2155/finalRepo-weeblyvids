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
      vidSrc: "https://www.youtube.com/embed/wFDidmRsSpY?autoplay=1",
      gifSrc:
        "https://i.ytimg.com/an_webp/wFDidmRsSpY/mqdefault_6s.webp?du=3000&sqp=CJKSz4QG&rs=AOn4CLD3BJ1bCr3sRXfThKsJEbovliUOlA"
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
      vidSrc: "https://www.youtube.com/embed/6rUovK92M5g?autoplay=1"
    },

    subscription: "no",
    watchLater: "no"
  },
  {
    addedInHistory: "no",
    isVideoLiked: "no",
    videoDetails: {
      id: "Xn7KWR9EOGQ",
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
      vidSrc: "https://www.youtube.com/embed/Xn7KWR9EOGQ?autoplay=1"
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
  {
    addedInHistory: "no",
    isVideoLiked: "no",
    videoDetails: {
      id: "gYFEPm5twi4",
      title: "What is 🟢INTRADAY TRADING in stock market?",
      views: "501,003 views",
      date: "Jun 23, 2020",
      streamer: "Labour Law Advisor",
      streamerIcon:
        "https://yt3.ggpht.com/ytc/AAUvwniKLv8OUIav1NVgVBwJRec7HY55CWhONnFtwHSJDg=s176-c-k-c0x00ffffff-no-rj",
      contentCovered:
        "So, can you really big money via stock intraday trading? Let's find out in yet another stock market episode. ... "
    },
    srcLinks: {
      imgSrc:
        "https://i.ytimg.com/vi/gYFEPm5twi4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0CioUmi5UJHsmJC5Wa4Bm9gEPgA",
      vidSrc: "https://www.youtube.com/embed/gYFEPm5twi4?autoplay=1",
      gifSrc:
        "https://i.ytimg.com/an_webp/gYFEPm5twi4/mqdefault_6s.webp?du=3000&sqp=CK6Nz4QG&rs=AOn4CLAFx2zr8FrtAPmF0mdO6oaXk3ZMIA"
    },

    subscription: "no",
    watchLater: "no"
  },
  {
    addedInHistory: "no",
    isVideoLiked: "no",
    videoDetails: {
      id: "L_iJCNzDe-s",
      title:
        "Share Market का सम्पूर्ण ज्ञान | Nifty | Share Market | Dr Vivek Bindra",
      views: "18,072,923 views",
      date: "Jun 23, 2019",
      streamer: "Dr. Vivek Bindra: Motivational Speaker",
      streamerIcon:
        "https://yt3.ggpht.com/ytc/AAUvwniwmNRAmAsMmX8cognCbbxwQA-KGY66i-3TmX6H8A=s176-c-k-c0x00ffffff-no-rj",
      contentCovered:
        "In This Video Dr Vivek Bindra Is Explaining How Share Market Works, And When To Invest and When To Divest In Share Market..."
    },
    srcLinks: {
      imgSrc:
        "https://i.ytimg.com/vi/L_iJCNzDe-s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPwSAObyBIov9NragNb5oX3bTMoQ",
      vidSrc: "https://www.youtube.com/embed/L_iJCNzDe-s",
      gifSrc:
        "https://i.ytimg.com/an_webp/L_iJCNzDe-s/mqdefault_6s.webp?du=3000&sqp=CJ6Wz4QG&rs=AOn4CLCaJ3K5tkTBXmecPBQT-jsosRoVsQ"
    },

    subscription: "no",
    watchLater: "no"
  },
  {
    addedInHistory: "no",
    isVideoLiked: "no",
    videoDetails: {
      id: "bLl_VRQ7pBs",
      title:
        "Basics of Stock Market For Beginners Lecture 2 By CA Rachana Phadke Ranade",
      views: "5,235,224 views",
      timeSpan: "Jun 1, 2019",
      streamer: "CA Rachana Phadke Ranade",
      streamerIcon:
        "https://yt3.ggpht.com/ytc/AAUvwnhyQxJ5qyZrz_BA3G3UnYz7H5GCX5PrkGtcyCM6RQ=s68-c-k-c0x00ffffff-no-rj",
      contentCovered:
        "You can get my Stock Market courses on https://www.rachanaranade.com​ It’s an opportunity to learn 65+ concepts relating to Basics of Stock Market in 11 sessions! Feel free to WhatsApp on +91 9022196678 if you have any purchase-related queries."
    },
    srcLinks: {
      imgSrc:
        "https://i.ytimg.com/vi/bLl_VRQ7pBs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwJ89mE4JfrEEIo5m0DGrY1xc9VA",
      vidSrc: "https://www.youtube.com/embed/bLl_VRQ7pBs",
      gifSrc:
        "https://i.ytimg.com/an_webp/bLl_VRQ7pBs/mqdefault_6s.webp?du=3000&sqp=CI6gz4QG&rs=AOn4CLCp7zi_DCJBgz-baUo0KXWbHUmlcQ"
    },

    subscription: "no",
    watchLater: "no"
  },
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
  },
  {
    addedInHistory: "no",
    isVideoLiked: "no",
    videoDetails: {
      id: "nfX-esge_3o",
      title:
        "🟦 TAX on stock market & mutual funds | STCG, LTCG and DIVIDENDS @CA Rachana Phadke Ranade",
      views: "838,328 views",
      date: "Premiered Nov 7, 2020",
      streamer: "Labour Law Advisor",
      streamerIcon:
        "https://yt3.ggpht.com/ytc/AAUvwniKLv8OUIav1NVgVBwJRec7HY55CWhONnFtwHSJDg=s176-c-k-c0x00ffffff-no-rj",
      contentCovered:
        "The much-awaited collab with none other than @CA Rachana Phadke Ranade is here. Understand capital gains tax and dividend tax with practical examples.... "
    },
    srcLinks: {
      imgSrc:
        "https://i.ytimg.com/vi/nfX-esge_3o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTwNWRzIxH6_sHa0ooc_FjfJUBnA",
      vidSrc: "https://www.youtube.com/embed/nfX-esge_3o?autoplay=1",
      gifSrc:
        "https://i.ytimg.com/an_webp/nfX-esge_3o/mqdefault_6s.webp?du=3000&sqp=CISlz4QG&rs=AOn4CLDMvI7ou-u-uvqAHkhO0IqkdfCOPg"
    },

    subscription: "no",
    watchLater: "no"
  },
  {
    addedInHistory: "no",
    isVideoLiked: "no",
    videoDetails: {
      id: "HdeI82TVQk0",
      title:
        "Amazing Case Study On Warren Buffett | Biography of Share Market Legend | Dr Vivek Bindra",
      views: "3,465,766 views",
      date: "Premiered Apr 9, 2021",
      streamer: "Dr. Vivek Bindra: Motivational Speaker",
      streamerIcon:
        "https://yt3.ggpht.com/ytc/AAUvwniwmNRAmAsMmX8cognCbbxwQA-KGY66i-3TmX6H8A=s176-c-k-c0x00ffffff-no-rj",
      contentCovered:
        "Watch Amazing Case Study on World’s Top Share Market Legend Mr. Warren Buffett will not only give you deeper insights into business but will also inspire you to achieve the desired goal of your Life."
    },
    srcLinks: {
      imgSrc:
        "https://i.ytimg.com/vi/HdeI82TVQk0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4Hf3QV0FyVNGtb59Wg6fQR3FOyA",
      vidSrc: "https://www.youtube.com/embed/HdeI82TVQk0"
    },

    subscription: "no",
    watchLater: "no"
  },
  {
    addedInHistory: "no",
    isVideoLiked: "no",
    videoDetails: {
      id: "hBKqk5oYexw",
      title:
        "Basics Of Stock Market for Beginners Lecture 3 by CA Rachana Ranade",
      views: "1,435,764 views",
      timeSpan: "Jul 25, 2020",
      streamer: "CA Rachana Phadke Ranade",
      streamerIcon:
        "https://yt3.ggpht.com/ytc/AAUvwnhyQxJ5qyZrz_BA3G3UnYz7H5GCX5PrkGtcyCM6RQ=s68-c-k-c0x00ffffff-no-rj",
      contentCovered:
        "This is a lecture that I had promised to post if ever I reach the 1 million landmark! I had made this promise during my 100k special stream! "
    },
    srcLinks: {
      imgSrc:
        "https://i.ytimg.com/vi/hBKqk5oYexw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqxiXPdy1rnITSkGt0MCnsBngNpg",
      vidSrc: "https://www.youtube.com/embed/hBKqk5oYexw",
      gifSrc:
        "https://i.ytimg.com/an_webp/hBKqk5oYexw/mqdefault_6s.webp?du=3000&sqp=CMiez4QG&rs=AOn4CLAc6mDWwwdZkQAABoBjCSKRi4Z3ig"
    },

    subscription: "no",
    watchLater: "no"
  },
  {
    addedInHistory: "no",
    isVideoLiked: "no",
    videoDetails: {
      id: "38xmizlXP24",
      title:
        "TAX on Stock Market and Investing | Ankur Warikoo | Investment tips for Beginners in Hindi",
      views: "44,884 views",
      date: "Nov 24, 2020",
      duration: "11:12",
      streamer: "warikoo",
      streamerIcon:
        "https://yt3.ggpht.com/ytc/AAUvwni0zYJJ7E-m-2tskhvqp9bnUjIP0dnU1dcn9c8lNQ=s176-c-k-c0x00ffffff-no-rj",
      contentCovered:
        "In this video I will discuss with you 1 investing principle that I have used to get high returns. If you're a beginner in the stock market I would highly recommend watching this video and learning about the one most important thing you should never forget before making an investment..."
    },
    srcLinks: {
      imgSrc:
        "https://i.ytimg.com/vi/38xmizlXP24/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUxGe-BrDRdHJEzXCpkuswj9bDdQ",
      vidSrc: "https://www.youtube.com/embed/38xmizlXP24",
      gifSrc:
        "https://i.ytimg.com/an_webp/38xmizlXP24/mqdefault_6s.webp?du=3000&sqp=CODmzoQG&rs=AOn4CLBFrcjeRrWxFXnNYK6m7O97SI75xw"
    },

    subscription: "no",
    watchLater: "no"
  },
  {
    addedInHistory: "no",
    isVideoLiked: "no",
    videoDetails: {
      id: "MbCKHOg9M9s",
      title: "What is Sensex & Nifty? | Stock Market for beginners [Hindi]",
      views: "1,168,009 views",
      date: "May 20, 2020",
      streamer: "Labour Law Advisor",
      streamerIcon:
        "https://yt3.ggpht.com/ytc/AAUvwniKLv8OUIav1NVgVBwJRec7HY55CWhONnFtwHSJDg=s176-c-k-c0x00ffffff-no-rj",
      contentCovered:
        "In this video, you will learn what Nifty and Sensex are in the stock market? What is NSE and BSE? How you can track and manage... "
    },
    srcLinks: {
      imgSrc:
        "https://i.ytimg.com/vi/MbCKHOg9M9s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAELBLrVf2st-Z72tdOVaksQkCG0g",
      vidSrc: "https://www.youtube.com/embed/MbCKHOg9M9s?autoplay=1",
      gifSrc:
        "https://i.ytimg.com/an_webp/MbCKHOg9M9s/mqdefault_6s.webp?du=3000&sqp=CIaUz4QG&rs=AOn4CLDNu4NVnDsPqglYI378RssLOMeuGg"
    },

    subscription: "no",
    watchLater: "no"
  },
  {
    addedInHistory: "no",
    isVideoLiked: "no",
    videoDetails: {
      id: "JKD_V4e22Mc",
      title: "कम लागत में करोड़ो कैसे कमाएं ? | Case Study | Dr Vivek Bindra",
      views: "2,947,143 views",
      date: "Oct 21, 2018",
      streamer: "Dr. Vivek Bindra: Motivational Speaker",
      streamerIcon:
        "https://yt3.ggpht.com/ytc/AAUvwniwmNRAmAsMmX8cognCbbxwQA-KGY66i-3TmX6H8A=s176-c-k-c0x00ffffff-no-rj",
      contentCovered:
        "In this Video Dr Vivek Bindra is explaining that how Asset Light model can help you to  grow your business without capital expenditure."
    },
    srcLinks: {
      imgSrc:
        "https://i.ytimg.com/vi/JKD_V4e22Mc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7vV0_ZZIQT6zDvR02kRxVw5k7jQ",
      vidSrc: "https://www.youtube.com/embed/JKD_V4e22Mc",
      gifSrc:
        "https://i.ytimg.com/an_webp/JKD_V4e22Mc/mqdefault_6s.webp?du=3000&sqp=CIqYz4QG&rs=AOn4CLDcKJzU4TExTnmhYnrHTsZK2IIb-A"
    },

    subscription: "no",
    watchLater: "no"
  },
  {
    addedInHistory: "no",
    isVideoLiked: "no",
    videoDetails: {
      id: "icyXl7B-s-4",
      title: "Introduction to US Stock Markets | Investment Masterclass",
      views: "234,019 views",
      timeSpan: "2Apr 21, 2021",
      streamer: "CA Rachana Phadke Ranade",
      streamerIcon:
        "https://yt3.ggpht.com/ytc/AAUvwnhyQxJ5qyZrz_BA3G3UnYz7H5GCX5PrkGtcyCM6RQ=s68-c-k-c0x00ffffff-no-rj",
      contentCovered:
        "Download the INDmoney app using the below link:https://indmoney.onelink.me/q36k/bb82...I use the INDmoney app to invest in US stocks like Google, Facebook, Apple, Netflix and many "
    },
    srcLinks: {
      imgSrc:
        "https://i.ytimg.com/vi/icyXl7B-s-4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0GMbLKtyl-yX2Phj1OhBT7eEkng",
      vidSrc: "https://www.youtube.com/embed/X2iWUZQf1Ko?autoplay=1",
      gifSrc:
        "https://i.ytimg.com/an_webp/icyXl7B-s-4/mqdefault_6s.webp?du=3000&sqp=COKhz4QG&rs=AOn4CLAV7MhJbmaV5Bk1hWSKXLevqPoB9w"
    },

    subscription: "no",
    watchLater: "no"
  }
];
